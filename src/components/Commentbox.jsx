import React, { useState } from 'react';

const CommentList = ({ comments }) => {
    return (
        <div>
            <h2>Comments</h2>
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                    <div><b>{comment.commenter}</b> 
                        <br></br>
                        {comment.text}
                    </div>
                </div>
            ))}
        </div>
    );
};

const CommentBox = () => {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([
        {
            commenter: 'John',
            text: 'This is the first comment.',
        },
        {
            commenter: 'Jane',
            text: 'Great job on the project!',
        },
        {
            commenter: 'Mike',
            text: 'I really like this feature.',
        },
    ]);

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCommentsList([...commentsList, { commenter: 'New Commenter', text: comment }]);
        setComment('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    className='comment-text'
                    value={comment}
                    onChange={handleChange}
                    placeholder="Write your comment..."
                />
                <button style={{"background-color":"rgba(186, 126, 126, 1)", "border":"none", "color":"white","padding":"0.5rem","border-radius":"5px"}} type="submit">Submit</button>
            </form>
            <CommentList comments={commentsList} />
        </div>
    );
};

export default CommentBox;
