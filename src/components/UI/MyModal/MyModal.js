import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({children, visible, setVisible}) => {

	const rootClasess = [classes.myModal];

	if(visible) {
		rootClasess.push(classes.active)
	}

	return (
		<div className={rootClasess.join(' ')} onClick={() => setVisible(false)}>
			<div className={classes.myModalContent} onClick={event => event.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default MyModal;
