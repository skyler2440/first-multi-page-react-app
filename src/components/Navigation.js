// import React from "react";
// import {NavLink} from 'react-router-dom'
// const Nav = () => {
//   return( 
//   <div>
// <NavLink to="/">Home</NavLink>
// <NavLink to="/about">About</NavLink>
// <NavLink to="/contact">Contact</NavLink>

//   </div>
//   )
// };
  
// export default Nav;
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>Company Name Here</Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          href="/"
        />
        <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} href="/about" />
        <Menu.Item
          name='contactUs'
          active={activeItem === 'contactUs'}
          href="/contact"
        />
      <Menu.Item header position="right">Built with React</Menu.Item>
      </Menu>
    )
  }}