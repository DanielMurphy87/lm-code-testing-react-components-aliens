import { render, fireEvent, screen } from '@testing-library/react';
import AmRobot from './Am_Robot';

describe('AmRobot', () => {
    test('renders label and input element', () => {
        render(<AmRobot sumAnswer={0} onSumAnswer={() => { }} />);
        const labelElement = screen.getByLabelText(/what is 2\+2\?/i);
        expect(labelElement).toBeInTheDocument();
        const inputElement = screen.getByLabelText(/what is 2\+2\?/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'number');
    });
    
    test('calls onSumAnswer when input value changes', () => {
        const onSumAnswerMock = jest.fn();
        render(<AmRobot sumAnswer={0} onSumAnswer={onSumAnswerMock} />);
        const inputElement = screen.getByLabelText(/what is 2\+2\?/i);
        fireEvent.change(inputElement, { target: { value: '4' } });
        expect(onSumAnswerMock).toHaveBeenCalledTimes(1);
        expect(onSumAnswerMock).toHaveBeenCalledWith(expect.any(Object));
    });
    
    test('renders input element with correct value', () => {
        render(<AmRobot sumAnswer={4} onSumAnswer={() => { }} />);
        const input = screen.getByDisplayValue('4');
        expect(input).toHaveValue(4);
    });
});