import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../Services/AuthService';

function AuthForm({isSignInPage}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigateSignIn = () =>{
    console.log('Clicked on p tag');
    if(isSignInPage){
      navigate("/account/signup")
    }else{
      navigate("/account/signin")
    }
  }

  
  const redirectToHome = () => {
    navigate("/");
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignInPage) {
      signIn(formData).then((res) => {
        let results = res.data;
        localStorage.setItem("instaToken", results.token)
        redirectToHome();
      });
    } else {
      signUp(formData).then((res) => {
        let results = res.data;
        localStorage.setItem("instaToken", results.token)
        redirectToHome();
      });
    }
  };

  return (
    <div className='bg-[#d2cfdf] h-screen w-full flex justify-center items-center'>
      <div className='flex h-[75%] w-[60%] bg-white rounded-[15px]'>
        <div className={`h-full w-[50%] justify-center items-center flex flex-col ${!isSignInPage && 'order-2'}`}>
          {isSignInPage ? (
            <>
              <h2>WELCOME</h2>
              <h3>CREATE AN ACCOUNT TO GET STARTED</h3>
            </>
          ) : (
            <>
              <h2>WELCOME BACK</h2>
              <h3>PLEASE LOGIN TO CONTINUE</h3>
            </>
          )}
          <form onSubmit={handleSubmit}>
            {isSignInPage && (
              <input
                className='shadow appearance-none border rounded w-[70%] my-3 py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline'
                name='userName'
                value={formData.userName}
                placeholder='UserName'
                type='text'
                onChange={handleChange}
                required
              />
            )}
            <input
              className='shadow appearance-none border rounded w-[70%] my-3 py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline'
              name='email'
              value={formData.email}
              placeholder='Email'
              type='email'
              onChange={handleChange}
              required
            />
            <input
              className='shadow appearance-none border rounded w-[70%] my-3 py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline'
              name='password'
              value={formData.password}
              placeholder='Password'
              type='password'
              onChange={handleChange}
              required
            />
            <button type='submit' className='bg-[#F7AD19] hover:bg-[#F27F0C] text-white font-bold py-2 my-3 rounded w-[35%]'>
              {isSignInPage ? 'SignUp' : 'SignIn'}
            </button>
          </form>
          <p onClick={navigateSignIn} className='cursor-pointer text-[#666] underline font-bold nunito'>
            {isSignInPage ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
          </p>
        </div>
        <div className={`h-full w-[50%] bg-[#F27F0C] rounded-[15px] ${!isSignInPage && 'order-1'}`}></div>
      </div>
    </div>
  );
}

export default AuthForm;