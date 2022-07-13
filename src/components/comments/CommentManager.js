export const getComments = () => {
    return fetch("http://localhost:8000/comment", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createComment = (comment) => {
    return fetch("comments", {})
        .then()
}

export const getUser = () => {
    return fetch("user", {})
        .then()
}