import session = require('express-session');
import MongoStore = require('connect-mongo');

const sessionConfig = (app) => {
  app.set('trust proxy', 1);

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 60000, // 60 * 1000 ms === 1 min
      },
      store: MongoStore.create({
        mongoUrl: process.env.DATABASE_URL
      })
    })
  );
};

export default sessionConfig;
