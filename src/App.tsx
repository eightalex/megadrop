import { useState } from 'react';
import './styles.scss';

export default function App() {
  const [totalPoints, setTotalPoints] = useState('');
  const [myPoints, setMyPoints] = useState('');
  const [totalTokens, setTotalTokens] = useState('');
  const [tokenPrice, setTokenPrice] = useState('');
  const [deposit, setDeposit] = useState('');
  const [holdDays, setHoldDays] = useState('14');
  const [result, setResult] = useState('');

  function calculate() {
    const tPoints = parseFloat(totalPoints) || 0;
    const mPoints = parseFloat(myPoints) || 0;
    const tTokens = parseFloat(totalTokens) || 0;
    const price = parseFloat(tokenPrice) || 0;
    const dep = parseFloat(deposit) || 0;
    const days = parseInt(holdDays, 10) || 14;

    if (!tPoints || !mPoints || !tTokens || !price || !dep) {
      setResult('Please fill in all fields.');
      return;
    }

    const myTokens = (mPoints / tPoints) * tTokens;
    const rewardValue = myTokens * price;
    const apr = (rewardValue / dep) * (365 / days) * 100;

    setResult(
      `Reward tokens: ${myTokens.toFixed(4)}\n` +
      `Reward value: ${rewardValue.toFixed(2)} USDT\n` +
      `APR: ${apr.toFixed(2)}%`
    );
  }

  return (
    <div className="container">
      <h1>Megadrop APR Calculator</h1>
      <div className="form">
        <label>Total Points <input value={totalPoints} onChange={e => setTotalPoints(e.target.value)} type="number" step="any" /></label>
        <label>My Points <input value={myPoints} onChange={e => setMyPoints(e.target.value)} type="number" step="any" /></label>
        <label>Total Tokens <input value={totalTokens} onChange={e => setTotalTokens(e.target.value)} type="number" step="any" /></label>
        <label>Token Price (USDT) <input value={tokenPrice} onChange={e => setTokenPrice(e.target.value)} type="number" step="any" /></label>
        <label>Deposit Value (USDT) <input value={deposit} onChange={e => setDeposit(e.target.value)} type="number" step="any" /></label>
        <label>Hold Days
          <select value={holdDays} onChange={e => setHoldDays(e.target.value)}>
            <option value="14">14</option>
            <option value="30">30</option>
          </select>
        </label>
        <button onClick={calculate}>Calculate</button>
      </div>
      <pre>{result}</pre>
    </div>
  );
}

