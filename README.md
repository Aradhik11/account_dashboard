# Account Dashboard

A modern dashboard application built with [Next.js](https://nextjs.org) and [React](https://react.dev), using PostgreSQL as the database. This project allows you to manage account holder details through a user-friendly interface and a set of RESTful API endpoints.

## Features

- Responsive dashboard UI
- Manage account holders (create, update, delete)
- PostgreSQL database integration
- RESTful API endpoints

## API Endpoints

- **POST /api/accounts** — Create Account
- **PUT /api/accounts/:id** — Update Account
- **DELETE /api/accounts/:id** — Delete Account

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Set up your PostgreSQL database** and configure your environment variables (see `.env.example`).
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.


