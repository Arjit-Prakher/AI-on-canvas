# 📘 AI-on-Canvas Documentation
## 🚀 Overview
AI-on-Canvas is a React Flow + Node.js + MongoDB application that lets users build interactive chat flows on a canvas. Each node represents a conversation step, powered by LLM responses. Flows are persisted in MongoDB, can be reloaded, and are auto‑saved during editing. The app supports authentication, role‑based access (Regular vs Pro), and Razorpay integration for upgrading users.

## 🛠️ Tech Stack
- Frontend: React, React Flow, TailwindCSS

- Backend: Node.js, Express.js

- Database: MongoDB (Mongoose)

- Auth: JWT (JSON Web Tokens)

- Payments: Razorpay

- LLM Integration: Groq API (with modular backend logic)

## ✨ Features
Canvas-based chat flows  
Create nodes (Initial + Chat) and connect them visually.

- Auto-save  
Flows are automatically saved to MongoDB whenever nodes/edges/messages change.

- History pane  
Sidebar lists recent flows, highlights the active one, and allows loading/deleting.

- Authentication  
JWT-based login/signup with role management (regular vs pro).

- Role-based models  
Regular users access simple models; Pro users access advanced models.

- Payment gateway  
Razorpay integration for upgrading accounts to Pro.

- Persistence across reloads  
Active flow is restored automatically when the page reloads.

- Custom UI/UX  
Collapsible responses, markdown rendering, custom scrollbars, highlighted active flows.

## 📂 Project Structure
```Code
AI-on-canvas/
├── client/              # React frontend
│   ├── components/      # Nodes, Sidebar, FlowCanvas
│   ├── context/         # AuthContext
│   └── utils/           # LLM helpers
├── server/              # Express backend
│   ├── models/          # User.js, Flow.js
│   ├── routes/          # auth.js, flows.js, payment.js
│   └── server.js        # Entry point
```
## 🔑 Key Modules
Flow.js
- Defines schema for flows:

- userId, title, nodes, edges, messages

- { timestamps: true } for auto createdAt/updatedAt

User.js
- Defines schema for users:

- email, passwordHash, role (regular/pro)

flows linked to Flow model

### AuthContext.jsx
Handles login/logout, stores { token, user }, persists session.

### Home.jsx
Auto‑save with debounce

Fetch all flows on load

Restore active flow on reload

Handles new flow creation

### Sidebar.jsx
Displays history

Highlights active flow

Shows logged‑in user info

Allows deleting flows

### 💳 Payment Integration
Backend: /create-order and /verify-payment routes using Razorpay SDK.

Frontend: Razorpay Checkout script triggers payment.

Role Upgrade: On successful payment, user role updated to pro.

### 🧪 Testing
Use Razorpay test keys.

Test cards: 4111 1111 1111 1111 (Visa).

Verify role switching by checking user.role in AuthContext.

### 📈 Future Improvements
Collaborative flows (multi-user editing).

Export/import flows as JSON.

More advanced node types (decision, API call).

Analytics dashboard for Pro users.

## 📝 Conclusion
AI-on-Canvas demonstrates:

Full-stack development with React Flow and MongoDB.

Secure authentication and persistence.

Real-world integration of payments and role-based access.

A polished UI/UX with auto-save and reload persistence.