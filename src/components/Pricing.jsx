// import React, { useState } from 'react';
// import { FaCheck, FaTimes, FaStar, FaUsers, FaGraduationCap, FaShieldAlt, FaPlay, FaChartLine } from 'react-icons/fa';

// const Pricing = () => {
//   const [billingCycle, setBillingCycle] = useState('monthly');
//   const [activeTab, setActiveTab] = useState('students');

//   const studentPlans = {
//     monthly: {
//       basic: { price: 299, originalPrice: 599, savings: '50%' },
//       pro: { price: 499, originalPrice: 999, savings: '50%' },
//       premium: { price: 799, originalPrice: 1599, savings: '50%' }
//     },
//     annual: {
//       basic: { price: 2999, originalPrice: 7188, savings: '58%' },
//       pro: { price: 4999, originalPrice: 11988, savings: '58%' },
//       premium: { price: 7999, originalPrice: 19188, savings: '58%' }
//     }
//   };

//   const institutionPlan = {
//     price: 1500,
//     period: 'per student annually'
//   };

//   const features = {
//     basic: [
//       'Access to 10,000+ Questions',
//       '5 Mock Tests',
//       'Basic Analytics',
//       'Email Support',
//       'Mobile App Access'
//     ],
//     pro: [
//       'Everything in Basic',
//       'Unlimited Mock Tests',
//       'Advanced Analytics',
//       'Priority Support',
//       'Personal Study Plan',
//       'Performance Tracking'
//     ],
//     premium: [
//       'Everything in Pro',
//       'Priority Access to Future Features',
//       'Exclusive AI Study Companion Upgrades',
//       '1-on-1 Mentorship Sessions',
//       'Custom Study Materials',
//       'Advanced Performance Insights'
//     ],
//     institution: [
//       'All Student Features',
//       'Admin Dashboard',
//       'Video/Live Streaming (4 hours/day)',
//       'White Labeling',
//       'Performance Analytics',
//       'Custom Branding'
//     ]
//   };

//   const comparisonData = [
//     {
//       feature: 'Personalization',
//       traditional: 'Generic questions for all',
//       prepnexus: 'AI-powered personalized questions'
//     },
//     {
//       feature: 'Adaptive Learning',
//       traditional: 'Fixed difficulty levels',
//       prepnexus: 'Dynamic difficulty adjustment'
//     },
//     {
//       feature: 'Performance Analytics',
//       traditional: 'Basic score reports',
//       prepnexus: 'Detailed insights & recommendations'
//     },
//     {
//       feature: 'Study Planning',
//       traditional: 'Manual planning required',
//       prepnexus: 'AI-generated study plans'
//     }
//   ];

//   const faqs = [
//     {
//       question: 'Can I cancel anytime?',
//       answer: 'Yes, you can cancel your subscription at any time. No long-term commitments required.'
//     },
//     {
//       question: 'Do I need to enter payment details for free trial?',
//       answer: 'No, you can start your free trial without entering any payment information. We\'ll only ask for payment details when you decide to upgrade.'
//     },
//     {
//       question: 'How is this different from normal test series?',
//       answer: 'Unlike traditional test series with generic questions, PrepNexus uses AI to create personalized questions based on your performance, adapts difficulty levels, and provides detailed analytics to help you improve faster.'
//     },
//     {
//       question: 'What happens after my free trial ends?',
//       answer: 'After your free trial, you can choose to upgrade to any of our paid plans to continue accessing all features and unlimited practice.'
//     }
//   ];

//   return (
//     <section className="pricing-section" style={{ padding: '80px 0', background: '#f8fafc' }}>
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Choose Your Perfect Plan
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Start your journey to success with our AI-powered learning platform
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-lg p-1 shadow-sm">
//             <button
//               onClick={() => setActiveTab('students')}
//               className={`px-6 py-3 rounded-md font-medium transition-all ${
//                 activeTab === 'students'
//                   ? 'bg-blue-600 text-white shadow-md'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               <FaGraduationCap className="inline mr-2" />
//               For Students
//             </button>
//             <button
//               onClick={() => setActiveTab('institutions')}
//               className={`px-6 py-3 rounded-md font-medium transition-all ${
//                 activeTab === 'institutions'
//                   ? 'bg-blue-600 text-white shadow-md'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               <FaUsers className="inline mr-2" />
//               For Institutions
//             </button>
//           </div>
//         </div>

//         {activeTab === 'students' && (
//           <>
//             {/* Billing Toggle */}
//             <div className="flex justify-center mb-8">
//               <div className="bg-white rounded-lg p-1 shadow-sm">
//                 <button
//                   onClick={() => setBillingCycle('monthly')}
//                   className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                     billingCycle === 'monthly'
//                       ? 'bg-blue-600 text-white'
//                       : 'text-gray-600 hover:text-gray-900'
//                   }`}
//                 >
//                   Monthly
//                 </button>
//                 <button
//                   onClick={() => setBillingCycle('annual')}
//                   className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                     billingCycle === 'annual'
//                       ? 'bg-blue-600 text-white'
//                       : 'text-gray-600 hover:text-gray-900'
//                   }`}
//                 >
//                   Annual
//                   <span className="ml-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                     Save 58%
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Student Pricing Cards */}
//             <div className="grid md:grid-cols-3 gap-8 mb-16">
//               {/* Basic Plan */}
//               <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all">
//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold text-blue-600">
//                       ₹{studentPlans[billingCycle].basic.price}
//                     </span>
//                     <span className="text-gray-500 ml-2">
//                       /{billingCycle === 'monthly' ? 'month' : 'year'}
//                     </span>
//                   </div>
//                   <div className="text-sm text-green-600 font-medium">
//                     Save {studentPlans[billingCycle].basic.savings} off ₹{studentPlans[billingCycle].basic.originalPrice}
//                   </div>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {features.basic.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all">
//                   Start Free Trial
//                 </button>
//               </div>

