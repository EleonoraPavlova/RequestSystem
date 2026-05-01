# Mini Request System (MRS)

# React + TypeScript SPA + Vite 🚀

## Deployment:

[Vercel](https://request-system-seven.vercel.app/) - web


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

 - Request Dashboard: View all incoming requests from all users in a clean, organized card grid
 - Status Management: Update request stages lifecycle (e.g., moving a request from New to In Progress or Done)
- Dynamic Filtering: Quickly sort and find requests using a status-based filter (All, New, In Progress, Done) powered by HeroUI Dropdown
 - Request Deletion: Ability to permanently remove requests from the system
 - Detailed Insights: Each card displays unique request IDs and automated creation timestamps for better tracking
 - Safety First: Implementation of Confirmation Modals for destructive actions like deleting a request to prevent accidental data loss
 - Archiving System: Managers can move completed or irrelevant tasks to an Archive. These tasks are hidden from the main dashboard but remain accessible in a logs view

### 3. **Logs View:**

 - Action Tracking: A route that records every significant action in the system (e.g., status changes, deletions, archiving)
 - Persistence: Logs are stored alongside requests, providing a clear history of operations during the session

### 4. **Responsive Design:**

- The app is fully responsive, ensuring an optimal experience on both **desktop and mobile devices**.
- A smooth, animated Drawer (Burger Menu) for seamless navigation on smaller screens

### 5. **Localization:**
 - Full multi-language support (English/Ukrainian) powered by **talkr**, allowing users to switch languages on the fly

> ## Project Stack

| **Core**         | **Styling**   | **State/Logic** | **Tooling**         |
|------------------|---------------|-----------------|---------------------|
| React            | Tailwind CSS  | Redux Toolkit   | Vite                |
| React DOM        | HeroUI        | React Redux     | TypeScript          |
| React Router DOM | Framer Motion | LocalStorage    | ESLint              |
|                  | CSS modules   |                 |                     |
|                  |               |                 | Prettier            |
|                  |               |                 | Husky + Lint-Staged |