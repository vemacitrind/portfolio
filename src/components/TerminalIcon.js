import React from 'react'

const TerminalIcon = ({ onClick }) => (
  <div className="terminal-icon" onClick={onClick}>
    <div className="terminal-icon-box">
      <img src='/assets/kitty.png' alt="Terminal"/>
    </div>
    <span className="icon-label">kitty</span>
  </div>
)

export default TerminalIcon
