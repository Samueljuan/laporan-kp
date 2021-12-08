import React, { useMemo, useState } from 'react'
import Pagination from "./pagination";
import DataTable from "react-data-table-component";
import FilterComponent from './FilterComponent';


export default function Table(props) {
  const columns = [
    {
      name: "No",
      width: '55px',
      selector: (row) => row,
    },
    {
      name: "",
      // selector: "name",
      selector: (row) => row,
    },
    {
      name: "",
      selector: (row) => row,
    },
    {
      name: "",
      selector: (row) => row,
    },
  ];

  const [filterText, setFilterText] = useState("");


  const filteredItems = props.data.filter(
    item =>
      JSON.stringify([])
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText]);

  return (
    <div>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        itemsPerPage={4}
        // paginationServer
        paginationServer={true}
        paginationComponent={() => (
          <Pagination nextLabel="next >" itemsPerPage={4}
          />
        )}
        subHeader
        subHeaderComponent={subHeaderComponent}
      />
    </div>
  )
}
