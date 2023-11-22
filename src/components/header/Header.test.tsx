import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { withRouter } from "../../lib/test-utils";

describe("Header", () => {
  test("renders link to home page", () => {
    render(withRouter(<Header />));
    const linkElement = screen.getByRole("link", { name: /Home/i });
    expect(linkElement).toBeInTheDocument();
  });

  test("renders lang picker", () => {
    render(withRouter(<Header />));
    const langPickerElement = screen.getByRole("combobox");
    expect(langPickerElement).toBeInTheDocument();
  });
});
