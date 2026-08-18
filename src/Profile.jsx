function Profile(props) { // data comes from props

    // function getBadgeClass(status) {
    //     if (status === 'Active') {
    //         return "badge text-bg-success";
    //     } else {
    //         return "badge text-bg-danger";
    //     }
    // }

    return (
    <>
      <main className='container py-4'>
        <section className='card shadow-sm'>
          <div className='card-body'>
            <h1 className='card-title h3'>{props.name}</h1>
            <p className='card-text'>Current Week: {props.currentWeek}</p>
            <p className='card-text'>Topic: {props.topic}</p>
            {/* <span className={getBadgeClass(props.status)}>{props.status}</span> */}
            <span className={props.status === "Active" ? "badge text-bg-success" : "badge text-bg-danger"}>{props.status}</span>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile;