import { render, fireEvent, screen } from '@testing-library/react';
import PlanetName from './Planet_Name';

test('renders label and input element', () => {
    render(<PlanetName planetName={''} onChangePlanetName={() => { }} />);
    const labelElement = screen.getByLabelText(/planet name/i);
    expect(labelElement).toBeInTheDocument();
    const inputElement = screen.getByLabelText(/planet name/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
});

test('calls onChangePlanetName when input value changes', () => {
    const onChangePlanetNameMock = jest.fn();
    render(<PlanetName planetName={''} onChangePlanetName={onChangePlanetNameMock} />);
    const inputElement = screen.getByLabelText(/planet name/i);
    fireEvent.change(inputElement, { target: { value: 'Earth' } });
    expect(onChangePlanetNameMock).toHaveBeenCalledTimes(1);
    expect(onChangePlanetNameMock).toHaveBeenCalledWith(expect.any(Object));
});

test('renders input element with correct value', () => {
    render(<PlanetName planetName={'Earth'} onChangePlanetName={() => { }} />);
    const input = screen.getByDisplayValue('Earth');
    expect(input).toHaveValue('Earth');
});