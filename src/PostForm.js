import React from 'react';
import { connect } from 'react-redux';
import { addPost } from './actions/actions';
import uuid from 'uuid';

class PostForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value
    const message = e.target.elements.message.value;
    const data = {
      id: uuid(),
      title,
      message,
      isEditing: false
    }
    console.log(data);
    this.props.dispatch(addPost({data}));
    e.target.elements.title.value = '';
    e.target.elements.message.value = '';
  }
  render() {
    return (
      <div>
        <h1>Create Blog</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Enter blog title' name='title'/><br />
          <textarea required rows='5' cols='28' placeholder='Enter Blog' name='message'/><br />
          <button>Blog</button>
        </form>
      </div>
    );
  }
};

export default connect()(PostForm);
