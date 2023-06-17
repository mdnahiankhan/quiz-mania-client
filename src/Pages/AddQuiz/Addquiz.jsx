import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Addquiz = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const handleData = (data) => {
        const questions = {
            quiz: data.quiz,
            answer: data.answer,
            options1: data.options1,
            options2: data.options2,
            options3: data.options3,
            options4: data.options4
        };
        fetch('https://quiz-mania-server.vercel.app/quiz', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(questions)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged > 0) {
                    toast.success('Your question is added successfully')
                    navigate('/quiz')
                };
            })
    }

    return (
        <div className='font-serif'>
            <h1 className='text-xl font-bold text-center'>Create Questions Here</h1>
            <form onSubmit={handleSubmit(handleData)} noValidate="" className="container w-full max-w-2xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50 ng-untouched ng-pristine ng-valid text-black mb-5">
                <fieldset className="w-full text-center space-y-1 dark:text-gray-900 mt-4 mb-4">
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Type Question</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register('quiz')} required className="input input-bordered w-full" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Correct Answers</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register('answer')} required className="input input-bordered w-full dark:text-violet-900" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Options1</span>
                        </label>
                        <input type="text" placeholder="put the options" {...register('options1')} required className="input input-bordered w-full dark:text-violet-900" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Options2</span>
                        </label>
                        <input type="text" placeholder="put the options" {...register('options2')} required className="input input-bordered w-full dark:text-violet-900" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Options3</span>
                        </label>
                        <input type="text" placeholder="put the options" {...register('options3')} required className="input input-bordered w-full dark:text-violet-900" />
                    </div>
                    <div className='mt-10'>
                        <label className="label">
                            <span className="label-text dark:text-violet-900">Options4</span>
                        </label>
                        <input type="text" placeholder="put the options" {...register('options4')} required className="input input-bordered w-full dark:text-violet-900" />
                    </div>
                </fieldset>
                <div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-100">Create Question</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Addquiz;