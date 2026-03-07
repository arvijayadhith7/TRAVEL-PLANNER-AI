# Travel Planner AI

A full-stack web application for planning trips, managing attractions, and generating AI-powered itineraries.

## Features

- **Interactive Trip Planning**: Search for hotels, activities, and restaurants.
- **Trip Cart**: Add items to your itinerary and manage them in a central location.
- **Budget Tracking**: Real-time budget calculation for your planned trip.
- **AI-Powered Itineraries**: Generate personalized travel schedules.
- **Premium UI**: Modern, responsive design with glassmorphism and vibrant gradients.

## Tech Stack

- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (Vanilla).
- **Backend**: Node.js, Express.
- **Database**: SQLite (managed via Sequelize ORM).
- **AI**: Google Generative AI (Gemini).

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd TRAVEL-PLANNER-master
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your Gemini API key:
   ```text
   GEMINI_API_KEY=your_api_key_here
   PORT=5000
   ```

4. Seed the database:
   ```bash
   npm run seed
   ```

### Running the Project

1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:5000` (or whichever port you configured).

## Documentation

For more detailed information, please refer to the following:

- [API Documentation](docs/API.md)
- [Database Schema](docs/DATABASE.md)
- [Frontend Logic](docs/FRONTEND.md)
