import React, { useState, useEffect, useRef } from 'react'
import { Rnd } from 'react-rnd'
import './TerminalWindow.css'

const TerminalWindow = ({ onClose }) => {
  const neofetchOutput = [
    <pre style={{ fontFamily: 'monospace', fontSize: '15px' }}>
      <span style={{ color: '#00BCD4' }}>{`
          .
         / \\
        /   \\      `}</span>
      <span style={{ color: '#ffffff' }}>  vemacitrind  </span>
      <span style={{ color: '#00FFFF' }}>|  master@archlinux </span>
      <br />
      <span style={{ color: '#00BCD4' }}>       /^.   \\     </span>
      <span style={{ color: '#ffffff' }}> -----------------------------  </span>
      <br />
      <span style={{ color: '#00BCD4' }}>      /  .-.  \\    </span>
      <span style={{ color: '#ffffff' }}><span style={{ color: "#00BCD4" }}> Name :</span>  Joshi Vedant</span>
      <br />
      <span style={{ color: '#00BCD4' }}>     /  (   ) _\\   </span>
      <span style={{ color: '#ffffff' }}><span style={{ color: "#00BCD4" }}> Email :</span>  jvedant.711@gmail.com</span>
      <br />
      <span style={{ color: '#00FFFF' }}>    / _.~   ~._^\\</span>
      <span style={{ color: '#ffffff' }}><span style={{ color: "#00BCD4" }}>   GitHub :</span>  vemacitrind</span>
      <br />
      <span style={{ color: '#00FFFF' }}>   /.^         ^.\\</span>
      <span style={{ color: '#ffffff' }}><span style={{ color: "#00BCD4" }}>  Location :</span>  India / Remote</span>
    </pre>
  ]

  const terminalRef = useRef(null)

  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  useEffect(() => {
    setOutput([neofetchOutput])
  }, [])

  const handleCommand = () => {
    const command = input.trim()
    const parts = command.split(' ')
    const mainCmd = parts[0]
    const args = parts.slice(1).join(' ')
    let response = ''

    switch (mainCmd) {
      case 'about':
        response = `Hi, I am Joshi Vedant, a Computer Engineering student passionate about backend, frontend, and full-stack web development. I enjoy creating clean and functional applications with Arch Linux vibes 🌱.`
        break

      case 'education':
        response = `LJ Institute of Engineering and Technology, Gujarat, India\nBachelor's in Computer Engineering (2023 - 2027)\nCurrent CGPA: 8.00`
        break

      case 'skills':
        response = `Languages: Java, Python, JavaScript, HTML, CSS\nFrameworks: Flask, Matplotlib, Pandas, NumPy, Bootstrap, Tailwind CSS\nDatabases: PostgreSQL, MySQL\nTools: Git, JDBC`
        break

      case 'projects':
        response = `1. Web Hosting Website\n   A modern responsive web hosting landing page with pricing and contact form.\n\n2. ContactHub\n   A contact management app using Streamlit and MySQL with full CRUD features.\n\n3. Burger Farm\n   A burger-ordering app with cart, billing, and delivery tracking.`
        break

      case 'certifications':
        response = `✔ Problem Solving Certificate - HackerRank\n✔ SQL Certificate - HackerRank`
        break

      case 'links':
        response = `GitHub:       https://github.com/vemacitrind\nLinkedIn:     https://www.linkedin.com/in/vedant-joshi-og\nHackerRank:   https://www.hackerrank.com/profile/jvedant_711`
        break

      case 'contact':
        response = `Email: jvedant.711@gmail.com\nPhone: +91 7043792153`
        break

      case 'echo':
        response = args || ''
        break

      case 'neofetch':
        setOutput((prev) => [...prev, <span><span style={{ color: '#00BCD4' }}>user@portfolio$</span> {input}</span>, neofetchOutput])
        setInput('')
        return

      case 'clear':
        setOutput([])
        setInput('')
        return

      case 'exit':
        response = 'Closing terminal...'
        setOutput((prev) => [...prev, <span><span style={{ color: '#00BCD4' }}>user@portfolio$</span> {input}</span>, response])
        onClose()
        return

      case 'help':
        response = `Available commands:\nabout         - Who am I\neducation     - Academic background\nskills        - Technical skills\nprojects      - Major personal projects\ncertifications- Completed certifications\nlinks         - GitHub, LinkedIn, etc.\ncontact       - Email and phone\necho          - Repeat message\nneofetch      - Show logo & info\nclear         - Clear the terminal\nexit          - Close the terminal`
        break

      default:
        response = `'${command}' is not recognized. Type 'help' to list available commands.`
    }

    setOutput((prev) => [
      ...prev,
      <span><span style={{ color: '#00BCD4' }}>user@portfolio$</span> {input}</span>,
      response
    ])

    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCommand()
  }

  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 600,
        height: 360,
      }}
      minWidth={300}
      minHeight={200}
      bounds="parent"
      className="terminal-window"
      dragHandleClassName="terminal-header"
    >
      <div className="terminal-header">
        <div className="window-buttons">
          <div className="btn red" onClick={onClose}></div>
          <div className="btn yellow"></div>
          <div className="btn green"></div>
        </div>
        <span>Terminal</span>
      </div>

      <div className="terminal-output">
        {output.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">{line}</div>
        ))}
        <div className="terminal-input">
          <span><span style={{ color: "#00BCD4" }}>user@portfolio:~$</span>&nbsp;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </Rnd>
  )
}

export default TerminalWindow
