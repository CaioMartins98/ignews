import { Header } from "./index";
import { render, screen } from "@testing-library/react";

jest.mock("next-auth/react", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

describe("Header component", () => {
  it("renders correctly", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});
