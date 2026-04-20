# Mini Request System (MRS)

# React + TypeScript SPA + Vite 🚀

## Deployment:

[Vercel](https://) - web


> ## How to start:

1. Install dependencies:
   ```bash
   npm i

2. Run the development server:
    ```bash
    npm run dev

> ## Description:

A small React application for creating and managing requests with role-based access:

### 1. **User View:**

In the **User's area** users can:

- Fill out a form to create a new request (Title and Description)
- View all their created requests as cards
- See request status (`New`, `In progress`, `Done`)
- See all requests

All requests are automatically saved to `localStorage`, so data persists between sessions.

### 2. **Manager View:**


### 3. **Responsive Design:**

- The app is fully responsive, ensuring an optimal experience on both **desktop and mobile devices**.

> ## Project Stack

| **Core**         | **Styling**   | **State/Logic** | **Tooling**         |
|------------------|---------------|-----------------|---------------------|
| React            | Tailwind CSS  | Redux Toolkit   | Vite                |
| React DOM        | HeroUI        | React Redux     | TypeScript          |
| React Router DOM | Framer Motion | LocalStorage    | ESLint              |
|                  | CSS modules   |                 |                     |
|                  |               |                 | Prettier            |
|                  |               |                 | Husky + Lint-Staged |