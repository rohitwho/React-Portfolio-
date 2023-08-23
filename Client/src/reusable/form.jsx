import React from 'react'

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholdertext,
	ariaLabelName,
	cols,
	rows,
	value,
	onChange

  }) => {

	if (inputType === 'textarea') {
	  return (
		<div className="Form">
		  <label className="Form-Label" htmlFor={labelFor}>
			{inputLabel}
		  </label>
		  <textarea
			className="Form-Input"
			type={inputType}
		
			id={inputId}
			name={inputName}
			placeholder={placeholdertext}
			aria-label={ariaLabelName}
			cols={cols}
			rows={rows}
			value={value} // Bind the value to the input
          onChange={onChange}
			required
		  />
		</div>
	  );
	}
  

	return (
	  <div className="Form">
		<label className="Form-Label" htmlFor={labelFor}>
		  {inputLabel}
		</label>
		<input
		  className="Form-Input"
		  type={inputType}
		  id={inputId}
		  name={inputName}
		  placeholder={placeholdertext}
		  aria-label={ariaLabelName}
		  value={value} 
          onChange={onChange}
		  required
		/>
	  </div>
	);
  };
  
export default FormInput;
