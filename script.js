document.getElementById('calculateBtn').addEventListener('click', function() {
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(income) || isNaN(taxRate)) {
        resultDiv.textContent = "Please enter valid numbers!";
        resultDiv.style.color = "red";
        return;
    }

    try {
        const tax = calculateTax(income, taxRate);
        resultDiv.textContent = `Total Tax: $${tax.toFixed(2)}`;
        resultDiv.style.color = "green";
    } catch (error) {
        resultDiv.textContent = error.message;
        resultDiv.style.color = "red";
    }
});