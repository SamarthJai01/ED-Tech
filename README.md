# 🌌 EduVerse: The Immersive EdTech AI Tutor

EduVerse is a creative and highly immersive web application designed to revolutionize EdTech by bringing history and science to life. Instead of standard Chatbots, EduVerse allows students to learn directly from AI-simulated **Historical Personas** (such as Leonardo Da Vinci, Marie Curie, and Ada Lovelace) in real-time.

## ✨ Key Features
- **Temporal Tutors**: Engage with AI agents system-prompted to act strictly as famous historical figures. Learn Art & Engineering from Da Vinci, Chemistry from Curie, and Algorithms from Lovelace!
- **Real-Time AI Inference**: Powered by the highly performant **Groq API** with Llama-3 models for blazing-fast conversational experiences.
- **Premium UI/UX**: Built with a visually stunning cosmic theme, glassmorphism UI elements, engaging micro-animations, and responsive layout—all achieved using pure Vanilla CSS.
- **Gamified Learning**: Encourages active learning through contextual, persona-driven conversations.

## 🛠️ Technology Stack
- **Frontend**: React.js & Vite
- **Styling**: Vanilla CSS (Custom Design System & Animations)
- **AI Integration**: Groq Cloud API (Llama-3-8b-8192)
- **State Management**: React Hooks

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A [Groq API Key](https://console.groq.com/keys)

### Installation
If you haven't already, install the necessary dependencies:
```bash
npm install
```

### Configuration
1. Obtain your Groq API key.
2. The current prototype has the API key configured in `src/components/ChatInterface.jsx` for demonstration. *(Note: For production, move this to a `.env` file.)*

### Running the Application
Start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` to start communicating with the past!

## 🎯 Educational Impact
EduVerse addresses the "engagement gap" in modern EdTech. By replacing sterile textbook reading with interactive and strictly constrained historical personas, students are significantly more likely to retain information, ask meaningful questions, and develop a genuine curiosity for complex STEM and historical subjects.
