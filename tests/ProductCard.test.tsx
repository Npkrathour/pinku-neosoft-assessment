import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard, { type ProductCardProps } from "../src/components/ProductCard";

jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
}));

describe("ProductCard Component", () => {
  const mockNotify = jest.fn();

  const defaultProps: ProductCardProps = {
    image: "/test-image.jpg",
    title: "Classic T-Shirt",
    description: "A comfortable and stylish t-shirt.",
    price: 1599,
    status: "Best Seller",
    notify: mockNotify,
  };

  beforeEach(() => {
    mockNotify.mockClear();
  });

  // Test Case 1: Renders basic product information correctly
  test("should render all basic product details without ratings", () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText("Classic T-Shirt")).toBeInTheDocument();
    expect(
      screen.getByText("A comfortable and stylish t-shirt.")
    ).toBeInTheDocument();
    expect(screen.getByText("₹ 1599")).toBeInTheDocument();
    const image = screen.getByRole("img", { name: /classic t-shirt/i });
    expect(image).toHaveAttribute("src");
    expect(screen.queryByText(/4.5/)).not.toBeInTheDocument();
  });

  // Test Case 2: Renders product with rating and stars
  test("should display the rating and stars when the rating prop is provided", () => {
    const propsWithRating = {
      ...defaultProps,
      rating: { rate: 3.5, count: 120 },
    };
    render(<ProductCard {...propsWithRating} />);
    expect(screen.getByText("3.5")).toBeInTheDocument();
    const starIcons = screen.getAllByRole("img", { hidden: true });
    expect(starIcons.length).toBeGreaterThan(0);
  });

  // Test Case 3: Handles 'Add to Cart' button click
  test("should call the notify function when 'Add to Cart' button is clicked", () => {
    render(<ProductCard {...defaultProps} />);

    const addToCartButton = screen.getByRole("button", {
      name: `View more details about ${defaultProps.title}`,
    });

    fireEvent.click(addToCartButton);
    expect(mockNotify).toHaveBeenCalledTimes(1);
  });

  // Test Case 4: Renders the button in a disabled state
  test("should have a disabled button when the disabled prop is true", () => {
    const propsDisabled = {
      ...defaultProps,
      disabled: true,
      status: "Out of Stock",
    };
    render(<ProductCard {...propsDisabled} />);

    const addToCartButton = screen.getByRole("button", {
      name: `View more details about ${propsDisabled.title}`,
    });
    
    expect(addToCartButton).toBeDisabled();
    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });

  // Test Case 5: Verifies accessibility attributes
  test("should have correct ARIA roles and labels for accessibility", () => {
    render(<ProductCard {...defaultProps} />);

    const region = screen.getByRole("region", {
      name: `Product card for ${defaultProps.title}`,
    });
    expect(region).toBeInTheDocument();

    const button = screen.getByRole("button", {
      name: `View more details about ${defaultProps.title}`,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/add to cart/i);
  });
});