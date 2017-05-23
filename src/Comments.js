import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: []
        }

        this.handleChange = this.handleChange.bind(this)

    };


        handleChange(ev) {
            this.setState({
                comment:ev.target.value
            })
        };

        addComment(ev) {
            const state = {... this.state}
            const comment = {
                text: this.state.comment,
            }

            state.comments.push(comment)
            state.comment = ''
            this.setState(state)
        }

render() {
    return (
     <div>
        <textarea placeholder>Enter a comment (1000 character max)</textarea>
        <button className = "button"> Submit Comment </button>
    </div>
    )
 };
}

export default Comments