import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import './index.css'
import { MdMapsHomeWork } from "react-icons/md";
const Header = () => {
    let [width, setwidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setwidth(window.innerWidth)
        })
    }, [window.innerWidth])
    return (
        <>
            <header >
                <Link to='/'>
                    <motion.div
                        initial={{ y: 400, }}
                        animate={{ y: 0, skew: 10 }}
                        transition={{ duration: 1, type: "spring" }}
                    >
                        <img
                            src={logo}
                            alt='logo'
                        />
                    </motion.div>

                    <motion.p
                        initial={{ x: "50vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.5, type: "spring" }}
                    >akrilo</motion.p>
                </Link>
            </header>

            <Outlet /></>
    )
}

export default Header