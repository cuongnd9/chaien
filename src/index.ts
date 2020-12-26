/**
 * Create random code with length option.
 * @param length Length of code
 * length from 4 to 64.
 */
export function code(length: number = 4): string {
  if (length < 4 || length > 64) {
    length = 4;
  }
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}
