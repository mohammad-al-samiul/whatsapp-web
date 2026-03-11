# WhatsApp Backend API (Node.js)

A Node.js backend application that integrates with **WhatsApp Web** to send messages programmatically through a RESTful API. The system authenticates using a QR code, maintains session persistence, and supports real-time QR transmission using **Socket.IO**.

## 🚀 Features

- WhatsApp Web integration using **whatsapp-web.js**
- **QR authentication** for login
- **Real-time QR transmission via Socket.IO**
- **Session persistence** (no need to scan QR again after restart)
- **REST API** to send WhatsApp messages
- **Concurrency queue** for handling multiple requests
- **Structured modular architecture**
- **Centralized error handling**
- **Rate limiting**
- **Structured logging**

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **WhatsApp-Web.js**
- **Socket.IO**
- **P-Queue (Concurrency Control)**
- **Winston (Logging)**
- **Express Rate Limit**

## 📁 Project Structure

`
whatapp-backend
│
├── .wwebjs_auth/                # Stores WhatsApp session data (auto generated)
├── logs/                        # Application logs
├── node_modules/                # Installed dependencies
│
├── src
│   │
│   ├── config/                  # Environment and configuration setup
│   │
│   ├── middlewares/             # Global middleware functions
│   │   ├── error.middleware.js  # Centralized error handling
│   │   └── rateLimiter.js       # API rate limiting
│   │
│   ├── modules/                 # Feature-based modules
│   │   └── message
│   │       ├── message.controller.js  # Handles incoming API requests
│   │       ├── message.service.js     # Business logic for sending messages
│   │       ├── message.routes.js      # Message related routes
│   │       └── message.queue.js       # Concurrency queue management
│   │
│   ├── routes
│   │   └── index.js             # Centralized API route registration
│   │
│   ├── sockets
│   │   └── socket.js            # Socket.IO setup for real-time QR transmission
│   │
│   ├── utils
│   │   └── logger.js            # Winston logger configuration
│   │
│   ├── whatsapp
│   │   └── whatsapp.client.js   # WhatsApp Web client initialization
│   │
│   └── app.js                   # Express application setup
│
├── server.js                    # Application entry point
├── .env                         # Environment variables
├── .gitignore                   # Git ignore rules
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Dependency lock file
└── README.md                    # Project documentation`

## ⚙️ Installation

Clone the repository:

`   git clone https://github.com/yourusername/whatsapp-backend.git   `

Navigate to the project:

`   cd whatsapp-backend   `

Install dependencies:

`   npm install   `

## 🔧 Environment Variables

Create a .env file in the root directory.

Example:
`   PORT=5000  CLIENT_URL=http://localhost:3000  PRODUCTION_URL=https://your-production-domain.com  QUEUE_CONCURRENCY=5   `

## ▶️ Running the Application

Start the server in development mode:

`   npm run dev   `

Server will start on:

`   http://localhost:5000   `

## 📲 WhatsApp Authentication

When the server starts, a **QR code will appear in the terminal**.

Open WhatsApp on your phone:

`   WhatsApp → Settings → Linked Devices → Link a Device   `

Scan the QR code displayed in the terminal.

Once authenticated, the server will log:

`   WhatsApp ready   `

Session will be stored locally, so QR scanning is not required again after restart.

## 📡 API Endpoint

### Send WhatsApp Message

**Endpoint**
`   POST /api/messages/send   `

**Request Body**

`   {    "phone": "8801712345678",    "message": "Hello from WhatsApp API"  }   `

**Response**

`   {    "success": true,    "messageId": "3EB0C767D0E1F3..."  }   `

Phone number must include **country code**.

Example:

`   8801712345678   `

## 🔁 Concurrency Handling

The system uses **P-Queue** to control concurrent message sending.

Example configuration:

`   QUEUE_CONCURRENCY=5   `

This ensures stable and controlled message processing.

## 🔐 Rate Limiting

API requests are protected using **express-rate-limit** to prevent abuse.

## 📜 Logging

The system uses **Winston** for structured logging.

Logs include:

- QR generation
- WhatsApp authentication
- Connection status
- Errors

## 🧪 Testing the API

Use **Postman** or any API client.

Request:

`   POST http://localhost:5000/api/messages/send   `

Body:
`   {    "phone": "8801712345678",    "message": "Test message"  }   `

## 🎥 Demo Flow

1.  Start the server
2.  QR code appears
3.  Scan QR using WhatsApp
4.  Send API request using Postman
5.  Message delivered to WhatsApp

## 📄 License

This project is developed for **technical assessment purposes**.
