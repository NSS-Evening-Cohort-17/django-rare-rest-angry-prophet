import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getPosts } from "./PostManager.js"

export const PostList = (props) => {
    const [posts, setPosts] = useState([])
    const history = useHistory()

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    return (
        <article className="posts">
            {
                posts.map(post => {
                    return <section key={`post--${post.id}`} className="post">
                        <div className="post__title">{post.title} by {post.author}</div>
                        <div className="post__category">Category: {post.category_id}</div>
                        <div className="post__publication_date">Posted on {post.publication_date}</div>
                        <div className="post__image_url">{post.image_url}</div>
                        <div className="post__content">{post.content}</div>
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {
                                history.push({ pathname: "/posts" })
                            }}
                        >Create New Post</button>
                    </section>

                })
            }
        </article>
    )
}
