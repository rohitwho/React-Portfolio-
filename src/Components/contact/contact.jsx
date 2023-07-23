
import React from 'react'
import FormInput from '../../reusable/form'
import {Button} from "@nextui-org/react"

export default function contact() {
  
  return (
    <div>
      <h2>Contact Form</h2>
      <FormInput
						inputLabel="Full Name:"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
            <FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>
          <Button >Submit</Button>
    </div>
  )
}
