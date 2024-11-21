function caesarCipher(string, shift) {
  const asciiChars = bytes(string);
  const upcaseChars = range(65, 90);
  const downcaseChars = range(97, 122);
  let cipherChars = [];
  for (const char of asciiChars) {
    // ASCII 65 is the 'A' character
    if (upcaseChars.includes(char)) {
      cipherChars.push((char - 65 + (shift % upcaseChars.length) + upcaseChars.length) % upcaseChars.length + 65)
    }
    // ASCII 97 is the 'a' character
    else if (downcaseChars.includes(char)) {
      cipherChars.push((char - 97 + (shift % downcaseChars.length) + downcaseChars.length) % downcaseChars.length + 97)
    }
    // Everything else just gets inserted as is
    else {
      cipherChars.push(char);
    }
  }
  return String.fromCodePoint(...cipherChars);
}

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

function bytes(string) {
  return [...string].map(c => string.charCodeAt([...string].indexOf(c)))
}

export default caesarCipher;