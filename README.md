# Tripsero AI ✈️
### Modern AI-Powered Travel Planning Reimagined

Tripsero is a professional-grade travel planning application that combines a stunning modern UI with advanced AI to craft personalized day-by-day itineraries in seconds.

![Logo](public/images/logo.png) (If logo exists)

## 🌟 Key Features

- **🤖 AI-Powered Itineraries**: Leveraging Google Gemini to generate logical, day-by-day travel schedules based on your preferences.
- **🎨 Premium Unified UI**: A consistent, dark-first design system with glassmorphism, smooth animations, and persistent sidebar navigation.
- **💰 Smart Budget Tracking**: Real-time spending analysis that categorizes your selections (Hotels, Spots, Food) and tracks them against your limit.
- **🏨 Contextual Discovery**: Effortlessly browse curated hotels and attractions across diverse global destinations.
- **📅 Interactive Timeline**: A detailed, scheduled view of your trip with transit times, meal slots, and map visualizations.

## 🏗️ Project Architecture

The project has been reorganized into a clean, professional structure:

```text
├── backend/            # Express.js REST API
│   ├── models/         # Sequelize Database Models
│   ├── routes/         # API Endpoints (Hotels, AI, etc.)
│   └── config/         # Database and Environment Setup
├── public/             # Optimized Static Frontend
│   ├── css/            # Standardized Design System
│   ├── js/             # Client-side Application Logic
│   ├── images/         # High-resolution Assets
│   └── index.html      # Central Dashboard Root
├── scripts/            # Database Maintenance & AI Testing
├── docs/               # Technical Specifications & API Docs
└── server.js           # Main Entry Point
```

## 🛠️ Tech Stack

- **Frontend**: Vanila HTML5, CSS3 (Custom Properties), JavaScript (ES6+).
- **Backend**: Node.js, Express.
- **Database**: SQLite with Sequelize ORM.
- **AI Engine**: Google Generative AI (Gemini Pro).

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- A Google Gemini API Key

### Setup
1. **Clone & Install**:
   ```bash
   git clone <repository-url>
   npm install
   ```

2. **Environment**:
   Create a `.env` file in the root:
   ```env
   GEMINI_API_KEY=your_api_key_here
   PORT=5001
   ```

3. **Initialize Database**:
   ```bash
   npm run seed
   ```

### Launch
```bash
npm start
```
Visit `http://localhost:5001` to start planning.

## 📜 Documentation
- [API Reference](docs/API.md)
- [Database Schema](docs/DATABASE.md)
- [Frontend Logic](docs/FRONTEND.md)

---
*Created with ❤️ for travelers by arvijayadhith7*
