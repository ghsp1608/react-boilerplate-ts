## React + TypeScript + Vite

This template provides a minimal setup to get up and running React+typescript application.

## Libraries used

- MUI
- Axios
- React Router DOM
- Zustand
- React Query

## Directory Structure

```bash
.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ │ └── react.svg
│ ├── components
│ ├── hoc/
│ │ └── DI.tsx
│ ├── main.tsx
│ ├── pages/
│ ├── routes.tsx
│ ├── services/
│ │ ├── apiClient.ts
│ │ ├── postService.ts
│ │ └── todoService.ts
│ ├── state/
│ │ ├── client/
│ │ └── server/
│ ├── types/
│ │ └── global.d.ts
│ ├── utils/
│ │ ├── constants.ts
│ │ └── helpers.tsx
│ └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

- `assets/` - Stores static files like images, css and js.
- `components/` - Stores all reusable componets.
- `hoc/` - Stores higher order components (HOCs).
- `main.txs` - Entry point of the application.
- `pages/` - Stores all the top level pages of the app.
- `routes.tsx` - Stores app level routing info.
- `services/` - Stores reusable logic for making API calls.
- `state` - Stores state of the application.
  - `state/client` - stores the client state
  - `state/server` - stores the server state
- `types` - Stores all the type definitions
- `utils/` - Reusable utlities

## Installation

To install the application type:

```bash
npm i
npm run dev
```

## Adding new environment

To add a new environment add a file named `.env.<environment_name>` inside the `env/` folder in root
directory. For example:

_.env.prestage_

```text
VITE_APP_BASE_URL= https://example.com/
VITE_APP_SOCKET_URL= https://socket.example.com/
```

Next, add the corresponding command in the `scripts` section of the `package.json` fie as follows:

```json
  "scripts": {
    # ... other configs
    "prestage": "vite --mode prestage",
    # ... other configs
  },
```
