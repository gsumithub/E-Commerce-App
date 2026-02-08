# React + Vite
🛒 React E-Commerce Application

A fully functional E-Commerce web application built using React + Vite, focusing on scalable component architecture, dynamic filtering logic, pagination handling, and complete cart state management.

This project demonstrates real-world frontend concepts including API integration, derived state calculations, conditional rendering, and local storage persistence.

🚀 Features

Dynamic product listing using external API (Axios)

Category & Brand filtering

Price range filtering

Discount percentage filtering

Rating-based filtering

Pagination using react-responsive-pagination

Add to Cart / Remove from Cart functionality

Quantity increment & decrement controls

Real-time cart price calculation

GST (18%) calculation on order summary

Cart persistence using Local Storage

SweetAlert2 confirmation modals

Fully responsive UI using Tailwind CSS

Deployed on GitHub Pages

🧠 Technical Concepts Used

React useState & useEffect

React Context API for global cart management

Dynamic query parameter handling

Derived state computation using reduce()

Conditional rendering patterns

Defensive localStorage parsing

Immutable state updates

HashRouter for static hosting compatibility

📦 Libraries & Tools

React (Vite)

Axios

SweetAlert2

React Responsive Pagination

React Icons

Tailwind CSS

gh-pages (deployment)

📊 Cart Logic Highlights

Prevents duplicate entries

Increases quantity if product already exists

Calculates subtotal dynamically

Applies GST only when cart has items

Final total updates instantly

🌐 Live Demo

👉 https://gsumithub.github.io/E-Commerce-App/

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
