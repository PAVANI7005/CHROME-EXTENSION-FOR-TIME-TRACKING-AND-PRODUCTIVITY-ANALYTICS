# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS
A powerful Chrome Extension that helps users monitor their online activity, track time spent on websites, and analyze productivity patterns. Designed for individuals and professionals who want to stay focused, optimize their workflow, and gain insight into how they use their time online.


COMPANY: CODITECH IT SOLUTIONS

NAME: Chebrolu Pavani

INTERN ID: CT06DM516

DOMAIN: FULL STACK WEB DEVELOPMENT

BATCH DURATION: MAY 10th, 2025 to June 25th, 2025.

MENTOR NAME: NEELA SANTHOSH KUMAR
# ⏱️ Time Tracker & Productivity Analytics - Chrome Extension

A **Chrome Extension** that tracks the amount of time users spend on websites and helps analyze online productivity. It logs active browser usage, displays the current tracking status, and sends time data to a backend for storage and analytics.

---

## 📦 Features

- 🔄 Real-time tracking of time spent per active tab
- ⏱️ Automatically logs time intervals as users switch tabs
- 🌐 Sends time data to a backend server with Express + MongoDB
- 🧠 Clean, modern popup UI showing current tracking status
- 📊 Dashboard button to extend analytics interface (future-ready)
- 🔒 Local and secure with support for MongoDB time logging

---

## 🧰 Tech Stack

| Layer         | Technology                      |
|---------------|----------------------------------|
| Frontend      | HTML, CSS (Popup UI)            |
| Extension API | Chrome Extensions Manifest v3   |
| Background    | JavaScript + Chrome Tabs API    |
| Backend       | Node.js, Express.js             |
| Database      | MongoDB (via Mongoose)          |

---

## 📁 Project Structure

time-tracker-extension/
├── background.js # Background logic for time tracking
├── popup.html # UI shown when extension icon is clicked
├── manifest.json # Extension metadata & permissions
├── icon.png # Icon used in Chrome extension
├── server.js # Express server handling POST tracking data
├── package.json # Node backend dependencies and scripts
├── package-lock.json # Dependency lock
└── README.md # Project documentation

---

## 🚀 Getting Started

### 🔌 Backend Setup (Node + MongoDB)

1. Install dependencies:
   ```bash
   npm install
2.Start MongoDB server (locally):
mongod
3.Start the backend API server:
npm start
Backend runs at: http://localhost:5000
🧩 Chrome Extension Setup
1.Open Chrome and go to chrome://extensions

2.Enable Developer Mode (top right toggle)

3.Click "Load Unpacked"

4.Select the folder containing:

=>ackground.js

=>popup.html

=>icon.png

You should now see the extension icon in your toolbar.

⚙️ How It Works
When you switch tabs, the extension tracks how long you spent on the previous one.

It sends data like:

{
  "url": "https://example.com",
  "timeSpent": 5000  // in milliseconds
}
to the backend endpoint POST /api/track.

=>Data is saved in MongoDB using a simple schema (url, timeSpent, date).

=>A popup UI (popup.html) shows a "Tracking" status with buttons for pausing or viewing stats (hooks in place for expansion).

🛡 Permissions Used

"permissions": [
 "tabs",
 "storage",
  "identity",
  "alarms"
],
"host_permissions": ["<all_urls>"]
These allow tracking active tabs, reading URLs, and communicating with your local server.

✅ Future Improvements
Add a Dashboard Page to show daily/weekly charts

Allow categorization of URLs (Work, Social, etc.)

Add pause/resume tracking toggle with persistent settings

Export CSV reports for productivity reviews

📄 License
Licensed under the ISC License. Feel free to fork and extend!

🧠 Contributing
Pull requests are welcome. Please open an issue to discuss your feature before submitting.


  
