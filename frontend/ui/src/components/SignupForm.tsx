import React, { useState } from 'react';
import { useSignupMutation } from '../features/authapiSlice';
import { useAppDispatch } from '../hooks/hooks';
import { setUser } from '../features/authSlice';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await signup({ username, password }).unwrap();
      localStorage.setItem('token', data.token);
      dispatch(setUser({ id: data.id, username: data.username }));
    } catch (err) {
      alert('Signup failed!');
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
