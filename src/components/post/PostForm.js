import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createPost, getCategories } from './PostManager.js'


export const PostForm = () => {
    const history = useHistory()
    // const [categories, setCategories] = useState([])
    // const [user, setUser] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values. Done - Subject to approval
    */
    const [currentPost, setCurrentPosts] = useState({
        author: 1,
        title: "test",
        category_id: 1,
        publication_date: "",
        image_url: "http://dummyimage.com/114x100.png/cc0000/ffffff",
        content: "",
        // approved: 1
    })

    // useEffect(() => {
    //     getCategories().then(data => setCategories(data))
    // }, [])

    const changePostState = (domEvent) => {
        const newPostState = { ...currentPost }
        let selectedVal = domEvent.target.value
        if (domEvent.target.name.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        // console.log(selectedVal)
        newPostState[domEvent.target.name] = selectedVal
        // console.log(newPostState)
        setCurrentPosts(newPostState)
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
                <div className="form-group">
                    <label htmlFor="image">Add Image: </label>
                    <input type="text" name="image" required autoFocus className="form-control"
                        value={currentPost.image_url}
                        onChange={changePostState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Add Author: </label>
                    <input type="text" name="author" required autoFocus className="form-control"
                        value={currentPost.author}
                        onChange={changePostState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Add Category: </label>
                    <input type="text" name="category" required autoFocus className="form-control"
                        value={currentPost.category_id}
                        onChange={changePostState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Add Content: </label>
                    <input type="text" name="content" required autoFocus className="form-control"
                        value={currentPost.content}
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
                onClick={
                    evt => {
                        // Prevent form from being submitted - Done - Subject to approval
                        evt.preventDefault()

                        let yourDate = new Date()

                        const post = {
                            user_id: parseInt(currentPost.author),
                            category_id: parseInt(currentPost.category_id),
                            title: currentPost.title,
                            publication_date: yourDate.toISOString().split('T')[0],
                            image_url: currentPost.image_url,
                            content: currentPost.content,
                            approved: 1
                        }
                        console.log(post)

                        // Send POST request to your API - Done - Subject to approval
                        createPost(post)
                            .then(() => history.push("/posts/details"))
                    }}
                className="btn btn-primary">Create</button>
        </form>
    )
}