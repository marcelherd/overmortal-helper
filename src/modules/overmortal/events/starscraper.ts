import { Item } from '../items';
import type { Challenge, Reward } from './types';

export function getCumulativeRewards(constructedFloors: number) {
  const achievedRewards: Reward[] = [];

  for (const round of challenge) {
    // If all steps in the round have been completed, add the round rewards as well as the steps rewards
    if (round.steps.every((step) => constructedFloors >= step.requirement)) {
      achievedRewards.push(...round.rewards);
      achievedRewards.push(...round.steps.flatMap((step) => step.rewards));
    } else {
      // Otherwise, only add the steps rewards for each step that has been completed
      for (const step of round.steps) {
        if (constructedFloors >= step.requirement) {
          achievedRewards.push(...step.rewards);
        }
      }
    }
  }

  const rewardedItems: Partial<Record<keyof typeof Item, number>> = {};

  for (const reward of achievedRewards) {
    rewardedItems[reward.item] = (rewardedItems[reward.item] ?? 0) + reward.quantity;
  }

  return rewardedItems;
}

export const challenge: Challenge = [
  /** Round 1 */
  {
    rewards: [
      {
        item: Item.TechniqueGuide,
        quantity: 5,
      },
      {
        item: Item.TechniquePoints,
        quantity: 1000,
      },
      {
        item: Item.AstralPearl,
        quantity: 40,
      },
    ],
    steps: [
      {
        requirement: 5,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 1,
          },
          {
            item: Item.TechniquePoints,
            quantity: 200,
          },
          {
            item: Item.AstralPearl,
            quantity: 3,
          },
        ],
      },
      {
        requirement: 10,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 2,
          },
          {
            item: Item.TechniquePoints,
            quantity: 200,
          },
          {
            item: Item.AstralPearl,
            quantity: 5,
          },
        ],
      },
      {
        requirement: 20,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 3,
          },
          {
            item: Item.TechniquePoints,
            quantity: 300,
          },
          {
            item: Item.AstralPearl,
            quantity: 5,
          },
        ],
      },
      {
        requirement: 30,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 3,
          },
          {
            item: Item.TechniquePoints,
            quantity: 300,
          },
          {
            item: Item.AstralPearl,
            quantity: 5,
          },
        ],
      },
      {
        requirement: 50,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 3,
          },
          {
            item: Item.TechniquePoints,
            quantity: 400,
          },
          {
            item: Item.AstralPearl,
            quantity: 10,
          },
        ],
      },
      {
        requirement: 70,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 3,
          },
          {
            item: Item.TechniquePoints,
            quantity: 400,
          },
          {
            item: Item.AstralPearl,
            quantity: 10,
          },
        ],
      },
      {
        requirement: 100,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 3,
          },
          {
            item: Item.TechniquePoints,
            quantity: 400,
          },
          {
            item: Item.AstralPearl,
            quantity: 15,
          },
        ],
      },
    ],
  },
  /** Round 2 */
  {
    rewards: [
      {
        item: Item.TechniqueGuide,
        quantity: 10,
      },
      {
        item: Item.TechniquePoints,
        quantity: 1500,
      },
      {
        item: Item.AstralPearl,
        quantity: 60,
      },
    ],
    steps: [
      {
        requirement: 120,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 5,
          },
          {
            item: Item.TechniquePoints,
            quantity: 500,
          },
          {
            item: Item.AstralPearl,
            quantity: 10,
          },
        ],
      },
      {
        requirement: 140,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 5,
          },
          {
            item: Item.TechniquePoints,
            quantity: 500,
          },
          {
            item: Item.AstralPearl,
            quantity: 10,
          },
        ],
      },
      {
        requirement: 170,
        rewards: [
          {
            item: Item.LivingEarth,
            quantity: 5,
          },
          {
            item: Item.TechniquePoints,
            quantity: 600,
          },
          {
            item: Item.AstralPearl,
            quantity: 15,
          },
        ],
      },
      {
        requirement: 200,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 5,
          },
          {
            item: Item.TechniquePoints,
            quantity: 600,
          },
          {
            item: Item.AstralPearl,
            quantity: 15,
          },
        ],
      },
      {
        requirement: 240,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 5,
          },
          {
            item: Item.TechniquePoints,
            quantity: 700,
          },
          {
            item: Item.AstralPearl,
            quantity: 20,
          },
        ],
      },
      {
        requirement: 280,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 5,
          },
          {
            item: Item.TechniquePoints,
            quantity: 700,
          },
          {
            item: Item.AstralPearl,
            quantity: 20,
          },
        ],
      },
      {
        requirement: 330,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 5,
          },
          {
            item: Item.TechniquePoints,
            quantity: 800,
          },
          {
            item: Item.AstralPearl,
            quantity: 25,
          },
        ],
      },
    ],
  },
  /** Round 3 */
  {
    rewards: [
      {
        item: Item.TechniqueGuide,
        quantity: 15,
      },
      {
        item: Item.TechniquePoints,
        quantity: 2000,
      },
      {
        item: Item.AstralPearl,
        quantity: 80,
      },
    ],
    steps: [
      {
        requirement: 370,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 7,
          },
          {
            item: Item.TechniquePoints,
            quantity: 900,
          },
          {
            item: Item.AstralPearl,
            quantity: 20,
          },
        ],
      },
      {
        requirement: 410,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 7,
          },
          {
            item: Item.TechniquePoints,
            quantity: 900,
          },
          {
            item: Item.AstralPearl,
            quantity: 20,
          },
        ],
      },
      {
        requirement: 460,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 7,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1000,
          },
          {
            item: Item.AstralPearl,
            quantity: 25,
          },
        ],
      },
      {
        requirement: 510,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 7,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1000,
          },
          {
            item: Item.AstralPearl,
            quantity: 25,
          },
        ],
      },
      {
        requirement: 570,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 7,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1100,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 630,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 7,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1100,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 700,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 7,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1200,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
    ],
  },
  /** Round 4 */
  {
    rewards: [
      {
        item: Item.CreationJade,
        quantity: 5,
      },
      {
        item: Item.TechniqueGuide,
        quantity: 20,
      },
      {
        item: Item.AstralPearl,
        quantity: 100,
      },
    ],
    steps: [
      {
        requirement: 760,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 10,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1200,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 820,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 10,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1200,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 890,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 10,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1300,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 960,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 10,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1300,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1040,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 10,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1400,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1120,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 10,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1500,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1200,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 10,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1600,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
    ],
  },
  /** Round 5 */
  {
    rewards: [
      {
        item: Item.CreationJade,
        quantity: 5,
      },
      {
        item: Item.TechniqueGuide,
        quantity: 25,
      },
      {
        item: Item.AstralPearl,
        quantity: 120,
      },
    ],
    steps: [
      {
        requirement: 1280,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 15,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1600,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1360,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 15,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1600,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1450,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 15,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1700,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1540,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 15,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1700,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1640,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 15,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1800,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1740,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 15,
          },
          {
            item: Item.TechniquePoints,
            quantity: 1900,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1830,
        rewards: [
          {
            item: Item.Thunderite,
            quantity: 15,
          },
          {
            item: Item.TechniquePoints,
            quantity: 2000,
          },
          {
            item: Item.AstralPearl,
            quantity: 30,
          },
        ],
      },
    ],
  },
];
