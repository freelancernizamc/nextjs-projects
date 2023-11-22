"use client"
import React from 'react';
import Image from 'next/image';
import login from '../../assets/login.png';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'





const LoginPage = () => {

    return (
        <div className='flex bg-gradient-to-r from-pink-700 to-blue-800'>
            <div className='w-1/2 mt-10 rounded-3xl'>
                <h1 className='text-5xl font-extrabold text-center text-white mt-10 mb-10'>Please Login</h1>
                <div className='text-center ml-48'>
                    <form className='form-control'>

                        {/* <label>Email</label>&emsp; */}
                        <input type='email' placeholder='Your Email' className='input inpute-border border-slate-400 mb-1 w-2/3' required></input><br />


                        {/* <label className='text-left'>Password</label>&ensp; */}
                        <input type='password' placeholder='Your Password' className='input inpute-border border-slate-400 mb-1 w-2/3' required></input><br />


                        <button className="btn btn-outline text-xl text-white hover:text-green-500 bg-gradient-to-r from-red-500 to-blue-500  border-black w-2/3">
                            Login
                        </button>

                    </form>
                    <div className='w-2/3'>
                        <p className="text-center text-white my-2">
                            <small>
                                New to Practice NextJs <Link href="/signup" className="text-orange-400 font-semibold">Sign Up</Link>
                            </small>
                        </p>
                        <div className="divider text-white">OR</div>
                        <div

                            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
                        >
                            <FcGoogle size={30} />
                            <p className='text-white'>Continue with Google</p>
                        </div>
                        <div

                            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
                        >
                            <FaGithub size={30} />
                            <p className='text-white'>Continue with Github</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 mt-20'>
                <Image src={login} alt='Login' className='rounded-full' />
            </div>
        </div>
    );
};

export default LoginPage;
