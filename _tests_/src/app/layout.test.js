
import { render, screen } from '@testing-library/react';
import RootLayout from "@/components/RootLayout";

describe("RootLayout Component", () => {
  it("renders children correctly", () => {
    // Define some sample children content
    const childrenContent = <div data-testid="children">Sample Children</div>;

    // Render the RootLayout component with the sample children
    const { getByTestId } = render(<RootLayout>{childrenContent}</RootLayout>);

    // Assert that the children content is rendered
    const childrenElement = getByTestId("children");
    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement).toHaveTextContent("Sample Children");
  });

  it("renders the Meta component", () => {
    // Render the RootLayout component
    const { getByTestId } = render(<RootLayout />);

    // Assert that the Meta component is rendered
    const metaComponent = getByTestId("meta-component");
    expect(metaComponent).toBeInTheDocument();
  });

  it("renders the HTML structure with lang attribute", () => {
    // Render the RootLayout component
    const { container } = render(<RootLayout />);

    // Assert that the HTML structure is rendered with lang attribute
    const htmlElement = container.querySelector("html");
    expect(htmlElement).toBeInTheDocument();
    expect(htmlElement).toHaveAttribute("lang", "en");
  });
});
