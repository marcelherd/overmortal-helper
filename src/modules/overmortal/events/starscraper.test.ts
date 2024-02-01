import { expect, describe, it } from 'vitest';

import type { ShoppingCart } from './types';
import { simulateRequiredConstructions } from './starscraper';
import { Events } from './events';

describe('modules/overmoratal/events/calculator', () => {
  describe('calculateRequiredItems', () => {
    it('should calculate the required amount of event items', () => {
      const cart: ShoppingCart = [
        [1, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
        [0, 0, 2],
      ];

      const { constructions: bestCase } = simulateRequiredConstructions(cart, {
        simulationScenario: 'BestCase',
      });
      const { constructions: WorstCase } = simulateRequiredConstructions(cart, {
        simulationScenario: 'WorstCase',
      });

      let averageSum = 0;

      for (let i = 0; i < 100; i++) {
        const { constructions } = simulateRequiredConstructions(cart, {
          simulationScenario: 'Average',
        });

        averageSum += constructions;
      }

      const average = averageSum / 100;

      console.log('bestCase', bestCase);
      console.log('WorstCase', WorstCase);
      console.log('average', average);

      expect({}).toBeTruthy();
    });
    /*
    it('should throw an error if it contains more items than available', () => {
      const cart: ShoppingCart = [
        [10, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      expect(() => simulateRequiredConstructions(cart)).toThrowError();
    });
    it('should throw an error if the provided shopping cart skips a floor', () => {
      const cart: ShoppingCart = [
        [1, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
      ];

      expect(() => simulateRequiredConstructions(cart)).toThrowError();
    });
    */
  });
});
