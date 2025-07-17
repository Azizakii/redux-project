import React, { useEffect, useState } from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";


const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, isLoading, error, refetch} = postApi.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postApi.useCreatePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation()
    const [deletePost, {}] = postApi.useDeletePostMutation()


    // (limit, {
    //     pollingInterval: 1000
    // })

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className="post__list">
                {/* <button onClick={() => refetch()}>REfetch</button> */}
                <button onClick={handleCreate}>ADD</button>

                {isLoading && <h1>Loading...</h1>} 
                {error && <h1>Error</h1>}
                
                {posts && posts.map(post => 
                    <PostItem remove={handleRemove} update={handleUpdate}  key={post.id} post={post} />
                )}
            </div>
        </div>
    )
}

export default PostContainer