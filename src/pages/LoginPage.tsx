import React from 'react';
import { Link } from 'react-router-dom';
import { Radio } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-100">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Brand/Image */}
        <div className="hidden md:flex md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-600">
            <div className="absolute inset-0 opacity-30" style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1500')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center p-12 w-full">
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                <Radio className="h-10 w-10 text-primary-500" />
              </div>
              <h1 className="text-3xl font-bold text-white ml-4">ECHO MUSIC</h1>
            </div>
            <div className="max-w-md text-center">
              <h2 className="text-2xl font-bold text-white mb-4">The soundtrack of your life</h2>
              <p className="text-white/90 mb-8">
                Stream millions of songs, create personalized playlists, and discover new music with ECHO MUSIC.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-1">50M+</h3>
                  <p className="text-white/80 text-sm">Songs</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-1">10K+</h3>
                  <p className="text-white/80 text-sm">Radio Stations</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-1">5M+</h3>
                  <p className="text-white/80 text-sm">Users</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-1">100+</h3>
                  <p className="text-white/80 text-sm">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center justify-center md:hidden">
              <div className="h-12 w-12 rounded-full bg-primary-500 flex items-center justify-center">
                <Radio className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold ml-4">ECHO MUSIC</h1>
            </div>
            
            <LoginForm />
            
            <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              By signing in, you agree to our{' '}
              <a href="#" className="text-primary-500 hover:text-primary-600">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary-500 hover:text-primary-600">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;