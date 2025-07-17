import React from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";


const PostContainer2 = () => {
    const {data: posts, isLoading, error} = postApi.useFetchAllPostsQuery(100)
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Loading...</h1>} 
                {error && <h1>Error</h1>}
                {/* {posts && posts.map(post => 
                    <PostItem post={post}  key={post.id}/>
                )} */}
            </div>
        </div>
    )
}

export default PostContainer2
