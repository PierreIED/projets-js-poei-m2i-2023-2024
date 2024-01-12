document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('valeur1');
    
    let currentValue = '';
    let storedValue = '';
    let currentOperator = '';

    function calculate() {
        const num1 = parseFloat(storedValue);
        const num2 = parseFloat(currentValue);
        
        switch (currentOperator) {
            case 'plus': return num1 + num2;
            case 'moin': return num1 - num2;
            case 'multiplier': return num1 * num2;
            case 'diviser': return num2 !== 0 ? num1 / num2 : 'Erreur'; // Gestion de la division par zéro
            default: return currentValue;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.id;

            if (!isNaN(value) || value === '.') {
                currentValue += value;
                display.value = currentValue;
            } else if (['plus', 'moin', 'multiplier', 'diviser'].includes(value)) {
                if (currentValue !== '') {
                    currentOperator = value;
                    storedValue = currentValue;
                    currentValue = '';
                }
            } else if (value === 'result') {
                if (currentValue !== '' && currentOperator !== '') {
                    currentValue = calculate();
                    display.value = currentValue;
                    currentOperator = '';
                }
            }
        });
    });
});

