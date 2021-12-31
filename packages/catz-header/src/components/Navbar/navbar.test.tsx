import { render } from "@testing-library/react";
import { Navbar } from ".";

describe("Navbar component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/catz/i)).toBeInTheDocument();
  });
});
