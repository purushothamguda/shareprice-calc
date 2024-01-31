import React, { ChangeEvent, FormEvent, useState } from 'react'

interface CalculatorData {
    investmentAmount: number;
    percentageReturn: number;
    profitAmount: number | null;
}


const ProfitOnInvestmentCalculator = () => {
    const [calculatorData, setCalculatorData] = useState<CalculatorData>({
        investmentAmount: 0,
        percentageReturn: 0,
        profitAmount: null,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCalculatorData({
            ...calculatorData,
            [name]: parseFloat(value),
        });
    };

    const calculateProfit = (e:FormEvent) => {
        e.preventDefault();
        const profit = (calculatorData.investmentAmount * calculatorData.percentageReturn) / 100;
        setCalculatorData({
            ...calculatorData,
            profitAmount: profit,
        });
    };

    return (
        <div className='card'>
        <h1 style={{ color: '#333' }}>Profit on Investment Calculator</h1>
        <div className='container'>
            <h2>Calculate Profit on Investment</h2>
            <form onSubmit={calculateProfit} className='form'>
                <div className="form-group">
                    <label>Investment Amount (INR): </label>
                    <input
                        type="number"
                        name="investmentAmount"
                        value={calculatorData.investmentAmount}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Percentage Return: % </label>
                    <input
                        type="number"
                        name="percentageReturn"
                        value={calculatorData.percentageReturn}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Calculate Profit</button>
            </form>
            {calculatorData.profitAmount !== null && (
                <div>
                    <p>If you invest {calculatorData.investmentAmount} INR and it gives {calculatorData.percentageReturn}% returns, your profit will be {calculatorData.profitAmount.toFixed(2)} INR.</p>
                </div>
            )}
        </div>
    </div>
    )
}

export default ProfitOnInvestmentCalculator