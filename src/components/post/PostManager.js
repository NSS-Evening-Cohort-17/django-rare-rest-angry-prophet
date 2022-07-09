export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createPost = (post) => {
    return fetch("posts", {})
        .then()
}

export const getCategories = () => {
    return fetch("categories", {})
        .then()
}


export const getUser = () => {
    return fetch("user", {})
        .then()
}
