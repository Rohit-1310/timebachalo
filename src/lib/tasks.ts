import type { Task } from './types';

export const TASKS: Task[] = [
  {
    id: 1,
    pillar: "1. Security & Trust",
    component: "Data Encryption",
    focus: "Implement TLS/SSL for all data in transit. Encrypt sensitive data at rest (e.g., PII, financial data) using AES-256.",
    tools: "AWS KMS, Azure Key Vault, Google Cloud KMS, Let's Encrypt",
    priority: "High",
    status: "Not Started",
    notes: "This is non-negotiable. One breach can end the company.",
  },
  // ... (add all other tasks here - same as before)
];