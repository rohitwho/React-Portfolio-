import React, { useState } from 'react';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import FormInput from '../../reusable/form';
import Box from '@mui/material/Box';
import Hire from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Button} from "@nextui-org/react"
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "../../assets/svg";
import {SunIcon} from "../../assets/svg";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: "10px",
  width: 400,
  bgcolor: ' var(--background)',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
}
export default function renderHeader({ handlePageChange }) {
 




const [theme, updateTheme ]=useState("")
 function switchMode(){
   return updateTheme("dark")

}

const body = document.body;
body.dataset.theme = (theme);






  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);





  return (
    <div >

      <header className="Primary-Header ">
        <h1 className="Header-Logo">Rohit</h1>
<nav className="Primary-Navbar">
  <ul className="U-List">
    <li className='Navbar-Links '><a href="#" className="Navbar-A"  onClick={() => handlePageChange('Home')}>Home</a></li>
    <li className='Navbar-Links'><a href="#Projects" className="Navbar-A" >Projects</a></li>
    <li className='Navbar-Links'><a href="#About" className="Navbar-A" >About</a></li>
    <li className='Navbar-Links'><a href="#Contact" className="Navbar-A" onClick={() => handlePageChange('Contact')}>Contact</a></li>
    <li className='Navbar-Links'>    <Hire   className="Navbar-A" onClick={handleOpen}>Hire Me</Hire ></li>
    <Switch onClick= {switchMode}
    
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
      
    </Switch>
    {/* <DarkModeTwoToneIcon onClick= {switchMode}/> */}


  </ul>
</nav>
      </header>
    
      
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  sx={style}>
  <FormInput
								inputLabel="Full Name:"
								labelFor="name"
								inputType="text"
								inputId="name"
								inputName="name"
								placeholdertext="Name"
								ariaLabelName="Name"
							/>
			  <FormInput
								inputLabel="Email :" 
								labelFor="email"
								inputType="email"
								inputId="email"
								inputName="email"
								placeholdertext="email"
								ariaLabelName="Email"
							/>
							
							<FormInput
								inputLabel="Project Description :"
								labelFor="Message"
								inputType="textarea"
								inputId="Message"
								inputName="Message"
								placeholdertext="Message"
								ariaLabelName="Message"
								cols="70"
								rows ="8"
							/>
              <Button variant="ghost" color="danger" className='submit-hire ' onClick={handleClose}>Cancel</Button>
              <Button variant="ghost" color='primary' className='submit-hire '  onPress={handleClose}>Submit</Button>
             
							
  </Box>
</Modal>

    </div>


  );
}







