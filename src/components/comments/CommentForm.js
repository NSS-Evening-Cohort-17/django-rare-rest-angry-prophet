import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createComment, getUser } from './CommentManager.js'

export const CommentForm = () => {
    const history = useHistory()
    const [getCategories, setCategories] = useState([])

    /*
       I'm not 100% sure if this is gonna work and
       I think i need to have a better idea of how
       posts work to link this all togther but i think 
       we're on the right track
    */
    const [currentComment, setCurrentComments] = useState({
        author: "",
        title: "",
        category_id: 0,
        publication_date: "",
        image_url: "",
        content: "",
    })

    useEffect(() => {
        getUser().then(setUser)
    }, [])

    const changeCommentState = (domEvent) => {
        const newCommentState = { ...currentComment }
        newCommentState[domEvent.target.name] = domEvent.target.value
        setCurrentComments(newCommentsState)
    }

    return (
        <form className="commentForm">
            <h2 className="commentForm__title">New comment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Content">Content Goes here </label>
                    <input type="text" name="content" required autoFocus className="form-control"
                        value={currentComment.title}
                        onChange={changeCommentState}
                    />
                </div>
            </fieldset>
            </form>
    )
}
