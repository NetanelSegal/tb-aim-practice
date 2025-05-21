# Node.js Server + React Client

This project includes a Node.js server with ESM support and a React client with Vite and Tailwind CSS.

## Server

The server is a simple Express.js application that listens on port 3000 and has a single endpoint:
- `GET /health` - Returns "ok" when the server is running

### Setup and Run

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

## Client

The client is a React application created with Vite and styled with Tailwind CSS.

### Setup and Run

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Project Structure

```
.
├── client/               # React client application
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── server/               # Node.js server
    ├── server.js
    └── package.json
```