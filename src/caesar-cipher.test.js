import caesarCipher from "./caesar-cipher";

test('"HeLLo, Xylophone!" should become "KhOOr, Aboskrqh!"', () => { 
  expect(caesarCipher("HeLLo, Xylophone!", 3)).toBe("KhOOr, Aborskrqh!");
 });