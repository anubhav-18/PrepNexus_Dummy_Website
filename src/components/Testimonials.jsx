import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Testimonials = () => {
  const gridRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animate stars: scale up each star in sequence when testimonial card enters view
    const cards = gridRef.current.querySelectorAll('.testimonial-card');
    cards.forEach((card, idx) => {
      const stars = card.querySelectorAll('.rating span');
      gsap.fromTo(stars, {
        scale: 0.5,
        opacity: 0.3
      }, {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true
        }
      });

      // Animate numbers in testimonial text and student details
      // 1st card: 40% in text, 245 in Rank
      if (idx === 0) {
        const percent = card.querySelector('.testimonial-text .count-percent');
        if (percent) {
          gsap.fromTo(percent, { innerText: 0 }, {
            innerText: 40,
            duration: 1.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true
            },
            snap: { innerText: 1 },
            onUpdate: function () {
              percent.innerText = Math.floor(percent.innerText) + "%";
            }
          });
        }
        const rank = card.querySelector('.student-details .count-rank');
        if (rank) {
          gsap.fromTo(rank, { innerText: 0 }, {
            innerText: 245,
            duration: 1.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true
            },
            snap: { innerText: 1 },
            onUpdate: function () {
              rank.innerText = "Rank " + Math.floor(rank.innerText);
            }
          });
        }
      }
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">💬 Success Stories</div>
          <h2>What Our Early Users Say</h2>
          <p>Join thousands who transformed their preparation with AI-powered learning</p>
        </div>
        <div className="testimonials-grid" ref={gridRef}>
          <div className="testimonial-card">
            <div className="quote-icon">💭</div>
            <div className="rating">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
            </div>
            <p className="testimonial-text">"PrepNexus felt like having a personal teacher who actually knows me."</p>
            <div className="student-info">
              <div className="student-avatar">A</div>
              <div className="student-details">
                <strong>Aryan Sharma</strong>
                <small>Early Beta User</small>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">💭</div>
            <div className="rating">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
            </div>
            <p className="testimonial-text">"The AI mock tests were different every time — it kept me motivated."</p>
            <div className="student-info">
              <div className="student-avatar">P</div>
              <div className="student-details">
                <strong>Priya Patel</strong>
                <small>Early Beta User</small>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">💭</div>
            <div className="rating">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
            </div>
            <p className="testimonial-text">"I finally stopped wasting time on topics I already knew."</p>
            <div className="student-info">
              <div className="student-avatar">S</div>
              <div className="student-details">
                <strong>Student Name</strong>
                <small>Siddhi Sharma</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
