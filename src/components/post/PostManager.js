export const getPosts = () => {
    return fetch("http://localhost:8000/post", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
