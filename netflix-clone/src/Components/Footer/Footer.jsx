import React from 'react'
import "./Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div>
<div className='footer_outer_container'>
<div className='footer_inner_container'>
  <div className='footer_icons'>
<a href="https://www.facebook.com/netflix/" target='_blank'><FacebookOutlinedIcon/></a>
<a href="https://www.instagram.com/netflix/" target='_blank'><InstagramIcon/></a>
<a href="https://twitter.com/WeAreNetflix" target='_blank'><TwitterIcon/></a>
<a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw" target='_blank'><YouTubeIcon/></a>
  </div>
<div className='footer_data'>
<div>
  <ul>
    <li>Audio Description</li>
    <li>Investor Relations</li>
    <li>Legal Notice</li>
  </ul>
  </div>
  <div>
  <ul>
    <li>Help Center</li>
    <li>Jobs</li>
    <li>Cookie Preferences</li>
  </ul>
</div>
<div>
  <ul>
  <li>Gift Cards</li>
    <li>Term of Uses</li>
    <li>Corporate Information</li>
  </ul>
</div>
<div>
  <ul>
    <li>Media Center</li>
    <li>Privacy</li>
    <li>Contact us</li>
  </ul>
</div>
</div>
  <div className='service_code'>
    <p>Service Code</p>
  </div>
  <div className='copy-right'>
    &copy; 1997-2024 Netflix,inc
  </div>
</div>



</div>
    </div>
  )
}

export default Footer
