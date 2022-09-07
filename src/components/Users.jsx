import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Users.module.css'
import GetApi from './GetApi'


const urlAPIusers = 'https://jsonplaceholder.typicode.com/users' 

function Users() {

  const [users, setUsers] = useState([])
  
  const getData = async () => {
    const data = await GetApi(urlAPIusers)
    setUsers(data)
  }
  useEffect(() => {
    getData()
  },[])
  
  console.log(users);

  return (
    <div className={styles.body}>
    <Link className={styles.btn} to='/'>Back</Link>
    <div className={styles.container}>
        <div className={styles.row}>
            <div className="col-md-12">
                <div className="table-responsive">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Company Name</th>
                                <th>Telephone</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody_users"></tbody>
                        {users.map((user) => {
                          return(
                          <tr>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.company.name}</td>
                          <td>{user.phone}</td>
                          <td>{user.address.city}</td>
                          </tr>
                          )
                        })}
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Users