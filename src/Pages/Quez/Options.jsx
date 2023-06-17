import { toast } from 'react-hot-toast';

const Options = ({ option, data, SetCount, Count, SetWrongAns, wrongAns }) => {
    const usehandler = (data) => {
        const { answer } = data;
        if (option === answer) {
            toast.success('Your Answer is Correct')
            localStorage.setItem('answer', JSON.stringify(data));
            SetCount(Count + 1)
        }
        else {
            toast.error(`Your Answer is wrong Correct answer is = ${answer}`)
            localStorage.setItem('wrong answer', JSON.stringify(data));
            SetWrongAns(wrongAns + 1)
        }
    }
    return (
        <div>
            <div className='flex items-center gap-4 font-serif'>
                <input type="radio" name="radio-4" className="radio radio-accent bg-slate-300  rounded hover:bg-green-300 hover:text-white ease-in duration-300 cursor-pointer " onClick={() => usehandler(data)} />{option}
            </div>
        </div>
    );
};

export default Options;