import React from 'react';
import classes from "./MySelect.module.css";

const MySelect = ({options, defaultValue, value, onChange}) => {
	return (

			<select value={value}
					onChange={e => onChange(e.target.value)}
					className={classes.mySelect}>

				<option disabled value={''}>{defaultValue}</option>
				{options.map(opt =>
					<option key={opt.value} value={opt.value}>{opt.name}</option>)}
			</select>

	);
};

export default MySelect;
