const Hotel = require('../backend/models/Hotel');
const Activity = require('../backend/models/Activity');
const Restaurant = require('../backend/models/Restaurant');
const { connectDB, sequelize } = require('../backend/config/db');

async function checkData() {
    await connectDB();
    const hotels = await sequelize.models.Hotel.findAll();
    const activities = await sequelize.models.Activity.findAll();
    const restaurants = await sequelize.models.Restaurant.findAll();
    
    console.log('--- DATABASE STATUS ---');
    console.log('Hotels:', hotels.length);
    console.log('Activities:', activities.length);
    console.log('Restaurants:', restaurants.length);
    process.exit();
}

checkData();
