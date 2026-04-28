import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders app", () => {
  it("testing ui", () => {
    render(<App />);
    expect(screen.getByText(/Hello React TypeScript/i)).toBeInTheDocument();
  });
});
