import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class AllPost extends React.Component {
  render() {
    return (
      <div>
        <h1>All Blogs</h1>
        {this.props.posts.map((post) => <Post key={post.id} title={post.data.title} message={post.data.message}/>)}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(AllPost);
