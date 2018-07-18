import express from 'express';
import tagCtrl from '../controllers/tag.controller';

const router = express.Router();

router.route('/media/tag/all')
	.get(tagCtrl.listAll);

router.route('/media/tag/new')
	.post(tagCtrl.create);

export default router;