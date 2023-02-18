import React from "react"

import "./Image.css"

const image = (props) => {
	console.log(props.imageUrl)
	return (
		<img
			className="image"
			src={props.imageUrl}
			alt=""
			style={{
				objectFit: props.contain ? "contain" : "cover",
				objectPosition: props.left ? "left" : "center",
				// backgroundImage: `url('${props.imageUrl}')`,
				// backgroundSize: props.contain ? "contain" : "cover",
				// backgroundPosition: props.left ? "left" : "center",
			}}
		/>
	)
}

export default image
