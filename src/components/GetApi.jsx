import React from 'react'

const GetApi = async (route) => {
    const response = await fetch(route)
    const data = await response.json()
    console.log(data);
  return (
    data
  )
}

export default GetApi