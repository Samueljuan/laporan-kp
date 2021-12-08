import React, { useState, useEffect, useCallback } from 'react'
import axios from "axios";
import jwt_decode from "jwt-decode";
import Location from "./index"
import MapGL, {Marker, NavigationControl} from 'react-map-gl';
import Pin from './pin';
import ControlPanel from './control-panel';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export default function ChangeLocation({ Location }) {
   require("./style.css")

   // The following is required to stop "npm build" from transpiling mapbox code.
   // notice the exclamation point in the import.
   // @ts-ignore
   // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
   mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

   const [LongLang, setLocation] = useState({ long: "", lang: "" });
   // const [longitude, setLongitude] = useState("");
   // const [latitude, setLatitude] = useState("");

   const token = localStorage.getItem("token");
   const user = jwt_decode(token);
   useEffect(() => {
      const profileupdate = (userId, token) => {
         const linkAPIProfile = API + userId;

         axios
            .get(linkAPIProfile, {
               headers: {
                  Authorization: "Bearer " + token,
               },
            })
            .then((res) => {
               console.log(res)
               // setLongitude(res.data._doc.officeLoc[0]);
               // setLatitude(res.data._doc.officeLoc[1]);
               setLocation({long :res.data._doc.officeLoc[0], lang:res.data._doc.officeLoc[1]})
            })
            .catch((err) => {
               console.log(err);
            });
      };
      const data = profileupdate(user.sub, token);
   },[])

   const submitHandlerLocation = e => {
      e.preventDefault();

      // console.log(LongLang);
      Location(LongLang);
      
   }

   const [viewport, setViewport] = useState({
      latitude: Math.min.apply(Math, [LongLang.lang]),
      longitude: Math.min.apply(Math, [LongLang.long]),
      zoom: 3.5,
      bearing: 0,
      pitch: 0
   });

   const [marker, setMarker] = useState({
      latitude: Math.min.apply(Math, [LongLang.lang]),
      longitude: Math.min.apply(Math, [LongLang.long])
   });

   console.log(marker, viewport)

   const [events, logEvents] = useState({});

   const onMarkerDragStart = useCallback(event => {
      logEvents(_events => ({..._events, onDragStart: event.lngLat}));
   }, []);
   
   const onMarkerDrag = useCallback(event => {
      logEvents(_events => ({..._events, onDrag: event.lngLat}));
      // setLongitude(event.lngLat[0])
      // setLatitude(event.lngLat[1])
      setLocation({long : event.lngLat[0], lang :event.lngLat[1]})
   }, []);
   
   const onMarkerDragEnd = useCallback(event => {
      logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
      setMarker({
         longitude: event.lngLat[0],
         latitude: event.lngLat[1]
      });
   }, []);

   const MAPBOX_TOKEN = 'pk.eyJ1IjoieW91a3ZuIiwiYSI6ImNrdnlxd2k4bzRzcDUybnRrYWhucmlibGMifQ.YgRcw2T-czE0vjbxfP18Hw';

   return (
      <div>
         {/* <h1>H!</h1> */}
         <div style={{ textAlign: "center" }}>
            <br />
            <h2>Change Office Location</h2>
         </div>

         <form action="#" className="profile-container" onSubmit={submitHandlerLocation}>
         <div className="child-container">
            <h3 className="text-child">Longitude</h3>
            <input type="text" className="username-input" id="Longtitude" defaultValue={LongLang.long} 
               onChange={(e) => setLocation({
               ...LongLang,
               long: e.target.value,
               })} placeholder="Input Your Longitude" required />
         </div>
         <div className="child-container">
            <h3 className="text-child">Latitude</h3>
            <input type="text" className="name-input" id="Latitude" defaultValue={LongLang.lang} 
            onChange={(e) =>
               setLocation({
                  ...LongLang,
                  lang: e.target.value,
               })} placeholder="Input Your Latitude" required />
         </div>
         <button type="submit" className="button">Change Location</button>
         </form>
         <br />
         <div style={{ margin: "auto" }}>
            <MapGL
               {...viewport}
               style={{ margin : "auto" }}
               width="90%"
               height="40vh"
               mapStyle="mapbox://styles/mapbox/dark-v9"
               onViewportChange={setViewport}
               mapboxApiAccessToken={MAPBOX_TOKEN}
            >
               <Marker
                  longitude={marker.longitude}
                  latitude={marker.latitude}
                  offsetTop={-20}
                  offsetLeft={-10}
                  draggable
                  onDragStart={onMarkerDragStart}
                  onDrag={onMarkerDrag}
                  onDragEnd={onMarkerDragEnd}
               >
                  <Pin size={20} />
               </Marker>
            </MapGL>
            {/* <ControlPanel events={events} /> */}
         </div>
      </div>
   )
}
