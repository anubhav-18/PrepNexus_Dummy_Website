import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaUsers, FaGraduationCap, FaArrowLeft } from 'react-icons/fa';
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
      basic: { price: 299, originalPrice: 599, savings: '50%' },
      pro: { price: 499, originalPrice: 999, savings: '50%' },
      premium: { price: 799, originalPrice: 1599, savings: '50%' }
    },
    annual: {
      basic: { price: 2999, originalPrice: 7188, savings: '58%' },
      pro: { price: 4999, originalPrice: 11988, savings: '58%' },
      premium: { price: 7999, originalPrice: 19188, savings: '58%' }
    }
  };

  const institutionPlan = { price: 1500, period: 'per student annually' };

  const features = {
    basic: ['10,000+ Questions', '5 Mock Tests', 'Basic Analytics', 'Email Support', 'Mobile App'],
    pro: ['Everything in Basic', 'Unlimited Tests', 'Advanced Analytics', 'Priority Support', 'Study Plan', 'Performance Tracking'],
    premium: ['Everything in Pro', 'Future Features Access', 'AI Companion Upgrades', '1-on-1 Mentorship', 'Custom Materials', 'Advanced Insights'],
    institution: ['All Student Features', 'Admin Dashboard', 'Video Streaming (4h/day)', 'White Labeling', 'Performance Analytics', 'Custom Branding']
  };

  const comparisonData = [
    { feature: 'Personalization', traditional: 'Generic questions', prepnexus: 'AI-powered personalized' },
    { feature: 'Adaptive Learning', traditional: 'Fixed difficulty', prepnexus: 'Dynamic adjustment' },
    { feature: 'Analytics', traditional: 'Basic reports', prepnexus: 'Detailed insights' },
    { feature: 'Study Planning', traditional: 'Manual planning', prepnexus: 'AI-generated plans' }
  ];

  const faqs = [
    { question: 'Can I cancel anytime?', answer: 'Yes, you can cancel your subscription at any time. No long-term commitments required.' },
    { question: 'Do I need payment details for free trial?', answer: 'No, you can start your free trial without entering any payment information.' },
    { question: 'How is this different from normal test series?', answer: 'PrepNexus uses AI to create personalized questions, adapts difficulty levels, and provides detailed analytics.' }
  ];

  return (
    <PageWrapper>
      <Navbar />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '50px',
          padding: '12px 24px',
          color: '#374151',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'all 0.4s ease',
          marginTop: '24px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
        }}>
          <FaArrowLeft style={{ marginRight: '8px' }} />
        </Link>
      </div>

      <section style={{ 
        position: 'relative', 
        zIndex: 2, 
        padding: '40px 20px 80px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            background: 'linear-gradient(135deg, #1e293b, #334155)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            marginBottom: '16px'
          }}>
            Choose Your Perfect Plan
          </h1>
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
                    {cycle === 'monthly' ? 'Monthly' : (
                      <>
                        Annual
                        <span style={{
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          color: 'white',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          marginLeft: '6px'
                        }}>
                          Save 58%
                        </span>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Student Pricing Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '48px'
            }}>
              {[
                { name: 'Basic', plan: 'basic', popular: false },
                { name: 'Pro', plan: 'pro', popular: true },
                { name: 'Premium', plan: 'premium', popular: false }
              ].map((card) => (
                <div
                  key={card.name}
                                     style={{
                     background: card.popular 
                       ? 'rgba(255, 255, 255, 0.95)'
                       : 'rgba(255, 255, 255, 0.9)',
                     backdropFilter: 'blur(20px)',
                     border: card.popular 
                       ? '2px solid #3b82f6'
                       : '1px solid rgba(0, 0, 0, 0.1)',
                     borderRadius: '16px',
                     padding: '20px',
                     transition: 'all 0.4s ease',
                     position: 'relative',
                     transform: card.popular ? 'scale(1.02)' : 'scale(1)',
                     cursor: 'pointer',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                   }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = card.popular ? 'translateY(-8px) scale(1.04)' : 'translateY(-8px) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = card.popular ? 'scale(1.02)' : 'scale(1)';
                  }}
                >
                  {card.popular && (
                    <div style={{
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '16px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      position: 'absolute',
                      top: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}>
                      Most Popular
                    </div>
                  )}

                  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                                         <h3 style={{
                       fontSize: '1.3rem',
                       fontWeight: 700,
                       color: '#1e293b',
                       marginBottom: '8px'
                     }}>
                       {card.name}
                     </h3>
                    <div style={{ marginBottom: '6px' }}>
                                             <span style={{
                         fontSize: '2.2rem',
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
                         fontSize: '0.9rem',
                         fontWeight: 500,
                         marginLeft: '4px'
                       }}>
                         /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                       </span>
                    </div>
                                         <div style={{
                       color: '#059669',
                       fontWeight: 700,
                       fontSize: '0.8rem'
                     }}>
                       Save {studentPlans[billingCycle][card.plan].savings} off ₹{studentPlans[billingCycle][card.plan].originalPrice}
                     </div>
                  </div>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '16px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    {features[card.plan].map((feature, index) => (
                                             <li key={index} style={{
                         display: 'flex',
                         alignItems: 'center',
                         color: '#374151',
                         fontWeight: 500,
                         fontSize: '0.85rem'
                       }}>
                         <FaCheck style={{
                           color: '#059669',
                           marginRight: '6px',
                           fontSize: '0.8rem'
                         }} />
                         {feature}
                       </li>
                    ))}
                  </ul>

                                     <button style={{
                     width: '100%',
                     padding: '10px 16px',
                     border: 'none',
                     borderRadius: '10px',
                     fontWeight: 700,
                     fontSize: '0.9rem',
                     transition: 'all 0.4s ease',
                     cursor: 'pointer',
                     background: card.popular
                       ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                       : '#f1f5f9',
                     color: card.popular ? 'white' : '#374151',
                     border: card.popular ? 'none' : '1px solid #e2e8f0'
                   }}>
                     Start Free Trial
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
         <div style={{ marginBottom: '48px' }}>
           <div style={{ textAlign: 'center', marginBottom: '32px' }}>
             <h3 style={{
               fontSize: '2rem',
               fontWeight: 700,
               color: '#1e293b',
               marginBottom: '12px'
             }}>
               Why PrepNexus vs Traditional Test Series?
             </h3>
             <p style={{
               fontSize: '1.1rem',
               color: '#475569'
             }}>
               See how our AI-powered platform transforms your learning experience
             </p>
           </div>
          
                     <div style={{
             background: 'rgba(255, 255, 255, 0.9)',
             backdropFilter: 'blur(20px)',
             border: '1px solid rgba(0, 0, 0, 0.1)',
             borderRadius: '20px',
             overflow: 'hidden',
             boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
           }}>
             <div style={{
               display: 'grid',
               gridTemplateColumns: '1fr 1fr 1fr',
               background: '#3b82f6',
               padding: '20px',
               borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
             }}>
               <div style={{ fontWeight: 600, color: 'white' }}>Feature</div>
               <div style={{ fontWeight: 600, color: 'white', textAlign: 'center' }}>Traditional</div>
               <div style={{ fontWeight: 600, color: 'white', textAlign: 'center' }}>PrepNexus</div>
             </div>
            
                         {comparisonData.map((item, index) => (
               <div key={index} style={{
                 display: 'grid',
                 gridTemplateColumns: '1fr 1fr 1fr',
                 borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
               }}>
                 <div style={{ padding: '16px', fontWeight: 600, color: '#1e293b' }}>
                   {item.feature}
                 </div>
                 <div style={{ padding: '16px', textAlign: 'center', color: '#64748b' }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                     <FaTimes style={{ color: '#ef4444' }} />
                     {item.traditional}
                   </div>
                 </div>
                 <div style={{ 
                   padding: '16px', 
                   textAlign: 'center', 
                   background: 'rgba(59, 130, 246, 0.1)',
                   color: '#3b82f6',
                   fontWeight: 600
                 }}>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                     <FaCheck style={{ color: '#059669' }} />
                     {item.prepnexus}
                   </div>
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
          
                     <div style={{ maxWidth: '800px', margin: '0 auto' }}>
             {faqs.map((faq, index) => (
               <div key={index} style={{
                 background: 'rgba(255, 255, 255, 0.9)',
                 backdropFilter: 'blur(20px)',
                 border: '1px solid rgba(0, 0, 0, 0.1)',
                 borderRadius: '16px',
                 padding: '24px',
                 marginBottom: '16px',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
               }}>
                 <h4 style={{
                   color: '#1e293b',
                   fontWeight: 700,
                   fontSize: '1.1rem',
                   marginBottom: '12px'
                 }}>
                   {faq.question}
                 </h4>
                 <p style={{
                   color: '#374151',
                   lineHeight: 1.6,
                   fontWeight: 500,
                   fontSize: '0.95rem'
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
                Start Free Trial
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
