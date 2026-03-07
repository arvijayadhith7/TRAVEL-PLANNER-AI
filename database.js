/**
 * Tamil Nadu Tourist Database
 * Now fetches data from the backend API
 */

const Database = {
    hotels: [],
    activities: [],
    restaurants: [],

    init: async function () {
        console.log('Initializing Database from API...');
        try {
            // Fetch data from API
            // Note: Ensure the backend server is running on port 5000
            const [hotels, activities, restaurants] = await Promise.all([
                fetch('http://localhost:5001/api/hotels').then(res => res.ok ? res.json() : []),
                fetch('http://localhost:5001/api/activities').then(res => res.ok ? res.json() : []),
                fetch('http://localhost:5001/api/restaurants').then(res => res.ok ? res.json() : [])
            ]);

            this.hotels = hotels;
            this.activities = activities;
            this.restaurants = restaurants;

            console.log('Database loaded:', {
                hotels: hotels.length,
                activities: activities.length,
                restaurants: restaurants.length
            });

        } catch (error) {
            console.error('Error fetching database:', error);
            // On error, we provide empty arrays to avoid crashes
            this.hotels = this.hotels || [];
            this.activities = this.activities || [];
            this.restaurants = this.restaurants || [];
        } finally {
            // Always dispatch event to notify app that initialization attempt is finished
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('database-ready'));
            }
        }
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.Database = Database;
    // Auto-initialize
    Database.init();
}

// For Node environment (if needed)
if (typeof module !== 'undefined') {
    module.exports = Database;
}
