import analizeArray from "./analyze-array";

test('Array of numbers should report correct properties', () => { 
  const givenArray = [10, 55, 13, 6, 34];
  const expectedObject = {
    average: 23.6,
    min: 6,
    max: 55,
    length: 5
  };
  expect(analizeArray(givenArray)).toEqual(expectedObject);
 })