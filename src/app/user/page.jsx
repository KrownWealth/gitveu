// ...
 
async function UserLoginList({ userLogin}) {
  // Wait for the playlists
  const users = await getUserByLogin(userLogin)
 
  return (
    <ul>
      {users.map((user) => (
        <li key={user.login}>{user.id}</li>
      ))}
    </ul>
  )
}
 
export default async function Page({ params: { login } }) {
  // Wait for the artist
  const eachUser = await getUser(login)
 
  return (
    <>
      <h1>{eachUser.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Playlists artistID={eachUser.id} />
      </Suspense>
    </>
  )
}