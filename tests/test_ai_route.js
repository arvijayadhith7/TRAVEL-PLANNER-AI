const express = require('express');
const request = require('supertest'); // If not available, I'll use fetch
const aiRouter = require('../backend/routes/ai');

const app = express();
app.use(express.json());
app.use('/api/ai', aiRouter);

async function testRoute() {
    console.log('Testing AI Route...');

    // Mock trip data
    const mockData = {
        tripData: {
            destination: 'Paris',
            duration: 3,
            travelers: 2,
            budgetType: 'Midrange'
        },
        cart: {
            hotels: [{ name: 'Hotel de Ville' }],
            activities: [{ name: 'Eiffel Tower' }],
            restaurants: [{ name: 'Le Meurice' }]
        }
    };

    // Since we don't have a GEMINI_API_KEY, we expect a 500 error or a specific message
    // If the API key was there, it would return the itinerary.

    // For now, let's just check if it's reachable
    console.log('Requesting /api/ai/plan-itinerary...');
    // Mocking the response for verification of the logic
}

console.log('Verification script created. Please run with node tests/test_ai_route.js');
