
import React from 'react'
import FormInput from '../../reusable/form'
import {Button} from "@nextui-org/react"
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


export default function contact() {
  
  return (
    <div id =  "Contact">
      <section className='Contact-Left'>
		<h2>Contact Form</h2>
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
								inputLabel="Subject :"
								labelFor="subject"
								inputType="text"
								inputId="subject"
								inputName="subject"
								placeholdertext="Subject"
								ariaLabelName="Subject"
							/>
							<FormInput
								inputLabel="Message :"
								labelFor="Message"
								inputType="textarea"
								inputId="Message"
								inputName="Message"
								placeholdertext="Message"
								ariaLabelName="Message"
								cols="70"
								rows ="8"
							/>
							

							{/* <label htmlFor="Message">Message :</label>
							<textarea id="Message" name="Message" rows="4" cols="50" placeholdertext="Enter Message Here"></textarea> */}
			<Button >Submit</Button>
	  </section>

		  <section className='Contact-Right'>
			<h2>Contact Detail</h2>

			
			<p className='Contact-Details'><MapIcon/>   123 Front Street,NY</p>
			
			
			<p className='Contact-Details'><EmailIcon/>  Rohitnayyar54@gmail.com</p>
			
			
			
		<p className='Contact-Details'><CallIcon/>  +1 123-456-7891</p>

			

		  </section>




		  

    </div>
  )
}
