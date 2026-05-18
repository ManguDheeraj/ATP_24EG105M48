# MERN Blog

A fresh MERN blog application with cookie-based authentication, user/author roles, article CRUD, and comments.

## Features

- Register as `USER` or `AUTHOR`
- Login/logout with HTTP-only JWT cookies
- Authors can create, edit, publish/unpublish, and delete their own posts
- Users can read posts and add comments
- MongoDB with Mongoose models
- React + Vite frontend

## Run Locally

Open two terminals.

Backend:

```bash
cd backend
npm install
npm run dev
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

URLs:

- Frontend: http://127.0.0.1:5174
- Backend: http://localhost:5000

The frontend uses Vite's `/api` proxy during development so auth cookies stay on the same browser origin.

## Deploy

This project is configured for a single-service deployment. In production, Express serves the React build from `frontend/dist`, so deploy the repository root as one Node web service.

### Required Environment Variables

Set these in your hosting provider:

```bash
NODE_ENV=production
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_long_random_secret
JWT_EXPIRES_IN=7d
```

Do not use the local `mongodb://127.0.0.1:27017/...` URI in the cloud. Use MongoDB Atlas or another hosted MongoDB database.

### Render

The included `render.yaml` can create the web service automatically.

1. Push this folder to GitHub.
2. In Render, create a new Blueprint from the repo.
3. Add `MONGO_URI` when Render asks for unsynced environment variables.
4. Deploy.

Render will run:

```bash
npm run build
npm start
```

### Manual Node Host

Use these commands from the repository root:

```bash
npm run build
npm start
```
