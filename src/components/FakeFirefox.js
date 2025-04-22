import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import './FakeFirefox.css'

const tabs = [
  { label: 'GitHub', url: 'https://github.com/vemacitrind' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vedant-joshi-og/' },
  { label: 'About Me', custom: true }
]

const FakeFirefox = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <Rnd
      default={{ x: 120, y: 120, width: 800, height: 500 }}
      minWidth={400}
      minHeight={300}
      bounds="parent"
      dragHandleClassName="firefox-header"
      className="firefox-inner"
    >
      <div className="firefox-inner">
        <div className="window-buttons">
          <span className="btn red" onClick={onClose}></span>
          <span className="btn yellow"></span>
          <span className="btn green"></span>
        </div>

        <div className="firefox-header">
          <div className="tabs">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className={`tab ${activeTab.label === tab.label ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <img src={`/assets/${tab.label.toLowerCase()}.png`} alt="icon" />
                <span>{tab.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="browser-bar">
          <img src={`/assets/${activeTab.label.toLowerCase()}.png`} alt="icon" />
          <input type="text" value={activeTab.custom ? 'about:me' : activeTab.url} readOnly />
        </div>

        <div className="browser-content">
          {activeTab.custom ? (
            <div className="about-content">
              <h1>Hi, I'm Vedant 👋</h1>
              <p>I vibe with Arch Linux and build dope full-stack apps.</p>
              <p>Tools I love: React, Flask, Tailwind, PostgreSQL, Git, and more.</p>
            </div>
          ) : (
            <div className="external-preview">
              <img
                src={`/assets/${activeTab.label.toLowerCase()}-preview.png`}
                alt={activeTab.label}
              />
              <a href={activeTab.url} target="_blank" rel="noopener noreferrer">
                🔗 Open {activeTab.label}
              </a>
            </div>
          )}
        </div>
      </div>
    </Rnd>
  )
}

export default FakeFirefox
