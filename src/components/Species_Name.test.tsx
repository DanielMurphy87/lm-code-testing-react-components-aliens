// tests for Species_Name.tsx

import { render, fireEvent, screen } from '@testing-library/react';
import SpeciesName from './Species_Name';
import user from '@testing-library/user-event';

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

test('displays error message when species name is empty', () => {
    render(<SpeciesName speciesName={''} onChangeSpeciesName={() => { }} />);
    const inputElement = screen.getByLabelText(/species name/i);
    fireEvent.change(inputElement, { target: { value: '' } });
    const errorElement = screen.getByText(/species name cannot be empty/i);
    expect(errorElement).toBeInTheDocument();
});

test('should validate the species name correctly', async () => {
    render(<SpeciesName speciesName="" onChangeSpeciesName={() => { }} />);
    const speciesNameInput = screen.getByLabelText('Species Name:');
    user.type(speciesNameInput, '{backspace}');
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(screen.getByText('Species name cannot be empty')).toBeInTheDocument();
    user.type(speciesNameInput, 'a'.repeat(21));
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(screen.getByText('Species name cannot be longer than 20 characters')).toBeInTheDocument();
});

test('does not display error message when species name is valid', () => {
    render(<SpeciesName speciesName={'Earth'} onChangeSpeciesName={() => { }} />);
    const errorElement = screen.queryByText(/species name cannot be empty/i);
    expect(errorElement).not.toBeInTheDocument();
});