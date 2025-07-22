function $(id: string): HTMLInputElement {
  return document.getElementById(id) as HTMLInputElement;
}

document.getElementById('calc')!.addEventListener('click', () => {
  const totalPoints = parseFloat($('#totalPoints').value) || 0;
  const myPoints = parseFloat($('#myPoints').value) || 0;
  const totalTokens = parseFloat($('#totalTokens').value) || 0;
  const price = parseFloat($('#tokenPrice').value) || 0;
  const holdDays = parseInt($('#holdDays').value, 10) || 14;
  const deposit = parseFloat($('#deposit').value) || 0;

  if (!totalPoints || !myPoints || !totalTokens || !price || !deposit) {
    $('#result').innerText = 'Please fill in all fields.';
    return;
  }

  const myTokens = (myPoints / totalPoints) * totalTokens;
  const rewardValue = myTokens * price;
  const apr = ((rewardValue / deposit) * (365 / holdDays)) * 100;

  const result = `Reward tokens: ${myTokens.toFixed(4)}\n` +
                 `Reward value: ${rewardValue.toFixed(2)} USDT\n` +
                 `APR: ${apr.toFixed(2)}%`;

  $('#result').innerText = result;
});
