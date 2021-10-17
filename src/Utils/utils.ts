export const operations = (operator: string, prev: number, next: number) => {
  if (operator === '+') return prev + next;
  if (operator === '-') return prev - next;
  if (operator === '×') return prev * next;
  if (operator === '÷') return prev / next;
  if (operator === '=') return next;
  return;
};
