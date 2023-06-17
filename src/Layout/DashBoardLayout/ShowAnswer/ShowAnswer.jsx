import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const ShowAnswer = () => {
    const [selectedCorrectAnswer, SetseledtedCorrectAnswer] = useState('')
    const [selectedName, SetseledtedName] = useState('')
    const [selecteWrongAnser, SetseledtedWrongAnser] = useState('');
    const [disabled, setdisabled] = useState(false);
    useEffect(() => {
        const storedCorrectAnser = localStorage.getItem('Correctanswer');
        if (storedCorrectAnser) {
            SetseledtedCorrectAnswer(JSON.parse(storedCorrectAnser));
        }
    }, []);
    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            SetseledtedName(JSON.parse(storedName));
        }
    }, []);
    useEffect(() => {
        const storedWrongAnser = localStorage.getItem('WrongAnswer');
        if (storedWrongAnser) {
            SetseledtedWrongAnser(JSON.parse(storedWrongAnser));
        }
    }, []);

    const url = 'https://quiz-mania-server.vercel.app/quizCollection';
    const { data: quizsInfo = [], refetch } = useQuery({
        queryKey: ["quizCollection"],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    function saveQuizInfo() {
        const quizsAlldata = {
            selectedCorrectAnswer: selectedCorrectAnswer,
            selectedName: selectedName,
            selecteWrongAnser: selecteWrongAnser,
        }
        fetch('https://quiz-mania-server.vercel.app/quizCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(quizsAlldata)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    refetch();
                    toast.success('Your quiz information are recorded successfully')
                    setdisabled(true)
                }
            })
    }


    return (
        <div className='font-serif text-lg'>
            <h1 className='text-lg font-bold mb-4'>Submit and get your all Information</h1>
            <button disabled={disabled} className='btn btn-primary mb-4 text-white' onClick={saveQuizInfo}>Submit Your Data</button>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className='text-black'>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>CorrectAnswer</th>
                            <th>WrongAnser</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quizsInfo.map((quiz, i) => <tr key={quiz._id}>
                                <th>{i + 1}</th>
                                <td>{quiz.selectedName}</td>
                                <td>{quiz.selectedCorrectAnswer}</td>
                                <td>{quiz.selecteWrongAnser}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowAnswer;