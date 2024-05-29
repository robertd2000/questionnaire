import React from "react";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../utils/test-utils";
import { Questions } from "../../components/Questions";
import { mockQuestions } from "../mocks/questions";
import { BASE_URL } from "../../constants";

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get(`https://opentdb.com/api.php?amount=10`, async () => {
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

test("rendering questions", async () => {
  renderWithProviders(<Questions />);

  // should show no user initially, and not be fetching a user
  expect(screen.getByTestId("spinner")).toBeInTheDocument();

  //   // after some time, the user should be received
  expect(
    await screen.findByText(
      /Which stand-up comedian voiced the talking parrot/i
    )
  ).toBeInTheDocument();

  const checkbox = screen.getByRole("checkbox", { name: /Gilbert Gottfried/i });

  fireEvent.click(checkbox);

  const submitButton = screen.getByRole("button", { name: /Send/i });

  fireEvent.submit(submitButton);
  fireEvent.click(submitButton);

  await delay(100);

  expect(
    await screen.getByText(/In what Disney movie can you/i)
  ).toBeInTheDocument();
});
