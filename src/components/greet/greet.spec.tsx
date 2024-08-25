import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/Hello/i);
        expect(textElement).toBeInTheDocument();
    })

    test('renders with a name', () => {
        render(<Greet name="Thuan Huynh" />);
        const textElement = screen.getByText("Hello Thuan Huynh");
        expect(textElement).toBeInTheDocument();
    })
})