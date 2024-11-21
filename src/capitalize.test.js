import capitalize from "./capitalize";

test('"apple" should become "Apple"', () => {
   expect(capitalize('apple')).toBe('Apple'); 
  })