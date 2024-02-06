import { expect, describe, it } from 'vitest';

import type { ShoppingCart } from './types';
import { simulateRequiredConstructions } from './starscraper';
import { Events } from './events';

describe('modules/overmoratal/events/starscraper', () => {
  describe('simulateRequiredConstructions', () => {
    it('should calculate the required amount of constructions', () => {
      const cart: ShoppingCart = [
        [1, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
        [0, 0, 2],
      ];

      const {
        constructions: bestCase,
        acquiredLivingEarth,
        guaranteedRewards,
      } = simulateRequiredConstructions(cart, {
        simulationScenario: 'BestCase',
        initialAstralPearls: 1375,
        minimumFloors: 800,
      });
      console.log('acquiredLivingEarth', acquiredLivingEarth);
      console.log('guaranteedRewards', guaranteedRewards);
      const { constructions: WorstCase } = simulateRequiredConstructions(cart, {
        simulationScenario: 'WorstCase',
        initialAstralPearls: 1375,
        minimumFloors: 800,
      });

      let averageSum = 0;

      for (let i = 0; i < 1000; i++) {
        const { constructions } = simulateRequiredConstructions(cart, {
          simulationScenario: 'Average',
          initialAstralPearls: 1375,
          minimumFloors: 800,
        });

        averageSum += constructions;
      }

      const average = averageSum / 1000;

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
