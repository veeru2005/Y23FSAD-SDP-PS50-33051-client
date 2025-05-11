import React from 'react';
import { Radio } from 'lucide-react';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-100">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Brand/Image */}
        <div className="hidden md:flex md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 to-secondary-600">
            <div className="absolute inset-0 opacity-30" style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1500')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center p-12 w-full">
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                <Radio className="h-10 w-10 text-secondary-500" />
              </div>
              <h1 className="text-3xl font-bold text-white ml-4">ECHO MUSIC</h1>
            </div>
            <div className="max-w-md text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Join the music revolution</h2>
              <p className="text-white/90 mb-8">
                Create your ECHO MUSIC account and get access to millions of songs, personalized playlists, and more.
              </p>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Free Account</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center text-white/80">
                      <span className="mr-2">✓</span>
                      <span>Unlimited music streaming</span>
                    </li>
                    <li className="flex items-center text-white/80">
                      <span className="mr-2">✓</span>
                      <span>Create and share playlists</span>
                    </li>
                    <li className="flex items-center text-white/80">
                      <span className="mr-2">✓</span>
                      <span>Access to radio stations</span>
                    </li>
                    <li className="flex items-center text-white/80">
                      <span className="mr-2">✓</span>
                      <span>Personalized recommendations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <p className="text-white/90 text-sm">
                    "ECHO MUSIC has completely transformed how I listen to music. The radio feature is absolutely fantastic!" - Sarah P.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Register form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center justify-center md:hidden">
              <div className="h-12 w-12 rounded-full bg-secondary-500 flex items-center justify-center">
                <Radio className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold ml-4">ECHO MUSIC</h1>
            </div>
            
            <RegisterForm />
            
            <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-secondary-500 hover:text-secondary-600">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-secondary-500 hover:text-secondary-600">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;