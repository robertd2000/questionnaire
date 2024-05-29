import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { Questions } from "../../components/Questions";
import { mockQuestions } from "../mocks/questions";
import { BASE_URL } from "../../constants";

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

test("rendering questions, select and move to next", async () => {
  renderWithProviders(<Questions />);

  expect(screen.getByTestId("spinner")).toBeInTheDocument();

  expect(
    await screen.findByText(
      /Which stand-up comedian voiced the talking parrot/i
    )
  ).toBeInTheDocument();

  //
  fireEvent.click(screen.getByRole("checkbox", { name: /Gilbert Gottfried/i }));
  fireEvent.submit(screen.getByRole("button", { name: /Send/i }));

  await delay(100);

  expect(
    await screen.getByText(
      /Minecraft can be played with a virtual reality headset./i
    )
  ).toBeInTheDocument();

  //
  fireEvent.click(screen.getByRole("radio", { name: /True/i }));
  fireEvent.submit(screen.getByRole("button", { name: /Send/i }));

  await delay(100);

  expect(await screen.getByText(/Langerhans/i)).toBeInTheDocument();
});
