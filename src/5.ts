function getRandomTsCode(): string {
  const possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 10; i++) {
    const charIndex = Math.floor(Math.random() * possibleChars.length);
    code += possibleChars.charAt(charIndex);
  }
  return code;
}
