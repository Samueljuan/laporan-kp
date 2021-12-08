// import React from 'react'
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Table from "./DataTable";

export default function Participant({ dataTable }) {
  const LinkApi = API;
  const inputEl = useRef("");

  const [Details, setDetails] = useState([]);
  const [search, setSearch] = useState("");

  const getDetails = () => {
    setDetails(dataTable)
  }

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => { }, [search]);

  return (
    <div>
      <div className=''>

        <div className="">
          <Table data={Details} />
        </div>
      </div>
    </div>

  );
}
