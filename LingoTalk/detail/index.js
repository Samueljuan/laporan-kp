import React from 'react'
import DetailPage from './DetailPage'
import Participant from './participant'


export async function getServerSideProps() {
  const res = await fetch(API, {
    method: 'GET',
  }).then((r) => r.json())

  const res1 = await fetch(API);
  const data1 = await res1.json();

  return {
    props: {
      dataLEE: res.data, dataTable: data1
    }
  }

}



export default function Detail({ dataLEE, dataTable }) {
  console.log("data:", dataLEE)
  return (
    <div>
      <DetailPage dataLEE={dataLEE} />
      <Participant dataTable={dataTable} />
    </div>
  )
}
