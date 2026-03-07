const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { connectDB } = require('./backend/config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'HP')));

// Routes
app.use('/api/hotels', require('./backend/routes/hotels'));
app.use('/api/activities', require('./backend/routes/activities'));
app.use('/api/restaurants', require('./backend/routes/restaurants'));
app.use('/api/ai', require('./backend/routes/ai'));

// Serve homepage for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HP', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
