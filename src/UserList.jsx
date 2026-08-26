function UserList(props) {
  return (
    <div className='row gap-3'>
      {
        props.users.map((user) => (
          // we will iterate through each user's id variable in the json
          <div className='col-12 col-md-3 col-lg-5' key={user.id}>
            <article className='card shadow-sm h-100'>
              <div className='card-body'>
                <h2 className='card-title h5'>{user.name}</h2>
                <p className='card-text mb-1'>{user.email}</p>
                <p className='card-text text-muted'>{user.company.name}</p>
                <span className='badge text-bg-primary'>{user.address.city}</span>
              </div>
            </article>
          </div>
        ))
      }
    </div>
  )
}

export default UserList;
