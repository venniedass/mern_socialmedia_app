export default (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => post._id = action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
};


/*
This is where it's creating the post after receiving orders from the post.js file in the "actions" folder.

The action.payload is the actual post.

For the UPDATE case, action.payload is the updated post, so if the post._id is equal to the updated post, we will return the updated post. Otherwise, we will just return the post as it was without any updates.
*/