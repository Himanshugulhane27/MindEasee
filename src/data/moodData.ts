export interface MoodDataPoint {
  day: string;
  level: number; // 1-5, 5 being best mood
}

export const moodData: MoodDataPoint[] = [
  { day: 'Mon', level: 3 },
  { day: 'Tue', level: 4 },
  { day: 'Wed', level: 2 },
  { day: 'Thu', level: 3 },
  { day: 'Fri', level: 5 },
  { day: 'Sat', level: 4 },
  { day: 'Sun', level: 3 },
];