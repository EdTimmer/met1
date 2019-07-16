import React from 'react';

import Description from './Description';

class Entry extends React.Component {
  state = {
    showDescription: false,
  }

  toggleShow = () => {
    this.setState({showDescription: !this.state.showDescription})
  }
  render() {
    const { summary, hours, description } = this.props;
    const { showDescription } = this.state;
    const { toggleShow } = this; 
    return (
      <div className="entry">
        <div className="top">
          <div className="top-text-project">
            PROJECT {summary}
          </div>
          <div className="hours-and-button">
            <div className="hours">{hours} HOURS</div>
            {
              showDescription ? (<div className="btn" onClick={toggleShow}>&#5169;</div>) : (<div onClick={toggleShow} className="btn">&#5167;</div>)
          }
        </div>
        </div>
          {
            showDescription ? (
            <div className="card">
              <Description description={description} />
            </div>
            ) : null
          }

      </div>
    )
  }
}

export default Entry;