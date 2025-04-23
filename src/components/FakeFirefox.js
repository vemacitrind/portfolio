import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const BrowserWindow = () => {
  const [tabs, setTabs] = useState([
    { id: 'github', title: 'GitHub', url: 'github.com/vemacitrind', content: <GitHubProfile /> },
    { id: 'linkedin', title: 'LinkedIn', url: 'linkedin.com/in/vedant-joshi-og', content: <LinkedInProfile /> },
    { id: 'portfolio', title: 'Portfolio', url: 'joshivedant.dev', content: <PortfolioSite /> }
  ]);

  const [activeTabId, setActiveTabId] = useState('github');

  const handleTabClick = (id) => setActiveTabId(id);

  const closeTab = (id, e) => {
    e.stopPropagation();
    const newTabs = tabs.filter(tab => tab.id !== id);
    setTabs(newTabs);
    if (activeTabId === id && newTabs.length > 0) setActiveTabId(newTabs[0].id);
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <Rnd
      default={{ x: 100, y: 100, width: 800, height: 600 }}
      minWidth={400}
      minHeight={300}
      bounds="window"
      style={{ borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', overflow: 'hidden', background: '#f1f1f1' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ background: '#2a2a2a', padding: '10px' }}>
          <div style={{ display: 'flex', marginBottom: '6px' }}>
            {tabs.map(tab => (
              <div
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                style={{
                  backgroundColor: activeTabId === tab.id ? '#1c1b1b' : '#424141',
                  color: '#fff',
                  padding: '5px 10px',
                  marginRight: '6px',
                  borderTopLeftRadius: '6px',
                  borderTopRightRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>{tab.title}</span>
                <button
                  onClick={(e) => closeTab(tab.id, e)}
                  style={{ marginLeft: '8px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button>{'<'}</button>
            <button>{'>'}</button>
            <button>⟳</button>
            <div style={{ flex: 1, padding: '4px 8px', backgroundColor: '#1c1b1b', color: '#fff', borderRadius: '4px' }}>{activeTab?.url}</div>
          </div>
        </div>
        <div style={{ flex: 1, overflow: 'auto', background: '#fff' }}>
          {activeTab?.content}
        </div>
      </div>
    </Rnd>
  );
};

const GitHubProfile = () => (
  <div style={{ padding: "16px", backgroundColor: "#0d1117", color: "#c9d1d9", minHeight: "100vh" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
      <div style={{
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        backgroundColor: "#21262d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}>
        <img src='/assets/about me.png' alt='logo' style={{ height: "70%", objectFit: "contain" }} />
      </div>

      <div>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", margin: "0", color: "#f0f6fc" }}>Joshi Vedant</h2>
        <p style={{ color: "#8b949e", margin: "0" }}>@vemacitrind</p>
      </div>
    </div>

    <div style={{ marginBottom: "24px" }}>
      <p style={{ marginBottom: "8px" }}>Full-stack developer passionate about open-source and Linux.</p>
      <div style={{ display: "flex", gap: "8px", fontSize: "14px" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#8b949e" }}></span>
          jvedant.711@gmail.com
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#58a6ff" }}></span>
          joshivedant.dev
        </span>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "24px" }}>
      {["Repositories", "Followers", "Following"].map((title, idx) => (
        <div key={idx} style={{ border: "1px solid #30363d", borderRadius: "6px", padding: "12px", backgroundColor: "#161b22" }}>
          <h3 style={{ fontWeight: "bold", margin: "0 0 8px 0", color: "#f0f6fc" }}>{title}</h3>
          <p style={{ fontSize: "24px", margin: "0" }}>{[18, 50, 42][idx]}</p>
        </div>
      ))}
    </div>

    <div>
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", color: "#f0f6fc" }}>Popular Repositories</h3>
      <div style={{ display: "grid", gap: "16px" }}>
        {[
          { name: "portfolio", desc: "Arch Linux themed portfolio website", lang: "JavaScript", stars: 42 },
          { name: "contacthub-streamlit-python", desc: "User-friendly contact management system built with Streamlit and MySQL.", lang: "Python", stars: 28 },
          { name: "web-hosting-site", desc: "Web hosting site.", lang: "HTML", stars: 15 },
        ].map((repo, i) => (
          <div key={i} style={{ border: "1px solid #30363d", borderRadius: "6px", padding: "12px", backgroundColor: "#161b22" }}>
            <h4 style={{ fontWeight: "bold", color: "#58a6ff", margin: "0 0 4px 0" }}>{repo.name}</h4>
            <p style={{ color: "#8b949e", fontSize: "14px", marginBottom: "8px" }}>{repo.desc}</p>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor:
                    repo.lang === "Python" ? "#3572A5" :
                      repo.lang === "HTML" ? "#e34c26" :
                        repo.lang === "JavaScript" ? "#f1e05a" : "#8b949e"
                }}></span>
                {repo.lang}
              </span>
              <span>⭐ {repo.stars}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


const LinkedInProfile = () => (
  <div style={{ backgroundColor: "#f3f2ef", minHeight: "100%" }}>
    <div style={{ backgroundColor: "white", borderBottom: "1px solid #e0e0e0", marginBottom: "16px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "96px", height: "96px", borderRadius: "50%", backgroundColor: "#e0e0e0", border: "4px solid white" }}></div>
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}>Developer Name</h2>
            <p style={{ color: "#666666", margin: "4px 0" }}>Full-Stack Developer | Open Source Contributor | Linux Enthusiast</p>
            <p style={{ color: "#999999", fontSize: "14px" }}>Greater Seattle Area • 500+ connections</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ backgroundColor: "white", borderRadius: "8px", border: "1px solid #e0e0e0", marginBottom: "16px", padding: "16px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>About</h3>
        <p style={{ color: "#666666" }}>
          Passionate developer with 5+ years of experience building web applications and systems. Specializing in
          React, Node.js, and cloud architecture. Open-source contributor and Linux enthusiast.
        </p>
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "8px", border: "1px solid #e0e0e0", marginBottom: "16px", padding: "16px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>Experience</h3>

        <div style={{ marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #e0e0e0" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ width: "48px", height: "48px", backgroundColor: "#e0e0e0", borderRadius: "4px" }}></div>
            <div>
              <h4 style={{ fontWeight: "bold", margin: "0" }}>Senior Developer</h4>
              <p style={{ color: "#666666", margin: "4px 0" }}>Tech Company Inc.</p>
              <p style={{ color: "#999999", fontSize: "14px" }}>Jan 2021 - Present • 2 yrs 4 mos</p>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ width: "48px", height: "48px", backgroundColor: "#e0e0e0", borderRadius: "4px" }}></div>
            <div>
              <h4 style={{ fontWeight: "bold", margin: "0" }}>Full Stack Developer</h4>
              <p style={{ color: "#666666", margin: "4px 0" }}>Dev Solutions LLC</p>
              <p style={{ color: "#999999", fontSize: "14px" }}>Mar 2018 - Dec 2020 • 2 yrs 10 mos</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "8px", border: "1px solid #e0e0e0", marginBottom: "16px", padding: "16px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>Education</h3>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ width: "48px", height: "48px", backgroundColor: "#e0e0e0", borderRadius: "4px" }}></div>
          <div>
            <h4 style={{ fontWeight: "bold", margin: "0" }}>University of Technology</h4>
            <p style={{ color: "#666666", margin: "4px 0" }}>Bachelor of Science in Computer Science</p>
            <p style={{ color: "#999999", fontSize: "14px" }}>2014 - 2018</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
  ;

const PortfolioSite = () => (
  <div style={{ minHeight: "100%", backgroundColor: "#f5f5f5" }}>
    <div style={{ backgroundColor: "black", color: "white", padding: "24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>Developer Name</h1>
        <p style={{ fontSize: "20px" }}>Building elegant solutions to complex problems</p>
      </div>
    </div>

    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginBottom: "32px" }}>
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>About Me</h2>
          <p style={{ marginBottom: "16px" }}>
            I'm a full-stack developer with a passion for creating intuitive and performant web applications. With
            expertise in modern JavaScript frameworks, server-side technologies, and Linux systems, I build solutions
            that are both powerful and user-friendly.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects, exploring new technologies, or
            tinkering with my Arch Linux setup.
          </p>
        </div>
        <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Skills</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
            <div style={{ backgroundColor: "#f5f5f5", padding: "8px", borderRadius: "4px" }}>JavaScript/TypeScript</div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "8px", borderRadius: "4px" }}>React/Next.js</div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "8px", borderRadius: "4px" }}>Node.js</div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "8px", borderRadius: "4px" }}>Python</div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "8px", borderRadius: "4px" }}>Rust</div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "8px", borderRadius: "4px" }}>Linux/DevOps</div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "8px", borderRadius: "4px" }}>UI/UX Design</div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "8px", borderRadius: "4px" }}>Cloud Architecture</div>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Featured Projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
        {[
          { title: "Arch Portfolio", desc: "An Arch Linux themed portfolio website built with Next.js" },
          { title: "E-commerce Platform", desc: "Full-stack application with React and Node.js" },
          { title: "CLI Task Manager", desc: "Terminal-based productivity tool written in Rust" },
        ].map((project, i) => (
          <div key={i} style={{ backgroundColor: "white", padding: "16px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <div style={{ height: "160px", backgroundColor: "#e0e0e0", marginBottom: "12px", borderRadius: "4px" }}></div>
            <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>{project.title}</h3>
            <p style={{ color: "#666666", fontSize: "14px" }}>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)
  ;

export default BrowserWindow;
