import React from 'react';

const MySelect = ({options, defaultValue}) => {
	return (
		<div>
			<select>
				<option disabled value={''}>{defaultValue}</option>
				{options.map(opt =>
					<option value={opt.value}>{opt.name}</option>)}
			</select>
		</div>
	);
};

export default MySelect;
