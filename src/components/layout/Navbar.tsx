import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Radio, Search, Library, User, Sun, Moon, Menu, X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center">
            <Radio className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">ECHO MUSIC</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-1 hover:text-primary-500 transition-colors">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/radio" className="flex items-center space-x-1 hover:text-primary-500 transition-colors">
            <Radio className="h-5 w-5" />
            <span>Radio</span>
          </Link>
          <Link to="/search" className="flex items-center space-x-1 hover:text-primary-500 transition-colors">
            <Search className="h-5 w-5" />
            <span>Search</span>
          </Link>
          <Link to="/library" className="flex items-center space-x-1 hover:text-primary-500 transition-colors">
            <Library className="h-5 w-5" />
            <span>Library</span>
          </Link>
        </div>

        {/* User actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <Link to="/profile" className="flex items-center space-x-2">
                <img 
                  src={user?.avatar || 'https://i.pravatar.cc/300'} 
                  alt="Avatar" 
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="font-medium">{user?.name}</span>
              </Link>
              <button 
                onClick={logout}
                className="btn btn-outline"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-dark-100 p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center">
                <Radio className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ECHO MUSIC</span>
            </Link>
            <button 
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={closeMobileMenu}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center space-x-3 text-lg" onClick={closeMobileMenu}>
              <Home className="h-6 w-6" />
              <span>Home</span>
            </Link>
            <Link to="/radio" className="flex items-center space-x-3 text-lg" onClick={closeMobileMenu}>
              <Radio className="h-6 w-6" />
              <span>Radio</span>
            </Link>
            <Link to="/search" className="flex items-center space-x-3 text-lg" onClick={closeMobileMenu}>
              <Search className="h-6 w-6" />
              <span>Search</span>
            </Link>
            <Link to="/library" className="flex items-center space-x-3 text-lg" onClick={closeMobileMenu}>
              <Library className="h-6 w-6" />
              <span>Library</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-3 text-lg" onClick={closeMobileMenu}>
              <User className="h-6 w-6" />
              <span>Profile</span>
            </Link>

            <div className="pt-4 flex items-center justify-between">
              <button 
                onClick={toggleDarkMode} 
                className="flex items-center space-x-3 text-lg"
              >
                {darkMode ? (
                  <>
                    <Sun className="h-6 w-6" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-6 w-6" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-auto pt-6">
              {isAuthenticated ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={user?.avatar || 'https://i.pravatar.cc/300'} 
                      alt="Avatar" 
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-lg">{user?.name}</span>
                  </div>
                  <button 
                    onClick={() => { logout(); closeMobileMenu(); }}
                    className="w-full btn btn-primary"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Link 
                    to="/login" 
                    className="block w-full btn btn-outline"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="block w-full btn btn-primary"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;