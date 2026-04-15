import { useState } from 'react'
import './index.css'
import PersonaSelector from './components/PersonaSelector'
import ChatInterface from './components/ChatInterface'

function App() {
  const [selectedPersona, setSelectedPersona] = useState(null)

  return (
    <div className="app-container">
      <div className="cosmic-glow glow-1"></div>
      <div className="cosmic-glow glow-2"></div>

      <header className="app-header animate-in">
        <h1 className="title">
          Welcome to <span className="text-gradient">EduVerse</span>
        </h1>
        <p className="subtitle">
          Explore history and science through conversation. Choose a chronological tutor and begin your journey.
        </p>
      </header>

      <main className="main-content animate-in">
        {!selectedPersona ? (
          <PersonaSelector onSelect={setSelectedPersona} />
        ) : (
          <ChatInterface persona={selectedPersona} onBack={() => setSelectedPersona(null)} />
        )}
      </main>
    </div>
  )
}

export default App
