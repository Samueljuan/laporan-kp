import React, { useState } from 'react'
import Attendance from './Attendance';
import axios from "axios";
import { convertDistance } from 'geolib'
import { getDistance } from 'geolib';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Swal from "sweetalert2";
import Navbar from '../navsidebar';
import AllAttendance from './AllAttendance';
import jwt_decode from "jwt-decode";
import NewSideBar from '../newnavbar';

export default function Employee() {

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#23C8D4");
  const [done, setDone] = useState(true);
  const override = css`
   display: block;
   margin: 0 auto;
   border-color: red;
   `;

  var token = localStorage.getItem("token");
  var user = jwt_decode(token)
  var role = user.role;

  const munculkanAbsen = () => {
    if (role == "User") {
      return (
        <Attendance Attendance={CheckLocation} />
      )
    }
  }

  const linkAPI = API

  function CheckLocation() {
    setDone(false);

    navigator.geolocation.getCurrentPosition(postition => {
      // Search Long, Lang
      const my_coords = { latitude: postition.coords.latitude, longitude: postition.coords.longitude }
      const kantor_coords = { latitude: -6.990638, longitude: 110.423667 }
      // const kantor_coords = { latitude: -7.376397, longitude: 110.440711 }

      // 1000 buat akurasi
      let distance = getDistance(my_coords, kantor_coords, 1000)

      // Convert to KM
      let convert = convertDistance(distance, 'km');

      if (convert > 5) {
        // alert('Jarak anda terlalu jauh, Maks 5 KM')
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Jarak anda terlalu jauh, Maks 5 KM'
        })
        setDone(true);
      } else {
        Location(convert)
      }
    })

  }


  function Location(details) {

    if ('geolocation' in navigator) {
      console.log('avail');
      navigator.geolocation.getCurrentPosition(postition => {

        const loc = { location: [postition.coords.latitude, postition.coords.longitude], distance: details, attendance: 1 };
        // console.log(localStorage.token)

        // const token = JSON.parse(localStorage)

        let config = {
          headers: {
            'Authorization': 'Bearer ' + localStorage.token
          }
        }

        axios.post(linkAPI, loc, config)
          .then(res => {
            setDone(true)
            Swal.fire({
              icon: 'success',
              title: 'Berhasil',
              text: 'Anda Berhasil Absen'
            })
          })
          .catch(error => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Absen Gagal',
              text: 'Silahkan Coba Lagi / Hubungi Ke Dukungan'
            })
            setDone(true);
          })
      })
    } else {
      console.log('not avail');
    }
  }

  function Change(details) {
    alert(details.address);

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
    <>
      {!done ? (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <HashLoader color={color} loading={loading} css={override} size={100} />
        </div>
      ) : (
        <>
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
              {munculkanAbsen()}
              <AllAttendance />
            </div>
          </div>
        </>
      )}
    </>
  )
}
