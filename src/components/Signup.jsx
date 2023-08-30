import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      alert('User Already Exists')
      console.log(e.message);
    }
  };

  return (
    <div className='  rounded-2xl border-4 border-indigo-800 max-w-[700px] mx-auto my-16 p-10'>
      <div>
      <img
              className="rounded-2xl border-2 border-indigo-800 mx-auto mt-3 h-20 w-20 rounded-full"
              src="https://cdn.shopify.com/app-store/listing_images/492da9579bfc706e736a9935b163a871/icon/CLuomtPgiP0CEAE=.jpeg"
              alt=""
            />
        <h1 className='text-2xl font-bold py-2 text-center'>Sign up </h1>
       
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='border p-3'
            type='email'
            required
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='border p-3'
            type='password'
            required
          />
        </div>
        <button className='border border-blue-500 font-bold bg-indigo-600 hover:bg-blue-500 w-full p-4 my-2 text-white rounded-2xl'>
          Sign Up
        </button>
        <p className='py-2 text-center'>
          Already have an account yet?{' '}
          <Link to='/' className=' rounded-2xl border-2 border-indigo-800 p-2 hover:bg-green-300 '>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;