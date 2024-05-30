### React.js Project Documentation

This documentation provides a step-by-step guide for setting up, building, and running your React.js project. It also includes details on configuring environment variables and installing dependencies.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.x or higher recommended)
- **npm** (Node Package Manager)

## Project Setup

Clone the repository to your local machine:

```bash
git clone https://github.com/ArthaPermataMakmur/website_company.git
cd website_company
```

## Environment Variables

Environment variables are used to configure various aspects of the project. Create a file named `.env` or you can copy `.env.example` in the root directory of your project and add the following variable:

```
VITE_API_URL="http://localhost:8081/api/v1/"
```
Change that url with your API

### Explanation
- `VITE_API_URL`: The base URL for your API endpoints.

## Installing Dependencies

Install the project dependencies using npm or Yarn:

### Using npm:

```bash
npm install
```

## Running the Development Server

To start the development server, which provides live reloading and debugging capabilities, use the following command:

### Using npm:

```bash
npm run dev
```

The development server will start, and you can view your application in the browser at `http://localhost:5173`.

## Building the Project

To create an optimized production build of your React application, use the following command:

### Using npm:

```bash
npm run build
```

This command will generate a `dist` directory containing the optimized build files.

## Running the Production Build

After building the project, you can serve the production build using a static server. One way to do this is by using the `serve` package. First, install `serve` globally:

### Using npm:

```bash
npm install -g serve
```

Then, serve the production build:

```bash
serve -s dist
```

This will start a server and host your application, typically accessible at `http://localhost:5000`.

## Additional Tips

- **.env File**: Ensure that your `.env` file is not included in your version control system by adding it to your `.gitignore` file.
- **Package Scripts**: Customize your `package.json` scripts section to include other useful commands like linting, testing, and deploying.
- **Documentation**: Keep your project documentation updated, including any changes to environment variables, build steps, or new dependencies.
- **Code Quality**: Use tools like ESLint and Prettier to maintain code quality and consistency across your project.

### script in package.json

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```
---

This documentation should help you and other developers set up, build, and run the React project efficiently. Keep this document updated as your project evolves to ensure that new developers can get up to speed quickly.