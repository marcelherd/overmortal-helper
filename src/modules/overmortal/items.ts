export type Offer = {
  item: keyof typeof Item;
  quantity: number;
  limit: number;
  price: number;
};

export const Item = {
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
} as const;

export const Quality = {
  Grey: 'Grey',
  Green: 'Green',
  Blue: 'Blue',
  Purple: 'Purple',
  Orange: 'Orange',
  Red: 'Red',
} as const;
