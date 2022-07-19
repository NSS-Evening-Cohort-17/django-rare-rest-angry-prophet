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
                posts.map(p => {
                    return <section key={`post--${p.id}`} className="post">
                        <div className="post__title">
                            <a onClick={() =>
                                history.push(`/posts/${p.id}/details`)} rel="post details"> {p.title}</a>
                            by {p.user_id.user.first_name}
                        </div>
                        <div>
                            {p.id}
                        </div>
                        <div className="post__category">Category: {p.category_id.label}</div>
                        <div className="post__publication_date">Posted on {p.publication_date}</div>
                        <div className="post__image_url">{p.image_url}</div>
                        <div className="post__content">{p.content}</div>
                    </section>

                })
            }
        </article>
    )
}
