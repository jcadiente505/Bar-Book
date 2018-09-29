const bcrypt = require("bcrypt-nodejs");
// Export bcrypt functions
module.exports = function (passport, user) {
    const User = user;
    const LocalStrategy = require("passport-local").Strategy;
    passport.use(
        "local-signup",
        new LocalStrategy(
            {
                usernameField: "userName",
                passwordField: "password",
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function (req, userName, password, done) {
                const generateHash = function (password) {
                    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
                };
                User.find({
                    userName: userName
                })
                    .then(user => {
                        if (user) {
                            return done(null, false, {
                                message: "That username has already been taken"
                            });
                        }
                        else {
                            const hashedPassword = generateHash(password);
                            const data = {
                                userName: userName,
                                password: hashedPassword,
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                email: req.body.email
                            };
                            User.create(data)
                                .then((newUser, created) => {
                                    if (!newUser) {
                                        return done(null, false);
                                    }
                                    else if (newUser) {
                                        return done(null, newUser);
                                    }
                                    else {
                                        console.log("Oops something happened")
                                    }
                                });
                        };
                    });
            }
        )
    );
    // SIGN IN STRATEGY
    passport.use(
        "local-signin",
        new LocalStrategy(
            {
                usernameField: "userName",
                passwordField: "password",
                passReqToCallback: true
            },
            function (req, userName, password, done) {
                const User = user;
                const isValidPassword = (userpass, password) => {
                    return bcrypt.compareSync(password, userpass);
                };
                user.find({ username: userName })
                    .then(user => {
                        if (!user) {
                            console.log("No user found");
                            return done(null, false, {
                                message: "Username does not exist"
                            });
                        }
                        else if (!isValidPassword(user.password, password)) {
                            console.log("password not found");
                            return done(null, false, {
                                message: "Incorrect Password"
                            });
                        }
                        else {
                            console.log("Oops something went wrong");
                        }
                        const userInfo = user.get();
                        return done(null, userInfo);
                    })
                    .catch(err => {
                        console.log("ERROR: " + err)
                        return done(null, false, {
                            message: "Something went wrong with your Sign in"
                        });
                    });
            }
        )
    );
    //serialize
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // deserialize user
    passport.deserializeUser(function (id, done) {
        User.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
};

