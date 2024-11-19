const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes.js');

const app = express();

// Middleware
app.use(cors());
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//     credentials: true
//   })
// );

app.use(express.json());

// MongoDB connection with Mongoose
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use book routes
app.use('/books', bookRoutes);
app.use('/auth', authRoutes);
// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
