function SearchUsers(props) {
  return (
    <div className='card shadow0sm mb-4'>
      <div className='card-body'>
        <label className='form-label' htmlFor="user-search">Search Users</label>

        <input type="text"
          id='user-search'
          className='col-5 form-control'
          value={props.searchText}
          onChange={(event) => props.setSearchText(event.target.value)}
        />
        <p className='text-muted small mt-2 mb-0'>
          Showing {props.filteredCount} of {props.totalCount}
        </p>
      </div>
    </div>
  )
}

export default SearchUsers;
