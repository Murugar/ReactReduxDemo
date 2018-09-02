import React from 'react';
import { connect } from 'react-redux';


class Post extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}

export default connect()(Post);
