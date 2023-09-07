//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '@/components/InputField';


describe('InputField', () => {
  it('renders user query input and Add button', () => {
    // Mock the functions passed as props from the input
    const handleQueryInput = jest.fn();
    const handleSearchUsers = jest.fn();

    // Render the component with the mock functions
    render(
      <InputField query="userName" handleQueryInput={handleQueryInput} handleSearchUsers={handleSearchUsers} />
    );

    // Find the input element
    const inputElement = screen.getByPlaceholderText('Enter Github Username');

    // Simulate a user entering text in the input field
    fireEvent.change(inputElement, { target: { value: 'testUser' } });

    // Ensure that the handleQueryInput function is called
    expect(handleQueryInput).toHaveBeenCalled();
  });
});
