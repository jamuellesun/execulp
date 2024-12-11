const monthlyIncomes: { [key: string]: number } = { ... }; // initialize monthlyIncomes object
// ...
const incomeKey = 'January' as keyof typeof monthlyIncomes;
console.log(monthlyIncomes[incomeKey]);
