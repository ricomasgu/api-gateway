import passport = require('passport');

const passportConfig = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
}

export default passportConfig;