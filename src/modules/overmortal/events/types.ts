import type { Offer } from '../items';

/** Weekly Event Challenges */
export type Challenge = [Round, Round, Round, Round, Round];

export type Round = {
  rewards: Reward[];
  milestones: Milestone[];
};

export type Milestone = {
  requirement: number;
  rewards: [Reward, Reward, Reward];
};

export type Reward = Omit<Offer, 'limit' | 'price'>;

/** Weekly Event Exchange Shop */
export type Shop = [Floor, Floor, Floor, Floor, Floor];

export type Floor = {
  offers: [Offer, Offer, Offer];

  /**
   * One-time bonus for buying any offer of that floor.
   *
   * The granted item is always one of the following:
   *  - Treasure Lantern
   *  - Thunderite
   *  - Living Earth
   *
   * These rewards can therefore be considered when calculating the required amount of
   * event items to reach a specified amount of currency.
   */
  exchangeBonus: Reward;
};

/**
 * A shopping cart is a 2D array of numbers, where the first dimension represents the floor
 * and the second dimension represents the number of purchases of the respective offer at
 * that position in the floor.
 */
export type ShoppingCart = [
  [number, number, number],
  [number, number, number],
  [number, number, number],
  [number, number, number],
  [number, number, number],
];
