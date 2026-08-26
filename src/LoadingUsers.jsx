function LoadingUsers() {
  return (
    <div className='d=flex align-items-center gap-2'>
      <div className='spinner-border text-primary' role='status'></div>
      <span>Loading users.....</span>
    </div>
  )
}

export default LoadingUsers;
