import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { container } = render(<Root />);
    expect(container).toBeInTheDocument();
  });
});
