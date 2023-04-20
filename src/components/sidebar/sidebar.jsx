import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Logo from '../../assets/Logo.png'
import { inandout } from '../../actions/sidebarAction'

export const Sidebar = () => {
  let navbarName = window.location.pathname.split('/').join('')
  if (navbarName === '' || navbarName === 'farming') {
    navbarName = 'Farming'
  }
  const dispatch = useDispatch()
  const sideBarValue = useSelector((state) => state.sideBarReducer)
  const handleSidebar = () => {
    dispatch(inandout(false))
  }
  return (
    <div className={`sidebar-main ${sideBarValue === true ? 'extended' : ''}`}>
      <div className="logo">
        <img src={Logo} alt="" />
        <p onClick={handleSidebar}>x</p>
      </div>
      <div className="nav-list">
        <ul>
          {/* <NavLink exact to="/launchpad" className="li" activeClassName="active-class">Launchpad</NavLink>
                        <NavLink exact to="/safeswap" className="li" activeClassName="active-class">SafeSwap</NavLink>
                        <NavLink exact to="/safetrade" className="li" activeClassName="active-class">SafeTrade</NavLink> */}
          <NavLink
            exact
            to="/staking"
            className="li"
            activeClassName="active-class"
          >
            Staking assets
          </NavLink>
          {/* <NavLink
            exact
            to="/farming"
            className="li"
            activeClassName="active-class"
          >
            Farming
          </NavLink> */}
        </ul>
      </div>
    </div>
  )
}

