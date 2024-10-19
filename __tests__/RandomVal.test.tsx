import RandomVal from "@/components/random/RandomVal";
import { render, screen, fireEvent } from "@testing-library/react";

// Mocks Math.random() to ensure consistency
const mockRandom = (value: number) => {
  jest.spyOn(Math, "random").mockReturnValue(value);
};

describe("RandomVal Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("updates the random value when the button is clicked", () => {
    mockRandom(0.5); // This will generate a specific random value

    render(<RandomVal />);
    const button = screen.getByText("Get New");

    fireEvent.click(button); // fireEvent is used to simulate a button click

    const expectedRandomValue = Math.floor(0.5 * (100 - 1 + 1) + 1); // This should be 51

    // Check that the random value is correct
    const randomValueElement = screen.getByTestId("random-value");
    expect(randomValueElement.textContent).toBe(String(expectedRandomValue));
  });

  it("allows the user to change min and max values", () => {
    render(<RandomVal />);

    const minInputElement = screen.getByTestId("min-input");
    const maxInputElement = screen.getByTestId("max-input");

    fireEvent.change(minInputElement, { target: { value: "10" } });
    expect(minInputElement).toHaveValue(10); 

    fireEvent.change(maxInputElement, { target: { value: "50" } });
    expect(maxInputElement).toHaveValue(50); 

    mockRandom(0.5);
    fireEvent.click(screen.getByRole("button", { name: /Get New/i }));

    const expectedRandomValue = Math.floor(0.5 * (50 - 10 + 1) + 10);
    const randomValueElement = screen.getByTestId("random-value");

    expect(randomValueElement.textContent).toBe(String(expectedRandomValue));
  });
});
