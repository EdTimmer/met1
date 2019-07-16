import React from 'react';

function Entry({ name, hours, description }) {
  return (
    <div className="entry">
      <div className="top">
        <div> 
          PROJECT {name}
        </div>
        <div className="hours-and-button">
          {hours}
        </div>


      </div>
      <div className="card">
        {description}
      </div>
     
      
    </div>
  );
}

export default Entry;