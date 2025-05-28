document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get input values
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const timePeriod = parseFloat(document.getElementById('timePeriod').value);

    // Validate inputs
    if (isNaN(initialInvestment) || isNaN(interestRate) || isNaN(timePeriod)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate future value
    const futureValue = initialInvestment * Math.pow(1 + interestRate / 100, timePeriod);

    // Display result
    document.getElementById('result').textContent = `Future Value: ₹${futureValue.toFixed(2)}`;
});