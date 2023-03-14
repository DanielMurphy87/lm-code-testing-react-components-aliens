// tests for Species_Name.tsx

import { render, fireEvent, screen } from '@testing-library/react';
import SpeciesName from './Species_Name';

test('renders label and input element', () => {
    render(<SpeciesName speciesName={''} onChangeSpeciesName={() => { }} />);
    const labelElement = screen.getByLabelText(/species name/i);
    expect(labelElement).toBeInTheDocument();
    const inputElement = screen.getByLabelText(/species name/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
});

test('calls onChangeSpeciesName when input value changes', () => {
    const onChangeSpeciesNameMock = jest.fn();
    render(<SpeciesName speciesName={''} onChangeSpeciesName={onChangeSpeciesNameMock} />);
    const inputElement = screen.getByLabelText(/species name/i);
    fireEvent.change(inputElement, { target: { value: 'Earth' } });
    expect(onChangeSpeciesNameMock).toHaveBeenCalledTimes(1);
    expect(onChangeSpeciesNameMock).toHaveBeenCalledWith(expect.any(Object));
});

test('renders input element with correct value', () => {
    render(<SpeciesName speciesName={'Earth'} onChangeSpeciesName={() => { }} />);
    const input = screen.getByDisplayValue('Earth');
    expect(input).toHaveValue('Earth');
});