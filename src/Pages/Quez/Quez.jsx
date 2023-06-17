import React, { useEffect, useState } from 'react';
import AllQuiz from './AllQuiz';
import { Link } from 'react-router-dom';

const Quez = () => {
    const [quizData, setQuizData] = useState(null);

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const response = await fetch('https://quiz-mania-server.vercel.app/quiz');
                const data = await response.json();
                setQuizData(data);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };
        fetchQuizData();
    }, []);

    const [Count, SetCount] = useState(0);
    const [wrongAns, SetWrongAns] = useState(0)
    localStorage.setItem('Correctanswer', JSON.stringify(Count))
    localStorage.setItem('WrongAnswer', JSON.stringify(wrongAns))
    return (
        <div className='font-serif'>
            <h1 className='text-center font-bold text-xl'>All the Questions are here</h1>
            <div className='my-3'>
                {
                    quizData?.map(quizs => <AllQuiz key={quizs._id} quizs={quizs} SetCount={SetCount} Count={Count}
                        SetWrongAns={SetWrongAns} wrongAns={wrongAns}
                    ></AllQuiz>)
                }
            </div>
            <div className='flex justify-center items-center mb-4 mt-4'>
                <Link to='/dashboard'> <button className='btn btn-primary'>See Result</button> </Link>
            </div>
        </div>
    );
};

export default Quez;