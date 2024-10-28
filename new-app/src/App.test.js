import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Little Lemon welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Little Lemon/i);
  expect(welcomeElement).toBeInTheDocument();
});
