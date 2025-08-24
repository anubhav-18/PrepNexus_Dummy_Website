import React, { useState, useEffect } from 'react';
import './ProgressDashboard.css';

const ProgressDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('week');

  // Mock data - in real app, this would come from your backend
  const progressData = {
    overall: 78,
    physics: 82,
    chemistry: 75,
    mathematics: 79,
    biology: 85
  };

  const weeklyProgress = [
    { day: 'Mon', physics: 85, chemistry: 78, mathematics: 82, biology: 88 },
    { day: 'Tue', physics: 88, chemistry: 80, mathematics: 85, biology: 90 },
    { day: 'Wed', physics: 82, chemistry: 75, mathematics: 79, biology: 85 },
    { day: 'Thu', physics: 90, chemistry: 82, mathematics: 88, biology: 92 },
    { day: 'Fri', physics: 87, chemistry: 79, mathematics: 84, biology: 89 },
    { day: 'Sat', physics: 92, chemistry: 85, mathematics: 90, biology: 94 },
    { day: 'Sun', physics: 89, chemistry: 83, mathematics: 87, biology: 91 }
  ];

  const strengths = [
    { topic: 'Mechanics', score: 92, color: '#10b981' },
    { topic: 'Organic Chemistry', score: 88, color: '#3b82f6' },
    { topic: 'Calculus', score: 85, color: '#8b5cf6' },
    { topic: 'Cell Biology', score: 90, color: '#f59e0b' }
  ];

  const weaknesses = [
    { topic: 'Thermodynamics', score: 45, color: '#ef4444' },
    { topic: 'Inorganic Chemistry', score: 52, color: '#f97316' },
    { topic: 'Trigonometry', score: 48, color: '#ec4899' },
    { topic: 'Genetics', score: 55, color: '#06b6d4' }
  ];

  const studyStats = {
    totalTime: '127h 32m',
    thisWeek: '18h 45m',
    questionsSolved: 2847,
    testsTaken: 156,
    accuracy: 78.5
  };

  return (
    <section className="progress-dashboard" id="progress">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">📊 Progress Dashboard</div>
          <h2 className="section-title">Track Your Learning Journey</h2>
          <p className="section-subtitle">Monitor your progress, identify strengths, and focus on areas that need improvement</p>
        </div>

        {/* Quick Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h3>{studyStats.totalTime}</h3>
              <p>Total Study Time</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <h3>{studyStats.questionsSolved}</h3>
              <p>Questions Solved</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-content">
              <h3>{studyStats.testsTaken}</h3>
              <p>Tests Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{studyStats.accuracy}%</h3>
              <p>Overall Accuracy</p>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="dashboard-content">
          {/* Navigation Tabs */}
          <div className="dashboard-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'subjects' ? 'active' : ''}`}
              onClick={() => setActiveTab('subjects')}
            >
              Subject Analysis
            </button>
            <button 
              className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveTab('performance')}
            >
              Performance Trends
            </button>
            <button 
              className={`tab-btn ${activeTab === 'insights' ? 'active' : ''}`}
              onClick={() => setActiveTab('insights')}
            >
              AI Insights
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-tab">
                <div className="overview-grid">
                  {/* Overall Progress */}
                  <div className="progress-card large">
                    <h3>Overall Progress</h3>
                    <div className="circular-progress">
                      <div className="progress-ring">
                        <svg width="120" height="120">
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="8"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="8"
                            strokeDasharray={`${2 * Math.PI * 50}`}
                            strokeDashoffset={`${2 * Math.PI * 50 * (1 - progressData.overall / 100)}`}
                            strokeLinecap="round"
                            transform="rotate(-90 60 60)"
                          />
                        </svg>
                        <div className="progress-text">
                          <span className="percentage">{progressData.overall}%</span>
                          <span className="label">Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subject Progress */}
                  <div className="progress-card">
                    <h3>Subject Progress</h3>
                    <div className="subject-progress">
                      {Object.entries(progressData).filter(([key]) => key !== 'overall').map(([subject, progress]) => (
                        <div key={subject} className="subject-item">
                          <div className="subject-info">
                            <span className="subject-name">{subject.charAt(0).toUpperCase() + subject.slice(1)}</span>
                            <span className="subject-score">{progress}%</span>
                          </div>
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weekly Activity */}
                  <div className="progress-card">
                    <h3>Weekly Activity</h3>
                    <div className="weekly-chart">
                      {weeklyProgress.map((day, index) => (
                        <div key={day.day} className="day-column">
                          <div className="day-label">{day.day}</div>
                          <div className="day-bars">
                            <div 
                              className="bar physics" 
                              style={{ height: `${day.physics}%` }}
                              title={`Physics: ${day.physics}%`}
                            ></div>
                            <div 
                              className="bar chemistry" 
                              style={{ height: `${day.chemistry}%` }}
                              title={`Chemistry: ${day.chemistry}%`}
                            ></div>
                            <div 
                              className="bar mathematics" 
                              style={{ height: `${day.mathematics}%` }}
                              title={`Mathematics: ${day.mathematics}%`}
                            ></div>
                            <div 
                              className="bar biology" 
                              style={{ height: `${day.biology}%` }}
                              title={`Biology: ${day.biology}%`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'subjects' && (
              <div className="subjects-tab">
                <div className="subjects-grid">
                  {Object.entries(progressData).filter(([key]) => key !== 'overall').map(([subject, progress]) => (
                    <div key={subject} className="subject-card">
                      <div className="subject-header">
                        <h3>{subject.charAt(0).toUpperCase() + subject.slice(1)}</h3>
                        <span className="subject-progress-badge">{progress}%</span>
                      </div>
                      <div className="subject-progress-ring">
                        <svg width="80" height="80">
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="6"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="6"
                            strokeDasharray={`${2 * Math.PI * 35}`}
                            strokeDashoffset={`${2 * Math.PI * 35 * (1 - progress / 100)}`}
                            strokeLinecap="round"
                            transform="rotate(-90 40 40)"
                          />
                        </svg>
                      </div>
                      <div className="subject-stats">
                        <div className="stat">
                          <span className="stat-value">24</span>
                          <span className="stat-label">Topics</span>
                        </div>
                        <div className="stat">
                          <span className="stat-value">156</span>
                          <span className="stat-label">Questions</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="performance-tab">
                <div className="performance-grid">
                  <div className="performance-card">
                    <h3>Strengths</h3>
                    <div className="strengths-list">
                      {strengths.map((strength, index) => (
                        <div key={index} className="strength-item">
                          <div className="strength-info">
                            <span className="topic-name">{strength.topic}</span>
                            <span className="topic-score">{strength.score}%</span>
                          </div>
                          <div className="strength-bar">
                            <div 
                              className="strength-fill" 
                              style={{ 
                                width: `${strength.score}%`,
                                backgroundColor: strength.color
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="performance-card">
                    <h3>Areas for Improvement</h3>
                    <div className="weaknesses-list">
                      {weaknesses.map((weakness, index) => (
                        <div key={index} className="weakness-item">
                          <div className="weakness-info">
                            <span className="topic-name">{weakness.topic}</span>
                            <span className="topic-score">{weakness.score}%</span>
                          </div>
                          <div className="weakness-bar">
                            <div 
                              className="weakness-fill" 
                              style={{ 
                                width: `${weakness.score}%`,
                                backgroundColor: weakness.color
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'insights' && (
              <div className="insights-tab">
                <div className="insights-grid">
                  <div className="insight-card">
                    <div className="insight-icon">🎯</div>
                    <h3>Focus Recommendation</h3>
                    <p>Based on your performance, focus on Thermodynamics and Inorganic Chemistry this week. These topics show the most room for improvement.</p>
                  </div>
                  <div className="insight-card">
                    <div className="insight-icon">⏰</div>
                    <h3>Optimal Study Time</h3>
                    <p>Your peak performance is between 9 AM - 11 AM. Schedule your most challenging topics during this window.</p>
                  </div>
                  <div className="insight-card">
                    <div className="insight-icon">📚</div>
                    <h3>Study Strategy</h3>
                    <p>Try the Pomodoro technique: 25 minutes of focused study followed by 5-minute breaks for better retention.</p>
                  </div>
                  <div className="insight-card">
                    <div className="insight-icon">🚀</div>
                    <h3>Next Milestone</h3>
                    <p>You're 22% away from achieving "Advanced" level in Physics. Keep up the great work!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;
