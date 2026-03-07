const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function testAI() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('No API Key found in .env');
        process.exit(1);
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        console.log('Testing with API Key:', apiKey.substring(0, 10) + '...');
        const result = await model.generateContent('Say "API Connection Successful"');
        const response = await result.response;
        console.log('Response:', response.text());
        process.exit(0);
    } catch (err) {
        console.error('AI Test Failed:', err.message);
        if (err.message.includes('API_KEY_INVALID')) {
            console.error('The provided API key is invalid.');
        } else if (err.message.includes('quota')) {
            console.error('API Key quota exceeded.');
        }
        process.exit(1);
    }
}

testAI();
