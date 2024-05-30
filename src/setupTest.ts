import "@testing-library/jest-dom";
import { http, delay, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { vi } from "vitest";
import { BASE_URL } from "./constants";
import { mockQuestions } from "./tests/mocks/questions";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

export const handlers = [
  http.get(`${BASE_URL}?amount=10`, async () => {
    await delay(100);

    return HttpResponse.json(mockQuestions);
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
