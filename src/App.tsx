import React, { useState } from 'react';
import {
  Video,
  FastForward,
  FileText,
  Zap,
  Brain,
  Share2,
} from 'lucide-react';
import Auth from './components/Auth';
import Feature from './components/Feature';
import Dashboard from './components/Dashboard';

function App() {
  const [authMode, setAuthMode] = useState<'login' | 'signup' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthSuccess = (mode: 'login' | 'signup') => {
    if (mode === 'login') {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Video className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">VideoSum</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setAuthMode('login')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                Login
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Videos with</span>
              <span className="block text-blue-600">AI-Powered Summarization</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Extract key insights, generate summaries, and optimize your video content
              with our advanced AI technology. Save time and maximize engagement.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button
                  onClick={() => setAuthMode('signup')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features for Video Content
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to analyze and optimize your videos
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={FastForward}
              title="Quick Summarization"
              description="Get concise summaries of long videos in minutes, saving you valuable time"
            />
            <Feature
              icon={FileText}
              title="Transcript Generation"
              description="Convert speech to text with high accuracy for better content understanding"
            />
            <Feature
              icon={Brain}
              title="AI Analysis"
              description="Advanced AI algorithms identify key topics and important moments"
            />
            <Feature
              icon={Zap}
              title="Video Optimization"
              description="Get recommendations to improve your video content and engagement"
            />
            <Feature
              icon={Share2}
              title="Easy Sharing"
              description="Share summaries and insights with your team in one click"
            />
            <Feature
              icon={Video}
              title="Multi-Format Support"
              description="Support for various video formats and platforms"
            />
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Trusted by content creators worldwide
                </h2>
                <div className="mt-8 flex justify-center space-x-6 text-white">
                  <div>
                    <p className="text-4xl font-bold">1M+</p>
                    <p className="mt-2">Videos Analyzed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">50K+</p>
                    <p className="mt-2">Active Users</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">98%</p>
                    <p className="mt-2">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <Auth
        isOpen={authMode !== null}
        onClose={() => setAuthMode(null)}
        mode={authMode || 'login'}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default App;