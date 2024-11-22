"use client"
import React, { useContext } from 'react'
import styles from './DarkModeTooggle.module.css'
import { themeToggle } from '@/context/ThemeContext'

const DarkModeToggle = () => {
    const {toggle, mode } = useContext(themeToggle)
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌞</div>
            <div className={styles.ball} style={mode === "light" ? {left : "2px"} : {left : "28px"}}/>
        </div>
    )
}

export default DarkModeToggle