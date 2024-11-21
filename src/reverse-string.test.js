import reverseString from "./reverse-string";

test('"apple" should become "elppa"', () => {
  expect(reverseString('apple')).toBe('elppa'); 
 })