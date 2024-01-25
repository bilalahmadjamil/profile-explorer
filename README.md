# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


project-directory/
│
├── public/             # Public assets and HTML template
│   └── index.html
│
├── src/                # Source code
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── styles/         # CSS or stylesheets
│   └── App.jsx         # Main application component
│
├── .env                # Environment variables
├── README.md           # Project documentation
└── package.json        # npm package configuration


# Installation

To run this project locally, follow these steps:

1. cd profile-explorer
2. yarn
3. yarn run dev
4. The project will be running at http://localhost:3000 by default. Open this URL in your browser to view the application.



Here's a brief summary of each component and folder in my project:

src/components: This folder contains reusable components used throughout the application. Each component serves a specific UI purpose and can be easily imported and used in different parts of the application.

userListComponents:

ProfileModal: This component displays detailed information about a selected user in a modal dialog. It receives the selected user as a prop and manages its visibility using the open prop.
TextFieldFilter: This component provides a text field for filtering users based on gender. It receives the current filter value and an event handler to update the filter value as props.
UserTable: This component renders a table displaying a list of users. It receives filtered user data, pagination information, and a handler for opening the profile modal as props.
Pagination: This component renders pagination controls for navigating through the list of users. It receives the total number of users, rows per page, current page, and event handlers for page change and rows per page change as props.
styles: This folder contains files for styling components using MUI's styling solution. It likely includes CSS or JSS files defining the styles used in the application.

api: This folder contains files related to API communication, such as fetching user data from a remote server. It may include functions or utilities for making HTTP requests and handling responses.

UserList.tsx: This file contains the main UserList component, which serves as the entry point for the user list feature. It orchestrates the rendering of sub-components, manages state related to user data and filtering, and handles user interactions.

ProfileModal.tsx: This file contains the ProfileModal component responsible for displaying detailed user information in a modal dialog.

TextFieldFilter.tsx: This file contains the TextFieldFilter component, which provides a text field for filtering users based on gender.

UserTable.tsx: This file contains the UserTable component, which renders a table displaying a list of users.

Pagination.tsx: This file contains the Pagination component, which renders pagination controls for navigating through the list of users.


# creation of .env file
please create a .env file at root directory with below environemnt variables 

RANDOM_USER_API_URL = https://randomuser.me/api/?results=50
YOUR_GOOGLE_MAPS_API_KEY = YOUR_GOOGLE_MAPS_API_KEY
