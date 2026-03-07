# Frontend Documentation

The Travel Planner AI frontend is a lightweight, responsive web application built with **Vanilla JavaScript**, **HTML5**, and **CSS3**.

## Architecture

The frontend follows a modular structure where `app.js` serves as the central logic hub and `database.js` handles data fetching from the backend API.

### Key Components

- **TripPlanner Object (`app.js`)**: The core application state and utility object.
  - **Cart Management**: Handles adding/removing items from `localStorage`.
  - **Budget Tracking**: Calculates total costs and remaining budget based on user selections.
  - **AI Itinerary Integration**: Sends cart and trip data to the backend to generate a personalized travel plan.
  - **UI Helpers**: Manages notifications and badge updates.

- **Database Object (`database.js`)**:
  - Fetches hotel, activity, and restaurant data from the Express backend.
  - Dispatches a `database-ready` event upon successful data loading.

## State Management

The application uses **`localStorage`** for persistent client-side state:
- `tripData`: Stores destination, budget, dates, and traveler count.
- `tripCart`: Stores the user's selected items.
- `aiItinerary`: Stores the most recently generated AI travel plan.

## Page Routing

While the app uses multiple HTML files (e.g., `hotels.html`, `tripcart.html`, `itinerary.html`), `app.js` initializes page-specific logic based on the `data-page` attribute on the `<body>` tag.

## Key Features Implementation

### Budget Calculation
The budget is calculated in real-time by summing:
- **Hotels**: `price * nights`
- **Activities**: `price * travelers`
- **Restaurants**: `price` (per selection)

### AI Itinerary Generation
The "Generate" button in the cart page triggers an asynchronous request to the backend with the current cart and trip data, which is then processed by the Gemini AI service.
