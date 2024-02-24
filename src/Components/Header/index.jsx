import React, { useState } from 'react';
import './style.css'
import { RiAccountPinCircleLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxGear } from "react-icons/rx";
import { CgFormatJustify } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";




function Header() {
  const [menu, setMenu] = useState(true)
   console.log(menu)
  function menuToogle () {
        setMenu(false)
    console.log(menu)
  }
  function closeToogle () {
    setMenu(true)

    console.log(menu)
  }
 
  return (
    <div>
      <div className='container-header'>
        <div><h3>Logo</h3></div>
        <div>
          <ul className={menu === true ? 'container-nav-flex' : 'container-nav'}>
            <li className='card-toogle-toogle' onClick={closeToogle}><FaRegWindowClose/></li>
            <li className='toogle'>Home</li>
            <li className='toogle'>Mercados</li>
            <li className='toogle'>Home</li>
            <li className='toogle'>Mercados</li>
          </ul>
        </div>
         <div>
          <ul className='container-account'>
            <li><RiAccountPinCircleLine/></li>
            <li><IoIosNotificationsOutline/></li>
            <li><RxGear/></li>
          </ul>
        </div>
        <div className='card-toogle' onClick={menuToogle}><CgFormatJustify/></div>
      </div>
     
    </div>
  );
}

export default Header
