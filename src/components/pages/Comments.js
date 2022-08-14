import React from 'react';

const Comments = ({item, i}) => {
	return (
		<div className="post" key={'comment' + i}>
			<h3>{item.name}</h3>
			<div><i>{item.email}</i></div>
			<div>{item.body}</div>
		</div>
	);
};

export default Comments;
