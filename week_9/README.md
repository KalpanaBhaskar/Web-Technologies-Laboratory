# Inkwell — Blog Post Management System

A full-stack blog application built with **React**, **Express.js**, and **MongoDB**, following the Web Technologies Laboratory assignment specifications.

## Features

- **CRUD for blog posts** — Create, read, update, and delete posts
- **Discussion section** — Threaded comments with replies on every post
- **REST API** — Express backend with native MongoDB driver
- **Professional UI** — Editorial design with Source Serif 4 + DM Sans typography

## Project Structure

```
week_9/
├── app/                    # React frontend (Vite)
│   └── src/
│       ├── App.jsx
│       ├── components/
│       │   ├── PostSummary.jsx
│       │   ├── CommentSection.jsx
│       │   └── ...
│       └── pages/
│           ├── Home.jsx
│           ├── Create.jsx
│           ├── Post.jsx
│           └── Archive.jsx
└── server/                 # Express REST API
    ├── .env
    ├── db/conn.mjs
    ├── index.mjs
    ├── loadEnvironment.mjs
    └── routes/
        ├── posts.mjs
        └── comments.mjs
```

## Prerequisites

- Node.js 18+
- MongoDB Atlas cluster (free tier works)

## Setup

### 1. Configure MongoDB

1. Create a cluster at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Add your IP to the network access allowlist
3. Create a database user with read/write permissions

### 2. Backend

```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your Atlas connection string:

```
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
DB_NAME=blog_db
PORT=5050
```

Start the API server:

```bash
npm run dev
```

The API runs at `http://localhost:5050`.

### 3. Frontend

```bash
cd app
npm install
npm run dev
```

The app runs at `http://localhost:5173` and proxies API requests to the backend.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | List all posts |
| GET | `/posts/:id` | Get a single post |
| POST | `/posts` | Create a post |
| PATCH | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post (+ comments) |
| GET | `/comments/post/:postId` | Get comments for a post |
| POST | `/comments/post/:postId` | Add a comment |
| DELETE | `/comments/:id` | Delete a comment |

## Tech Stack

- **Frontend:** React, React Router, Vite, native `fetch()`
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas with MongoDB Node.js driver
- **Config:** `.env` environment variables
