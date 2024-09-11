function convertTemperature(celsius: number): number[] {
  const kelvin: number = celsius + 273.15
  const fahrenheit: number = celsius * 1.80 + 32.00
  return [kelvin, fahrenheit]  
};