import express from 'express';
import { getTopics } from '../controllers/topicsController.js';
import { getContent } from '../controllers/dataContentController.js';

const router = express.Router();
router.get('/', getTopics);
router.get('/data/:title',getContent);
export default router;

