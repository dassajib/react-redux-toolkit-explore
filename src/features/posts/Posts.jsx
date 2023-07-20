import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const Posts = () => {
  // using useSelector hook to receive data from redux store
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  //   using dispatch to pass action
  const dispatch = useDispatch();

  //  here we should use useEffect hook to calling api auto
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {isLoading && <h6>Loading</h6>}

      {error && <h6>{error.message}</h6>}

      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article>
                <h2>{post.title}</h2>
                <h6>{post.body}</h6>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Posts;
