import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/ContactMail';
import ResumeIcon from '@mui/icons-material/FilePresent';


export default function renderHeader() {
    const [value, setValue] = React.useState(0);

  return (
    <div>
      <header className="Primary-Header">
        <h1 className="Header-Logo">Portfolio</h1>
        {/* <nav className="Primary-Nav">
          <ul className="Navbar-List">
            <li className="Navbar-Links">
              <a className="Navbar-anchor">Home</a>
            </li>
            <li className="Navbar-Links">
              <a className="Navbar-anchor">Resume</a>
            </li>
            <li className="Navbar-Links">
              <a className="Navbar-anchor">Projects</a>
            </li>
            <li className="Navbar-Links">
              <a className="Navbar-anchor">Contact</a>
            </li>
          </ul>
        </nav> */}
      </header>
      <h1>Hello,I am Rohit . I am Full stack Developer</h1>
<div className='Navigation'>
 <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{ backgroundColor:"Transparent" , color: 'white', padding: '10px',display:"flex",alignItems:"flex-end" }}

    >
      <BottomNavigationAction label="Projects" icon={<HomeIcon />} />
      <BottomNavigationAction label="Resume" icon={<ResumeIcon />} />
      <BottomNavigationAction label="Contact" icon={<ContactIcon />} />
    </BottomNavigation>
  
</div>
     
    </div>
  );
}
