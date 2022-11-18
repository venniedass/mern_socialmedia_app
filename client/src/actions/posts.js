import * as api from '../api/index.js';


// These are action creators. These are functions that return actions - the actions have a type and a payload. The actions that are returned from here will then be dispatched to the reducer. These returned actions (like getPosts()) are being imported in App.js and then dispatched in the useEffect function.

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

// THE POSTS ARE BEING FETCHED HERE. THE DATA IS BEING FETCHED FROM THE API. AND THEN THE DATA IS BEING SENT VIA THE PAYLOAD. THE FUNCTION ABOVE IS IMPORTING AND USING A GET REQUEST: export const fetchPosts = () => axios.get(url). IT IS ULTIMATELY PULLING DATA FROM LOCALHOST:5000/POSTS.

// The above is using redux to dispatch an action from the backend.

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

/*
The "createPost" function above takes in the state on the form page (which is the input from the form) and is what gets called when you click the submit button on the form: dispatch(createPost(postData)). So "post" in the brackets is the state, which is the input values in the form.

So calling dispatch(createPost(postData)) on the form calls api.createPost(post) above which calls (newPost) => axios.post(url, newPost) and this puts the post itself into { data }. This gets dispatched to the reducer.

"dispatch" in the brackets comes from redux thunk.

"data" inside the curly braces is from the response of the api request which is the axios get request which is imported.

api.createPost(post) makes a post api request **TO THE BACKEND SERVER** and it sends a post, which is in the brackets of: api.createPost(post). This "post" inside the brackts of the api request comes the "post" inside the brackets from the first line of the createPost function.

We then dispatch the action (with the type and payload, the payload is the data.)
*/

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data })
    } catch(error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}

// There is no const = await api.deletePost because we are not interested in the returned data, we just want to delete it.

//After creating an action, you have to go to the reducer.



export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: 'LIKE', payload: data })
    } catch (error) {
        console.log(error);
    }
}