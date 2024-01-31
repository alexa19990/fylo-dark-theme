import React from 'react'
import logoIcon from '../assets/images/logo.svg'
import classes from '../modules/header.module.scss'

const Header = () => {
  return (
    <div className={classes['header']}>
        <div className={classes['headerImg-side']}>
            <img src={logoIcon} alt="" />
        </div>
        <div className={classes['headerText-side']}>
            <p>Features</p>
            <p>Team</p>
            <p>Sign in</p>
        </div>
    </div>
  )
}


export default Header