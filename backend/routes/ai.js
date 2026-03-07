const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');

dotenv.config();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

router.post('/plan-itinerary', async (req, res) => {
    try {
        const { tripData, cart } = req.body;

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: 'Gemini API key is missing' });
        }

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `
            You are an expert travel planner. Create a detailed itinerary for a trip.
            
            Trip Details:
            - Destination: ${tripData.destination}
            - Duration: ${tripData.duration} days
            - Travelers: ${tripData.travelers}
            - Budget Type: ${tripData.budgetType}
            
            Items already in cart (prioritize these in the schedule):
            - Hotels: ${JSON.stringify(cart.hotels.map(h => h.name))}
            - Activities: ${JSON.stringify(cart.activities.map(a => a.name))}
            - Restaurants: ${JSON.stringify(cart.restaurants.map(r => r.name))}
            
            Requirements:
            1. Return the itinerary as a JSON array of objects, one for each day.
            2. Each day object should have:
               "day": number,
               "title": "A catchy title for the day",
               "schedule": An array of activities.
            3. Each activity in the schedule should have:
               "time": "HH:MM AM/PM",
               "activity": "Name of the activity",
               "description": "Short description of what to do",
               "location": "Specific location or neighborhood",
               "type": "sightseeing" | "dining" | "transport" | "hotel"
            4. Include breakfast, morning activity, lunch, afternoon activity, and dinner for each day.
            5. Ensure the logistics make sense (e.g., check-in on Day 1, check-out on the last day).
            
            Return ONLY the valid JSON array. No extra text.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up the response if it contains markdown code blocks
        text = text.replace(/```json\n?|\n?```/g, '').trim();

        const itinerary = JSON.parse(text);
        res.json(itinerary);
    } catch (error) {
        console.error('AI Strategy Error:', error);
        res.status(500).json({ error: 'Failed to generate itinerary with AI' });
    }
});

module.exports = router;
