import express from 'express';
import categoryCtrl from '../controllers/category.controller';

const router = express.Router();

router.route('/media/category/new')
	.post(categoryCtrl.create);
router.route('/media/category/all')
	.get(categoryCtrl.listAll);

export default router;