export type FortuneLevel = 'daikichi' | 'chukichi' | 'shokichi' | 'suekichi' | 'kichi' | 'kyo' | 'daikyo';

export interface FortuneDefinition {
  level: FortuneLevel;
  label: string; // e.g., "大吉"
  description: string;
  colorClass: string; // Tailwind text color
  bgClass: string; // Tailwind bg color
  borderColorClass: string;
}

export interface ProbabilityConfig {
  level: FortuneLevel;
  percentage: number; // 0-100
}