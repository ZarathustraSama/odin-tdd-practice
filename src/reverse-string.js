function reverseString(s) {
  let reverseS = '';
  const sChars = [...s];
  while (sChars.length > 0) {
    reverseS += sChars.pop();
  }
  return reverseS;
}

export default reverseString;