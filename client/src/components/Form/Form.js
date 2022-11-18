import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import makeStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});

    const post = useSelector ((state) => (currentId ? state.posts.find((p) => p._id = currentId) : null));

// The above sifts through the redux store's state to find if there is a post with an id matching the value of currentId. If so, the const "post" will take its value.

    const dispatch = useDispatch();
    const classes = makeStyles();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

  // The dependency array basically tells the hook to "only trigger when the dependency array changes." In this case, that is when the const post above will take the value of currentId.

  // In other words, when there is a matching id in the store's state as the current one that has been clicked on (via the edit button), this will change the postData state to the data of the clicked card.

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
            
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    };

        /* The above dispatch line in the else clause, dispatch(createPost(postData));, is what happens when you click the submit button. "postData" is the state that gets updated via the user input into the form.
        
        The createPost function (that takes in the state) is imported as an action which  */
    

    
    

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? 'Editing' : 'Creating'} a Memory
                </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

                <div className={classes.fileinput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                    
               
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

                </div>

                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    )
}

export default Form







