import React from "react";

const Card = (props) => {
    // Define the maximum width and height for the image
    const maxWidth = '500px'; // Adjust this as needed
    const maxHeight = '400px'; // Adjust this as needed

    return (
        <div>
            <img
                src={props.image}
                alt="Card"
                style={{
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    width: 'auto', // Maintain aspect ratio
                    height: 'auto', // Maintain aspect ratio
                }}
            />
            <div className={'Event ' + props.color}>
                <h5>{props.title}</h5>
                <h6>{props.description}</h6>
            </div>
        </div>
    );
};

export default Card;
