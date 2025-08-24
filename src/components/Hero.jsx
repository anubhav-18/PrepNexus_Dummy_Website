// removed duplicate React import

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Typing effect helper
function useTypingBubbles(messages, typingSpeed = 30, delayBetween = 500) {
  const [displayed, setDisplayed] = useState(Array(messages.length).fill(""));
  const [current, setCurrent] = useState(0);
  const isMounted = React.useRef(true);
  const charIdxRef = React.useRef(0);
  useEffect(() => {
    isMounted.current = true;
    setDisplayed(Array(messages.length).fill(""));
    setCurrent(0);
    function typeMessage(msgIdx) {
      if (!isMounted.current || msgIdx >= messages.length) return;
      charIdxRef.current = 0;
      function typeChar() {
        if (!isMounted.current) return;
        setDisplayed((prev) => {
          const arr = [...prev];
          arr[msgIdx] = messages[msgIdx].slice(0, charIdxRef.current + 1);
          return arr;
        });
        if (charIdxRef.current < messages[msgIdx].length - 1) {
          charIdxRef.current++;
          setTimeout(typeChar, typingSpeed);
        } else {
          setTimeout(() => {
            setCurrent((c) => c + 1);
            typeMessage(msgIdx + 1);
          }, delayBetween);
        }
      }
      typeChar();
    }
    setTimeout(() => typeMessage(0), 400);
    return () => { isMounted.current = false; };
    // eslint-disable-next-line
  }, [messages, typingSpeed, delayBetween]);
  return { displayed, current };
}
// ...existing code...

