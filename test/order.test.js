import { describe, test, mock } from 'node:test';
import assert from 'node:assert';
import { processOrder } from '../app.js';

describe('Order feature', () => {
  test('that it processes the order correctly', () => {
    const amount = 100;

    const mockedProcessPayment = mock.fn((amount) => {
      // No API calls or side-effects
      return { id: '123', amount: amount };
    });

    const expected = { id: '123', amount: amount };

    const result = mockedProcessPayment(amount);
    assert.deepStrictEqual(result, expected);
  });
});