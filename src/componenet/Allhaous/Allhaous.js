import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { IoLocationSharp, IoCaretDownOutline } from "react-icons/io5";
import { BsFilterSquare, BsFillMapFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import './index.css'
import data from '../../data'
import Model from './Model';
import { useSnapshot } from 'valtio';
import state from '../../stor';
import Map from './map';

const Allhaous = () => {
    let [SearchParams, setSearchParams] = useSearchParams()
    let snap = useSnapshot(state)
    let con = snap.menu ? "container flex" : "container "
    let menu = snap.menu ? "menu none" : "menu "
    let showlocatoin = snap.menu ? "navigatoin" : "navigatoin none"
    const typeFilter = SearchParams.get("type")
    const typeFilter2 = SearchParams.get("type2")
    let filter = () => {
        if (typeFilter && typeFilter2) {
            let filter = data.filter(e => e.for == typeFilter && e.type == typeFilter2)
            return filter
        } else if (typeFilter) {
            let filter = data.filter(e => e.for == typeFilter)
            return filter
        } else if (typeFilter2) {
            let filter = data.filter(e => e.type == typeFilter2)
            return filter
        } else {
            let filter = data
            return filter
        }
    }



    let na = filter().map(e => {
        return (
            <Model key={e.id} data={e} />
        )
    })

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    let abc = () => {
        handleFilterChange("type", null)
        handleFilterChange("type2", null)
    }
    let raouf = typeFilter || typeFilter2 ? true : false
    return (
        <div className={con}>
            <div className={showlocatoin}>
                <div className='locatoin'>
                    <div className='close' onClick={() => state.menu = !state.menu}>
                        <AiOutlineClose />
                    </div>
                    <Link className='locatoin-titel'>locatoin  <IoCaretDownOutline /></Link>
                    <h5 ><IoLocationSharp /> all states , algerai</h5>
                </div>
                <div className='type border'>
                    <p>reson for :</p>
                    <ul>
                        <button
                            onClick={() => handleFilterChange("type", "rent")}
                            className={
                                `
                        ${typeFilter === "rent" ? "green" : ""}`
                            }
                        >
                            rent
                        </button>
                        <button
                            onClick={() => handleFilterChange("type", "buy")}
                            className={`${typeFilter === "buy" ? "green" : ""}`}
                        >
                            buy
                        </button>
                        <button
                            onClick={() => handleFilterChange("type", "vacotion")}
                            className={`${typeFilter === "vacotion" ? "green" : ""}`}
                        >vacotion
                        </button>

                    </ul>
                </div>
                <div className='catigory border'>
                    <p className='catigory-titel'>catigory : </p>
                    <ul>
                        <button
                            onClick={() => handleFilterChange("type2", "appartment")}
                            className={`${typeFilter2 === "appartment" ? "green" : ""}`}
                        >appartment</button>
                        <button
                            onClick={() => handleFilterChange("type2", "vila")}
                            className={`${typeFilter2 === "vila" ? "green" : ""}`}
                        >villa</button>
                        <button
                            onClick={() => handleFilterChange("type2", "rome")}
                            className={`${typeFilter2 === "rome" ? "green" : ""}`}
                        >rome</button>
                    </ul>
                </div>
                <center>{raouf && <button
                    onClick={() => abc()
                    }>claer</button>}</center>
            </div>
            <div className={menu}>
                <div className='filter' onClick={() => state.menu = !state.menu}>
                    <span>filter:</span> <BsFilterSquare />
                </div>
                <div className='map' onClick={() => {
                    state.zbi = !state.zbi
                }}><span>map:</span> <BsFillMapFill /></div>
            </div>

            <div className='resolt'>
                {snap.zbi ? <Map mark={filter()} /> : <>{na}</>}





            </div>

        </div >
    )
}

export default Allhaous