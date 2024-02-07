import { Items } from '../items';
import type { Challenge, Shop } from './types';

// TODO: ensure that all types of adventures have the same rewards, except for the type of jade (but same quantity)

export const challenge: Challenge = [
  /** Round 1 */
  {
    rewards: [
      {
        item: Items.BerpentEgg,
        quantity: 1,
      },
      {
        item: Items.EverfrostJade,
        quantity: 100,
      },
      {
        item: Items.StarUpStone,
        quantity: 400,
      },
    ],
    milestones: [
      {
        requirement: 2,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 2,
          },
          {
            item: Items.EverfrostJade,
            quantity: 10,
          },
          {
            item: Items.StarUpStone,
            quantity: 20,
          },
        ],
      },
      {
        requirement: 6,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 2,
          },
          {
            item: Items.EverfrostJade,
            quantity: 10,
          },
          {
            item: Items.StarUpStone,
            quantity: 25,
          },
        ],
      },
      {
        requirement: 10,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 2,
          },
          {
            item: Items.EverfrostJade,
            quantity: 10,
          },
          {
            item: Items.StarUpStone,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 15,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 2,
          },
          {
            item: Items.EverfrostJade,
            quantity: 10,
          },
          {
            item: Items.StarUpStone,
            quantity: 35,
          },
        ],
      },
      {
        requirement: 25,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 2,
          },
          {
            item: Items.EverfrostJade,
            quantity: 10,
          },
          {
            item: Items.StarUpStone,
            quantity: 40,
          },
        ],
      },
      {
        requirement: 40,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 2,
          },
          {
            item: Items.EverfrostJade,
            quantity: 10,
          },
          {
            item: Items.StarUpStone,
            quantity: 45,
          },
        ],
      },
    ],
  },
  /** Round 2 */
  {
    rewards: [
      {
        item: Items.BerpentEgg,
        quantity: 1,
      },
      {
        item: Items.EverfrostJade,
        quantity: 200,
      },
      {
        item: Items.StarUpStone,
        quantity: 600,
      },
    ],
    milestones: [
      {
        requirement: 90,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 3,
          },
          {
            item: Items.EverfrostJade,
            quantity: 20,
          },
          {
            item: Items.StarUpStone,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 110,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 3,
          },
          {
            item: Items.EverfrostJade,
            quantity: 20,
          },
          {
            item: Items.StarUpStone,
            quantity: 35,
          },
        ],
      },
      {
        requirement: 130,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 3,
          },
          {
            item: Items.EverfrostJade,
            quantity: 20,
          },
          {
            item: Items.StarUpStone,
            quantity: 40,
          },
        ],
      },
      {
        requirement: 150,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 3,
          },
          {
            item: Items.EverfrostJade,
            quantity: 20,
          },
          {
            item: Items.StarUpStone,
            quantity: 45,
          },
        ],
      },
      {
        requirement: 170,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 3,
          },
          {
            item: Items.EverfrostJade,
            quantity: 20,
          },
          {
            item: Items.StarUpStone,
            quantity: 50,
          },
        ],
      },
      {
        requirement: 190,
        rewards: [
          {
            item: Items.TreasureLantern,
            quantity: 3,
          },
          {
            item: Items.EverfrostJade,
            quantity: 20,
          },
          {
            item: Items.StarUpStone,
            quantity: 55,
          },
        ],
      },
    ],
  },
  /** Round 3 */
  {
    rewards: [
      {
        item: Items.BerpentEgg,
        quantity: 1,
      },
      {
        item: Items.EverfrostJade,
        quantity: 300,
      },
      {
        item: Items.StarUpStone,
        quantity: 1000,
      },
    ],
    milestones: [
      {
        requirement: 260,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 10,
          },
          {
            item: Items.EverfrostJade,
            quantity: 30,
          },
          {
            item: Items.StarUpStone,
            quantity: 40,
          },
        ],
      },
      {
        requirement: 290,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 10,
          },
          {
            item: Items.EverfrostJade,
            quantity: 30,
          },
          {
            item: Items.StarUpStone,
            quantity: 45,
          },
        ],
      },
      {
        requirement: 320,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 10,
          },
          {
            item: Items.EverfrostJade,
            quantity: 30,
          },
          {
            item: Items.StarUpStone,
            quantity: 50,
          },
        ],
      },
      {
        requirement: 350,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 10,
          },
          {
            item: Items.EverfrostJade,
            quantity: 30,
          },
          {
            item: Items.StarUpStone,
            quantity: 55,
          },
        ],
      },
      {
        requirement: 380,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 10,
          },
          {
            item: Items.EverfrostJade,
            quantity: 30,
          },
          {
            item: Items.StarUpStone,
            quantity: 60,
          },
        ],
      },
      {
        requirement: 410,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 10,
          },
          {
            item: Items.EverfrostJade,
            quantity: 30,
          },
          {
            item: Items.StarUpStone,
            quantity: 65,
          },
        ],
      },
    ],
  },
  /** Round 4 */
  {
    rewards: [
      {
        item: Items.BerpentEgg,
        quantity: 1,
      },
      {
        item: Items.EverfrostJade,
        quantity: 400,
      },
      {
        item: Items.StarUpStone,
        quantity: 2000,
      },
    ],
    milestones: [
      {
        requirement: 530,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 15,
          },
          {
            item: Items.EverfrostJade,
            quantity: 40,
          },
          {
            item: Items.StarUpStone,
            quantity: 50,
          },
        ],
      },
      {
        requirement: 590,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 15,
          },
          {
            item: Items.EverfrostJade,
            quantity: 40,
          },
          {
            item: Items.StarUpStone,
            quantity: 55,
          },
        ],
      },
      {
        requirement: 650,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 15,
          },
          {
            item: Items.EverfrostJade,
            quantity: 40,
          },
          {
            item: Items.StarUpStone,
            quantity: 60,
          },
        ],
      },
      {
        requirement: 710,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 15,
          },
          {
            item: Items.EverfrostJade,
            quantity: 40,
          },
          {
            item: Items.StarUpStone,
            quantity: 65,
          },
        ],
      },
      {
        requirement: 770,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 15,
          },
          {
            item: Items.EverfrostJade,
            quantity: 40,
          },
          {
            item: Items.StarUpStone,
            quantity: 70,
          },
        ],
      },
      {
        requirement: 830,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 15,
          },
          {
            item: Items.EverfrostJade,
            quantity: 40,
          },
          {
            item: Items.StarUpStone,
            quantity: 75,
          },
        ],
      },
    ],
  },
  /** Round 5 */
  {
    rewards: [
      {
        item: Items.BerpentEgg,
        quantity: 2,
      },
      {
        item: Items.EverfrostJade,
        quantity: 500,
      },
      {
        item: Items.StarUpStone,
        quantity: 3000,
      },
    ],
    milestones: [
      {
        requirement: 1040,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 20,
          },
          {
            item: Items.EverfrostJade,
            quantity: 90,
          },
          {
            item: Items.StarUpStone,
            quantity: 60,
          },
        ],
      },
      {
        requirement: 1130,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 20,
          },
          {
            item: Items.EverfrostJade,
            quantity: 90,
          },
          {
            item: Items.StarUpStone,
            quantity: 65,
          },
        ],
      },
      {
        requirement: 1220,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 20,
          },
          {
            item: Items.EverfrostJade,
            quantity: 90,
          },
          {
            item: Items.StarUpStone,
            quantity: 70,
          },
        ],
      },
      {
        requirement: 1310,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 20,
          },
          {
            item: Items.EverfrostJade,
            quantity: 90,
          },
          {
            item: Items.StarUpStone,
            quantity: 75,
          },
        ],
      },
      {
        requirement: 1400,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 20,
          },
          {
            item: Items.EverfrostJade,
            quantity: 90,
          },
          {
            item: Items.StarUpStone,
            quantity: 80,
          },
        ],
      },
      {
        requirement: 1490,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 20,
          },
          {
            item: Items.EverfrostJade,
            quantity: 90,
          },
          {
            item: Items.StarUpStone,
            quantity: 85,
          },
        ],
      },
    ],
  },
];

