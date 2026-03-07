# API Documentation

The Travel Planner AI backend provides several RESTful endpoints for retrieving travel data and generating AI-powered itineraries.

## Base URL
`http://localhost:5000/api`

## Endpoints

### Hotels
- **GET `/hotels`**: Retrieve all hotels.
- **GET `/hotels/:id`**: Retrieve a specific hotel by ID.

### Activities
- **GET `/activities`**: Retrieve all activities.
- **GET `/activities/:id`**: Retrieve a specific activity by ID.

### Restaurants
- **GET `/restaurants`**: Retrieve all restaurants.
- **GET `/restaurants/:id`**: Retrieve a specific restaurant by ID.

### AI (Itinerary Generation)
- **POST `/ai/generate`**: Generate a travel itinerary based on user input.
  - **Body**: 
    ```json
    {
      "location": "City Name",
      "days": 3,
      "budget": "Budget Range",
      "travelers": 2,
      "interests": ["Beach", "Adventure"]
    }
    ```
  - **Response**: A JSON object containing the generated itinerary.

## Implementation Details

The backend is built with **Node.js** and **Express**. It uses **Sequelize** as an ORM to interact with a **SQLite** database. AI functionality is powered by the **Google Generative AI (Gemini)** SDK.
