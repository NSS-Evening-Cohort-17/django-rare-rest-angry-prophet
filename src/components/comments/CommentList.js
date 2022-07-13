import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getComments } from "./CommentManager.js"

export const CommentList = (props) => {
    const [posts, setComments] = useState([])
    const history = useHistory()

    useEffect(() => {
        getComments().then(data => setComments(data))
    }, [])

    return (
        <article className="comments">
            {
                comments.map(comment => {
                    return <section key={`comment--${comment.id}`} className="comment">
                        <div className="comment__content">{comment.content}</div>
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {
                                history.push({ pathname: "/comments" })
                            }}
                        >Create New comment</button>
                    </section>
                })
            }
        </article>
    )
} 