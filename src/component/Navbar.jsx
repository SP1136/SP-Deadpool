import React, { useEffect } from 'react'
import './Navbar.css'
import banner from '../component/img/background-red.png'
import logo from '../component/img/logo.png'
import Deadpool from '../component/img/Deadpool.png'
import eyeimg from '../component/img/eyelogo.png'
import minlogo from '../component/img/minlogo.png'
import deadpool3 from '../component/img/Deadpool3.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person4Outlined';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  useEffect(() => {
    // browser-only code
  }, []);

  const eye = [eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg, eyeimg];

  return (
    <>
      {/* NAVBAR */}
      <div className='w-100'>
        <nav className="navbar">
          {/* <h1>My Application logo</h1> */}
          <img src={logo} alt="" width={100} />
          <ul className="nav-links">
            <li><a href="">HOME</a></li>
            <li><a href="">TOP CASTS</a></li>
            <li><a href="">PRODUCT</a></li>
            <li><a href="">BOX OFFICE</a></li>
            <li><a href="">IMAX 6</a></li>
          </ul>
          <ul className="nav-manage">
            <li><SearchIcon className='searchicon' /> </li>
            <li><PersonIcon className='personicon' /> </li>
            {/* <li><MenuIcon className='menu' sx={{color: 'red', backgroundColor: 'white' }} /> </li> */}
            <li><MenuIcon className='menu' sx={{ color: 'red' }} /> </li>
          </ul>
        </nav>
      </div>

      {/* HERO  */}
      <div className="div1">
        <div className="backimg">
          <img src={banner} alt="banner" />
        </div>
        <div className="topside">
          <ul>
            <li>Action</li>
            <li>Comedy</li>
            <li>Sci-Fi</li>
          </ul>
          <strong1 className="datee">RELEASE [ MAY 7, 2024 ]</strong1>
        </div>
        <div className="midline">
          <ul>
            <li>RYAN REYNOLEDS</li>
            <li>KARN SONI</li>
          </ul>
          <ul>
            <li>EMMA CORRIN</li>
            <li>HUGH JACKMAN</li>
          </ul>
        </div>
        <div className="whitebox">
          <div className="linee">
            <p className='box1'></p>
            <p className='box1'></p>
            <p className='box1'></p>
          </div>
        </div>
        <div className="yearstag">
          <div className="yearstext">
            <tag>[2</tag><tag>0</tag><tag>2</tag><tag>6]</tag>
          </div>
        </div>
        <div className="div1">
          <div className="txt">
            DEADPOOL
          </div>

        </div>
      </div>

      {/* Deadpool img */}
      <div className="deadpoolimg">
        <img src={Deadpool} alt="Deadpool" />
      </div>

      <div className="deadpooltitle">
        <div className="dtitle">
          <div className="leftside">
            <div className="boximg">
              <img src={minlogo} alt="logo" width={30} />
              <h3>DEADPOOL ||| STORY :</h3>
            </div>
            <p>PART A. &nbsp;&nbsp;&nbsp;&nbsp; Wolverine joins the "merc with a  mouth " in the third installment of the Deadpool film franchise...    </p>
          </div>
          <div className="rightside">
            <button className='trailerbtn'>BOOK NOW </button>
            <h1> 01 </h1>
            <img src={deadpool3} alt="Deadpool3" width={80} />
          </div>
        </div>
      </div>

      <div className="maqer">
        <div className="marquee">
          <div className="eyeimg">
            {eye.map((img, index) => (
              <img key={`first-${index}`} src={img} alt="" />
            ))}
            {eye.map((img, index) => (
              <img key={`second-${index}`} src={img} alt="" />
            ))}
          </div>
        </div>
      </div>


      <h1 className='pin'> Only Laptop And Tablet View </h1>


    </>
  )
}

export default Navbar