# Scarlet Pay - Smart Campus Wallet

A full-stack web application designed to help students manage campus payments, budgets, and daily financial life. Scarlet Pay provides an intuitive dashboard for tracking spending, setting budgets, and simulating campus-related payments.

## Features

- **User Authentication**: Secure JWT-based authentication with password hashing
- **Spending Dashboard**: Real-time analytics and visualization of spending patterns across categories
- **Budget Management**: Set budgets with automatic tracking and alerts when limits are approached
- **Campus Payments Hub**: Simulate payments for campus events, clubs, dining, and services
- **Transaction Management**: Track, categorize, and analyze all financial transactions
- **Analytics & Insights**: Visual charts and insights to understand spending behavior

## Tech Stack

### Backend (sp_backend)
- **Framework**: FastAPI
- **Database**: PostgreSQL
- **ORM**: SQLAlchemy
- **Migrations**: Alembic
- **Authentication**: JWT (python-jose)
- **Password Hashing**: bcrypt (passlib)

### Frontend (sp_frontend)
- **Framework**: React 18.3.1
- **UI Library**: Material-UI (MUI) 5.16.7
- **Router**: React Router DOM 6.26.1
- **Charts**: Recharts 3.4.1
- **HTTP Client**: Axios

## Project Structure

```
Scarlet-Pay/
├── sp_backend/          # FastAPI backend application
│   ├── app/
│   │   ├── api/         # API routes
│   │   ├── models/      # SQLAlchemy models
│   │   ├── schemas/     # Pydantic schemas
│   │   ├── repositories/# Data access layer
│   │   ├── services/    # Business logic
│   │   └── main.py      # Application entry point
│   ├── alembic/         # Database migrations
│   └── requirements.txt
│
└── sp_frontend/         # React frontend application
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── layouts/     # Page layouts
    │   ├── pages/       # Application pages
    │   └── assets/      # Static assets and themes
    └── package.json
```

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 16+ and npm/yarn
- PostgreSQL 14+
- Git

### Backend Setup

1. Navigate to the backend directory:
```bash
cd sp_backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials and configuration
```

5. Run database migrations:
```bash
alembic upgrade head
```

6. Start the development server:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

API Documentation:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd sp_frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login and get JWT token
- `POST /api/v1/auth/refresh` - Refresh access token
- `GET /api/v1/auth/me` - Get current user info

### Transactions
- `GET /api/v1/transactions/` - List transactions (with filters)
- `POST /api/v1/transactions/` - Create transaction
- `GET /api/v1/transactions/analytics` - Get spending analytics
- `GET /api/v1/transactions/{id}` - Get transaction details
- `PUT /api/v1/transactions/{id}` - Update transaction
- `DELETE /api/v1/transactions/{id}` - Delete transaction

### Budgets
- `GET /api/v1/budgets/` - List budgets
- `POST /api/v1/budgets/` - Create budget
- `GET /api/v1/budgets/{id}` - Get budget with tracking
- `PUT /api/v1/budgets/{id}` - Update budget
- `DELETE /api/v1/budgets/{id}` - Delete budget
- `GET /api/v1/budgets/tracking` - Get all budgets with status

### Payments
- `GET /api/v1/payments/` - List payments
- `POST /api/v1/payments/` - Create payment (simulate)
- `GET /api/v1/payments/{id}` - Get payment details
- `POST /api/v1/payments/{id}/complete` - Mark payment as completed

## Development

### Running Tests

Backend:
```bash
cd sp_backend
pytest
```

Frontend:
```bash
cd sp_frontend
npm test
```

### Database Migrations

Create a new migration:
```bash
cd sp_backend
alembic revision --autogenerate -m "description"
```

Apply migrations:
```bash
alembic upgrade head
```

Rollback migration:
```bash
alembic downgrade -1
```

### Code Quality

Frontend linting:
```bash
cd sp_frontend
npm run lint
```

Frontend formatting:
```bash
npm run prettify
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Support

For issues, questions, or contributions, please open an issue on GitHub.

---

Built with passion for campus financial management