const Hero = ({ onShowAuth }) => {
  const heroRef = useRef();
  const textRef = useRef();
  const buttonsRef = useRef();
  const statsRef = useRef();

  useEffect(() => {
    // Animate progress bars on mount
    const fills = document.querySelectorAll(".mock-progress .progress-fill");
    fills.forEach((el) => {
      const width = el.getAttribute("data-width") || el.style.width || "0%";
      el.style.width = "0%";
      setTimeout(() => {
        el.style.transition = "width 2s cubic-bezier(0.4,0,0.2,1)";
        el.style.width = width.endsWith("%") ? width : width + "%";
      }, 100);
    });

    // GSAP entrance animations
    const tl = gsap.timeline();
    tl.from(textRef.current, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" })
      .from(buttonsRef.current, { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from(statsRef.current, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
    gsap.registerPlugin(ScrollTrigger);

    // Animate numbers on scroll into view
    const statNumbers = statsRef.current.querySelectorAll('.number');
    const endValues = [50000, 95, 24];
    const suffixes = ["", "%", "/7"];
    statNumbers.forEach((el, i) => {
      gsap.fromTo(el, { innerText: 0 }, {
        innerText: endValues[i],
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          once: true
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          if (i === 0) {
            el.innerText = Math.floor(el.innerText).toLocaleString();
          } else if (i === 1) {
            el.innerText = Math.floor(el.innerText) + "%";
          } else {
            el.innerText = Math.floor(el.innerText) + "/7";
          }
        }
      });
    });
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="container hero-content">
        <div className="hero-text" ref={textRef}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>AI-Powered Education</span>
          </div>
          <h1>
            Personalized learning <br />
            <span className="highlight">powered by AI</span>
          </h1>
          <p className="ai-desc">
            Get real-time monitoring, adaptive test series, and AI-guided study plans tailored to your strengths and weaknesses. Transform your JEE/NEET preparation with cutting-edge AI technology.
          </p>
          <div className="hero-buttons" ref={buttonsRef}>
            <a href="#download" className="btn btn-primary">
              <span>Get Started</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#demo" className="btn btn-outline">
              <span>Watch Demo</span>
              <i className="fas fa-play"></i>
            </a>
            <button onClick={onShowAuth} className="btn btn-secondary">
              <span>Login / Sign Up</span>
              <i className="fas fa-user"></i>
            </button>
          </div>
          <div className="hero-stats" ref={statsRef}>
            <div className="stat-item">
              <span className="number">50,000</span>
              <span className="label">Students</span>
            </div>
            <div className="stat-item">
              <span className="number">95%</span>
              <span className="label">Success Rate</span>
            </div>
            <div className="stat-item">
              <span className="number">24/7</span>
              <span className="label">AI Support</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="ai-buddy-card" style={{position: 'relative', overflow: 'visible'}}>
            {/* Animated SVG AI Circuit/Neural Network Background */}
            <svg className="ai-circuit-bg" width="260" height="180" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', zIndex: 0, pointerEvents: 'none', opacity: 0.22}}>
              <g>
                <circle cx="130" cy="90" r="70" stroke="#ffd60a" strokeWidth="2" fill="none"/>
                <circle cx="130" cy="90" r="40" stroke="#00b4d8" strokeWidth="1.5" fill="none"/>
                <circle cx="130" cy="90" r="20" stroke="#48cae4" strokeWidth="1" fill="none"/>
                <g className="ai-circuit-lines">
                  <line x1="130" y1="20" x2="130" y2="40" stroke="#ffd60a" strokeWidth="2"/>
                  <line x1="130" y1="140" x2="130" y2="160" stroke="#00b4d8" strokeWidth="2"/>
                  <line x1="60" y1="90" x2="90" y2="90" stroke="#48cae4" strokeWidth="2"/>
                  <line x1="170" y1="90" x2="200" y2="90" stroke="#ffd60a" strokeWidth="2"/>
                  <line x1="90" y1="50" x2="110" y2="70" stroke="#00b4d8" strokeWidth="1.5"/>
                  <line x1="170" y1="50" x2="150" y2="70" stroke="#48cae4" strokeWidth="1.5"/>
                  <line x1="90" y1="130" x2="110" y2="110" stroke="#ffd60a" strokeWidth="1.5"/>
                  <line x1="170" y1="130" x2="150" y2="110" stroke="#00b4d8" strokeWidth="1.5"/>
                </g>
                <g className="ai-circuit-nodes">
                  <circle cx="130" cy="20" r="4" fill="#ffd60a"/>
                  <circle cx="130" cy="160" r="3" fill="#00b4d8"/>
                  <circle cx="60" cy="90" r="3" fill="#48cae4"/>
                  <circle cx="200" cy="90" r="3" fill="#ffd60a"/>
                  <circle cx="90" cy="50" r="2.5" fill="#00b4d8"/>
                  <circle cx="170" cy="50" r="2.5" fill="#48cae4"/>
                  <circle cx="90" cy="130" r="2.5" fill="#ffd60a"/>
                  <circle cx="170" cy="130" r="2.5" fill="#00b4d8"/>
                </g>
              </g>
            </svg>
            <div className="ai-buddy-glow" style={{zIndex: 1}}></div>
            <div className="ai-buddy-robot" style={{zIndex: 2}}>
              <span className="ai-buddy-face" role="img" aria-label="robot">🤖</span>
              <span className="ai-buddy-hand" role="img" aria-label="wave">👋</span>
            </div>
            {/* Particle Glow Effects */}
            <div className="particle" style={{zIndex: 2}}></div>
            <div className="particle" style={{zIndex: 2}}></div>
            <div className="particle" style={{zIndex: 2}}></div>
            <div className="particle" style={{zIndex: 2}}></div>
            <div className="particle" style={{zIndex: 2}}></div>
            <div className="sparkle" style={{zIndex: 2}}></div>
            <div className="sparkle" style={{zIndex: 2}}></div>
            <div className="sparkle" style={{zIndex: 2}}></div>
            <BubblesTyping />
          </div>
        </div>
      </div>
    </section>
  );

};

export default Hero;


// Move messages array outside the component to avoid re-creating it on every render
const aiBuddyMessages = [
  "Hi! I'm your AI Study Buddy!",
  "Ask me anything about JEE/NEET 📚",
  "Let's ace your exams together! 🚀"
];


const buddyResponses = [
  "Great question! Keep going! 💡",
  "You're doing awesome! 🚀",
  "That's a smart one! 😎",
  "Let me think... 🤔",
  "Practice makes perfect! Keep it up!",
  "Wow, you're curious! I love it!",
  "Stay positive and keep learning! 🌟",
  "You got this! Ask me anything!"
];

function BubblesTyping() {
  const { displayed, current } = useTypingBubbles(aiBuddyMessages, 28, 600);
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState([]); // {from: 'user'|'buddy', text: string}
  const [buddyTyping, setBuddyTyping] = useState(false);
  const inputRef = useRef();

  // Debug: force visible text and border
  const debugStyle = {
    color: '#222',
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid #eee',
    borderRadius: '16px',
    padding: '6px 16px',
    margin: '8px 0',
    fontSize: '1rem',
    minHeight: '28px',
    display: 'inline-block',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  };

function handleSend(e) {
    e.preventDefault();
    const question = userInput.trim();
    console.log("User input:", question); // Debugging statement
    if (!question) return;
    setChat((prev) => [...prev, { from: 'user', text: question }]);
    setUserInput("");
    setBuddyTyping(true);
    setTimeout(() => {
      const resp = buddyResponses[Math.floor(Math.random() * buddyResponses.length)];
      setChat((prev) => [...prev, { from: 'buddy', text: resp }]);
      setBuddyTyping(false);
    }, 900 + Math.random() * 800);
    inputRef.current && inputRef.current.focus();
  }

  return (
    <>
      <div className="ai-buddy-bubbles" style={{minHeight: '100px', padding: '8px 0'}}>
        {aiBuddyMessages.map((msg, i) => (
          <div className={`ai-bubble ai-bubble-${i+1}`} key={i} style={debugStyle}>
            {displayed[i] || ''}
            {current === i && displayed[i].length < msg.length ? (
              <span className="typing-cursor" style={{color: '#222'}}>|</span>
            ) : null}
          </div>
        ))}
        {/* Fallback: show something if nothing is visible */}
        {displayed.every((d) => !d) && <div style={{color: 'red'}}>No message is being typed</div>}
        {/* User and buddy chat bubbles */}
        {chat.map((msg, i) => (
          <div
            key={i}
            style={{
              ...debugStyle,
              alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
              background: msg.from === 'user' ? 'rgba(0,180,255,0.12)' : debugStyle.background,
              color: msg.from === 'user' ? '#0077b6' : debugStyle.color,
              border: msg.from === 'user' ? '1px solid #bde0fe' : debugStyle.border
            }}
          >
            {msg.text}
          </div>
        ))}
        {buddyTyping && (
          <div style={{...debugStyle, fontStyle: 'italic', color: '#888'}}>Buddy is typing...</div>
        )}
      </div>
      <form onSubmit={handleSend} style={{display: 'flex', gap: 8, marginTop: 8, zIndex: 3}}>
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Ask your AI Buddy..."
          style={{flex: 1, borderRadius: 16, border: '1px solid #eee', padding: '8px 12px', fontSize: '1rem'}}
        />
        <button type="submit" style={{borderRadius: 16, padding: '8px 18px', background: '#ffd60a', border: 'none', fontWeight: 600, color: '#222', cursor: 'pointer'}}>Send</button>
      </form>
    </>
  );
}

// ...existing code...
