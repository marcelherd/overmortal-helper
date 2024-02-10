export const SimulationScenarios = {
  WorstCase: 'WorstCase',
  Lone: 'Lone',
  Nashu: 'Nashu',
  Average: 'Average',
  BestCase: 'BestCase',
} as const;

export type SimulationScenario = keyof typeof SimulationScenarios;

export function supportsAverageResults(scenario: SimulationScenario) {
  return scenario !== SimulationScenarios.WorstCase && scenario !== SimulationScenarios.BestCase;
}
