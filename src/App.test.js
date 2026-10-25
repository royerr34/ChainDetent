// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainDetent title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainDetent/i);
    expect(titleElement).toBeInTheDocument();
});
