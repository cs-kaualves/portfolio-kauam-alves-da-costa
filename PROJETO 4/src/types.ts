export interface Actor {
  id: string;
  name: string;
  emoji: string;
  details: string;
  age?: number;
  occupation?: string;
  traits?: string[];
}

export interface Scenario {
  id: number;
  title: string;
  description: string;
  optionA: {
    label: string;
    actors: Actor[];
  };
  optionB: {
    label: string;
    actors: Actor[];
  };
}

export interface Choice {
  scenarioId: number;
  chosenOption: 'A' | 'B';
}
