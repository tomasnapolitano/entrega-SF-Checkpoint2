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
            <div>
                <div>
                    <table>
                        <thead>
                            <tr className={styles.tr}>
                                <th className={styles.th}>id</th>
                                <th className={styles.th}>Name</th>
                                <th className={styles.th}>Username</th>
                                <th className={styles.th}>Email</th>
                                <th className={styles.th}>Company Name</th>
                                <th className={styles.th}>Telephone</th>
                                <th className={styles.th}>City</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                        {users.map((user) => {
                          return(
                          <tr className={styles.tr}>
                          <td className={styles.td}>{user.id}</td>
                          <td className={styles.td}>{user.name}</td>
                          <td className={styles.td}>{user.username}</td>
                          <td className={styles.td}>{user.email}</td>
                          <td className={styles.td}>{user.company.name}</td>
                          <td className={styles.td}>{user.phone}</td>
                          <td className={styles.td}>{user.address.city}</td>
                          </tr>
                          )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Users