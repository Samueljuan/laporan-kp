import "flatpickr/dist/themes/material_orange.css"
import Image from 'next/image'
import React, { useState } from 'react'
import Flatpickr from "react-flatpickr"
import ArrowL from '../../../../../public/icon/ArrowL.svg'
import DateIcon from '../../../../../public/icon/DateIcon.svg'
import PriceIcon from '../../../../../public/icon/PriceIcon.svg'
import SpeakerIcon from '../../../../../public/icon/SpeakerIcon.svg'
import TimeIcon from '../../../../../public/icon/TimeIcon.svg'
import Upload from './Upload'


export default function EditPage({ p, dataLEE }) {
  const [value, onChange] = useState(new Date());
  const [dataLE, setDataLE] = useState({
  });
  const [error, setError] = useState(null);

  async function submitHandlerEditLE(e) {
    e.preventDefault();

    const APIput = API
    await fetch(APIput, {
      method: 'PUT',
      body: JSON.stringify(dataLE)
    })
  }

  p = {
    ...p, dataLE, setDataLE
  }

  return (
    <div>
      <div className="">
        home / add event / edit event
      </div>
      <div className="">
        <div className="">
          <div className="">
            <Image src={ArrowL} alt="ArrowIcon"></Image>
          </div>
          <div className=" ">
            <div className="">
              <h1 className="">Detail Event</h1>
              <form onSubmit={submitHandlerEditLE}>
                <div className='mb-15'>
                  <label className="">
                    Title Event
                  </label>
                  <input
                    defaultValue={}
                    onChange={(e) =>
                      setDataLE({
                      })
                    }
                    className="" id="title" type="text" placeholder="Title Event"></input>
                </div>

                <div className='mb-15'>
                  <label className="">
                    Description Event
                  </label>
                  <textarea defaultValue={}
                    onChange={(e) =>
                      setDataLE({
                      })
                    }
                    className="" id="description" type="text" placeholder="Description Event"></textarea>
                </div>

                <div className='mb-15'>
                  <label className="">
                    Speaker
                  </label>
                  <input
                    onChange={(e) =>
                      setDataLE({
                        
                      })
                    }
                    defaultValue={} className="" id="description" type="text" placeholder="Speaker"></input>

                </div>

                <div className='mb-15'>
                  <label className="">
                    Sepaker Role
                  </label>
                  <div className="">
                    <div className="">
                      <span className=""><Image src={SpeakerIcon} alt="SpeakerIcon"></Image></span>
                    </div>
                    <input
                      onChange={(e) =>
                        setDataLE({
                          
                        })
                      }
                      defaultValue={} type="text" className="" placeholder="Speaker Role">
                    </input>
                  </div>
                </div>

                <div className='mb-15'>
                  <label className="">
                    Sepaker Company
                  </label>
                  <div className="">
                    <div className="">
                      <span className=""><Image src={SpeakerIcon} alt="SpeakerIcon"></Image></span>
                    </div>
                    <input
                      onChange={(e) =>
                        setDataLE({
                          
                        })
                      }
                      type="text" defaultValue={} className="" placeholder="Speaker Commpany">
                    </input>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <label className="">
                      Date
                    </label>
                    <div className="">
                      <div className="">
                        <span className="">
                          <Image src={DateIcon} alt="SpeakerIcon"></Image>
                        </span>
                      </div>
                      {<Flatpickr
                        value={}
                        options={{
                          minDate: 'today',
                          dateFormat: "Y-m-d",
                          enableTime: 'false',
                          defaultDate: "13:45"
                        }}
                        className=""
                        onChange={function (selectedDates) {
                          setDataLE({
                          })
                        }}
                      />}
                    </div>
                  </div>

                  <div className="">
                    <label className="">
                      Time
                    </label>
                    <div className="">
                      <div className="">
                        <span className=""><Image src={TimeIcon} alt="SpeakerIcon"></Image></span>
                      </div>
                      {<Flatpickr
                        value={}
                        options={{
                          enableTime: true,
                          noCalendar: true,
                          dateFormat: "H:i",
                        }}
                        className=""
                        onChange={function (selectedDates) {                       
                          setDataLE({
                          })
                        }}
                      />}
                      <div className="">
                        <span className="">To</span>
                      </div>
                      {<Flatpickr
                        value={}
                        options={{
                          enableTime: true,
                          noCalendar: true,
                          dateFormat: "H:i",
                        }}
                        onChange={function (selectedDates) {
                          setDataLE({
                          })
                        }}
                        className=""
                      />}
                    </div>
                  </div>

                  <div className="">
                    <label className="">
                      Price
                    </label>
                    <div className="">
                      <div className="">
                        <span className=""><Image src={PriceIcon} alt="SpeakerIcon"></Image></span>
                      </div>
                      <input
                        onChange={(e) =>
                          setDataLE({
                          })
                        }
                        defaultValue={} type="text" className="" placeholder="Price">
                      </input>
                    </div>
                  </div>
                </div>

                <div className='mb-15'>
                  <label className="">
                    Cover
                  </label>
                  <div className="">
                    <Upload cover={}
                      onChangeFile={(e) =>
                        setDataLE({
                        })
                      }
                    />
                  </div>
                </div>

                <div className="">
                  <div className="">
                  </div>
                  <div className="">
                    <div className="">
                      <div className=" ">
                        <button className=""
                          onClick={() => router.back()}>
                          Close
                        </button>
                      </div>
                      <div className=" ">
                        <button type="submit" className="">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
