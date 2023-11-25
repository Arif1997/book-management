const cors = require('cors');

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5174', 'http://localhost:*'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
