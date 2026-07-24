# Steam Profile

A REST API that authenticates users with Steam and provides access to their Steam data.

## Tech Stack

- Node.js
- TypeScript
- Express
- Passport (Steam OpenID)
- Prisma
- PostgreSQL
- Docker

---

## Requirements

Before running the project, make sure you have installed:

- Node.js
- Docker Desktop

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd steam-profile
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root (or copy `.env.example` if available).

Example:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/steam-profile?schema=public"

STEAM_API_KEY=your_steam_api_key
STEAM_RETURN_URL=http://localhost:4000/auth/steam/callback
STEAM_REALM=http://localhost:4000

JWT_SECRET=your_jwt_secret
```

---

# Development Setup

### 1. Start PostgreSQL

```bash
npm run db:start
```

### 2. Apply existing database migrations

```bash
npx prisma migrate deploy
```

> This applies all migrations already committed to the repository.

### 3. Start the API

```bash
npm run dev
```

The server will automatically restart whenever a file changes.

---

# Database Commands

Start PostgreSQL:

```bash
npm run db:start
```

Stop PostgreSQL:

```bash
npm run db:stop
```

View PostgreSQL logs:

```bash
npm run db:logs
```

Open Prisma Studio:

```bash
npm run db:studio
```

---

# Creating a New Migration

Whenever you modify `prisma/schema.prisma`, create a new migration:

```bash
npm run db:migrate -- --name <migration-name>
```

Example:

```bash
npm run db:migrate -- --name add-user-avatar
```

This command will:

- Create a new migration.
- Apply it to your local database.
- Regenerate the Prisma Client.

Remember to commit the generated migration files.

---

# Build

Compile the project:

```bash
npm run build
```

Run the compiled application:

```bash
npm start
```

---

# Project Structure

```text
src/
├── config/
├── controllers/
├── db/
├── repositories/
├── routes/
├── services/
└── types/
└── generated/ --> prisma generated types. Not synced

prisma/
├── migrations/
└── schema.prisma
```

---

# Notes

- PostgreSQL runs inside Docker.
- The `prisma/migrations` directory should always be committed.
- The generated Prisma Client should **not** be committed.
- The `.env` file should **never** be committed.
