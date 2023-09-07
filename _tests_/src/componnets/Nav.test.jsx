
import { render, screen } from '@testing-library/react';
// Mock the useRouter
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';


jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    query: {},
    asPath: '',
    // Add any other properties or methods you need for your tests
  }),
}));


describe('Nav', () => {

  it('renders the Nav component with links and logo', () => {
    render(<Nav />);
    
    // Check if the "Home" link is present and has the "active" class
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Home')).toHaveClass('active');

    // Check if the "User" link is present and does not have the "active" class
    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByText('User')).not.toHaveClass('active');

    // Check if the "TweetsVeu" logo is present
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('Veu')).toBeInTheDocument();
  });

  it('changes the active link when the route changes', () => {
    jest.spyOn(require('next/router'), 'useRouter').mockReturnValue({
      pathname: '/user',
    });

    render(<Nav />);

    // Check the active and not active statet of the User and Home link
    expect(screen.getByText('User')).toHaveClass('active');
    expect(screen.getByText('Home')).not.toHaveClass('active');
  });

  it('passes props to InputField', () => {
    const handleQueryInput = jest.fn();
    const handleSearchUsers = jest.fn();

    render(<Nav handleQueryInput={handleQueryInput} handleSearchUsers={handleSearchUsers} />);

    // Check if the InputField component is rendered with the correct props
    expect(screen.getByPlaceholderText('Enter Github Username')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();

    // Simulate a user entering text in the input field
    // (You can add fireEvent.change() here if needed)
    
    // Ensure that handleQueryInput is called when user interacts with the input field
    // (You can add this check here if needed)
  });
});
