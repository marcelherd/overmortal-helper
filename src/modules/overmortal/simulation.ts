export const SimulationScenarios = {
  WorstCase: 'WorstCase',
  Lone: 'Lone',
  Nashu: 'Nashu',
  Average: 'Average',
  BestCase: 'BestCase',
} as const;

export type SimulationScenario = keyof typeof SimulationScenarios;
