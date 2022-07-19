import React, { useState, useEffect } from 'react';
import { getPostByName } from "./PostManager.js"
import { useParams } from "react-router-dom"

export const PostDetails = () => {
    const [post, setPost] = useState({
        title: "",
        user_id: 1,
        category_id: 1,
        publication_date: "haha",
        content: ""
    });

    //what is useParams?
    const { postId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        // console.log("useEffect", postId)
        getPostByName(parseInt(postId))
            .then(post => {
                setPost(post);
                setIsLoading(false);
                console.log(postId)

            });
    }, [postId]);


    return (
        <section className="post">
            hello world!
            <h3 className="post__title">Title: {post.title}</h3>
            <div className="post__author">Author: {post.user_id.id}</div>
            <div className="post__category">Category: {post.category_id.id}</div>
            <div className="post__publication__Date">Date: {post.publication_date}</div>
            <div className="post__content">Content: {post.content}</div>
        </section>
    );
}