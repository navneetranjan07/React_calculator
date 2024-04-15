import React, { useState } from 'react';

const Calculator = () => {
    const [expression, setExpression] = useState('');

    const handleButtonClick = (value) => {
        setExpression(expression + value);
    };

    const handleClear = () => {
        setExpression('');
    };

    const handleCalculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setExpression(eval(expression).toString());
        } catch (error) {
            setExpression('Error');
        }
    };

    return (
        <div className='h-screen bg-black flex justify-center items-center '>
            <div className="container h-96 p-4 max-w-80 text-blue-400 bg-gray-200 rounded-lg relative overflow-hidden">First React Project Of Simple Calculator By Navneet Ranjan
                <div className='h-20 w-20 bg-red-400 absolute rounded-full opacity-50 top-[-40px] left-[-40px]'></div>
                <input
                    className="w-full mt-4 text-right p-2 rounded-lg mb-4"
                    type="text"
                    value={expression}
                />
                <div className="grid grid-cols-4 gap-2">
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('7')}>
                        7
                    </button>
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('8')}>
                        8
                    </button>
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('9')}>
                        9
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => handleButtonClick('/')}>
                        /
                    </button>
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('4')}>
                        4
                    </button>
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('5')}>
                        5
                    </button>
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('6')}>
                        6
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => handleButtonClick('*')}>
                        *
                    </button>
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('1')}>
                        1
                    </button>
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('2')}>
                        2
                    </button>
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('3')}>
                        3
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => handleButtonClick('-')}>
                        -
                    </button>
                    <button className="col-span-2 bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('0')}>
                        0
                    </button>
                    <button className="bg-gray-400 text-white p-2 rounded-lg" onClick={() => handleButtonClick('.')}>
                        .
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => handleButtonClick('+')}>
                        +
                    </button>
                    <button className="col-span-2 bg-red-500 text-white p-2 rounded-lg" onClick={handleClear}>
                        Clear
                    </button>
                    <button className="col-span-2 bg-green-500 text-white p-2 rounded-lg" onClick={handleCalculate}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
