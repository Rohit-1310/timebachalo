// lib/types.ts

export interface Task {
  id: number;
  pillar: string;
  component: string;
  focus: string;
  tools: string;
  priority: 'Low' | 'High' | 'Medium';
  status: 'Not Started' | 'In Progress' | 'Completed';
  notes: string;
}