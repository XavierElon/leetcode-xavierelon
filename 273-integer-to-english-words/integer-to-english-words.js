function numberToWords(num) {
    if (num === 0) return 'Zero';

    const belowTwenty = [
        '',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
    ];

    const tens = [
        '',
        '',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety',
    ];

    const thousands = ['', 'Thousand', 'Million', 'Billion'];

    function helper(n) {
        let result = '';

        if (n >= 100) {
            result += belowTwenty[Math.floor(n / 100)] + ' Hundred';
            n = n % 100;
            if (n > 0) result += ' ';
        }

        if (n >= 20) {
            result += tens[Math.floor(n / 10)];
            n = n % 10;
            if (n > 0) result += ' ';
        }

        if (n > 0 && n < 20) {
            result += belowTwenty[n];
        }

        return result;
    }

    let result = '';
    let i = 0;

    while (num > 0) {
        const chunk = num % 1000;
        if (chunk !== 0) {
            const chunkWords = helper(chunk);
            if (thousands[i]) {
                result = chunkWords + ' ' + thousands[i] + (result ? ' ' + result : '');
            } else {
                result = chunkWords + (result ? ' ' + result : '');
            }
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
}