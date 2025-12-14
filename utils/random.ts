import { ProbabilityConfig, FortuneLevel } from '../types';

/**
 * Selects a fortune level based on weighted probabilities.
 * Assumes the total percentage sums close to 100.
 */
export const drawFortune = (probabilities: ProbabilityConfig[]): FortuneLevel => {
  // Generate a random number between 0 and 100
  const randomValue = Math.random() * 100;
  
  let cumulativePercentage = 0;
  
  for (const config of probabilities) {
    cumulativePercentage += config.percentage;
    if (randomValue < cumulativePercentage) {
      return config.level;
    }
  }
  
  // Fallback (should theoretically rarely happen due to floating point precision, usually returns the last item)
  return probabilities[probabilities.length - 1].level;
};