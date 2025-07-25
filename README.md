# React E-commerce Template for Mentoring Program

A React e-commerce template designed for the Mentoring Program for React developers, aimed at simulating a real-world work environment and guiding participants through the development of a comprehensive e-commerce project.

## Stack

- [React](https://react.dev/reference/react)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Vitest](https://vitest.dev/guide/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


## Prerequisites

- HTML and CSS knowledge
- Basic understanding of React and TypeScript

## Features

- Responsive design using SCSS and CSS modules
- TypeScript support for type checking and code completion
- Vite as the development server and build tool
- React Router for client-side routing
- Basic layout components (Header, Footer, MainLayout)
- Example pages (Homepage, Shop, MyAccount, NotFound)
- Button component with various styles and sizes

## Project structure

The project is organized into the following directories:
- `src`: Source code for the application
  - `components`: Reusable React components
  - `features`: Feature-specific components and logic
  - `layout`: Layout components (Header, Footer, MainLayout)
  - `lib`: Utility libraries and helper functions
  - `pages`: Page components (Homepage, Shop, MyAccount, NotFound)
  - `routes`: Application router and route definitions
  - `store`: Global state management
  - `styles`: Global styles and variables
  - `types`: Type definitions for TypeScript
- `public`: Static assets and index.html
- `tests`: Testing setup
- `vite.config.ts`: Vite configuration file

## Getting started

### 1. Create your own repository

This project is set up as a [GitHub Template Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

✅ Click the green “Use this template” button at the top of this page.

1.	Select “Create a new repository”.
2.	Choose a name for your repo (e.g. react-mentoring-project-yourname).
3.	Keep it public (recommended) or private.
4.	Click “Create repository from template”.

### 2. Clone and run your repo locally

```bash
git clone https://github.com/your-username/react-mentoring-project-yourname.git
cd react-mentoring-project-yourname
```

Install dependencies
```bash
npm install
# or
yarn install
```

Start the development server
```bash
npm run dev
# or
yarn dev
```

Then open your browser and go to: `http://localhost:5173/`.

### Add your mentor as a collaborator

To allow your mentor to review your code and provide feedback:
1.	Go to your new GitHub repository.
2.	Click on Settings > Collaborators.
3.	Search for: `@emonteco`.
4.	Click “Add collaborator”.

### Keeping your project updated with template changes

If you created your project from this template and want to receive updates when improvements or fixes are made to the original repo, you can link it as an upstream repository and manually sync changes.

1.	Add this template repository as a remote called upstream:
```bash
git remote add upstream https://github.com/emonteco/react-mentoring.git
```

2. Fetch the latest changes from upstream:
```bash
git fetch upstream
```

3. Merge them into your local main branch (or whichever you’re using):
```bash
git merge upstream/main
```

4. Resolve any conflicts if needed, then push your updated branch:
```bash
git push origin main
```

## Start building

You now have a fully functional copy of the project. Use it to:
- Complete tasks from the program.
- Practice building React components, using hooks, and integrating APIs.
- Deploy updates and share your progress.

## CSS naming convention

We use the BEM (Block-Element-Modifier) naming convention for our CSS classes. This convention helps to create a consistent and organized CSS structure. For more information on how BEM works, please refer to the [official BEM documentation](https://getbem.com/naming/).

## Unit tests

Unit tests are an essential part of the development process, ensuring that individual components and functions behave as expected. In this project, we use Vitest and React Testing Library to write and run unit tests.

### Writing unit tests
- Create a new test file for each component or function you want to test.
- Use the describe block to group related tests together.
- Use the it block to write individual tests.
- Use the expect function to assert expected behavior.

### Running unit tests

- Run `npm test` or `yarn test` to execute all unit tests.
- Use the `--watch` flag to run tests in watch mode.

## Commit rules

We follow the Conventional Commits specification for commit messages. This specification provides a set of rules for writing commit messages that are easy to read and understand.
Use the following format for commit messages: `type(scope): subject`
- `type`: One of the following types:
  - `feat`: New feature
  - `fix`: Bug fix
  - `docs`: Documentation changes
  - `style`: Code style changes
  - `refactor`: Code refactoring
  - `perf`: Performance improvements
  - `test`: Test changes
  - `chore`: Maintenance tasks
- `scope`: Optional scope of the commit (e.g., components/Button)
- `subject`: Brief description of the commit

### Example commit message
`feat(components/Button): Add new Button component`

### Reference

For more information on Conventional Commits, please visit the official website: [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/).

### Husky and Lint-Staged

We use Husky and Lint-Staged to enforce our commit rules and ensure that our code is formatted consistently.

## Design tokens

Design tokens are a set of reusable values that define the visual design of our application. They include:

- Colors
- Border Radius
- Spacing
- Fonts
- Font sizes
- Font weight
- Headings and text

## Deploy on Vercel

1.	Go to vercel.com and log in with your GitHub account.
2.	Click “Add New Project”.
3.	Import your newly created repository.
4.	Use default settings or configure as needed.
5.	Click “Deploy”.

Your project will be live in a few seconds 🚀

##  Need help?

If you get stuck, ask questions in our community Slack channel or reach out to your mentor directly.

## Contributing

Contributions are welcome! Please submit a pull request with a clear description of the changes.
