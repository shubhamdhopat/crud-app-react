# CRUD App with React, Vite, and Axios

A simple CRUD web application built with React, Vite, and Axios. It demonstrates how to fetch, create, update, and delete posts from a REST API using React hooks and component-based architecture.

## Features

- Fetch posts from a REST API
- Display posts in a list
- Add new posts using a form
- Edit existing posts
- Delete posts from the list
- Axios for HTTP requests

## Tech stack

- React 19
- Vite
- Axios
- JavaScript
- CSS

## Project structure

- `src/main.jsx` — React entry point
- `src/App.jsx` — Root app component
- `src/components/Posts.jsx` — Posts list and CRUD container
- `src/components/Form.jsx` — Add/Edit form component
- `src/api/PostApi.jsx` — Axios API helper functions

## Local setup

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the URL shown in the terminal

## Build and preview

Build for production:

```bash
npm run build
```

Preview the built app locally:

```bash
npm run preview
```

## Notes

- This project uses `https://jsonplaceholder.typicode.com` as the backend API.
- The JSONPlaceholder API does not persist changes permanently.
- The form supports both adding and editing posts.

## License

This project is provided as-is for learning and demo purposes.
