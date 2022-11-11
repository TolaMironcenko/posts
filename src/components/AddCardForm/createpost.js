import routes from "../../routes";

const createpost = async (newpost, setNewpost, setPosts, posts) => {
    await fetch(routes.posts(), {
        method: "POST",
        body: JSON.stringify(newpost),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setPosts([json, ...posts]);
            setNewpost({ title: "", body: "", userId: 1 });
        });
};

export default createpost;