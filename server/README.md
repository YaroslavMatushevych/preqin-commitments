# 🚀 HubSpot Challenge

Hello there! 👋  
I'm **Yaroslav Matushevych**, and this is my implementation of the HubSpot Challenge.
This is the **backend server** for the HubSpot Challenge, implemented with **Node.js**, **Express**, and **TypeScript**. It handles all backend logic and API endpoints, ensuring seamless communication with the client. 💻

---

## 🗂 Project Structure

The server is structured for scalability and maintainability:

```
server/
├── src/
│   ├── index.ts         # Entry point of the server
│   ├── routes/          # API route handlers
│   ├── controllers/     # Controllers for handling logic
│   ├── services/        # Business logic
│   └── utils/           # Utility functions
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
```

---

## 📦 Dependencies

### Runtime Dependencies
- **Express**: Fast and lightweight web framework.
- **TypeScript**: Ensures type safety and a better developer experience.

### Development Dependencies
- **Nodemon**: Automatically restarts the server during development.
- **@types/express** and **@types/node**: TypeScript definitions for Express and Node.js.
- **ts-node**: Allows running TypeScript directly.

---

## 🚀 Getting Started

Follow these steps to set up and run the server:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Server
For development:
```bash
npm run dev
```

For production:
```bash
npm run build
node dist/index.js
```

---

## 🛠 Features

- 🔌 **API Endpoints**: Handles requests and sends appropriate responses.
- 🎨 **TypeScript Support**: Ensures robust and maintainable code.
- 🔄 **Live Reloading**: Nodemon automatically restarts the server during development.
- 📂 **Modular Structure**: Easy to add new features and maintain code.

---

## 📦 Scripts

The following scripts are available in the `server/package.json`:

- `dev`: Starts the server in development mode with live reloading.
- `build`: Compiles the TypeScript files to JavaScript.
- `start`: Runs the compiled JavaScript files in production.

---

## 📝 Notes

- This server is a part of the HubSpot Challenge.
- Make sure to configure any required environment variables (e.g., `.env` file).

---

## 📬 Contact Me

💼 [LinkedIn](https://www.linkedin.com/in/yaroslav-matushevych)  
📧 yaroslav.matushevych@gmail.com  

---

### 🙌 Thank You!
Thank you for reviewing the server-side implementation of this challenge. I hope it showcases my backend development skills effectively! 😊
