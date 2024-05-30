import { delay } from "msw";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { Questions } from "../../components/Questions";

test("rendering question", async () => {
  renderWithProviders(<Questions />);
  await delay(100);

  expect(
    await screen.findByText(
      /Which stand-up comedian voiced the talking parrot/i
    )
  ).toBeInTheDocument();
});
