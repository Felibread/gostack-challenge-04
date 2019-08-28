import React, { Component } from 'react';

import '../assets/style/Comment.css';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <img src={this.props.comment.author.avatar} />
                <div className="comment-text">
                    <p><strong>{this.props.comment.author.name}</strong> {this.props.comment.content}</p>
                </div>
            </div>
        );
    }
}

export default Comment;