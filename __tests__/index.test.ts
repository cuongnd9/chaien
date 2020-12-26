import { code } from '../src';

test('should create a random code', () => {
  expect(code(2)).toHaveLength(4);
  expect(code(100)).toHaveLength(4);
  expect(code()).toHaveLength(4);
  expect(code(4)).toHaveLength(4);
  expect(code(50)).toHaveLength(50);
});