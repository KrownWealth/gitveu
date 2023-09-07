//import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';


describe('Header', () => {

  it('renders title and app description', () => {
    render(<Header />);

    // Check if the title and description is present
    expect(screen.getByText('GitVeu')).toBeInTheDocument();
    expect(screen.getByText('A web app that displays users repos you input to a form')).toBeInTheDocument();
  });
  
  });

