import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import data from '../../data'
import './index.css'
import { FcCheckmark } from "react-icons/fc"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import Calander from '../calander'
import { useSnapshot } from 'valtio'
import state from '../../stor'
import Gal from './gal'
import VilaMap from './VilaMap'

const VillaInfo = () => {
    let snap = useSnapshot(state)
    const params = useParams()
    let vila = data.find((e) => {
        return e.id == params.id
    })
    let getdaynam = () => {
        let a = (snap.endtday.getMonth() + 1) - (snap.startday.getMonth() + 1)
        a = (a * 30)
        a += (snap.endtday.getDate() + 1)
        a -= (snap.startday.getDate() + 1)
        return a
    }
    return (
        <div className='villa'>
            <div className='minigalorry'>
                <Gal photo={vila.images} />
            </div>
            <div className='info'>
                <div className='titel'>
                    <h1>{vila.titel} , {vila.for}</h1>
                    <div className='titel-nav'>
                        <Link className='revu'>0 revus</Link>
                        <span className='locatoin'>{vila.state}, {vila.city}</span>

                    </div>
                </div>
                <div className='titel'>
                    <h3>about:</h3>
                    <p className='offers'>{vila.describtoin}</p>
                    <span>{vila.type} </span>,  <span>{vila.f}</span>

                </div>
                <div className='titel owner'>
                    <div className='o-inf'>
                        <h4>the owner :{vila.owner.fullname}</h4>
                        <h5>owner contact</h5>
                        <ul>
                            <li>{vila.owner.email}</li>
                            <li>{vila.owner.tel}</li>
                        </ul>
                    </div>
                    <img src={vila.owner.img} />
                </div>

                <div className='titel'>
                    <h3>What this place offers :</h3>
                    {vila.offers.map(e => {
                        return (<p key={e} className='offers'><FcCheckmark /> {e}</p>)
                    })}
                </div>
                <div className='titel map'>
                    <VilaMap position={vila.position} />
                </div>
                <div className='titel'>
                    {vila.for == "vacatoin" ? (<>
                        <center>
                            {snap.endtday && <><span>{snap.startday.toLocaleDateString()}, {snap.endtday.toLocaleDateString()}</span>
                                <br />
                                for one night = {vila.prix}DA
                                <br />
                                this for {
                                    getdaynam()

                                } nights = {getdaynam() * vila.prix}DA
                            </>}
                        </center>
                        <center>
                            <Calander />
                        </center>
                    </>) : <>the price is{vila.prix}DA {vila.for == "rent" ? "/manth" : "nigocibel"} </>}
                </div>
            </div>
        </div>
    )
}

export default VillaInfo