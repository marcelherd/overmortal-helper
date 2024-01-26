import type { Item } from '../items';
import type { Reward, Challenge, Shop, ShoppingCart } from './types';
import {
  type Event,
  getChallengeByEvent,
  getShopByEvent,
  getEventItem,
  getEventCurrency,
  Events,
} from './events';

export const REQUIRED_ITEMS_UPPER_LIMIT = 1000000;

/**
 * Calculates the required number of items to reach the necessary amount of currency to exchange for
 * all desired offers.
 *
 * @param shop - the event shop
 * @param cart - the offers that we want to exchange for in the event shop
 * @param isBeastwavesEvent - if the event is a beastwaves event, the required number of items is tripled
 * @returns the required number of items to reach the necessary amount of currency
 */
export function calculateRequiredItems(cart: ShoppingCart, event: Event) {
  const shop = getShopByEvent(event);
  const challenge = getChallengeByEvent(event);
  const eventItem = getEventItem(event);
  const eventCurrency = getEventCurrency(event);

  const exchangedItems = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  // The amount of event items (such as "Living Earth") that were turned in so far
  // We simulate turning in items until we reach the required amount of currency through finishing rounds and milestones
  let usedEventItems = 0;

  // The amount of bonus event items that we have acquired so far through finishing rounds and milestones
  // We can reduce the requiredEventItems by this amount minus the amount of bonusEventItems granted by the last iteration
  let bonusEventItems = 0;

  let currentRound = 0;
  let currentMilestone = 0;

  // The amount of currency that we have acquired so far through finishing rounds and milestones
  let acquiredCurrency = 0;

  while (usedEventItems < REQUIRED_ITEMS_UPPER_LIMIT) {
    console.log('acquiredCurrency', acquiredCurrency);

    // If we exchanged for all desired offers, we know the required amount of items
    if (JSON.stringify(exchangedItems) === JSON.stringify(cart)) {
      console.log('Done');
      console.log('usedEventItems', usedEventItems);
      console.log('bonusEventItems', bonusEventItems);
      if (event === Events.Starscraper) {
        // We get three free attempts per day for Starscraper
        return usedEventItems - bonusEventItems - 7 * 3; // TODO: add bonusEventItems granted by the last iteration to correct the result
      }
      return usedEventItems - bonusEventItems; // TODO: add bonusEventItems granted by the last iteration to correct the result
    }

    // Starscraper event has a 10% chance of creating a golden room when doing construction or guaranteed every ten constructions
    if (event === Events.Starscraper) {
      if (Math.random() <= 0.1 || usedEventItems % 10 === 0) {
        // Golden rooms always award between four and six Astral Pearls, assuming five for simplicity
        acquiredCurrency += 5;
      }
    }

    usedEventItems++;

    // Check if we finished a milestone
    const milestoneToCheck = challenge[currentRound].milestones[currentMilestone];
    const { requirement, rewards } = milestoneToCheck;

    if (usedEventItems >= requirement) {
      // Check if we were awarded additional event items for finishing the milestone and if so, add them
      const rewardedEventItems = rewards.find((reward) => reward.item === eventItem);
      if (rewardedEventItems) {
        bonusEventItems += rewardedEventItems.quantity;
      }

      // Check if we were awarded event currency for finishing the milestone and if so, add it to our total
      const rewardedEventCurrency = rewards.find((reward) => reward.item === eventCurrency);
      if (rewardedEventCurrency) {
        acquiredCurrency += rewardedEventCurrency.quantity;
      }

      // Attempt to buy as many offers as possible with the acquired currency
      for (let floorIndex = 0; floorIndex < shop.length; floorIndex++) {
        const floor = shop[floorIndex];

        for (let offerIndex = 0; offerIndex < floor.offers.length; offerIndex++) {
          const offer = floor.offers[offerIndex];

          // Can we buy something?
          if (
            exchangedItems[floorIndex][offerIndex] < cart[floorIndex][offerIndex] &&
            acquiredCurrency >= offer.price
          ) {
            exchangedItems[floorIndex][offerIndex]++;
            acquiredCurrency -= offer.price;
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
  }

  throw new Error('Could not calculate required items');
}

/**
 * Calculates the total cost of the items in the shopping cart based on the prices in the shop.
 *
 * @param shop - the event shop
 * @param cart - the offers that we want to exchange for in the event shop
 * @returns the total cost of the items in the shopping cart
 */
export function calculateTotalCost(shop: Shop, cart: ShoppingCart) {
  let totalCost = 0;

  for (let floorIndex = 0; floorIndex < cart.length; floorIndex++) {
    const floorTotalPurchases = cart[floorIndex].reduce((a, b) => a + b, 0);

    if (floorIndex > 0 && floorTotalPurchases > 0) {
      const previousFloorTotalPurchases = cart[floorIndex - 1].reduce((a, b) => a + b, 0);

      if (previousFloorTotalPurchases <= 0) {
        throw new Error(
          'Cannot checkout items from a floor without checking out items from the previous floor'
        );
      }
    }

    for (let offerIndex = 0; offerIndex < cart[floorIndex].length; offerIndex++) {
      const numberOfPurchases = cart[floorIndex][offerIndex];

      if (numberOfPurchases < 0) {
        throw new Error('Cannot checkout negative amount of items');
      }

      if (numberOfPurchases > shop[floorIndex].offers[offerIndex].limit) {
        throw new Error('Cannot checkout more items than available');
      }

      const price = shop[floorIndex].offers[offerIndex].price * numberOfPurchases;
      totalCost += price;
    }
  }

  return totalCost;
}

export function getCumulativeRewardsFromChallenge(challenge: Challenge, achieved: number) {
  const achievedRewards: Reward[] = [];

  for (const round of challenge) {
    // If all steps in the round have been completed, add the round rewards as well as the steps rewards
    if (round.milestones.every((step) => achieved >= step.requirement)) {
      achievedRewards.push(...round.rewards);
      achievedRewards.push(...round.milestones.flatMap((step) => step.rewards));
    } else {
      // Otherwise, only add the steps rewards for each step that has been completed
      for (const step of round.milestones) {
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
