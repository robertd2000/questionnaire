import { fireEvent, screen } from "@testing-library/react";
import { HttpResponse, delay, http } from "msw";
import { renderWithProviders } from "../utils/test-utils";
import { setupServer } from "msw/node";
import { BASE_URL } from "../../constants";
import { mockQuestions } from "../mocks/questions";
import App from "../../App";

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

test("test result", async () => {
  renderWithProviders(<App />);

  expect(screen.getByTestId("spinner")).toBeInTheDocument();

  expect(
    await screen.findByText(
      /Which stand-up comedian voiced the talking parrot/i
    )
  ).toBeInTheDocument();

  //1
  fireEvent.click(screen.getByRole("checkbox", { name: /Gilbert Gottfried/i }));
  fireEvent.submit(screen.getByRole("button", { name: /Send/i }));

  await delay(150);

  expect(
    await screen.getByText(
      /Minecraft can be played with a virtual reality headset./i
    )
  ).toBeInTheDocument();

  //2
  fireEvent.click(screen.getByRole("radio", { name: /True/i }));
  fireEvent.submit(screen.getByRole("button", { name: /Send/i }));

  await delay(200);

  expect(await screen.getByText(/Langerhans/i)).toBeInTheDocument();

  //3
  fireEvent.click(screen.getByRole("checkbox", { name: /Kidney/i }));
  fireEvent.submit(screen.getByRole("button", { name: /Send/i }));

  await delay(250);

  expect(
    await screen.getByText(
      /Which famous New York Yankees outfielder did Marilyn Monroe marry?/i
    )
  ).toBeInTheDocument();

  //4
  fireEvent.click(screen.getByRole("checkbox", { name: /Tino Martinez/i }));
  fireEvent.submit(screen.getByRole("button", { name: /Send/i }));

  await delay(300);

  expect(
    await screen.getByText(
      /Botanically speaking, which of these fruits is NOT a berry?/i
    )
  ).toBeInTheDocument();

  //4
  fireEvent.click(screen.getByRole("checkbox", { name: /Blueberry/i }));
  fireEvent.submit(screen.getByRole("button", { name: /Send/i }));

  await delay(300);

  expect(await screen.getByText(/Your score:/i)).toBeInTheDocument();
});
