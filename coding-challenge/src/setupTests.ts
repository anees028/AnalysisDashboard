import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock the translation hook so tests render plain text keys
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      language: 'en',
    },
  }),
}));

// Recharts uses ResizeObserver, which doesn't exist in JSDOM. We must mock it.
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};