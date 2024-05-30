import { act, fireEvent, screen } from "@testing-library/react";
import { delay } from "msw";
import { renderWithProviders } from "../utils/test-utils";
import App from "../../App";

test("test result", async () => {
  renderWithProviders(<App />);

  expect(screen.getByTestId("spinner")).toBeInTheDocument();

  expect(
    await screen.findByText(
      /Which stand-up comedian voiced the talking parrot/i
    )
  ).toBeInTheDocument();

  //1
  act(() =>
    fireEvent.click(
      screen.getByRole("checkbox", { name: /Gilbert Gottfried/i })
    )
  );
  act(() => fireEvent.submit(screen.getByRole("button", { name: /Send/i })));

  await delay(150);

  expect(
    await screen.getByText(
      /Minecraft can be played with a virtual reality headset./i
    )
  ).toBeInTheDocument();

  //2
  act(() => fireEvent.click(screen.getByRole("radio", { name: /True/i })));
  act(() => fireEvent.submit(screen.getByRole("button", { name: /Send/i })));

  await delay(200);

  expect(await screen.getByText(/Langerhans/i)).toBeInTheDocument();

  //3
  act(() => fireEvent.click(screen.getByRole("checkbox", { name: /Kidney/i })));
  act(() => fireEvent.submit(screen.getByRole("button", { name: /Send/i })));

  await delay(250);

  expect(
    await screen.getByText(
      /Which famous New York Yankees outfielder did Marilyn Monroe marry?/i
    )
  ).toBeInTheDocument();

  //4
  act(() =>
    fireEvent.click(screen.getByRole("checkbox", { name: /Tino Martinez/i }))
  );
  act(() => fireEvent.submit(screen.getByRole("button", { name: /Send/i })));

  await delay(300);

  expect(
    await screen.getByText(
      /Botanically speaking, which of these fruits is NOT a berry?/i
    )
  ).toBeInTheDocument();

  //5
  act(() =>
    fireEvent.click(screen.getByRole("checkbox", { name: /Blueberry/i }))
  );
  act(() => fireEvent.submit(screen.getByRole("button", { name: /Send/i })));

  await delay(300);

  const scoreHeader = await screen.getByText(/Your score:/i);

  expect(scoreHeader).toBeInTheDocument();

  expect(scoreHeader).toHaveTextContent("Your score: 40.00 %");
});
