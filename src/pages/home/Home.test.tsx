import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";
import { withRouter } from "../../lib/test-utils";
import { movies } from "../../lib/api";
import useHome from "./useHome";

let mockUseHome = useHome as jest.MockedFunction<typeof useHome>;

jest.mock("./useHome");

describe("Home", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  test("renders title", () => {
    mockUseHome.mockReturnValue({
      movieList: movies,
      error: "",
    });
    render(withRouter(<Home />));
    const titleElement = screen.queryByRole("heading", {
      level: 1,
      name: /Movie Explorer/i,
    });
    expect(titleElement).toBeInTheDocument();
  });

  test("renders message when erroring out", () => {
    const errMsg = "Oops!";
    mockUseHome.mockReturnValue({
      movieList: [],
      error: errMsg,
    });
    render(withRouter(<Home />));
    const messageElement = screen.getByText(errMsg);
    expect(messageElement).toBeInTheDocument();
  });

  test("renders message when no movies are available", () => {
    mockUseHome.mockReturnValue({
      movieList: [],
      error: "",
    });
    render(withRouter(<Home />));
    const messageElement = screen.getByText(/No movies available/i);
    expect(messageElement).toBeInTheDocument();
  });

  test("renders movies buttons", () => {
    mockUseHome.mockReturnValue({
      movieList: movies,
      error: "",
    });
    render(withRouter(<Home />));
    const moviesButtons = screen.getAllByRole("link");
    expect(moviesButtons.length).toBe(2);
    expect(moviesButtons[0].textContent!).toEqual("The Marvels");
    expect(moviesButtons[1].textContent!).toEqual("The Expendables");
  });
});
