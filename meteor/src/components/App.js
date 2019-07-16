import React from "react";
import "./App.css";
import entries from "../entries.js";

import Header from "./Header";
import Entry from "./Entry";

class App extends React.Component {
  state = {
    summary: "",
    hours: 0,
    description: ""
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="divider-red" />
        <div>
          {entries.map(entry => {
            return (
              <div key={entry.id}>
                <Entry
                  summary={entry.summary}
                  hours={entry.hours}
                  description={entry.description}
                />
                <div className="divider-grey" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
