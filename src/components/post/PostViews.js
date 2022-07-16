import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getPosts } from "./PostManager.js"

export const PostViews = (props) => {
    const [posts, setPosts] = useState([])
    const history = useHistory()

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    return (
        <article className="posts">
            <div>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/posts/new" })
                    }}
                >Create New Post</button>
            </div>
            {
                posts.map(post => {
                    return <section key={`post--${post.id}`} className="post">
                        <div className="post__title">
                            <a href="/posts/${post.id}/details" rel="post details"> {post.title}</a>
                            by {post.user_id.user.first_name}
                        </div>
                        <div className="post__category">Category: {post.category_id.label}</div>
                        <div className="post__publication_date">Posted on {post.publication_date}</div>
                        <div className="post__image_url">{post.image_url}</div>
                        <div className="post__content">{post.content}</div>
                    </section>

                })
            }
        </article>
    )
}
