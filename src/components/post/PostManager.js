export const getPosts = () => {
    return fetch("http://localhost:8000/post", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getPostByName = (postId) => {
    return fetch(`http://localhost:8000/post/${postId}`, {
        headers: {
            "Authorization": `token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

// export const createPost = (post) => {
//     return fetch("posts", {})
//         .then()
// }
export const createPost = (post) => {
    return fetch("http://localhost:8000/post", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
}

// export const getCategories = () => {
//     return fetch("categories", {})
//         .then()
// }
export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getUser = () => {
    return fetch("user", {})
        .then()
}
