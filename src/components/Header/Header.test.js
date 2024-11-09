import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; 
import '@testing-library/jest-dom'; 
import Header from './index'; 
test('renders Header component', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Material UI-Site/i); 
  expect(titleElement).toBeInTheDocument();
});
