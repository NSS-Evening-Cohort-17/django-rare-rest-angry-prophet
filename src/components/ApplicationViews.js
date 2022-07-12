import React from "react"
import { Route } from "react-router-dom"
import { PostViews } from "./post/PostViews"

export const ApplicationViews = () => {
  return <>
    <Route exact path="/posts" >
      <PostViews />
    </Route>
  </>
}
