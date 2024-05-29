import { delay } from "msw";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { Questions } from "../../components/Questions";

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

  await delay(150);

  expect(await screen.getByText(/Langerhans/i)).toBeInTheDocument();
});
