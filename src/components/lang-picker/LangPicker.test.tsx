import { render, screen, fireEvent } from "@testing-library/react";
import { Langs } from "../../types/common";
import LangPicker from "./LangPicker";

const options: Langs[] = ["es", "en"];
const onChangeMock = jest.fn();

describe("LangPicker", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders combobox with visible first option", () => {
    render(<LangPicker langs={options} onChange={onChangeMock} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue(options[0]);
    expect(screen.getByText(/es/i)).toBeInTheDocument();
    expect(screen.getByText(/en/i)).toBeInTheDocument();
  });

  test("invokes passed handler function on change", () => {
    render(<LangPicker langs={options} onChange={onChangeMock} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: options[1] },
    });

    expect(screen.getByRole("combobox")).toHaveValue(options[1]);
    expect(onChangeMock).toHaveBeenCalled();
  });
});
