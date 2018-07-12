import express from 'express';
import tagCtrl from '../controllers/tag';

const router = express.Router();

router.route('/tags/all')
	.get(tagCtrl.getAllTags);

router.route('/tag/new')
	.post(tagCtrl.createTag);

export default router;