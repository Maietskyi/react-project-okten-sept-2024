
# React-Redux Project

## Project Description

This project is a web application that uses `React`, `Redux Toolkit`, and `TypeScript` to fetch and display information about users and recipes. Data is retrieved from the [DummyJSON](https://dummyjson.com/) API.

## Features
- **Authentication**: Users can log in using a username and password.
- **Navigation**: A menu with links to the home page, users page, and recipes page.
- **Search**: Ability to search for users or recipes by name or ID.
- **Pagination**: Implemented on the users and recipes pages.
- **Detailed Information**: View detailed information about a user and their recipes, as well as specific recipe details.

## Key Components
- **Navbar** – Main navigation menu.
- **AuthPage** – Login page.
- **HomePage** – Home page.
- **UsersPage** – List of users with search and pagination functionality.
- **UserDetailPage** – Detailed information about a specific user and their recipes.
- **RecipesPage** – List of recipes with search, tag filtering, and pagination.
- **RecipeDetailPage** – Detailed information about a specific recipe with a link to the author.
- **Search** – Component for searching users and recipes.
- **Pagination** – Component for pagination.

## How to Use the Site
1. **Authentication**: First, log in through the `AuthPage` by entering your username and password.
2. **Navigation**: After logging in, access the users and recipes pages via the `Navbar`.
3. **Users Page**: Browse the list of users, search by name or ID, and view detailed user information.
4. **Recipes Page**: Browse the list of recipes, search, filter by tags, and view detailed recipe information.
5. **Pagination**: Navigate through multiple pages of users and recipes using the pagination controls.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-name.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173`.

## Technologies Used
- React 18
- TypeScript
- Redux Toolkit
- React Router
- Axios
- TailwindCSS

## API Endpoints
- `POST /auth/login` – User login
- `GET /users` – Fetch users list
- `GET /users/{id}` – Fetch user details
- `GET /recipes` – Fetch recipes list
- `GET /recipes/{id}` – Fetch recipe details

## License
This project is created for educational purposes and does not include a commercial license.

