import React from 'react'
import "./Header.css"
import Logo from "../assets/image/Netflixlogo.jpg"
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
<ul>
  <li><img src={Logo} alt="NetFlix Logo" width="100" /></li>
  <li>Netflix</li>
  <li>Home</li>
  <li>TVShows</li>
  <li>Movies</li>
  <li>Latest</li>
  <li>MyList</li>
  <li>Browse by Language</li>
</ul>
        </div>
        <div className='header_right'>
<ul>
  <li><SearchOutlinedIcon/></li>
  {/* <li><AccountBoxIcon/></li>
  <li><ArrowDropDownIcon/></li> */}
</ul>
        </div>
      </div >
    </div>
  )
}

export default Header