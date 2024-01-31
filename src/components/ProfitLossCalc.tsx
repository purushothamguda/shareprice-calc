import React, { ChangeEvent, FormEvent, useState } from 'react'
import './ProfitLossCalc.css'
import SharePurchaseCalculator from './SharePurchaseCalculator';
import ProfitOnInvestmentCalculator from './ProfitOnInvestmentCalculator';

interface StockData {
    quantity: number;
    purchasePrice: number;
    currentPrice: number;
}

interface ProfitLoss {
    amount: number | null;
    percentage: number | null;
    isProfit: boolean;
}

const ProfitLossCalc = () => {
    const [stockData, setStockData] = useState<StockData>({ quantity: 0, purchasePrice: 0, currentPrice: 0 });
    const [profitLoss, setProfitLoss] = useState<ProfitLoss>({ amount: null, percentage: null, isProfit: false });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStockData({
            ...stockData,
            [e.target.name]: parseFloat(e.target.value)
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const invested = stockData.quantity * stockData.purchasePrice;
        const currentValuation = stockData.quantity * stockData.currentPrice;
        const profitLossAmount = currentValuation - invested;
        const profitLossPercentage = (profitLossAmount / invested) * 100;
        const isProfit = profitLossAmount >= 0;
        setProfitLoss({ amount: profitLossAmount, percentage: profitLossPercentage, isProfit });
    };

    return (
        <div className='share-container'>
            <ProfitOnInvestmentCalculator/>
              <SharePurchaseCalculator/>
            <div className='card'>
                <h1 style={{ color: '#333' }}>Profit/Loss Calculator</h1>
                <div className='container'>
                    <h2>Share Profit or Loss Calculator</h2>
                    <form onSubmit={handleSubmit} className='form'>
                        <div className="form-group">
                            <label>Quantity: </label>
                            <input
                                type="number"
                                name="quantity"
                                value={stockData.quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Purchase Price: </label>
                            <input
                                type="number"
                                name="purchasePrice"
                                value={stockData.purchasePrice}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Current Price: </label>
                            <input
                                type="number"
                                name="currentPrice"
                                value={stockData.currentPrice}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit">Calculate</button>
                    </form>
                    {profitLoss.amount && profitLoss.percentage !== null && (
                        <div>
                            <p>Invested Amount: ₹{(stockData.quantity * stockData.purchasePrice).toFixed(2)}</p>
                            <p className={profitLoss.isProfit ? 'green-text' : 'red-text'}>{profitLoss.isProfit ? "Profit" : "Loss"} %: {profitLoss.percentage.toFixed(2)}%</p>
                            <p className={profitLoss.isProfit ? 'green-text' : 'red-text'}>{profitLoss.isProfit ? "Profit" : "Loss"} Amount: ₹{profitLoss.amount.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            </div>
         
        </div>
    )
}

export default ProfitLossCalc