# 🍽️ The Meal Recipes

Angular application to search and discover meal recipes using [TheMealDB API](https://www.themealdb.com/api.php).

## ✨ Features

- 🔍 Search recipes by name
- 🔤 Browse recipes by first letter
- 🎲 Discover random recipes
- 📱 Responsive design
- 🔔 Toast notifications for user feedback
- 🎬 YouTube video integration

## 🛠️ Tech Stack

- **Angular** 21.1.5 with standalone components
- **TypeScript** 5.9.3
- **ngx-toastr** 20.0.5
- **RxJS** 7.8.2
- **ESLint** with Angular & TypeScript rules
- **Karma + Jasmine** for unit testing

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

## 🚀 Installation

```bash
npm install
```

## 💻 Development

Start the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload on file changes.

## 🏗️ Build

Build for production:

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run unit tests:

```bash
npm test
```

For single run without watch mode:

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

## 🔍 Linting

Run ESLint:

```bash
npm run lint
```

## 🏗️ Architecture

- **OnPush Change Detection** for optimal performance
- **Type-safe** API responses with custom interfaces
- **Reactive state management** with RxJS observables
- **Modular component structure** with feature-based organization

## 📁 Project Structure

```
src/
├── app/
│   ├── components/      # Feature components
│   ├── services/        # API services
│   └── models/          # TypeScript interfaces
└── styles.css          # Global styles
```

## 🚀 Deployment

Configured for Vercel deployment. See [vercel.json](vercel.json) for configuration.

## 📄 License

This project is licensed under the MIT License.
