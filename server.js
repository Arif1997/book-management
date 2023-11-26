const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const corsConfig = require('./src/middleware/cors-config');
const router = require('./src/router');

const app = express();

// Helmet for security headers
app.use(helmet());

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS (Cross-Origin Resource Sharing)
app.use(corsConfig);

// Route handling
app.use('/api', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
