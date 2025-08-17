# Cura AI: AI-Powered Symptom Checker with Multilingual Support

Cura AI is a modern, responsive web application designed to help users understand their health symptoms through an intelligent, AI-powered system. It features multilingual support with voice input and output in both English and Urdu, provides first-aid guidance, and helps users locate nearby medical facilities.

---

## Video Walkthrough

Click the image below to watch a full video demonstration of the application's key features, from multi-step symptom entry and voice recognition to viewing AI-powered results and finding nearby hospitals.

[![Cura AI Video Walkthrough](./frontend/projectshowcase/checkerpage.png)](./frontend/projectshowcase/project-demo.mp4)

*(Note: GitHub may require you to download the video file to view it.)*

---

## Key Features & Screenshots

1.  **Dynamic Homepage & AI Introduction**

    A clean, professional landing page that introduces the user to the application's capabilities and provides a clear call-to-action.

    ![Homepage Screenshot](./frontend/projectshowcase/homepage.png)

2.  **AI Symptom Analysis & Multilingual TTS**

    The core feature where users input symptoms via a multi-step form or voice commands (EN/UR). The results page displays the AI-generated condition and first-aid steps, with options to have the results read aloud in both English and Urdu.

    ![Checker Page Screenshot](./frontend/projectshowcase/checkerpage.png)

3.  **Geolocation & Hospital Map**

    Integrates the Geolocation API and Leaflet to find and display nearby hospitals and clinics based on the user's current location, with options to filter by specialty.

    ![Map Screenshot](./frontend/projectshowcase/mappage.png)

<details>
<summary><strong>Click to view screenshots of additional pages</strong></summary>
<br>
  
**About Page**
![Screenshot of the About Page](./frontend/projectshowcase/about.png)

**Blog Page**
![Screenshot of the Blog Page](./frontend/projectshowcase/blog.png)

**Developer Page**
![Screenshot of the Developer Page](./frontend/projectshowcase/developer.png)

**Contact Page**
![Screenshot of the Contact Page](./frontend/projectshowcase/contact.png)

</details>

<br>

---

## Technical Implementation Details

This project is a full-stack application built with the MERN stack and several modern web technologies. My development process involved the following key steps:

-   **I set up a responsive React frontend** using `create-react-app`, `react-router-dom` for navigation, and styled it professionally with **Tailwind CSS**.
-   **I built a Node.js backend with Express.js** to create a robust REST API for handling all core logic.
-   **I integrated the Hugging Face Inference API** on the backend to send user symptoms to the `HuggingFaceH4/zephyr-7b-beta` language model, which processes the text and returns a likely medical condition and description.
-   **I implemented a multi-step symptom form** on the frontend, managed with React state and animated with `Framer Motion`, to guide users through the process of describing their health concerns.
-   **I integrated the browser's Web Speech API** to enable voice-to-text transcription in both English (`en-US`) and Urdu (`ur-PK`), allowing for hands-free symptom entry.
-   **I created a custom Text-to-Speech (TTS) endpoint** on the backend. When a user requests Urdu speech, my backend first translates the English analysis text to Urdu, then synthesizes the resulting Urdu text into an audio file using a public endpoint. This audio is sent back to the frontend for seamless playback.
-   **I designed and connected a MongoDB database** using Mongoose to store and serve static first-aid information corresponding to the AI-generated conditions.
-   **I implemented a "Find Nearby Hospitals" feature** using the browser's Geolocation API to get user coordinates and the Overpass API to query OpenStreetMap for medical facilities, which are displayed using `react-leaflet`.
-   **I used `idb-keyval` on the frontend** to create a client-side search history feature, saving recent queries to the browser's IndexedDB for persistence and easy recall.

---

## How to Run This Project Locally

### Prerequisites
- Node.js and npm
- MongoDB Atlas account (or a local MongoDB instance)
- Hugging Face API Key

### Backend Setup
1.  Navigate to the `backend` directory: `cd backend`
2.  Install dependencies: `npm install`
3.  Create a `.env` file in the `backend` directory and add your credentials. **Do not include the quotes.**
    ```
    MONGO_URI=your_mongodb_connection_string
    HUGGINGFACE_API_KEY=your_huggingface_api_key
    GOOGLE_MAPS_API_KEY=your_google_maps_api_key_if_needed
    DB_NAME=symptom-checker
    ```
4.  Start the server: `node server.js`

### Frontend Setup
1.  Open a new terminal and navigate to the `frontend` directory: `cd frontend`
2.  Install dependencies: `npm install`
3.  Start the React app: `npm start`

The application will be available at `http://localhost:3000`.