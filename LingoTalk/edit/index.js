import React from 'react'
import EditPage from './EditPage'

export const getServerSideProps = async () => {
  const res = await fetch(API, {
    method: 'GET',
  }).then((r) => r.json())


  return {
    props: { dataLEE: res.data }
  }
}


export default function Edit({ dataLEE }) {

  console.log(dataLEE)
  return (
    <div>
      <EditPage dataLEE={(dataLEE)} />
    </div>
  )
}
