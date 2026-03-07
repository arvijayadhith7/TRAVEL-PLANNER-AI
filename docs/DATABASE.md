# Database Documentation

The project uses a **SQLite** database managed via **Sequelize ORM**.

## Schema

### Hotels Table
| Field | Type | Description |
|---|---|---|
| `id` | STRING (PK) | Unique identifier for the hotel. |
| `name` | STRING | Name of the hotel. |
| `location` | STRING | City and address. |
| `type` | STRING | Category (e.g., Luxury, Budget). |
| `price` | INTEGER | Price per night. |
| `rating` | FLOAT | Star rating. |
| `image` | STRING | URL to the hotel image. |
| `description` | TEXT | Brief summary of the hotel. |
| `map` | STRING | Link to Google Maps. |

### Activities Table
| Field | Type | Description |
|---|---|---|
| `id` | STRING (PK) | Unique identifier for the activity. |
| `name` | STRING | Name of the attraction or activity. |
| `location` | STRING | City/Area. |
| `type` | STRING | Category (e.g., Historical, Beach). |
| `price` | INTEGER | Estimated cost. |
| `rating` | FLOAT | Review rating. |
| `image` | STRING | URL to the activity image. |
| `tags` | JSON | SQLite-compatible JSON list of tags. |
| `map` | STRING | Link to Google Maps. |

### Restaurants Table
| Field | Type | Description |
|---|---|---|
| `id` | STRING (PK) | Unique identifier for the restaurant. |
| `name` | STRING | Name of the restaurant. |
| `location` | STRING | City/Area. |
| `type` | STRING | Cuisine type. |
| `price` | INTEGER | Average price per person. |
| `rating` | FLOAT | Review rating. |
| `image` | STRING | URL to the restaurant image. |
| `description` | TEXT | Brief summary of the restaurant. |

## Seeding

Initial data is populated using a seeder script located at `backend/seeder.js`. It imports data from `backend/data/source.js`.

To seed the database:
```bash
npm run seed
```

To clear the database:
```bash
npm run seed:destroy
```
