import { FortuneDefinition, ProbabilityConfig, FortuneLevel } from './types';

// Visual and Text definitions for each fortune type
export const FORTUNE_DEFINITIONS: Record<FortuneLevel, FortuneDefinition> = {
  daikichi: {
    level: 'daikichi',
    label: '大吉',
    description: '素晴らしい運勢です。望みが叶い、喜びごとも多いでしょう。',
    colorClass: 'text-red-600',
    bgClass: 'bg-red-50',
    borderColorClass: 'border-red-600'
  },
  chukichi: {
    level: 'chukichi',
    label: '中吉',
    description: '良い運勢です。焦らず着実に進めば道は開けます。',
    colorClass: 'text-orange-600',
    bgClass: 'bg-orange-50',
    borderColorClass: 'border-orange-500'
  },
  shokichi: {
    level: 'shokichi',
    label: '小吉',
    description: 'ささやかな幸運が訪れます。日常を大切にしましょう。',
    colorClass: 'text-amber-600',
    bgClass: 'bg-amber-50',
    borderColorClass: 'border-amber-500'
  },
  kichi: {
    level: 'kichi',
    label: '吉',
    description: '安定した運気です。感謝の心を忘れずに。',
    colorClass: 'text-emerald-600',
    bgClass: 'bg-emerald-50',
    borderColorClass: 'border-emerald-500'
  },
  suekichi: {
    level: 'suekichi',
    label: '末吉',
    description: '今は準備の時です。未来に向けて力を蓄えましょう。',
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
    borderColorClass: 'border-blue-500'
  },
  kyo: {
    level: 'kyo',
    label: '凶',
    description: '困難があるかもしれませんが、慎重に行動すれば避けられます。',
    colorClass: 'text-slate-600',
    bgClass: 'bg-slate-200',
    borderColorClass: 'border-slate-500'
  },
  daikyo: {
    level: 'daikyo',
    label: '大凶',
    description: '試練の時ですが、夜明け前が一番暗いものです。好転を信じて。',
    colorClass: 'text-gray-900',
    bgClass: 'bg-gray-300',
    borderColorClass: 'border-gray-900'
  }
};

// Normal Probability Configuration
export const PROBABILITY_NORMAL: ProbabilityConfig[] = [
  { level: 'kichi', percentage: 71 },
  { level: 'shokichi', percentage: 15 },
  { level: 'chukichi', percentage: 5 },
  { level: 'daikichi', percentage: 1 },
  { level: 'suekichi', percentage: 6 },
  { level: 'kyo', percentage: 1.5 },
  { level: 'daikyo', percentage: 0.5 },
];

// Reverse Probability Configuration
export const PROBABILITY_REVERSE: ProbabilityConfig[] = [
  { level: 'daikichi', percentage: 71 },
  { level: 'daikyo', percentage: 15 },
  { level: 'kyo', percentage: 5 },
  { level: 'shokichi', percentage: 1 },
  { level: 'chukichi', percentage: 6 },
  { level: 'suekichi', percentage: 1.5 },
  { level: 'kichi', percentage: 0.5 },
];