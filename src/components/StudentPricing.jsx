import React, { useState } from 'react';
import { FaCheck, FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentPricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    monthly: {
      basic: { price: 299, originalPrice: 599, savings: '50%' },
      pro: { price: 499, originalPrice: 999, savings: '50%' },
      premium: { price: 799, originalPrice: 1499, savings: '47%' }
    },
    annual: {
      basic: { price: 1499, originalPrice: 3594, savings: '58%' },
      pro: { price: 2499, originalPrice: 5994, savings: '58%' },
      premium: { price: 3999, originalPrice: 8994, savings: '56%' }
    }
  };

  const features = {
    basic: [
      'AI Doubt Solver (50 questions/day)',
      '10 Mock Tests per month',
      'Basic Analytics',
      'Study Planner',
      '24/7 AI Tutor Access'
    ],
    pro: [
      'AI Doubt Solver (Unlimited)',
      'Unlimited Mock Tests',
      'Advanced Analytics & Insights',
      'Personalized Study Planner',
      'Priority Support',
      'Performance Tracking',
      'Subject-wise Analysis'
    ],
    premium: [
      'Everything in Pro',
      '1-on-1 Expert Sessions',
      'Custom Study Plans',
      'Advanced AI Features',
      'Exam Strategy Coaching',
      'Progress Reports',
      'Priority Feature Access'
    ]
  };

  return (
    <section className="student-pricing" style={{
      padding: '80px 0',
      background: 'transparent',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            💰 Student Pricing
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #1e293b, #334155)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px'
          }}>
            Choose Your Perfect Plan
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Start your AI-powered learning journey with plans designed for every student
          </p>
        </div>

        {/* Billing Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            padding: '4px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            {['monthly', 'annual'].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                style={{
                  background: billingCycle === cycle ? '#3b82f6' : 'transparent',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: billingCycle === cycle ? 'white' : '#475569',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
              >
                {cycle === 'monthly' ? 'Monthly' : 'Annual'} 
                {cycle === 'annual' && (
                  <span style={{ 
                    background: 'linear-gradient(135deg, #10b981, #059669)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent', 
                    backgroundClip: 'text', 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    marginLeft: '4px' 
                  }}>
                    Save 58%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {['basic', 'pro', 'premium'].map((planKey, index) => {
            const plan = plans[billingCycle][planKey];
            const isPopular = planKey === 'pro';
            
            return (
              <div key={index} style={{
                background: isPopular ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(25px)',
                border: isPopular ? '2px solid #3b82f6' : '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transform: isPopular ? 'scale(1.05)' : 'none'
              }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.transform = isPopular ? 'translateY(-8px) scale(1.07)' : 'translateY(-8px) scale(1.02)'; 
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.2)'; 
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.transform = isPopular ? 'scale(1.05)' : 'none'; 
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)'; 
                }}
              >
                {isPopular && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#1e293b',
                    marginBottom: '12px',
                    textTransform: 'capitalize'
                  }}>
                    {planKey}
                  </h3>
                  
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #1e293b, #334155)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      ₹{plan.price}
                    </span>
                    <span style={{
                      color: '#64748b',
                      fontSize: '1rem',
                      fontWeight: 500,
                      marginLeft: '4px'
                    }}>
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  
                  <div style={{
                    color: '#059669',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    marginBottom: '16px'
                  }}>
                    Save {plan.savings} off ₹{plan.originalPrice}
                  </div>
                </div>

                {/* Features */}
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: '0 0 24px 0', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px' 
                }}>
                  {features[planKey].map((feature, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#374151',
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }}>
                      <FaCheck style={{ 
                        color: '#059669', 
                        marginRight: '8px', 
                        fontSize: '0.8rem',
                        flexShrink: 0
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to="/pricing" style={{ textDecoration: 'none' }}>
                  <button style={{
                    width: '100%',
                    padding: '12px 20px',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    background: isPopular ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' : '#f1f5f9',
                    color: isPopular ? 'white' : '#374151',
                    border: isPopular ? 'none' : '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.transform = 'translateY(-2px)'; 
                      e.currentTarget.style.boxShadow = isPopular ? '0 10px 30px rgba(59, 130, 246, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.1)'; 
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.transform = 'none'; 
                      e.currentTarget.style.boxShadow = isPopular ? '0 8px 24px rgba(59, 130, 246, 0.3)' : 'none'; 
                    }}
                  >
                    Start Free Trial
                    <FaArrowRight style={{ fontSize: '0.8rem' }} />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

                                   {/* Bottom CTA */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <h3 style={{
                color: '#1e293b',
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '12px'
              }}>
                Ready to Transform Your Learning?
              </h3>
              <p style={{
                color: '#475569',
                fontSize: '1rem',
                marginBottom: '20px'
              }}>
                Join thousands of students already using PrepNexus to ace their exams
              </p>
              <Link to="/pricing" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '14px 28px',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.transform = 'translateY(-2px)'; 
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)'; 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.transform = 'none'; 
                    e.currentTarget.style.boxShadow = 'none'; 
                  }}
                >
                  Explore More Plans
                  <FaArrowRight style={{ fontSize: '0.8rem' }} />
                </button>
              </Link>
            </div>
            <div style={{ 
              textAlign: 'center', 
              marginTop: '24px',
              fontSize: '0.9rem',
              color: '#3b82f6'
            }}>
              <Link to="/pricing" style={{ 
                color: '#3b82f6', 
                textDecoration: 'underline',
                fontWeight: 500
              }}>
                For Schools/Institutions → Learn More
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
};

export default StudentPricing;
