import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 2,
            });
          }}
        >
          SetCount
        </button>
      </div>
    );
  }
}

export default Profile;
