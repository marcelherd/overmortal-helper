import type { Item } from '../items';
import type { Reward, Challenge } from './types';

export function getCumulativeRewardsFromChallenge(challenge: Challenge, achieved: number) {
  const achievedRewards: Reward[] = [];

  for (const round of challenge) {
    // If all steps in the round have been completed, add the round rewards as well as the steps rewards
    if (round.steps.every((step) => achieved >= step.requirement)) {
      achievedRewards.push(...round.rewards);
      achievedRewards.push(...round.steps.flatMap((step) => step.rewards));
    } else {
      // Otherwise, only add the steps rewards for each step that has been completed
      for (const step of round.steps) {
        if (achieved >= step.requirement) {
          achievedRewards.push(...step.rewards);
        }
      }
    }
  }

  const rewardedItems: Partial<Record<Item, number>> = {};

  for (const reward of achievedRewards) {
    rewardedItems[reward.item] = (rewardedItems[reward.item] ?? 0) + reward.quantity;
  }

  return rewardedItems;
}
