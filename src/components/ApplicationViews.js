import React from "react"
import { Route } from "react-router-dom"
import { PostForm } from "./post/PostForm"
import { PostList } from "./post/PostList"

export const ApplicationViews = () => {
  return <>
    <main style={{
      margin: "5rem 2rem",
      lineHeight: "1.75rem"
    }} >
      <h1>Welcome to Rare Publishing</h1>
      <Route exact path="/">
        <PostList />
      </Route>
      <Route exact path="/posts">
        <PostForm />
      </Route>
      <Route exact path="/posts/new">
        <PostForm />
      </Route>
    </main>
  </>
}
