import React from "react";

const Card = (props) => {
  // Define the maximum width and height for the background image
  const maxWidth = '515px'; // Adjust this as needed
  const maxHeight = '415px'; // Adjust this as needed

  // Define the URL you want the link to navigate to
  const linkUrl = props.linkUrl; // Add the URL as a prop
  const color = props.color || "pink";

  return (
    <div className={`Card ${color}`}>
      <div className="CardImage">
        <img
          src= {props.image} 
          alt="Card"
          style={{
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            width: '100%', // Make the background image fill the container width
            height: 'auto', // Maintain aspect ratio
          }}
        />
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="LinkButtonContainer">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-black-glyph.png" // Pass the link image as a prop
            alt="Link Button"
            className="LinkButton"
          />
        </a>
      </div>
      <div className="CardContent">
      <a href={props.buttonUrl} target="_blank" rel="noopener noreferrer" className="Button">
        <h5>{props.title}</h5>
        <h6>{props.description}</h6>
        </a>
      </div>
    </div>
  );
};

export default Card;





