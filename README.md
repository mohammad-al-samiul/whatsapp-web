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

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   whatsapp-backend  │  ├── src  │   ├── modules  │   │   └── message  │   │       ├── message.controller.js  │   │       ├── message.service.js  │   │       ├── message.routes.js  │   │       └── message.queue.js  │   │  │   ├── whatsapp  │   │   └── whatsapp.client.js  │   │  │   ├── sockets  │   │   └── socket.js  │   │  │   ├── middlewares  │   │   ├── error.middleware.js  │   │   └── rateLimiter.js  │   │  │   ├── utils  │   │   └── logger.js  │   │  │   ├── routes  │   │   └── index.js  │   │  │   └── app.js  │  ├── server.js  ├── .env  ├── package.json  └── README.md   `

## ⚙️ Installation

Clone the repository:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/yourusername/whatsapp-backend.git   `

Navigate to the project:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd whatsapp-backend   `

Install dependencies:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install   `

## 🔧 Environment Variables

Create a .env file in the root directory.

Example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   PORT=5000  CLIENT_URL=http://localhost:3000  PRODUCTION_URL=https://your-production-domain.com  QUEUE_CONCURRENCY=5   `

## ▶️ Running the Application

Start the server in development mode:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm run dev   `

Server will start on:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   http://localhost:5000   `

## 📲 WhatsApp Authentication

When the server starts, a **QR code will appear in the terminal**.

Open WhatsApp on your phone:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   WhatsApp → Settings → Linked Devices → Link a Device   `

Scan the QR code displayed in the terminal.

Once authenticated, the server will log:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   WhatsApp ready   `

Session will be stored locally, so QR scanning is not required again after restart.

## 📡 API Endpoint

### Send WhatsApp Message

**Endpoint**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   POST /api/messages/send   `

**Request Body**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "phone": "8801712345678",    "message": "Hello from WhatsApp API"  }   `

**Response**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "success": true,    "messageId": "3EB0C767D0E1F3..."  }   `

Phone number must include **country code**.

Example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   8801712345678   `

## 🔁 Concurrency Handling

The system uses **P-Queue** to control concurrent message sending.

Example configuration:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   QUEUE_CONCURRENCY=5   `

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

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   POST http://localhost:5000/api/messages/send   `

Body:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "phone": "8801712345678",    "message": "Test message"  }   `

## 🎥 Demo Flow

1.  Start the server
2.  QR code appears
3.  Scan QR using WhatsApp
4.  Send API request using Postman
5.  Message delivered to WhatsApp

## 📄 License

This project is developed for **technical assessment purposes**.
