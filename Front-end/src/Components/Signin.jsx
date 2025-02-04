import React, { useState } from 'react';
import { Button, Input } from './index';
import {  Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; 
import { useLogin } from '../hooks/useLogin';


const Signin = () => {
  const{data,
        passwordvisible,
        validateFields,
        handleSignin,
        handleonChange,
        errors,
        showPassword} = useLogin();
  return (
    <>
      <h2 className='text-center text-xl text-gray-900 mt-4 md:mt-12 md:text-[20px]'>
        Login to your account
      </h2>
      <div className='px-6 md:flex items-center justify-center w-full mt-4 mb-20'>
        <div className={`md:mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black`}>
          <form className=''>
            <div className='space-y-5'>
              <Input
                name = "email"
                value={data.email}
                placeholder="Enter your email"
                type="email"
                onChange={handleonChange}
                className = {`${errors.email? 'border-red-500':''}`}
              />
               {
                  errors.email && (
                    <p className='text-sm text-red-500 ml-2'>{errors.email}</p>
                  )
                }

              <div className="relative">
                <Input
                  name = "password"
                  value = {data.password}
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password"
                  onChange={handleonChange}
                  className = {`${errors.password? 'border-red-500':''}`}
                />
               
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={passwordvisible}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  
                </div>
              </div>
              {
                  errors.password && (
                    <p className='text-sm text-red-500 ml-2'>{errors.password}</p>
                  )
                }
              <div className='ml-80'>
                <Link to = '/forgot-password'><p className='text-sm cursor-pointer -mb-3 -mt-4 underline'>Forgot Password</p></Link>
              </div>

              <p className="ml-28 text-black/60 md:ml-[184px]">
                Already have an account?&nbsp;
                <Link
                  to="/Signup"
                  className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                  Signup
                </Link>
              </p>

              <Button
                onClick={handleSignin}
                type="submit"
                className="w-full"
              >Login</Button>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
