import { expect, describe, it } from 'vitest';

import type { ShoppingCart } from './types';
import { calculateRequiredItems } from './calculator';
import { Events } from './events';

describe('modules/overmoratal/events/calculator', () => {
  describe('calculateRequiredItems', () => {
    it('should calculate the required amount of event items', () => {
      const cart: ShoppingCart = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const requiredItems = calculateRequiredItems(cart, Events.Starscraper);
      expect(requiredItems).toBe(61);
    });
    it('should throw an error if it contains more items than available', () => {
      const cart: ShoppingCart = [
        [10, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      expect(() => calculateRequiredItems(cart, Events.Starscraper)).toThrowError();
    });
    it('should throw an error if the provided shopping cart skips a floor', () => {
      const cart: ShoppingCart = [
        [1, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
      ];

      expect(() => calculateRequiredItems(cart, Events.Starscraper)).toThrowError();
    });
  });
});
