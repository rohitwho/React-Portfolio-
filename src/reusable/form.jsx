import React from 'react'

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className="Form">
			<label
				className="Form-Label"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="Form-Input"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
