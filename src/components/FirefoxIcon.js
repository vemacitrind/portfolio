import React from 'react'

const FirefoxIcon = ({ onClick }) => (
  <div className="terminal-icon firefox-icon" onClick={onClick}>
    <div className="firefox-icon-box">
      <img src="/assets/firefox.png" alt="Firefox" />
    </div>
    <span className="icon-label">Firefox</span>
  </div>
)

export default FirefoxIcon
