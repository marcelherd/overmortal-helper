import { Items } from '../items';
import { SimulationScenarios, type SimulationScenario } from '../simulation';
import type { Challenge, Shop, ShoppingCart } from './types';

export const MAX_SIMULATED_CONSTRUCTIONS = 100000;

export const GOLDEN_ROOM_PITY_FREQUENCY = 10;
export const GOLDEN_ROOM_CHANCE = 0.1;
export const GOLDEN_ROOM_MIN_ASTRAL_PEARLS = 4;
export const GOLDEN_ROOM_MAX_ASTRAL_PEARLS = 6;

export type StarscraperSimulationOptions = {
  /** The number of Astral Pearls that we already have by buying them from the event shop */
  initialAstralPearls?: number;

  /** Affects the chance of golden rooms occuring as well as the amount of currency obtained through them */
  simulationScenario?: SimulationScenario;
};

/**
 * TODO
 *
 * @param cart - the offers that we want to exchange for in the event shop
 * @param initialAstralPearls - the number of Astral Pearls that we already have by buying them from the event shop
 * @returns TODO
 */
export function simulateRequiredConstructions(
  cart: ShoppingCart,
  options?: StarscraperSimulationOptions
) {
  const initialAstralPearls = options?.initialAstralPearls ?? 0;
  const simulationScenario = options?.simulationScenario ?? SimulationScenarios.Average;

  const exchangedItems = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  let constructions = 0;
  let astralPearls = initialAstralPearls;

  let currentRound = 0;
  let currentMilestone = 0;

  let finishedLastMilestone = false;

  while (constructions < MAX_SIMULATED_CONSTRUCTIONS) {
    // If we exchanged for all desired offers, we know the required number of constructions to purchase everything
    if (JSON.stringify(exchangedItems) === JSON.stringify(cart)) {
      // TODO: adjust return type
      return {
        constructions,
      };
    }

    // TODO: keep track of ALL received rewards

    // Every ten constructions guarantees a golden room which contains between four and six Astral Pearls as well as additional rewards
    if (constructions % GOLDEN_ROOM_PITY_FREQUENCY === 0) {
      switch (simulationScenario) {
        case SimulationScenarios.WorstCase:
          astralPearls += GOLDEN_ROOM_MIN_ASTRAL_PEARLS;
          break;
        case SimulationScenarios.Average:
          astralPearls += (GOLDEN_ROOM_MAX_ASTRAL_PEARLS + GOLDEN_ROOM_MIN_ASTRAL_PEARLS) / 2;
          break;
        case SimulationScenarios.BestCase:
          astralPearls += GOLDEN_ROOM_MAX_ASTRAL_PEARLS;
          break;
      }
    } else {
      // There is still a chance for a golden room to occur on every construction that is not a multiple of ten
      // We only consider this chance if we are not in the worst case scenario
      const goldenRoomOccured = Math.random() < GOLDEN_ROOM_CHANCE;

      if (simulationScenario === SimulationScenarios.Average && goldenRoomOccured) {
        astralPearls += (GOLDEN_ROOM_MAX_ASTRAL_PEARLS + GOLDEN_ROOM_MIN_ASTRAL_PEARLS) / 2;
      } else if (simulationScenario === SimulationScenarios.BestCase) {
        astralPearls += GOLDEN_ROOM_MAX_ASTRAL_PEARLS;
      }
    }

    constructions++;

    // Check if we finished a milestone
    const milestoneToCheck = challenge[currentRound].milestones[currentMilestone];
    const { requirement, rewards } = milestoneToCheck;

    if (constructions >= requirement && !finishedLastMilestone) {
      // Check if we were awarded Astral Pearls for finishing the milestone and if so, add it to our total
      const rewardedAstralPearls = rewards.find((reward) => reward.item === Items.AstralPearl);
      if (rewardedAstralPearls) {
        astralPearls += rewardedAstralPearls.quantity;
      }

      // If we just finished the last milestone of the current round, we should receive rewards for that round
      if (currentMilestone === challenge[currentRound].milestones.length - 1) {
        const { rewards: roundRewards } = challenge[currentRound];

        // Check if we were awarded Astral Pearls for finishing the round and if so, add it to our total
        const rewardedAstralPearlsFromRound = roundRewards.find(
          (reward) => reward.item === Items.AstralPearl
        );

        if (rewardedAstralPearlsFromRound) {
          astralPearls += rewardedAstralPearlsFromRound.quantity;
        }

        // If we received rewards for the last milestone of the last round, we should no longer receive any rewards from milestones
        if (currentRound === challenge.length - 1) {
          finishedLastMilestone = true;
        }
      }
    }

    // Attempt to buy as many offers as possible with the acquired currency
    for (let floorIndex = 0; floorIndex < shop.length; floorIndex++) {
      const floor = shop[floorIndex];

      for (let offerIndex = 0; offerIndex < floor.offers.length; offerIndex++) {
        const offer = floor.offers[offerIndex];

        // Can we buy something?
        if (
          exchangedItems[floorIndex][offerIndex] < cart[floorIndex][offerIndex] &&
          astralPearls >= offer.price
        ) {
          exchangedItems[floorIndex][offerIndex]++;
          astralPearls -= offer.price;
        }
      }
    }

    // If we finished the last milestone of the round, we can move on to the next round and reset the milestone index
    if (
      currentRound !== challenge.length - 1 &&
      currentMilestone === challenge[currentRound].milestones.length - 1
    ) {
      currentRound++;
      currentMilestone = 0;
    } else if (currentMilestone !== challenge[currentRound].milestones.length - 1) {
      currentMilestone++;
    }
  }

  throw new Error(`Hit ${MAX_SIMULATED_CONSTRUCTIONS}, stopping simulation. Purchase impossible.`);
}

