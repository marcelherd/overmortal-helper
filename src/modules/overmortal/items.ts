export type Offer = {
  item: Item;
  quantity: number;
  limit: number;
  price: number;
};

export const Items = {
  /** Adventure */
  TreasureLantern: 'TreasureLantern',

  /** Technically there is a different Jade/Curio for each type of Adventure, but we will only be using Everfrost */
  EverfrostJade: 'EverfrostJade',
  EverfrostCurioSelectionChest: 'EverfrostCurioSelectionChest',
  UniversusJade: 'UniversusJade',
  UniversusCurioSelectionChest: 'UniversusCurioSelectionChest',

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
  HeavenlyWine: 'HeavenlyWine',
  MonsterRelicSpiritChest: 'MonsterRelicSpiritChest',
  MonsterGearSpiritChest: 'MonsterGearSpiritChest',
  SpecialR3RuneChest: 'SpecialR3RuneChest',
  R3RuneSelectionChest: 'R3RuneSelectionChest',
  ExoticHuntShardChest: 'ExoticHuntShardChest',
  StarUpStone: 'StarUpStone',
  BerpentEgg: 'BerpentEgg',
  SpecialPetEgg: 'SpecialPetEgg',
  NimbusJadeslip: 'NimbusJadeslip',
  ZodiacJadeslip: 'ZodiacJadeslip',
  CreationJadeslip: 'CreationJadeslip',
  Forgestone: 'Forgestone',
  Souldust: 'Souldust',
  PetStone: 'PetStone',
  PetJadeslip: 'PetJadeslip',
  StardustChestII: 'StardustChestII',
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
