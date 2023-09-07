
import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from '@/components/UserCard';


describe('UserCard', () => {
  const user = {
    avatar_url: '/user-avatar.jpg',
    login: 'testuser',
    id: 123,
  };

  it('renders user card with user data', () => {
    render(<UserCard user={user} onDelete={() => {}} />);
    
    // Check if user avatar is displayed
    const avatar = screen.getByAltText('User-img');
    expect(avatar).toBeInTheDocument();
    expect(avatar.getAttribute("src")).toContain('/_next/image?url=%2Fuser-avatar.jpg&w=640&q=75');
          
    // Check if user login and id are displayed
    expect(screen.getByText('testuser')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    
    // Check if "View Profile" link is present
    const viewProfileLink = screen.getByText('View Profile');
    expect(viewProfileLink).toBeInTheDocument();
    expect(viewProfileLink).toHaveAttribute('href', '/user/testuser');
    
    // Check if "Delete User" button is present
    const deleteButton = screen.getByText('Delete User');
    expect(deleteButton).toBeInTheDocument();
  });

  it('renders placeholder image if avatar_url is not provided', () => {
    const userWithoutAvatar = {
      login: 'testuser',
      id: 123,
    };

    render(<UserCard user={userWithoutAvatar} onDelete={() => {}} />);
    
    // Check if placeholder image is displayed
    expect(screen.getByText('Placeholder Image')).toBeInTheDocument();
  });

  it('calls onDelete when "Delete User" button is clicked', () => {
    const onDelete = jest.fn();
    render(<UserCard user={user} onDelete={onDelete} />);
    
    // Click the "Delete User" button
    fireEvent.click(screen.getByText('Delete User'));
    
    // Check if onDelete function is called with the correct argument
    expect(onDelete).toHaveBeenCalledWith('testuser');
  });
});
