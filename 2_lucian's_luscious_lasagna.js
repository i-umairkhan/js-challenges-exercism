export const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  return (EXPECTED_MINUTES_IN_OVEN-actualMinutesInOven);
}

export function preparationTimeInMinutes(numberOfLayers) {
  return (numberOfLayers * PREPARATION_MINUTES_PER_LAYER);
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const timeOnlayers = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
  return (actualMinutesInOven+timeOnlayers);
} 
