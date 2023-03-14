import React, { useEffect, useState } from 'react'

type commnetObj = {
    id: number;
    text: string;
}

function Comments() {
    const [comments, setComments] = useState<{ id: number, text: string }[]>([])
    const [comment, setComment] = useState<string>('')

    const fetchComments = async () => {
        const response = await fetch('http://localhost:3000/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const onAddComment = async () => {
        const response = await fetch('http://localhost:3000/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const deleteComment = async (comment: number) => {
        const response = await fetch(`http://localhost:3000/api/comments/${comment}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        debugger
        fetchComments()
    }

    return (
        <div>
            <input type='text' onChange={(e) => setComment(e.target.value)} />
            <button onClick={onAddComment}>Add Comment</button>
            <button onClick={fetchComments}>Fetch Comments</button>
            {comments.map((comment: commnetObj) => {
                return (
                    <React.Fragment key={comment.id}>
                        <div>{comment.id} | {comment.text}</div>
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Comments