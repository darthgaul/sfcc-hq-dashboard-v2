export type Role = 'HQ' | 'Regional' | 'Squadron' | 'Cadet' | 'Parent';

export interface User {
  id: string;
  name: string;
  role: Role;
  title?: string;
  region?: string;
  unit?: string;
  grade?: string;
  cadetId?: string; // For parents linked to cadets
}

export interface Artifact {
  id: number;
  cadetName: string;
  loe: string;
  title: string;
  score: number | null; // 0-4 scale, null if ungraded
  status: 'Approved' | 'Returned' | 'Submitted' | 'Pending';
  safetyCheck: boolean;
  boardReady: boolean;
  date: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  type: 'MTE' | 'Regular' | 'Review';
  recovery: boolean;
}

export interface Promotion {
  rank: string;
  name: string;
  date: string;
  active?: boolean;
}

export interface Award {
  name: string;
  earned: boolean;
  date?: string;
  progress?: number;
  color: string; // Tailwind class
  type: 'Service' | 'Fitness' | 'Leadership' | 'STEM';
}

export interface CadetProfile {
  joinDate: string;
  promotions: Promotion[];
  awards: Award[];
}