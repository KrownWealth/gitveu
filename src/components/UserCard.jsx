import Image from "next/image";
import Link from "next/link";

const UserCard = ({ user, onDelete }) => {
  const { avatar_url, login, id } = user;

  //Delete a user from the list of the user 
  const handleDelete = () => {
    
    onDelete(user.login); 
  };

  return (
    <div className="card">
      {avatar_url ? (
        <Image src={avatar_url} 
        alt="User-img" className='card-img'
        width={200} height={200} />
      ) : (
        <div className="placeholder-image">Placeholder Image</div>
      )}
      <div className="card_info">
        <h4>{login}</h4>
       <small>{id}</small>
        <div className="btn-inline">
        <Link href={`/user/${login}`} className="button">
          View Profile
        </Link>
          {/* <Link href={`/user/${login}`} className="button">
            View Profile
          </Link> */}
          <button className="button" onClick={handleDelete}>
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;