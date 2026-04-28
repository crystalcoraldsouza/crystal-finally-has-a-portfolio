# Setting up React Vite boilerplate

## Create your project directory

> mkdir react-vite-from-scratch

> cd react-vite-from-scratch

## Create your README.md and .gitignore files

## Create your package.json

> npm init -y

## Install core React dependencies

> npm install react react-dom

## Install Vite, TypeScript, React plugins as a devDependency

> npm install -D vite typescript @types/react @types/react-dom @vitejs/plugin-react

## Initialise TS

> npx tsc --init

## Configure tsconfig.json

```js
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "skipLibCheck": true,

    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    "jsx": "react-jsx",
    "strict": true
  },
  "include": ["src"]
}
```

> "jsx": "react-jsx" → enables modern React JSX transform
> "noEmit": true → Vite handles builds, not TypeScript

## Create Folder Structure

react-ts-from-scratch/
│
├── index.html
├── vite.config.ts
├── tsconfig.json
├── src/
│ ├── main.tsx
│ └── App.tsx

## Setup index.html

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React TS From Scratch</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Create React Entry (main.jsx)

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Create App Component

```js
export default function App() {
  const message: string = "Hello React + TypeScript";

  return <h1>{message}</h1>;
}
```

## Configure Vite (vite.config.js)

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

## Add Scripts to package.json

```js
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## Run the App

> npm run dev
