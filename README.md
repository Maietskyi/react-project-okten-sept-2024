https://dummyjson.com/docs

Сайт на якому знаходиться акумульована інформація з dummyjson.com про користувачів та рецепти.

Обов'язкові компоненти:
Меню - містить лінки на сторінки та лого залогіненого користувача.У випадку, якщо меню показується не аутентифікованому користувачеві - тов меню пристунє лише лінка на сторінгу аутентифікації.
Пошук - шукає той чи інший рецепт/користувача в залежності від сторінки. Один Текстовий інпут та кнопка за бажанням. Через пошук можна знайти когось/щось за стрінговим значенням, згідно документації, або за ід!!!
Пагінація - пагінує данні.

Головна сторінка (ГС):
За замовчуванням передбачаємо, що користувач не залогінений
При контакті з ГС на ній є повідомлення, що вам потрібно аутентифікуватисьі в меню відповідна лінка.

Сторінка aутентифікації (САФ):
Містить форму з інпутами необхідними для аутентифікацї через dummyjson. Данні для аутентифікацї брати з dummyjson, з будь-якого користувача.
Після завершення процесу аутентифікації в меню з'являються лінки на сторінку всіх рецептів та сторінку вісх користувачів, та лого користувача (брати з об'єкта)




Сторінка з користувачами:
Містить меню, пошук, список користувачів з мінімальною інфою на 3 поля з об'єкту
При кліку на користувача перехід на сторіку з більш детальною інфою про цього користувача (на 7-10 полів, за вашим бажанням) та список його рецептів. При кліку на рецепт - перехід на детальну сторінку рецепту

Сторінка з рецептами:
Мість меню, пошук, список рецептів (лише назва+ теги)
при кліку на рецепт - перехід на сторінку рецепту з детальною інформацією, та лінкою на сторінку користувача, який його зробив.
При кліку на тег - фільтрація/пошук всіх рецептів з таким самим тегом

Дизайн довільний

Всі данні ,які відображаються списком - пагіновані.

Стейтом керуємо через редакс і тільки через нього.

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

