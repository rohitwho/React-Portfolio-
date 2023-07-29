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
  }) => {

	if (inputType === 'textarea') {
	  return (
		<div className="Form">
		  <label className="Form-Label" htmlFor={labelFor}>
			{inputLabel}
		  </label>
		  <textarea
			className="Form-Input"
			id={inputId}
			name={inputName}
			placeholder={placeholdertext}
			aria-label={ariaLabelName}
			cols={cols}
			rows={rows}
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
		  required
		/>
	  </div>
	);
  };
  
export default FormInput;
