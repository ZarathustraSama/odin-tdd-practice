import Calculator from "./calculator";

const calc = new Calculator();

test('adds 1 + 2 to equal 3', () => { 
  expect(calc.add(1, 2)).toBe(3);
 });

 test('subtracts 3 - 4 to equal -1', () => {
  expect(calc.subtract(3, 4)).toBe(-1);
 });

 test('divides 1 / 3 to be close to 0.3333...', () => {
  expect(calc.divide(1, 3)).toBeCloseTo(0.3333);
 });

 test('multiplies 4 * 7 to equal 28', () => {
  expect(calc.multiply(4, 7)).toBe(28);
 });