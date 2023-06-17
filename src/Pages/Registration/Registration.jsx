import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignupError] = useState('');
    const navigate = useNavigate();
    const handleSignUp = data => {
        console.log(data);
        setSignupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("user created successfully");

                localStorage.setItem('name', JSON.stringify(data.name))
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error.message)
                setSignupError(error.message)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://quiz-mania-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log("SaveUser", data);
                navigate('/')
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center font-serif'>
            <div className='container w-1/3 max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-200 ng-untouched ng-pristine ng-valid text-black mt-6 mb-6'>
                <h1 className="text-2xl font-bold text-center">SignUp</h1>
                <form onSubmit={handleSubmit(handleSignUp)} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-900">Enter Your Name</label>
                        <input type="text" name="name"{...register("name", { required: true })} placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-900">Enter Your Email</label>
                        <input type="text" name="Email"{...register("email", { required: true })} placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-900">Password</label>
                        <input type="password" name="password" {...register("password", { required: true })} placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400 " />
                    </div>
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign Up</button>
                </form>
                <p className="text-sm text-center sm:px-6 dark:text-gray-900 ">Already Have an account? please
                    <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-violet-600">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;