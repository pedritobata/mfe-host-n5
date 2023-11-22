import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { withRouter } from "../../../lib/test-utils";

describe("Button", () => {
  const funcMock = jest.fn();
  afterAll(() => {
    jest.clearAllMocks();
  });
  test("renders as a button element if no 'as' prop is passed", () => {
    render(withRouter(<Button title="My Button" />));
    const buttonElement = screen.queryByRole("button", { name: /My Button/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders as a anchor element if 'as' prop and a link are passed", () => {
    render(
      withRouter(
        <Button as="link">
          <a href="/somewhere">My Button</a>
        </Button>
      )
    );
    const anchorElement = screen.queryByRole("link", { name: /My Button/i });
    expect(anchorElement).toBeInTheDocument();
  });

  test("invokes onClick handler when passed", () => {
    render(withRouter(<Button onClick={funcMock}>My Button</Button>));
    fireEvent.click(screen.getByText(/My Button/i));
    expect(funcMock).toHaveBeenCalledTimes(1);
  });
});
