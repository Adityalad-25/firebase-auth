import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      alert('You dont have an account please sign up first!')
      console.log(e.message)
    }
  };

  return (
    <div className=' rounded-2xl border-4 border-indigo-800 max-w-[700px] mx-auto my-16 p-10'>
      <div>
      <img
              className=" rounded-2xl border-2 border-indigo-800 mx-auto h-20 w-20 rounded-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/021/919/677/small/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg"
              alt=""
            />
        <h1 className='text-2xl font-bold py-2 text-center'>Sign in</h1>
      
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' required />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' required />
        </div>
        <button className='border border-blue-500 bg-indigo-600 hover:bg-blue-500 w-full p-4 my-2 text-white rounded-2xl'>
          Sign In
        </button>
        <p className='py-2 text-center'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='rounded-2xl border-2 border-indigo-800 p-2 hover:bg-green-300 '>
            Sign up.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;