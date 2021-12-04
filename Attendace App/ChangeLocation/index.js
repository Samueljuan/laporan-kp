import React, { useState } from 'react'
import ChangeLocation from './ChangeLocation'
import Navbar from '../navsidebar';
import Swal from 'sweetalert2'
import axios from "axios";
import jwt_decode from "jwt-decode";
import NewSideBar from '../newnavbar';

export default function ChangeOffice() {

  const token = localStorage.getItem("token");
  const user = jwt_decode(token);
  const userId = user.sub;

  const Location = details => {
    // alert("HI")
    console.log(details)

    const linkAPIUpdateProfile = API + userId;
    const convertData = Object.values(details)
    console.log(convertData)

    const gabunganpanggil = { officeLoc: convertData }

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.token,
      },
    };
    axios
      .put(linkAPIUpdateProfile, gabunganpanggil, config)
      .then((Response) => {
        console.log(Response);
        Swal.fire({
          icon: 'success',
          title: 'Update Lokasi Kantor Berhasil',
          text: 'Lokasi Kantor Berhasil Di Update'
        })
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Update Lokasi Kantor Gagal',
          text: 'Lokasi Kantor Gagal Di Update'
        })
      });
  }

  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    // setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
            <NewSideBar
              image={image}
              collapsed={collapsed}
              rtl={rtl}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <Navbar
            image={image}
            toggled={toggled}
            collapsed={collapsed}
            rtl={rtl}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
            handleRtlChange={handleRtlChange}
            handleImageChange={handleImageChange}
          />
          <ChangeLocation Location={Location} />
        </div>
      </div>
    </div>
  )
}
