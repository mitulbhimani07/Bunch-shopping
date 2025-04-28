import { useState } from 'react';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '1') { // Replace with your actual password
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (isAuthenticated) {
    return null; // Or redirect to the main page
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to Our Store</h1>
          <p className="text-gray-600 mt-2">This store is password protected. Please enter the password to continue.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Store Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter password"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Enter Store
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Are you the store owner? <a href="#" className="text-amber-600 hover:underline">Log in here</a></p>
        </div>
      </div>
    </div>
  );
}