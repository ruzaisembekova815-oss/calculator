function calculateTax(income, taxRate) {
    if (income < 0 || taxRate < 0) {
        throw new Error("Income and tax rate must be non-negative");
    }
    return (income * taxRate) / 100;
}

// Экспорт для тестирования (если используется Node.js / Jasmine)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculateTax;
}