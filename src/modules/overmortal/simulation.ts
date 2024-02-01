export const SimulationScenarios = {
  WorstCase: 'WorstCase',
  Average: 'Average',
  BestCase: 'BestCase',
} as const;

export type SimulationScenario = keyof typeof SimulationScenarios;
