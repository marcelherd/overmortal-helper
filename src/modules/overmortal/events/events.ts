import type { Challenge, Shop } from './types';
import { type Item, Items } from '../items';

import { shop as adventureShop, challenge as adventureChallenge } from './adventure';
import { shop as beastwavesShop, challenge as beastwavesChallenge } from './beastwaves';
import { shop as starscraperShop, challenge as starscraperChallenge } from './starscraper';

export const Events = {
  Adventure: 'Adventure',
  Beastwaves: 'Beastwaves',
  Starscraper: 'Starscraper',
} as const;

export type Event = keyof typeof Events;

export function getShopByEvent(event: Event): Shop {
  switch (event) {
    case Events.Adventure:
      return adventureShop;
    case Events.Beastwaves:
      return beastwavesShop;
    case Events.Starscraper:
      return starscraperShop;
  }
}

export function getChallengeByEvent(event: Event): Challenge {
  switch (event) {
    case Events.Adventure:
      return adventureChallenge;
    case Events.Beastwaves:
      return beastwavesChallenge;
    case Events.Starscraper:
      return starscraperChallenge;
  }
}

export function getEventItem(event: Event): Item {
  switch (event) {
    case Events.Adventure:
      return Items.TreasureLantern;
    case Events.Beastwaves:
      return Items.Thunderite;
    case Events.Starscraper:
      return Items.LivingEarth;
  }
}

export function getEventCurrency(event: Event): Item {
  switch (event) {
    case Events.Adventure:
      return Items.EverfrostJade;
    case Events.Beastwaves:
      return Items.MonsterSoul;
    case Events.Starscraper:
      return Items.AstralPearl;
  }
}
