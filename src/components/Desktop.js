import React, { useState } from 'react'
import TerminalIcon from './TerminalIcon'
import TerminalWindow from './TerminalWindow'
import FirefoxIcon from './FirefoxIcon'
import FakeFirefox from './FakeFirefox'
import ResumeIcon from './ResumeIcon'

const Desktop = () => {
  const [isTerminalOpen, setTerminalOpen] = useState(false)
  const [isFirefoxOpen, setIsFirefoxOpen] = useState(false)

  return (
    <div className="desktop">
      <TerminalIcon onClick={() => setTerminalOpen(true)} />
      <ResumeIcon />
      <FirefoxIcon onClick={() => setIsFirefoxOpen(true)} />
      {isFirefoxOpen && <FakeFirefox onClose={() => setIsFirefoxOpen(false)} />}
      {isTerminalOpen && <TerminalWindow onClose={() => setTerminalOpen(false)} />}
    </div>

  )
}

export default Desktop
