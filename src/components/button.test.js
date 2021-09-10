import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import Button from "./button/button";

it('should render the button with indicated text', () => {
    const text = 'click';
    render(<Button>{text}</Button>)

    const btn = screen.getByText(text)

    expect(btn).toBeInTheDocument();
});

it('should trigger a click function via prop', () => {
    const text = 'click';
    const onClick = jest.fn();    
    render(<Button onClick={onClick}>{text}</Button>) // passa função de click para testar se está clicando

    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);

});