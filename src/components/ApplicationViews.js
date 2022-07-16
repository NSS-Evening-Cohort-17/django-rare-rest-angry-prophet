import React from "react"
import { Route } from "react-router-dom"
import { PostForm } from "./post/PostForm"
import { PostViews } from "./post/PostViews"

export const ApplicationViews = () => {
  return <>
    <main style={{
      margin: "5rem 2rem",
      lineHeight: "1.75rem"
    }} >
      <h1>Welcome to Rare Publishing</h1>
      <Route exact path="/">
      </Route>
      <Route exact path="/posts/new">
        <PostForm />
      </Route>
      <Route exact path="/posts" >
        <PostViews />
      </Route>
    </main>
  </>
}
