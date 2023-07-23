import React, { useState } from 'react';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: "10px",
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
}
export default function renderHeader() {


  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  return (
    <div >

      <header className="Primary-Header ">
        <h1 className="Header-Logo">Rohit</h1>
<nav className="Primary-Navbar">
  <ul className="U-List">
    <li className='Navbar-Links '><a href="" className="Navbar-A">Home</a></li>
    <li className='Navbar-Links'><a href="" className="Navbar-A">Projects</a></li>
    <li className='Navbar-Links'><a href="" className="Navbar-A">About</a></li>
    <li className='Navbar-Links'><a href="#Contact" className="Navbar-A">Contact</a></li>
    <li className='Navbar-Links'>    <Button  className="Navbar-A" onClick={handleOpen}>Hire Me</Button></li>
    <DarkModeTwoToneIcon/>

  </ul>
</nav>
      </header>
    
      
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
 <form className='Hire-Form' action="">
  <label htmlFor="uName" > Name:</label>
  <input type="text" name="uName" id="uName" />
  <label htmlFor="E-Mail">E-Mail:</label>
  <input type="email" name="E-mail" id="E-Mail" />
  <label htmlFor="Description">Project Description:</label>
  <input type="text" name="Description" id="Description" />
 </form>
 <button type="submit">Submit</button>
 <button onClick={handleClose}>Cancel</button>
  </Box>
</Modal>



    </div>


  );
}







{/*       
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


  <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
      */}