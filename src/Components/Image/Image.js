import React, { useState, useEffect } from 'react';
import './Image.css';

const placeHolder =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

export const Image = (props) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
	}, [props]);
	return (
		<div>
			{(
				<img
					className="display-image"
					src={loading ? placeHolder : props.img}
					alt="no picture"
					height="500px"
					onLoad={() => setLoading(false)}
				></img>
			) || <h1>Loading</h1>}
		</div>
	);
};

export default Image;