export const challenge: Challenge = [
  /** Round 1 */
  {
    rewards: [
      {
        item: Items.TechniqueGuide,
        quantity: 5,
      },
      {
        item: Items.TechniquePoints,
        quantity: 1000,
      },
      {
        item: Items.AstralPearl,
        quantity: 40,
      },
    ],
    milestones: [
      {
        requirement: 5,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 1,
          },
          {
            item: Items.TechniquePoints,
            quantity: 200,
          },
          {
            item: Items.AstralPearl,
            quantity: 3,
          },
        ],
      },
      {
        requirement: 10,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 2,
          },
          {
            item: Items.TechniquePoints,
            quantity: 200,
          },
          {
            item: Items.AstralPearl,
            quantity: 5,
          },
        ],
      },
      {
        requirement: 20,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 3,
          },
          {
            item: Items.TechniquePoints,
            quantity: 300,
          },
          {
            item: Items.AstralPearl,
            quantity: 5,
          },
        ],
      },
      {
        requirement: 30,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 3,
          },
          {
            item: Items.TechniquePoints,
            quantity: 300,
          },
          {
            item: Items.AstralPearl,
            quantity: 5,
          },
        ],
      },
      {
        requirement: 50,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 3,
          },
          {
            item: Items.TechniquePoints,
            quantity: 400,
          },
          {
            item: Items.AstralPearl,
            quantity: 10,
          },
        ],
      },
      {
        requirement: 70,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 3,
          },
          {
            item: Items.TechniquePoints,
            quantity: 400,
          },
          {
            item: Items.AstralPearl,
            quantity: 10,
          },
        ],
      },
      {
        requirement: 100,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 3,
          },
          {
            item: Items.TechniquePoints,
            quantity: 400,
          },
          {
            item: Items.AstralPearl,
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
        item: Items.TechniqueGuide,
        quantity: 10,
      },
      {
        item: Items.TechniquePoints,
        quantity: 1500,
      },
      {
        item: Items.AstralPearl,
        quantity: 60,
      },
    ],
    milestones: [
      {
        requirement: 120,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 5,
          },
          {
            item: Items.TechniquePoints,
            quantity: 500,
          },
          {
            item: Items.AstralPearl,
            quantity: 10,
          },
        ],
      },
      {
        requirement: 140,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 5,
          },
          {
            item: Items.TechniquePoints,
            quantity: 500,
          },
          {
            item: Items.AstralPearl,
            quantity: 10,
          },
        ],
      },
      {
        requirement: 170,
        rewards: [
          {
            item: Items.LivingEarth,
            quantity: 5,
          },
          {
            item: Items.TechniquePoints,
            quantity: 600,
          },
          {
            item: Items.AstralPearl,
            quantity: 15,
          },
        ],
      },
      {
        requirement: 200,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 5,
          },
          {
            item: Items.TechniquePoints,
            quantity: 600,
          },
          {
            item: Items.AstralPearl,
            quantity: 15,
          },
        ],
      },
      {
        requirement: 240,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 5,
          },
          {
            item: Items.TechniquePoints,
            quantity: 700,
          },
          {
            item: Items.AstralPearl,
            quantity: 20,
          },
        ],
      },
      {
        requirement: 280,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 5,
          },
          {
            item: Items.TechniquePoints,
            quantity: 700,
          },
          {
            item: Items.AstralPearl,
            quantity: 20,
          },
        ],
      },
      {
        requirement: 330,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 5,
          },
          {
            item: Items.TechniquePoints,
            quantity: 800,
          },
          {
            item: Items.AstralPearl,
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
        item: Items.TechniqueGuide,
        quantity: 15,
      },
      {
        item: Items.TechniquePoints,
        quantity: 2000,
      },
      {
        item: Items.AstralPearl,
        quantity: 80,
      },
    ],
    milestones: [
      {
        requirement: 370,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 7,
          },
          {
            item: Items.TechniquePoints,
            quantity: 900,
          },
          {
            item: Items.AstralPearl,
            quantity: 20,
          },
        ],
      },
      {
        requirement: 410,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 7,
          },
          {
            item: Items.TechniquePoints,
            quantity: 900,
          },
          {
            item: Items.AstralPearl,
            quantity: 20,
          },
        ],
      },
      {
        requirement: 460,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 7,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1000,
          },
          {
            item: Items.AstralPearl,
            quantity: 25,
          },
        ],
      },
      {
        requirement: 510,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 7,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1000,
          },
          {
            item: Items.AstralPearl,
            quantity: 25,
          },
        ],
      },
      {
        requirement: 570,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 7,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1100,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 630,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 7,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1100,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 700,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 7,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1200,
          },
          {
            item: Items.AstralPearl,
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
        item: Items.CreationJade,
        quantity: 5,
      },
      {
        item: Items.TechniqueGuide,
        quantity: 20,
      },
      {
        item: Items.AstralPearl,
        quantity: 100,
      },
    ],
    milestones: [
      {
        requirement: 760,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 10,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1200,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 820,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 10,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1200,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 890,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 10,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1300,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 960,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 10,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1300,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1040,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 10,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1400,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1120,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 10,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1500,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1200,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 10,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1600,
          },
          {
            item: Items.AstralPearl,
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
        item: Items.CreationJade,
        quantity: 5,
      },
      {
        item: Items.TechniqueGuide,
        quantity: 25,
      },
      {
        item: Items.AstralPearl,
        quantity: 120,
      },
    ],
    milestones: [
      {
        requirement: 1280,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 15,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1600,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1360,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 15,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1600,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1450,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 15,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1700,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1540,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 15,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1700,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1640,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 15,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1800,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1740,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 15,
          },
          {
            item: Items.TechniquePoints,
            quantity: 1900,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
          },
        ],
      },
      {
        requirement: 1830,
        rewards: [
          {
            item: Items.Thunderite,
            quantity: 15,
          },
          {
            item: Items.TechniquePoints,
            quantity: 2000,
          },
          {
            item: Items.AstralPearl,
            quantity: 30,
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
        item: Items.NimbusJadeslip,
        limit: 1,
        quantity: 50,
        price: 50,
      },
      {
        item: Items.TechniquePoints,
        limit: 999, // TODO: fix
        quantity: 500,
        price: 50,
      },
      {
        item: Items.Forgestone,
        limit: 3,
        quantity: 100,
        price: 50,
      },
    ],
    exchangeBonus: {
      item: Items.LivingEarth,
      quantity: 3,
    },
  },
  // Floor 2
  {
    offers: [
      {
        item: Items.PetStone,
        limit: 1, // TODO: check
        quantity: 20,
        price: 80,
      },
      {
        item: Items.PetJadeslip,
        limit: 1,
        quantity: 200,
        price: 80,
      },
      {
        item: Items.Alioth,
        limit: 3,
        quantity: 1,
        price: 100,
      },
    ],
    exchangeBonus: {
      item: Items.LivingEarth,
      quantity: 5,
    },
  },
  // Floor 3
  {
    offers: [
      {
        item: Items.StardustChestIII,
        limit: 1,
        quantity: 3,
        price: 220,
      },
      {
        item: Items.CarvingJade,
        limit: 1,
        quantity: 5,
        price: 250,
      },
      {
        item: Items.AncientJadeslip,
        limit: 1,
        quantity: 400,
        price: 200,
      },
    ],
    exchangeBonus: {
      item: Items.LivingEarth,
      quantity: 7,
    },
  },
  // Floor 4
  {
    offers: [
      {
        item: Items.CosmicJadeslip,
        limit: 1,
        quantity: 200,
        price: 240,
      },
      {
        item: Items.SpiritlandToken,
        limit: 1,
        quantity: 20,
        price: 400,
      },
      {
        item: Items.AdvancementKnowledge,
        limit: 1,
        quantity: 20,
        price: 400,
      },
    ],
    exchangeBonus: {
      item: Items.LivingEarth,
      quantity: 9,
    },
  },
  // Floor 5
  {
    offers: [
      {
        item: Items.TechniqueGuide,
        limit: 2,
        quantity: 30,
        price: 900,
      },
      {
        item: Items.MythicStardust,
        limit: 2,
        quantity: 100,
        price: 600,
      },
      {
        item: Items.CreationJade,
        limit: 2,
        quantity: 10,
        price: 1000,
      },
    ],
    exchangeBonus: {
      item: Items.LivingEarth,
      quantity: 12,
    },
  },
];
