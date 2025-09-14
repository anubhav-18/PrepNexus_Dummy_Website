import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaUsers, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activeTab, setActiveTab] = useState('students');

  const studentPlans = {
    monthly: {
      student: { price: 99, originalPrice: 199 }
    },
    annual: {
      student: { price: 1000, originalPrice: 1188 }
    }
  };

  const institutionPlan = { price: 1500, period: 'per student annually' };

  const features = {
    monthly: [
      'Unlimited AI-Personalized Mock Tests',
      'Unlimited AI-Powered Doubt Solving (personalized)',
      'Smart Insights with 25+ Performance Metrics',
      'Weekly & Monthly Progress Reports',
      'Early Access to New Beta Features'
    ],
    annual: [
      'Everything in Monthly',
      'Priority Access to Future Features',
      'Exclusive AI Study Companion Upgrades'
    ],
    institution: ['All Student Features', 'Admin Dashboard (track performance & insights)', 'Video/Live Streaming (4 hours/day included)', 'Extra usage: ₹1 per additional hour', 'White Labeling (brand it as your own)']
  };

  const comparisonData = [
    { feature: 'AI-Powered Learning', traditional: '❌ Static content only', prepnexus: '✅ AI adapts to your learning style', icon: '🤖' },
    { feature: 'Mock Tests', traditional: '❌ Fixed test series', prepnexus: '✅ Personalized mock tests', icon: '📝' },
    { feature: 'Performance Analytics', traditional: '❌ Basic score reports', prepnexus: '✅ Detailed performance analytics', icon: '📊' },
    { feature: 'Doubt Solving', traditional: '❌ Limited to class hours', prepnexus: '✅ 24/7 AI chatbot support', icon: '💬' },
    { feature: 'Pricing', traditional: '💸 Expensive coaching fees', prepnexus: '💰 Affordable subscription plans', icon: '💲' },
    { feature: 'Accessibility', traditional: '🚫 Location & time bound', prepnexus: '🌍 Learn anytime, anywhere', icon: '⏰' }
  ];

  const faqs = [
    { 
      question: 'What is included in the Monthly plan?', 
      answer: 'The Monthly plan includes unlimited AI-personalized mock tests, unlimited AI-powered doubt solving, smart insights with 25+ performance metrics, weekly & monthly progress reports, and early access to new beta features.' 
    },
    { 
      question: 'What additional benefits do I get with the Annual plan?', 
      answer: 'The Annual plan includes everything in the Monthly plan plus priority access to future features and exclusive AI study companion upgrades. You also save 15% compared to monthly billing.' 
    },
    { 
      question: 'Is there a free trial available?', 
      answer: 'Yes, we offer a 7-day free trial for both plans. No credit card required to start your prep journey.' 
    },
    { 
      question: 'What payment methods do you accept?', 
      answer: 'We accept all major credit cards, debit cards, UPI, and net banking for seamless transactions.' 
    },
    { 
      question: 'Can I switch between Monthly and Annual plans?', 
      answer: 'Yes, you can switch between plans at any time. When upgrading to Annual, you\'ll get immediate access to additional features and the price difference will be prorated.' 
    },
    { 
      question: 'How does the institutional pricing work?', 
      answer: 'Our institutional plan is ₹1500 per student annually and includes all student features plus admin dashboard, video streaming (4h/day), white labeling, and performance analytics. Extra streaming usage is charged at ₹1 per additional hour.' 
    }
  ];

  return (
    <PageWrapper>
      <Navbar />
      
      <section style={{
        position: 'relative',
        zIndex: 2,
        padding: '40px 20px 80px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            margin: '20px 0 5px 0'
          }}>
            <div style={{
              position: 'relative',
              animation: 'logoFloat 5s ease-in-out infinite',
              display: 'inline-block'
            }}>
              <img 
                src="/images/ic_launcher_foreground.png" 
                alt="PrepNexus Logo" 
                style={{
                  height: '200px',
                  width: '200px',
                  objectFit: 'contain',
                  margin: '0 0 1px 0',
                  filter: 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.2)) grayscale(1) brightness(0) contrast(1.5)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '24px',
                  background: 'transparent',
                  backdropFilter: 'none',
                  padding: '12px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.08)';
                  e.target.style.filter = 'drop-shadow(0 12px 35px rgba(0, 0, 0, 0.3)) grayscale(1) brightness(0) contrast(1.5)';
                  e.target.parentElement.style.background = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.filter = 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.2)) grayscale(1) brightness(0) contrast(1.5)';
                  e.target.parentElement.style.background = 'transparent';
                }}
              />
            </div>
          </div>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #1e293b, #334155)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px'
          }}>
            Choose Your Learning Path
          </h2>
          <p style={{
            color: '#475569',
            fontSize: '1.25rem',
            fontWeight: 500,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Start your journey to success with our AI-powered learning platform
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '16px',
            padding: '6px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            {['students', 'institutions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? '#3b82f6' : 'transparent',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: activeTab === tab ? 'white' : '#475569',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {tab === 'students' ? <FaGraduationCap /> : <FaUsers />}
                {tab === 'students' ? 'For Students' : 'For Institutions'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'students' && (
          <>
            {/* Billing Toggle */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
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
                  </button>
                ))}
              </div>
            </div>

            {/* Student Pricing Cards */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '48px',
              maxWidth: '500px',
              margin: '0 auto 48px auto'
            }}>
              {[
                { name: billingCycle === 'monthly' ? 'Monthly Plan' : 'Annual Plan', plan: 'student', popular: false }
              ].map((card) => (
                <div
                  key={card.name}
                                     style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(59, 130, 246, 0.1)',
                    borderRadius: '20px',
                    padding: '32px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    minWidth: '400px',
                    width: '100%',
                    animation: 'floatCard 6s ease-in-out infinite',
                    animationDelay: card.popular ? '0s' : '2s',
                    ...(card.popular && {
                      border: '2px solid #3b82f6',
                      background: 'rgba(255, 255, 255, 0.95)',
                      transform: 'scale(1.02)'
                    })
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.98)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = card.popular ? 'scale(1.02)' : 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = card.popular ? '#3b82f6' : 'rgba(59, 130, 246, 0.1)';
                    e.currentTarget.style.background = card.popular ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)';
                  }}
                >
                  {card.popular && (
                    <div style={{
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '16px',
                      fontSize: '0.7rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                      fontWeight: 700,
                      position: 'absolute',
                      top: '-10px',
                    boxShadow: '0 4px 15px rgba(29, 78, 216, 0.3)',
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}>
                      Best Value
                    </div>
                  )}

                  <div style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    transition: 'all 0.3s ease',
                    padding: '0 10px'
                  }}>
                                         <h3 style={{
                       fontSize: '1.6rem',
                       fontWeight: 700,
                       color: '#1e293b',
                       marginBottom: '12px'
                     }}>
                       {card.name}
                     </h3>
                    <div style={{ marginBottom: '8px' }}>
                                             <span style={{
                         fontSize: '2.8rem',
                         fontWeight: 800,
                         background: 'linear-gradient(135deg, #1e293b, #334155)',
                         WebkitBackgroundClip: 'text',
                         WebkitTextFillColor: 'transparent',
                         backgroundClip: 'text'
                       }}>
                         ₹{studentPlans[billingCycle][card.plan].price}
                       </span>
                       <span style={{
                         color: '#64748b',
                         fontSize: '1.1rem',
                         fontWeight: 500,
                         marginLeft: '6px'
                       }}>
                         /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                       </span>
                    </div>
                                         <div style={{
                       color: '#059669',
                       fontWeight: 700,
                       fontSize: '0.95rem'
                     }}>
                       {/* Save {studentPlans[billingCycle][card.plan].savings} off ₹{studentPlans[billingCycle][card.plan].originalPrice} */}
                    </div>
                  </div>

                  <ul style={{
                    listStyle: 'none',
                    padding: '0 10px',
                    margin: '20px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    gap: '12px'
                  }}>
                    {features[billingCycle].map((feature, index) => (
                                             <li key={index} style={{
                         display: 'flex',
                         alignItems: 'center',
                         color: '#374151',
                         fontWeight: 500,
                         fontSize: '0.95rem',
                         lineHeight: '1.4'
                       }}>
                         <FaCheck style={{
                           color: '#059669',
                           marginRight: '10px',
                           fontSize: '0.9rem'
                         }} />
                         {feature}
                       </li>
                    ))}
                  </ul>

                                     <button style={{
                      width: '100%',
                      padding: '16px 24px',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      background: card.popular
                        ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                        : 'linear-gradient(135deg, #6366f1, #4f46e5)',
                      color: 'white',
                      border: 'none',
                      marginTop: '16px',
                      boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(79, 70, 229, 0.4)'
                      },
                      '&:active': {
                        transform: 'translateY(0)'
                      }
                    }}>
                     Start Your Prep Journey
                   </button>
                </div>
              ))}
            </div>
          </>
        )}

                 {activeTab === 'institutions' && (
           <div style={{ maxWidth: '800px', margin: '0 auto 48px auto' }}>
             <div style={{
               background: 'rgba(255, 255, 255, 0.95)',
               backdropFilter: 'blur(20px)',
               border: '2px solid #3b82f6',
               borderRadius: '24px',
               padding: '32px',
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
             }}>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                                 <h3 style={{
                   fontSize: '2rem',
                   fontWeight: 700,
                   color: '#1e293b',
                   marginBottom: '12px'
                 }}>
                   Empower Your Students with AI-first Learning
                 </h3>
                 <p style={{
                   fontSize: '1.1rem',
                   color: '#475569',
                   marginBottom: '16px'
                 }}>
                   All-in-one platform for schools to offer personalized prep
                 </p>
                <div style={{ marginBottom: '16px' }}>
                                     <span style={{
                     fontSize: '3rem',
                     fontWeight: 800,
                     background: 'linear-gradient(135deg, #1e293b, #334155)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text'
                   }}>
                     ₹{institutionPlan.price}
                   </span>
                   <span style={{
                     color: '#64748b',
                     fontSize: '1.1rem',
                     fontWeight: 500,
                     marginLeft: '8px'
                   }}>
                     {institutionPlan.period}
                   </span>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
                marginBottom: '24px'
              }}>
                                 <div>
                   <h4 style={{
                     fontSize: '1.1rem',
                     fontWeight: 600,
                     color: '#1e293b',
                     marginBottom: '16px'
                   }}>
                     What's Included:
                   </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                                         {features.institution.map((feature, index) => (
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
                           fontSize: '0.9rem'
                         }} />
                         {feature}
                       </li>
                     ))}
                  </ul>
                </div>
                                 <div>
                   <h4 style={{
                     fontSize: '1.1rem',
                     fontWeight: 600,
                     color: '#1e293b',
                     marginBottom: '16px'
                   }}>
                     Additional Usage:
                   </h4>
                   <div style={{
                     background: 'rgba(0, 0, 0, 0.05)',
                     borderRadius: '12px',
                     padding: '16px'
                   }}>
                     <p style={{ color: '#374151', marginBottom: '8px', fontSize: '0.9rem' }}>
                       <strong>Video/Live Streaming:</strong> 4 hours/day included
                     </p>
                     <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                       Extra usage: ₹1 per additional hour
                     </p>
                   </div>
                 </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button style={{
                  padding: '14px 28px',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease'
                }}>
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        )}

                 {/* Comparison Section */}
        <div style={{ 
          margin: '20px auto',
          padding: '15px 8px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(2, 132, 199, 0.02)',
          position: 'relative',
          overflow: 'hidden',
          maxWidth: '900px'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(2, 132, 199, 0) 70%)',
            top: '-100px',
            right: '-100px',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, rgba(14, 165, 233, 0) 70%)',
            bottom: '-150px',
            left: '-150px',
            borderRadius: '50%'
          }}></div>
          <div style={{
            maxWidth: '650px',
            margin: '0 auto 15px',
            textAlign: 'center',
            position: 'relative',
            zIndex: '2'
          }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#3b82f6',
              backgroundColor: '#dbeafe',
              padding: '2px 8px',
              borderRadius: '8px',
              marginBottom: '6px',
              letterSpacing: '0.2px'
            }}>
              THE SMART CHOICE
            </span>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 800,
              margin: '0 0 8px',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2'
            }}>
              PrepNexus vs Traditional Test Series
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: '#4b5563',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.4'
            }}>
              See how our AI-powered platform transforms your learning experience compared to traditional methods
            </p>
          </div>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(2, 132, 199, 0.1)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            position: 'relative',
            zIndex: '2'
          }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 1fr',
                gap: '1px',
                background: 'linear-gradient(90deg, #f8fafc 0%, #f0f9ff 100%)',
                borderBottom: '1px solid #e2e8f0',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}>
                <div style={{ 
                  padding: '8px 10px', 
            background: 'white', 
            fontWeight: 700, 
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#1e293b',
            borderRight: '1px solid #f1f5f9'
                }}>
                  <div style={{
                    width: '22px',
              height: '22px',
              borderRadius: '4px',
              background: '#eff6ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3b82f6',
              fontSize: '0.75rem'
                  }}>
                    📋
                  </div>
                  <span>Feature</span>
                </div>
                <div style={{ 
                  padding: '16px', 
                  background: '#f8fafc', 
                  fontWeight: 700, 
                  textAlign: 'center', 
                  fontSize: '1rem',
                  color: '#475569',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  borderRight: '1px solid #f1f5f9',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    color: '#64748b',
                    boxShadow: '0 4px 12px rgba(100, 116, 139, 0.1)'
                  }}>
                    🏛️
                  </div>
                  <span>Traditional Test Series</span>
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#64748b',
                    backgroundColor: '#e2e8f0',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    marginTop: '4px'
                  }}>
                    Old School
                  </div>
                </div>
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
                  fontWeight: 700, 
                  textAlign: 'center', 
                  fontSize: '1rem',
                  color: '#0369a1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    background: '#3b82f6',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderBottomLeftRadius: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Recommended
                  </div>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    flexShrink: 0,
                    overflow: 'hidden',
                    padding: '4px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <img 
                      src="/images/ic_launcher_foreground.png" 
                      alt="PrepNexus"
                      style={{
                        width: '140%',
                        height: '140%',
                        margin: '-20%',
                        objectFit: 'contain',
                        filter: 'grayscale(1) brightness(0) contrast(1.5)'
                      }}
                    />
                  </div>
                  <span>PrepNexus</span>
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#3b82f6',
                    backgroundColor: '#dbeafe',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    marginTop: '4px'
                  }}>
                    AI-Powered
                  </div>
                </div>
             </div>
            
                         {comparisonData.map((item, index) => (
               <div key={index} style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 1fr',
                gap: '1px',
                borderBottom: '1px solid #e2e8f0',
                padding: '8px 6px',
                transition: 'all 0.3s ease',
                ':hover': {
                  background: '#f8fafc'
                }
              }}>
                 <div style={{ 
                  padding: '6px 8px', 
            fontWeight: 600, 
            color: '#1e293b',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.9rem',
            backgroundColor: 'white',
            borderBottom: '1px solid #f1f5f9',
            transition: 'all 0.15s ease',
                  ':hover': {
                    backgroundColor: '#f8fafc'
                  }
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '22px',
              height: '22px',
              borderRadius: '4px',
              background: '#f0f9ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3b82f6',
              fontSize: '0.9rem'
                  }}>
                    {item.icon}
                  </div>
                  <span>{item.feature}</span>
                </div>
                <div style={{ 
                  padding: '6px 8px', 
            textAlign: 'center', 
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            lineHeight: '1.2',
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid #f1f5f9',
            transition: 'all 0.15s ease',
                  ':hover': {
                    backgroundColor: '#f1f5f9'
                  }
                }}>
                  {item.traditional}
                </div>
                <div style={{ 
                  padding: '20px', 
                  textAlign: 'center', 
                  color: '#0369a1', 
                  fontWeight: 500,
                  fontSize: '0.98rem',
                  lineHeight: '1.6',
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
                  borderBottom: '1px solid #e0f2fe',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  ':hover': {
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
                  },
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    bottom: '0',
                    width: '4px',
                    background: 'linear-gradient(to bottom, #3b82f6, #60a5fa)'
                  }
                }}>
                  {item.prepnexus}
                </div>
               </div>
             ))}
          </div>
        </div>

                 {/* Trust Section */}
         <div style={{ marginBottom: '48px' }}>
           <div style={{ textAlign: 'center', marginBottom: '32px' }}>
             <h3 style={{
               fontSize: '2rem',
               fontWeight: 700,
               color: '#1e293b',
               marginBottom: '12px'
             }}>
               Trusted by Students & Schools
             </h3>
             <p style={{
               fontSize: '1.1rem',
               color: '#475569'
             }}>
               Join thousands of students and institutions already using PrepNexus
             </p>
           </div>
          
                     <div style={{
             display: 'grid',
             gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
             gap: '24px'
           }}>
             {[
               { number: '10,000+', label: 'Active Students' },
               { number: '500+', label: 'Partner Schools' },
               { number: '95%', label: 'Success Rate' },
               { number: '4.8★', label: 'Student Rating' }
             ].map((stat, index) => (
               <div key={index} style={{
                 background: 'rgba(255, 255, 255, 0.9)',
                 backdropFilter: 'blur(20px)',
                 border: '1px solid rgba(0, 0, 0, 0.1)',
                 borderRadius: '16px',
                 padding: '24px',
                 textAlign: 'center',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
               }}>
                 <div style={{
                   fontSize: '2.5rem',
                   fontWeight: 800,
                   background: 'linear-gradient(135deg, #1e293b, #334155)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundClip: 'text',
                   marginBottom: '8px'
                 }}>
                   {stat.number}
                 </div>
                 <div style={{
                   color: '#64748b',
                   fontWeight: 600,
                   fontSize: '0.95rem'
                 }}>
                   {stat.label}
                 </div>
               </div>
             ))}
           </div>
        </div>

                 {/* FAQ Section */}
         <div style={{ marginBottom: '48px' }}>
           <div style={{ textAlign: 'center', marginBottom: '32px' }}>
             <h3 style={{
               fontSize: '2rem',
               fontWeight: 700,
               color: '#1e293b',
               marginBottom: '12px'
             }}>
               Frequently Asked Questions
             </h3>
             <p style={{
               fontSize: '1.1rem',
               color: '#475569'
             }}>
               Everything you need to know about PrepNexus
             </p>
           </div>
          
                     <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            padding: '0 16px'
          }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '16px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }
              }}>
                <h4 style={{
                  color: '#111827',
                  fontSize: '1.05rem',
                  marginBottom: '12px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    color: '#3b82f6',
                    fontSize: '1.2em'
                  }}>•</span>
                  {faq.question}
                </h4>
                <p style={{
                  color: '#4b5563',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                  marginLeft: '20px',
                  paddingLeft: '8px',
                  borderLeft: '2px solid #e5e7eb'
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
           </div>
        </div>

        {/* Final CTA Section */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9))',
            borderRadius: '24px',
            padding: '48px 32px'
          }}>
            <h3 style={{
              color: 'white',
              fontSize: '2rem',
              fontWeight: 800,
              marginBottom: '12px'
            }}>
              Ready to Transform Your Learning?
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              marginBottom: '24px'
            }}>
              Start your free trial today and experience the power of AI-driven education
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button style={{
                padding: '14px 28px',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '1rem',
                background: 'white',
                color: '#3b82f6',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}>
                Start Your Prep Journey
              </button>
              <button style={{
                padding: '14px 28px',
                border: '2px solid white',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '1rem',
                background: 'transparent',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}>
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
};

export default PricingPage;
