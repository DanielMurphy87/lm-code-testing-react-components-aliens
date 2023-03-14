import { render, fireEvent, screen } from '@testing-library/react';
import NumberOfBeings from './Number_Of_Beings';

test('renders label and input element', () => {
    render(<NumberOfBeings numberOfBeings={0} onChangeNumberOfBeings={() => { }} />);
    const labelElement = screen.getByLabelText(/number of beings/i);
    expect(labelElement).toBeInTheDocument();
    const inputElement = screen.getByLabelText(/number of beings/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'number');
});

test('calls onChangeNumberOfBeings when input value changes', () => {
    const onChangeNumberOfBeingsMock = jest.fn();
    render(<NumberOfBeings numberOfBeings={0} onChangeNumberOfBeings={onChangeNumberOfBeingsMock} />);
    const inputElement = screen.getByLabelText(/number of beings/i);
    fireEvent.change(inputElement, { target: { value: '42' } });
    expect(onChangeNumberOfBeingsMock).toHaveBeenCalledTimes(1);
    expect(onChangeNumberOfBeingsMock).toHaveBeenCalledWith(expect.any(Object));
});

test('renders input element with correct value', () => {
    render(<NumberOfBeings numberOfBeings={42} onChangeNumberOfBeings={() => { }} />);
    const input = screen.getByDisplayValue('42');
    expect(input).toHaveValue(42);
});