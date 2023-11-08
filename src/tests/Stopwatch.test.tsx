// import Stopwatch from "../components/Stopwatch/Stopwatch";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("Stopwatch", () => {
  beforeEach(() => {
    render(<Stopwatch />);
  });
  test("Component should render", () => {
    expect(screen.getByTestId("stopwatch-wrapper")).toBeDefined();
  });
  test("Actions should render", () => {
    expect(screen.getByTestId("clear-btn")).toBeDefined();
    expect(screen.getByTestId("start-btn")).toBeDefined();
  });
  test("First render, timer should be 00:00:00", () => {
    expect(screen.getByTestId("minutes").innerHTML).toEqual("00");
    expect(screen.getByTestId("seconds").innerHTML).toEqual("00");
    expect(screen.getByTestId("milliseconds").innerHTML).toEqual("00");
  });
  test("First render, clear button should be disabled", () => {
    const clearBtn = screen.getByTestId("clear-btn");
    expect(clearBtn).toBeDefined();
    expect(clearBtn).toHaveProperty("disabled", true);
  });
  test("When start button is pressed, stop button should be visible and start button shouldn't", async () => {
    fireEvent.click(screen.getByTestId("start-btn"));
    expect(screen.getByTestId("stop-btn")).toBeDefined();
    await waitFor(() => {
      expect(screen.queryByText("Start")).toBeNull();
    });
  });
  test("When clear button is pressed, star button should be visible and timer should be restarted", async () => {
    fireEvent.click(screen.getByTestId("start-btn"));
    fireEvent.click(screen.getByTestId("clear-btn"));
    await waitFor(() => {
      expect(screen.queryByText("Start")).toBeDefined();
    });
  });
});
