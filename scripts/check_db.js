const { sequelize } = require('./backend/config/db');
const Hotel = require('./backend/models/Hotel');
const Activity = require('./backend/models/Activity');
const Restaurant = require('./backend/models/Restaurant');

async function checkDB() {
    try {
        const hotelCount = await Hotel.count();
        const activityCount = await Activity.count();
        const restaurantCount = await Restaurant.count();

        console.log('--- Database Status ---');
        console.log(`Hotels: ${hotelCount}`);
        console.log(`Activities: ${activityCount}`);
        console.log(`Restaurants: ${restaurantCount}`);

        if (hotelCount > 0) {
            const sampleHotel = await Hotel.findOne();
            console.log('Sample Hotel:', JSON.stringify(sampleHotel, null, 2));
        }

        process.exit(0);
    } catch (err) {
        console.error('Error checking DB:', err);
        process.exit(1);
    }
}

checkDB();
