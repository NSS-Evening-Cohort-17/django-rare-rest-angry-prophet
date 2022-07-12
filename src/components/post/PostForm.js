import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createPost, getCategories, getUser } from './PostManager.js'


export const PostForm = () => {
    const history = useHistory()
    const [getCategories, setCategories] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values. Done - Subject to approval
    */
    const [currentPost, setCurrentPosts] = useState({
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

    const changePostState = (domEvent) => {
        const newPostState = { ...currentPost }
        newPostState[domEvent.target.name] = domEvent.target.value
        setCurrentPosts(newPostsState)
    }
    // Done - Subject to approval
    return (
        <form className="postForm">
            <h2 className="postForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentPost.title}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <div>
                <fieldset>
                    <div className="form-group"> Create New Post </div>
                </fieldset>
            </div>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted - Done - Subject to approval
                    evt.preventDefault()

                    const post = {
                        author: currentPost.author,
                        title: currentPost.title,
                        category_id: parseInt(currentPost.category_id),
                        publication_date: currentPost.publication_date,
                        image_url: currentPost.image_url,
                        content: currentPost.content,
                    }

                    // Send POST request to your API - Done - Subject to approval
                    createPost(post)
                        .then(() => history.push("/posts"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}