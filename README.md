# Skill Exchange Platform- Project 13

Skill Exchange Platform is a web application designed to facilitate the exchange of skills among users. Participants can register to teach and learn different skills, creating a collaborative learning community. The frontend is built using React and leverages modern technologies to provide a smooth and optimized user experience.

# Features

#Registration and Authentication

Registration form for new users.
Login system to access the platform's advanced features.

## Skill Requests List

View skill requests (available after logging in).
Add skill requests to a favorites list for easy tracking.

## User Profile

View and edit personal data.
Publish new skill requests.
Manage skills the user wants to learn or teach.

## Messaging

Users can contact others through private messages linked to skill requests.
The system is not a real-time chat;
The recipient of the message can reply only once, either to accept or reject the exchange.
After the recipient’s reply, the initial sender can send one final message to conclude the conversation.
If the sender includes their contact information in the message, users can connect outside the platform if they wish.

## Advanced Filters

Home Page: Search by desired skill to direct users to a filtered list (Skill Pool).
Skill Pool: Additional filters for teaching skills, learning skills, and geographic location.

# Technologies

Frontend Framework: React
Routing: React Router
Forms: React Hook Form
Notifications: React Toastify
Styling: Chakra UI (used specifically for modals).

# Dependencies

"@chakra-ui/react": "^2.5.1",
"@emotion/react": "^11.10.5",
"@emotion/styled": "^11.10.5",
"date-fns": "^4.1.0",
"framer-motion": "^7.9.0",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-hook-form": "^7.53.2",
"react-icons": "^5.3.0",
"react-router-dom": "^6.28.0",
"react-toastify": "^10.0.6"

Note: While Chakra UI is included in the dependencies, it was only used in specific components like modals and not throughout the entire project.

# Route Structure

## Home: Main page with a basic search bar (filtering by skills).

## Skills: Full list of Skill Requests with advanced filtering options.

## Authentication:

Registration: User registration form.
Login: Access to platform features.
#Profile: Personalized page for managing user data and publishing skill requests.

# Current Project Status

The project is fully functional and includes:

User registration and authentication.
Management of skill requests and basic messaging.
Search and filters for an enhanced user experience.
The frontend is fully integrated with the backend to ensure a seamless experience between data and interface.

# Important URLs

Frontend: https://wegrowtogether.netlify.app/Register
API Backend: https://project-13-backend.vercel.app
