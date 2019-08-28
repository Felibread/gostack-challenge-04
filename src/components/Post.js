import React, { Component } from 'react';

import Comment from './Comment';

import '../assets/style/Post.css';

class Post extends Component {
    render() {
        return (
            <>
                <div className="post">
                    <div className="post-data">
                        <div className="post-profile">
                            <img src={this.props.post.author.avatar} />
                            <div className="user-data">
                                <strong>{this.props.post.author.name}</strong>
                                <small>{this.props.post.date}</small>
                            </div>
                        </div>
                        <div className="post-caption">
                            <p>{this.props.post.content}!</p>
                        </div>
                        <hr />
                        {this.props.post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                    </div>
                </div>
            </>
        );
    }
}
export default Post;