import React, { useState, useEffect, useRef } from 'react';
import { User, ChevronDown, LogOut, CircleUser as UserCircle, Mail, Lock, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import toast, { Toaster } from 'react-hot-toast';

interface UserProfile {
  id: string;
  full_name: string;
  username: string;
  email: string;
  created_at: string;
}

interface UserDropdownProps {
  onNavigate: (section: string) => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ onNavigate }) => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [showSessionWarning, setShowSessionWarning] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activityTimer = useRef<NodeJS.Timeout>();
  const warningTimer = useRef<NodeJS.Timeout>();
  const countdownTimer = useRef<NodeJS.Timeout>();
  
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ 
    email: '', 
    password: '', 
    fullName: '', 
    username: '' 
  });

  // Session timeout constants (in milliseconds)
  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  const WARNING_TIME = 2 * 60 * 1000; // 2 minutes before timeout

  useEffect(() => {
    // Get initial user
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        await fetchUserProfile(user.id);
      }
    };
    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      
      if (event === 'SIGNED_IN' && session?.user) {
        await fetchUserProfile(session.user.id);
        if (profile) {
          toast.success(`👋 Welcome back, ${profile.username}!`);
        }
      }
      
      if (event === 'SIGNED_OUT') {
        setProfile(null);
        onNavigate('home');
        clearTimers();
      }
    });

    return () => {
      subscription.unsubscribe();
      clearTimers();
    };
  }, [onNavigate]);

  // Activity tracking for session timeout
  useEffect(() => {
    if (!user) return;

    const resetActivityTimer = () => {
      setLastActivity(Date.now());
      setShowSessionWarning(false);
      
      // Clear existing timers
      if (activityTimer.current) clearTimeout(activityTimer.current);
      if (warningTimer.current) clearTimeout(warningTimer.current);
      
      // Set warning timer (28 minutes)
      warningTimer.current = setTimeout(() => {
        setShowSessionWarning(true);
        toast((t) => (
          <div className="flex items-center space-x-2">
            <span>⚠️ Your session will expire soon!</span>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                resetActivityTimer();
              }}
              className="bg-emerald-600 text-white px-3 py-1 rounded text-sm hover:bg-emerald-700"
            >
              Stay logged in
            </button>
          </div>
        ), { duration: 120000 }); // Show for 2 minutes
        
        // Set logout timer (30 minutes total)
        activityTimer.current = setTimeout(() => {
          handleLogout();
          toast.error('Session expired due to inactivity');
        }, WARNING_TIME);
      }, SESSION_TIMEOUT - WARNING_TIME);
    };

    const handleActivity = () => {
      resetActivityTimer();
    };

    // Add activity listeners
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    // Initialize timer
    resetActivityTimer();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
      clearTimers();
    };
  }, [user]);

  // Resend countdown timer
  useEffect(() => {
    if (resendCountdown > 0) {
      countdownTimer.current = setTimeout(() => {
        setResendCountdown(resendCountdown - 1);
      }, 1000);
    }
    return () => {
      if (countdownTimer.current) clearTimeout(countdownTimer.current);
    };
  }, [resendCountdown]);

  const clearTimers = () => {
    if (activityTimer.current) clearTimeout(activityTimer.current);
    if (warningTimer.current) clearTimeout(warningTimer.current);
    if (countdownTimer.current) clearTimeout(countdownTimer.current);
  };

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error fetching profile:', error);
        return;
      }
      
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const checkUsernameAvailable = async (username: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .rpc('check_username_available', { username_to_check: username });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error checking username:', error);
      return false;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginForm.email,
        password: loginForm.password,
      });

      if (error) throw error;

      setShowLoginModal(false);
      setLoginForm({ email: '', password: '' });
      setIsDropdownOpen(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Check if username is available
      const isUsernameAvailable = await checkUsernameAvailable(signupForm.username);
      if (!isUsernameAvailable) {
        setError('Username is already taken. Please choose another one.');
        setLoading(false);
        return;
      }

      // Sign up user with email verification
      const { data, error } = await supabase.auth.signUp({
        email: signupForm.email,
        password: signupForm.password,
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
          data: {
            full_name: signupForm.fullName,
            username: signupForm.username,
          }
        }
      });

      if (error) throw error;

      // Create profile record
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            full_name: signupForm.fullName,
            username: signupForm.username,
            email: signupForm.email,
          });

        if (profileError) {
          console.error('Error creating profile:', profileError);
        }
      }

      setShowSignupModal(false);
      setShowVerificationMessage(true);
      setSignupForm({ email: '', password: '', fullName: '', username: '' });
      setIsDropdownOpen(false);
      setResendCountdown(20);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: signupForm.email,
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`
        }
      });

      if (error) throw error;

      toast.success('Verification email sent!');
      setResendCountdown(20);
    } catch (error) {
      toast.error('Failed to resend verification email');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setIsDropdownOpen(false);
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
    setShowVerificationMessage(false);
    setError(null);
    setLoginForm({ email: '', password: '' });
    setSignupForm({ email: '', password: '', fullName: '', username: '' });
  };

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 p-2 rounded-xl text-gray-600 hover:bg-white/60 hover:text-gray-900 hover:shadow-md transition-all duration-300"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          {profile && (
            <span className="hidden md:block text-sm font-medium text-gray-700">
              {profile.username}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 glass-effect rounded-xl border border-gray-100/50 shadow-xl z-50"
            >
              {user ? (
                // Logged in menu
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {profile?.full_name || user.email}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      @{profile?.username || 'user'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      // Navigate to profile when implemented
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <UserCircle className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                // Not logged in menu
                <div className="py-2">
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowSignupModal(true);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50 transition-colors"
                  >
                    <UserCircle className="w-4 h-4" />
                    <span>Sign Up</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4"
            onClick={closeModals}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-effect p-8 rounded-2xl border border-gray-100/50 w-full max-w-md mt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Welcome Back</h2>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Lock className="w-4 h-4 inline mr-2" />
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex space-x-4 mt-8">
                  <button
                    type="button"
                    onClick={closeModals}
                    className="flex-1 btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 btn-primary"
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </div>
              </form>

              <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{' '}
                <button
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowSignupModal(true);
                  }}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Sign up
                </button>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signup Modal */}
      <AnimatePresence>
        {showSignupModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4"
            onClick={closeModals}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-effect p-8 rounded-2xl border border-gray-100/50 w-full max-w-md mt-10"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join FinPal</h2>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <UserCheck className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={signupForm.fullName}
                    onChange={(e) => setSignupForm({ ...signupForm, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Username
                  </label>
                  <input
                    type="text"
                    value={signupForm.username}
                    onChange={(e) => setSignupForm({ ...signupForm, username: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '') })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="johndoe"
                    required
                    minLength={3}
                    maxLength={20}
                  />
                  <p className="text-xs text-gray-500 mt-1">3-20 characters, letters, numbers, and underscores only</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Lock className="w-4 h-4 inline mr-2" />
                    Password
                  </label>
                  <input
                    type="password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="••••••••"
                    minLength={6}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
                </div>

                <div className="flex space-x-4 mt-8">
                  <button
                    type="button"
                    onClick={closeModals}
                    className="flex-1 btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 btn-primary"
                  >
                    {loading ? 'Creating account...' : 'Sign Up'}
                  </button>
                </div>
              </form>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setShowSignupModal(false);
                    setShowLoginModal(true);
                  }}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Login
                </button>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email Verification Modal */}
      <AnimatePresence>
        {showVerificationMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModals}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-effect p-8 rounded-2xl border border-gray-100/50 w-full max-w-md text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Check Your Email</h2>
              
              <p className="text-gray-600 mb-6">
                📩 A verification email has been sent to your inbox. Please check your email to verify your account.
              </p>

              <div className="space-y-4">
                {resendCountdown > 0 ? (
                  <div className="text-sm text-gray-500">
                    Didn't get the email? Resend in {formatCountdown(resendCountdown)}
                  </div>
                ) : (
                  <button
                    onClick={handleResendVerification}
                    disabled={loading}
                    className="w-full bg-emerald-100 text-emerald-700 py-3 rounded-lg font-medium hover:bg-emerald-200 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Resend verification email'}
                  </button>
                )}
                
                <button
                  onClick={closeModals}
                  className="w-full btn-secondary"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserDropdown;