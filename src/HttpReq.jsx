import React, { useEffect, useReducer } from 'react'

const initialState = { data: [], isLoading: true }
const reducer = (state, action) => {

    switch (action.type) {
        case "SUCCESS":
            return { isLoading: false, data: action.payload }
    }

}


function HttpReq() {
    const [posts, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((json) => dispatch({ type: "SUCCESS", payload: json }))
            .catch((errro) => console.log(errro.message))
    }, [])


    return (
<div>
    {posts.isLoading && <p>Loading</p>}
    <div>
        {posts.data.map((post) => {
            console.log(post);
            return <p key={post.id}> {post.title} </p>;
        })}
    </div>
</div>
    
    )
}

export default HttpReq