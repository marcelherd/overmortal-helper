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
  TechniqueGuide: 'TechniqueGuide',
  TechniquePoints: 'TechniquePoints',
  Ploughwood: 'Ploughwood',
  Alioth: 'Alioth',
  MonsterRelicSpiritChest: 'MonsterRelicSpiritChest',
  MonsterGearSpiritChest: 'MonsterGearSpiritChest',
  SpecialR3RuneChest: 'SpecialR3RuneChest',
  StarUpStone: 'StarUpStone',
  BerpentEgg: 'BerpentEgg',
  NimbusJadeslip: 'NimbusJadeslip',
  Forgestone: 'Forgestone',
  PetStone: 'PetStone',
  PetJadeslip: 'PetJadeslip',
  StardustChestIII: 'StardustChestIII',
  CarvingJade: 'CarvingJade',
  AncientJadeslip: 'AncientJadeslip',
  CosmicJadeslip: 'CosmicJadeslip',
  SpiritlandToken: 'SpiritlandToken',
  AdvancementKnowledge: 'AdvancementKnowledge',
  MythicStardust: 'MythicStardust',
  Fateum: 'Fateum',
  EtherealJade: 'EtherealJade',
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