//               {/* Pro Plan */}
//               <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-500 relative hover:shadow-xl transition-all">
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
//                     Most Popular
//                   </span>
//                 </div>
//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold text-blue-600">
//                       ₹{studentPlans[billingCycle].pro.price}
//                     </span>
//                     <span className="text-gray-500 ml-2">
//                       /{billingCycle === 'monthly' ? 'month' : 'year'}
//                     </span>
//                   </div>
//                   <div className="text-sm text-green-600 font-medium">
//                     Save {studentPlans[billingCycle].pro.savings} off ₹{studentPlans[billingCycle].pro.originalPrice}
//                   </div>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {features.pro.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all">
//                   Start Free Trial
//                 </button>
//               </div>

//               {/* Premium Plan */}
//               <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all">
//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold text-blue-600">
//                       ₹{studentPlans[billingCycle].premium.price}
//                     </span>
//                     <span className="text-gray-500 ml-2">
//                       /{billingCycle === 'monthly' ? 'month' : 'year'}
//                     </span>
//                   </div>
//                   <div className="text-sm text-green-600 font-medium">
//                     Save {studentPlans[billingCycle].premium.savings} off ₹{studentPlans[billingCycle].premium.originalPrice}
//                   </div>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {features.premium.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all">
//                   Start Free Trial
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {activeTab === 'institutions' && (
//           <div className="max-w-4xl mx-auto mb-16">
//             <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-500">
//               <div className="text-center mb-8">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                   Empower Your Students with AI-first Learning
//                 </h3>
//                 <p className="text-xl text-gray-600 mb-6">
//                   All-in-one platform for schools to offer personalized prep
//                 </p>
//                 <div className="mb-6">
//                   <span className="text-5xl font-bold text-blue-600">
//                     ₹{institutionPlan.price}
//                   </span>
//                   <span className="text-gray-500 ml-2 text-xl">
//                     {institutionPlan.period}
//                   </span>
//                 </div>
//               </div>
//               <div className="grid md:grid-cols-2 gap-8 mb-8">
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h4>
//                   <ul className="space-y-3">
//                     {features.institution.map((feature, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
//                         <span className="text-gray-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-4">Additional Usage:</h4>
//                   <div className="bg-gray-50 rounded-lg p-4">
//                     <p className="text-gray-700 mb-2">
//                       <strong>Video/Live Streaming:</strong> 4 hours/day included
//                     </p>
//                     <p className="text-gray-600">
//                       Extra usage: ₹1 per additional hour
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <button className="bg-blue-600 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all">
//                   Book a Demo
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Comparison Section */}
//         <div className="mb-16">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">
//               Why PrepNexus vs Traditional Test Series?
//             </h3>
//             <p className="text-xl text-gray-600">
//               See how our AI-powered platform transforms your learning experience
//             </p>
//           </div>
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
//               <div className="bg-gray-50 p-6">
//                 <h4 className="text-lg font-semibold text-gray-900 mb-4">Feature</h4>
//               </div>
//               <div className="bg-gray-50 p-6 text-center">
//                 <h4 className="text-lg font-semibold text-gray-900 mb-4">Traditional Test Series</h4>
//               </div>
//               <div className="bg-blue-50 p-6 text-center">
//                 <h4 className="text-lg font-semibold text-blue-900 mb-4">PrepNexus</h4>
//               </div>
//             </div>
//             {comparisonData.map((item, index) => (
//               <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-200">
//                 <div className="p-6">
//                   <h5 className="font-medium text-gray-900">{item.feature}</h5>
//                 </div>
//                 <div className="p-6 text-center">
//                   <div className="flex items-center justify-center">
//                     <FaTimes className="text-red-500 mr-2" />
//                     <span className="text-gray-700">{item.traditional}</span>
//                   </div>
//                 </div>
//                 <div className="p-6 text-center bg-blue-50">
//                   <div className="flex items-center justify-center">
//                     <FaCheck className="text-green-500 mr-2" />
//                     <span className="text-blue-900">{item.prepnexus}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Trust Section */}
//         <div className="mb-16">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">
//               Trusted by Students & Schools
//             </h3>
//             <p className="text-xl text-gray-600">
//               Join thousands of students and institutions already using PrepNexus
//             </p>
//           </div>
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
//               <div className="text-gray-600">Active Students</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
//               <div className="text-gray-600">Partner Schools</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
//               <div className="text-gray-600">Success Rate</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
//               <div className="text-gray-600">Student Rating</div>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="mb-16">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">
//               Frequently Asked Questions
//             </h3>
//             <p className="text-xl text-gray-600">
//               Everything you need to know about PrepNexus
//             </p>
//           </div>
//           <div className="max-w-3xl mx-auto space-y-6">
//             {faqs.map((faq, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-6">
//                 <h4 className="text-lg font-semibold text-gray-900 mb-3">
//                   {faq.question}
//                 </h4>
//                 <p className="text-gray-700 leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white">
//             <h3 className="text-3xl font-bold mb-4">
//               Ready to Transform Your Learning?
//             </h3>
//             <p className="text-xl mb-8 opacity-90">
//               Start your free trial today and experience the power of AI-driven education
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-blue-600 py-4 px-8 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all">
//                 Start Free Trial
//               </button>
//               <button className="border-2 border-white text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-white hover:text-blue-600 transition-all">
//                 Book a Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;
