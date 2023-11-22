import Image from 'next/image';
import React from 'react';
import login from './../../assets/login.gif';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import css from './style.css';

const SignUpPage = () => {
    return (
        <div className='bg-gradient-to-r from-pink-700 to-blue-800'>
            <h1 className='text-5xl font-extrabold text-white text-center'>Sign Up Now</h1>

            <div className='flex'>
                <div className='w-1/2'>
                    <Image src={login} alt='gift' />
                </div>
                <div className='w-1/2 mt-32'>

                    <form className='form-control shadow-2xl p-5'>
                        <input type='text' placeholder='First Name' className='input input-bordered w-1/2 mb-1' />
                        <input type='text' placeholder='Last Name' className='input input-bordered w-1/2 mb-1' />
                        <input type='email' placeholder='Your Email' className='input input-bordered w-1/2 mb-1' />
                        <input type='text' placeholder='Your Phone Number' className='input input-bordered w-1/2 mb-1' />
                        <input type='url' placeholder='Your Image Url' className='input input-bordered w-1/2 mb-1' />

                        <div className='my-2 text-white'>
                            <p>Select Gender</p>
                            <input type="radio" name="gender" value="male" />Male &emsp;
                            <input type="radio" name="gender" value="fmale" />Female
                        </div>
                        <button className="btn btn-outline text-xl text-white hover:text-green-500 bg-gradient-to-r from-red-500 to-blue-500  border-black w-1/2">
                            Sign Up
                        </button>
                    </form>
                    <div className='w-2/3'>
                        <p className="text-center text-white my-2">
                            <small>
                                Already Have an Account <Link href="/login" className="text-orange-400 font-semibold">Sign Up</Link>
                            </small>
                        </p>
                        <div className="divider text-white">OR</div>
                        <div

                            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer w-3/4"
                        >
                            <FcGoogle size={30} />
                            <p className='text-white'>Continue with Google</p>
                        </div>
                        <div

                            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer w-3/4"
                        >
                            <FaGithub size={30} />
                            <p className='text-white'>Continue with Github</p>
                        </div>
                    </div>
                </div>
            </div>

            <button class="button-89" role="button">Button 89</button>


        </div>
    );
};

export default SignUpPage;