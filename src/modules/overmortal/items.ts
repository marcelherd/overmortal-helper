export type Offer = {
  item: Item;
  quantity: number;
  limit: number;
  price: number;
};

export const Items = {
  /** Adventure */
  TreasureLantern: 'TreasureLantern',
  EverfrostJade: 'EverfrostJade',

  /** Beastwaves */
  Thunderite: 'Thunderite',
  MonsterSoul: 'MonsterSoul',

  /** Starscraper */
  LivingEarth: 'LivingEarth',
  AstralPearl: 'AstralPearl',

  /** Miscellaneous */
  CreationJade: 'CreationJade',
  CreationDew: 'CreationDew',
  TechniqueGuide: 'TechniqueGuide',
  TechniquePoints: 'TechniquePoints',
  Ploughwood: 'Ploughwood',
  Alioth: 'Alioth',
  MonsterRelicSpiritChest: 'MonsterRelicSpiritChest',
  MonsterGearSpiritChest: 'MonsterGearSpiritChest',
  SpecialR3RuneChest: 'SpecialR3RuneChest',
  R3RuneSelectionChest: 'R3RuneSelectionChest',
  ExoticHuntShardChest: 'ExoticHuntShardChest',
  StarUpStone: 'StarUpStone',
  BerpentEgg: 'BerpentEgg',
  NimbusJadeslip: 'NimbusJadeslip',
  ZodiacJadeslip: 'ZodiacJadeslip',
  CreationJadeslip: 'CreationJadeslip',
  Forgestone: 'Forgestone',
  Souldust: 'Souldust',
  PetStone: 'PetStone',
  PetJadeslip: 'PetJadeslip',
  StardustChestIII: 'StardustChestIII',
  CarvingJade: 'CarvingJade',
  AncientJadeslip: 'AncientJadeslip',
  CosmicJadeslip: 'CosmicJadeslip',
  SpiritlandToken: 'SpiritlandToken',
  AdvancementKnowledge: 'AdvancementKnowledge',
  MythicStardust: 'MythicStardust',
  NatureMantra: 'NatureMantra',
  Fateum: 'Fateum',
  EtherealJade: 'EtherealJade',
  WhiteTigerSwordShard: 'WhiteTigerSwordShard',
  SearingBladesShard: 'SearingBladesShard',
  BladesCastSelection: 'BladesCastSelection',
} as const;

export type Item = keyof typeof Items;

export const Quality = {
  Grey: 'Grey',
  Green: 'Green',
  Blue: 'Blue',
  Purple: 'Purple',
  Orange: 'Orange',
  Red: 'Red',
} as const;
