import React from 'react'
import Image from "next/image";
import SearchIcon from "../../../../../../public/icon/Searchicon.svg";


export default function FilterComponent({ filterText, onFilter }) {
  return (
    <div className="">
      <div className="flex">
        <span className="">
          <Image src={SearchIcon} alt="SpeakerIcon"></Image>
        </span>
      </div>
      <input
        id="search"
        type="text"
        className=""
        placeholder="Search"
        value={filterText}
        onChange={onFilter}
      ></input>
    </div>
  )
}
