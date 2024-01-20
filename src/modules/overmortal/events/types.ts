import type { Offer } from '../items';

/** Weekly Event Challenges */
export type Challenge = [Round, Round, Round, Round, Round];

export type Round = {
  rewards: [Reward, Reward, Reward];
  steps: Step[];
};

export type Step = {
  requirement: number;
  rewards: [Reward, Reward, Reward];
};

export type Reward = Omit<Offer, 'limit'>;

/** Weekly Event Exchange Shop */
export type Shop = [Floor, Floor, Floor, Floor, Floor];

export type Floor = {
  offers: [Offer, Offer, Offer];
};
