import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <article>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.description}</p>
            </article>
        )
    }
}

export default Post;