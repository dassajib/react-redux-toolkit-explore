import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";

// in store here all redux state will be save
const store = configureStore({
    reducer: {
        counter: counterSlice,
        posts: postsSlice,
    }
})

export default store;