import React, { ChangeEvent, FormEvent, useState } from 'react'

interface SharePurchaseResult {
    quantity: number;
}

interface InvestmentData {
    investmentAmount: number;
    stockPrice: number;
}

const SharePurchaseCalculator = () => {
    const [investmentData, setInvestmentData] = useState<InvestmentData>({
        investmentAmount: 0,
        stockPrice: 0,
    });
    const [sharePurchaseResult, setSharePurchaseResult] = useState<SharePurchaseResult>({ quantity: 0 });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInvestmentData({
            ...investmentData,
            [e.target.name]: parseFloat(e.target.value),
        });
    };
    
    const calculateShares = (e: FormEvent) => {
        e.preventDefault();
        const purchasePrice = investmentData.stockPrice;
        const shares = Math.floor(investmentData.investmentAmount / purchasePrice);
        setSharePurchaseResult({ quantity: shares });
    };

  return (
    <div className='card'>
            <h1 style={{ color: '#333' }}>Share Purchase Calculator</h1>
            <div className='container'>
                <h2>Calculate Shares for Investment</h2>
                <form onSubmit={calculateShares} className='form'>
                    <div className="form-group">
                        <label>Investment Amount (INR): </label>
                        <input
                            type="number"
                            name="investmentAmount"
                            value={investmentData.investmentAmount}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Current Stock Price (INR): </label>
                        <input
                            type="number"
                            name="stockPrice"
                            value={investmentData.stockPrice}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Calculate Shares</button>
                </form>
                {sharePurchaseResult.quantity > 0 && (
                    <div>
                        <p>With {investmentData.investmentAmount} INR at {investmentData.stockPrice} INR per share, you can buy {sharePurchaseResult.quantity} shares.</p>
                    </div>
                )}
            </div>
        </div>
  )
}

export default SharePurchaseCalculator