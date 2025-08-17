# Cura AI: AI-Powered Symptom Checker with Multilingual Support

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

Cura AI is a modern, responsive web application designed to help users understand their health symptoms through an intelligent, AI-powered system. It features multilingual support with voice input and output in both English and Urdu, provides first-aid guidance, and helps users locate nearby medical facilities.

---

## Video Walkthrough

Click the image below to watch a full video demonstration of the application's key features, from multi-step symptom entry and voice recognition to viewing AI-powered results and finding nearby hospitals.

[![Cura AI Video Walkthrough](https://github.com/NasiraRiaz/AI-Symptom-Checker/blob/main/projectshowcase/checkerpage.png?raw=true)](https://github.com/NasiraRiaz/AI-Symptom-Checker/blob/main/projectshowcase/project-demo.mp4)

*(Note: GitHub may require you to download the video file to view it.)*

---

## Key Features & Screenshots

### 1. Dynamic Homepage & AI Introduction
A clean, professional landing page that introduces the user to the application's capabilities and provides a clear call-to-action.

![Homepage Screenshot](https://github.com/NasiraRiaz/AI-Symptom-Checker/blob/main/projectshowcase/homepage.png?raw=true)

### 2. AI Symptom Analysis & Multilingual TTS
The core feature where users input symptoms via a multi-step form or voice commands (EN/UR). The results page displays the AI-generated condition and first-aid steps, with options to have the results read aloud in both English and Urdu.

![Checker Page Screenshot](https://github.com/NasiraRiaz/AI-Symptom-Checker/blob/main/projectshowcase/checkerpage.png?raw=true)

### 3. Geolocation & Hospital Map
Integrates the Geolocation API and Leaflet to find and display nearby hospitals and clinics based on the user's current location, with options to filter by specialty.

![Map Screenshot](https://github.com/NasiraRiaz/AI-Symptom-Checker/blob/main/projectshowcase/mappage.png?raw=true)

<details>
<summary><strong>Click to view screenshots of additional pages</strong></summary>
<br>
  
**About Page**
![Screenshot of the About Page](https://github.com/NasiraRiaz/AI-Symptom-Checker/blob/main/projectshowcase/about.png?raw=true)

**Blog Page**
![Screenshot of the Blog Page](https://github.com/NasiraRiaz/AI-Symptom-Checker/blob/main/projectshowcase/blog.png?raw=true)

**Developer Page**
![Screenshot of the Developer Page](https://github.com/NasiraRiaz/AI-Symptom-Checker/blob/main/projectshowcase/developer.png?raw=true)

**Contact Page**
![Screenshot of the Contact Page](https://github.com/NasiraRiaz/AI-Symptom-Checker/blob/main/projectshowcase/contact.png?raw=true)

</details>

<br>

---

## Technologies Used

| Frontend                               | Backend                           | Database & APIs                                     |
| -------------------------------------- | --------------------------------- | --------------------------------------------------- |
| **React.js**                           | **Node.js**                       | **MongoDB**                                         |
| **React Router**                       | **Express.js**                    | **Hugging Face API** (for AI Model)                 |
| **Tailwind CSS**                       | **Mongoose**                      | **Web Speech API** (Speech-to-Text)                 |
| **Framer Motion** (for animations)     |                                   | **Leaflet & OpenStreetMap** (for Maps)              |
| **IDB-Keyval** (for local storage)     |                                   | **Geolocation API**                                 |

---

## Technical Implementation

-   **Responsive Frontend:** Set up a responsive React frontend using `create-react-app`, `react-router-dom` for navigation, and styled it professionally with **Tailwind CSS**.
-   **Robust Backend:** Built a Node.js backend with Express.js to create a REST API for handling all core logic.
-   **AI Integration:** Integrated the Hugging Face Inference API on the backend to send user symptoms to a large language model, which returns a likely medical condition.
-   **Voice Recognition:** Implemented the browser's **Web Speech API** to enable voice-to-text transcription in both English (`en-US`) and Urdu (`ur-PK`), allowing for hands-free symptom entry.
-   **Urdu Text-to-Speech (TTS):** Created a custom TTS endpoint on the backend that translates English analysis text to Urdu and synthesizes it into an audio file for seamless playback.
-   **Database:** Designed and connected a MongoDB database using Mongoose to store and serve static first-aid.
-   **Geolocation & Maps:** Used the browser's Geolocation API to get user coordinates and the Overpass API to query OpenStreetMap for medical facilities, displayed using `react-leaflet`.
-   **Client-Side Storage:** Used `idb-keyval` to create a search history feature, saving recent queries to the browser's IndexedDB for persistence.

---

## How to Run This Project Locally

### Prerequisites
- Node.js and npm
- MongoDB Atlas account (or a local MongoDB instance)
- Hugging Face API Key

### Backend Setup
1.  Navigate to the `backend` directory: `cd backend`
2.  Install dependencies: `npm install`
3.  Create a `.env` file in the `backend` directory and add your credentials:
    ```env
    MONGO_URI=your_mongodb_connection_string
    HUGGINGFACE_API_KEY=your_huggingface_api_key
    ```
4.  Start the server: `node server.js`

### Frontend Setup
1.  Open a new terminal and navigate to the `frontend` directory: `cd frontend`
2.  Install dependencies: `npm install`
3.  Start the React app: `npm start`

The application will be available at `http://localhost:3000`.