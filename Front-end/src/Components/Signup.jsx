import { Button, Input } from './index'
import { Link } from "react-router-dom"
import {ToastContainer } from 'react-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useSignup } from '../hooks/useSignup';

function Signup() {
    const { data, errors, handleSignup, handleonChange,
        validateFields, passwordVisisble, showpassword
    } = useSignup();



    return (
        <>
            <h2 className=' text-center text-xl  text-gray-900  mt-4 md:mt-16  md:text-[20px]'>
                Create  a  New Account
            </h2>
            <div
                className=' px-6 md:flex items-center justify-center w-full mt-4 mb-20   '
            >
                <div className={`md:mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black `}>
                    <div className="flex justify-center">

                    </div>


                    <form className=''>
                        <div className='space-y-5'>
                            <div className='relative'>
                                <Input
                                    name="username"
                                    value={data.username}
                                    placeholder="Enter username"
                                    type="text"
                                    onChange={handleonChange}
                                    className={`${errors.username ? 'border-red-500' : 'border-blue-800'}`}
                                />


                            </div>
                            {
                                errors.username && (
                                    <p className='text-sm ml-2 text-red-500'>{errors.username}</p>
                                )
                            }


                            <div className='relative'>
                                <Input
                                    name="email"
                                    value={data.email}
                                    placeholder="Enter your email"
                                    type="email"
                                    onChange={handleonChange}
                                    className={`${errors.email ? 'border-red-500' : 'border-blue-800'}`}

                                />

                            </div>
                            {
                                errors.email && (
                                    <p className='text-red-500 text-sm ml-2 -mb-20'>{errors.email}</p>
                                )
                            }

                            <div className='relative'>
                                <Input
                                    name="password"
                                    value={data.password}
                                    type={showpassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    onChange={handleonChange}
                                    className={`${errors.password ? 'border-red-500' : 'border-blue-800'}`}
                                />
                                <div className='absolute right-0 bottom-3 flex items-center pr-3 
                            cursor-pointer'
                                    onClick={passwordVisisble}>
                                    {showpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}


                                </div>
                            </div>
                            {
                                errors.password && (
                                    <p className='text-sm text-red-500 ml-2'>{errors.password}</p>
                                )
                            }


                            <p className=" ml-28 text-black/60 md:ml-48">
                                Already have any account?&nbsp;
                                <Link
                                    to="/login"
                                    className="font-medium text-primary transition-all duration-200 hover:underline"
                                >
                                    Login
                                </Link>
                            </p>

                            <Button
                                onClick={handleSignup}
                                type="submit"
                                className="w-full"
                            >Signup</Button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>

    )
}

export default Signup