import Options from './Options';

const AllQuiz = ({ quizs, SetCount, Count, SetWrongAns, wrongAns }) => {
    const { options1, options2, options3, options4, quiz } = quizs;
    const options = [options1, options2, options3, options4,];

    return (
        <div>
            <div className='bg-slate-300 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
                <div className='bg-gray-600 md:3/4 sm:w-full rounded-md lg:p-5 md:p-3 sm:p-2 my-4 mx-auto relative'>
                    <p className='bg-gray-200 text-gray-900 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto text-center relative'>Q: {quiz}</p>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-4  items-center my-3 text-center ms-10'>
                    {
                        options.map(option => <Options key={option.quiz} data={quizs} option={option} SetCount={SetCount} Count={Count} SetWrongAns={SetWrongAns} wrongAns={wrongAns}></Options>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllQuiz;