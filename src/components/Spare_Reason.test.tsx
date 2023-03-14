import { render, fireEvent, screen } from '@testing-library/react';
import SpareReason from './Spare_Reason';

test('renders label and input element', () => {
    render(<SpareReason spareReason={''} onChangeReason={() => { }} />);
    const labelElement = screen.getByLabelText(/Reason for sparing/i);
    expect(labelElement).toBeInTheDocument();
    const inputElement = screen.getByLabelText(/Reason for sparing/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'textarea');
});

test('calls onChangeSpareReason when input value changes', () => {
    const onChangeSpareReasonMock = jest.fn();
    render(<SpareReason spareReason={''} onChangeReason={onChangeSpareReasonMock} />);
    const inputElement = screen.getByLabelText(/Reason for sparing/i);
    fireEvent.change(inputElement, { target: { value: 'Earth' } });
    expect(onChangeSpareReasonMock).toHaveBeenCalledTimes(1);
    expect(onChangeSpareReasonMock).toHaveBeenCalledWith(expect.any(Object));
});

test('renders input element with correct value', () => {
    render(<SpareReason spareReason={'Earth'} onChangeReason={() => { }} />);
    const input = screen.getByDisplayValue('Earth');
    expect(input).toHaveValue('Earth');
});