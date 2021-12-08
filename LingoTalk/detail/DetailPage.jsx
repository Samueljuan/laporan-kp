import React, { useState } from 'react'
import Image from 'next/image'
import SpeakerIcon from '../../../../../public/icon/SpeakerIcon.svg'
import DateIcon from '../../../../../public/icon/DateIcon.svg'
import TimeIcon from '../../../../../public/icon/TimeIcon.svg'
import PriceIcon from '../../../../../public/icon/PriceIcon.svg'
import ArrowL from '../../../../../public/icon/ArrowL.svg'

export default function DetailPage({ dataLEE }) {

  const [dataLE, setDataLE] = useState({
    
  });

  const [error, setError] = useState(null);


  return (
    <div>
      <div className="">
        home / add event / detail project
      </div>
      <div className="">
        <div className="">
          <div className="">
            <Image src={ArrowL} alt="ArrowIcon"></Image>
          </div>
          <div className="">
            <div className="">
              <h1 className="">Detail Event</h1>
              <form>
                <div className=''>
                  <label className="">
                    Title Event
                  </label>
                  <input defaultValue={} disabled className="" id="title" type="text" placeholder="Title Event"></input>
                </div>

                <div className=''>
                  <label className="">
                    Description Event
                  </label>
                  <textarea defaultValue={} disabled className="" id="description" type="text" placeholder="Description Event"></textarea>
                </div>

                <div className=''>
                  <label className="">
                    Speaker
                  </label>
                  <input defaultValue={} disabled className="" id="description" type="text" placeholder="Speaker"></input>
                </div>

                <div className=''>
                  <label className="">
                    Sepaker Role
                  </label>
                  <div className="">
                    <div className="">
                      <span className=""><Image src={SpeakerIcon} alt="SpeakerIcon"></Image></span>
                    </div>
                    <input defaultValue={} disabled type="text" className="" placeholder="Speaker Role">
                    </input>
                  </div>
                </div>

                <div className=''>
                  <label className="">
                    Sepaker Company
                  </label>
                  <div className="">
                    <div className="">
                      <span className=""><Image src={SpeakerIcon} alt="SpeakerIcon"></Image></span>
                    </div>
                    <input defaultValue={} disabled type="text" className="" placeholder="Speaker Commpany">
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
                        <span className=""><Image src={DateIcon} alt="SpeakerIcon"></Image></span>
                      </div>
                      <input defaultValue={} disabled type="text" className="" placeholder="Date">
                      </input>
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
                      <input defaultValue={} disabled type="text" className="" placeholder="Time">
                      </input>
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
                      <input defaultValue={} disabled type="text" className="" placeholder="Price">
                      </input>
                    </div>
                  </div>
                </div>

                <div className='mb-15'>
                  <label className="">
                    Cover
                  </label>
                  <div className="">
                    <Image src={} alt=""/>
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
