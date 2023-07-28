function convertToRoman(num) {
    let re = [];
    const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
    do {
      for (const item of romanNumerals) {
        if (num >= item.value) {
          re.push(item.symbol);
          console.log(re);
          num -= item.value;
          console.log(num);
          break;
        }
      }
    } while (num > 0);
    
    let b = re.join("");
    console.log(b);
    return b;
  }
  
  convertToRoman(29);