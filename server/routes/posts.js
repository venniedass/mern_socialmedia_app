import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts );
router.post('/', createPost );
router.patch('/:id', updatePost); 
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;

// Patch is used for updating existing documents.

/* This is the starting point for creating functionality with the cards.

These are imported from controllers.


*/