export const shop: Shop = [
  // Floor 1
  {
    offers: [
      {
        item: Items.Ploughwood,
        limit: 3,
        quantity: 3,
        price: 60,
      },
      {
        item: Items.StardustChestII,
        limit: 1,
        quantity: 1,
        price: 50,
      },
      {
        item: Items.StarUpStone,
        limit: 5,
        quantity: 50,
        price: 50,
      },
    ],
    exchangeBonus: {
      item: Items.TreasureLantern,
      quantity: 1,
    },
  },
  // Floor 2
  {
    offers: [
      {
        item: Items.PetStone,
        limit: 1,
        quantity: 40,
        price: 160,
      },
      {
        item: Items.TechniqueGuide,
        limit: 2,
        quantity: 5,
        price: 160,
      },
      {
        item: Items.Alioth,
        limit: 2,
        quantity: 2,
        price: 200,
      },
    ],
    exchangeBonus: {
      item: Items.TreasureLantern,
      quantity: 2,
    },
  },
  // Floor 3
  {
    offers: [
      {
        item: Items.CarvingJade,
        limit: 2,
        quantity: 4,
        price: 200,
      },
      {
        item: Items.StardustChestIII,
        limit: 1,
        quantity: 3,
        price: 200,
      },
      {
        item: Items.ZodiacJadeslip,
        limit: 1,
        quantity: 400,
        price: 200,
      },
    ],
    exchangeBonus: {
      item: Items.TreasureLantern,
      quantity: 3,
    },
  },
  // Floor 4
  {
    offers: [
      {
        item: Items.EverfrostCurioSelectionChest,
        limit: 2,
        quantity: 1,
        price: 240,
      },
      {
        item: Items.HeavenlyWine,
        limit: 1,
        quantity: 2,
        price: 240,
      },
      {
        item: Items.CosmicJadeslip,
        limit: 1,
        quantity: 200,
        price: 240,
      },
    ],
    exchangeBonus: {
      item: Items.TreasureLantern,
      quantity: 4,
    },
  },
  // Floor 5
  {
    offers: [
      {
        item: Items.SpecialPetEgg,
        limit: 2,
        quantity: 1,
        price: 500,
      },
      {
        item: Items.CreationJadeslip,
        limit: 3,
        quantity: 200,
        price: 200,
      },
      {
        item: Items.CreationJade,
        limit: 2,
        quantity: 10,
        price: 1000,
      },
    ],
    exchangeBonus: {
      item: Items.TreasureLantern,
      quantity: 5,
    },
  },
];
