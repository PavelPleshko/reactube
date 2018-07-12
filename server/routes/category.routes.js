import express from 'express';
import categoryCtrl from '../controllers/category';

const router = express.Router();

router.route('/category/new')
	.post(categoryCtrl.createCategory);
router.route('/categories/all')
	.get(categoryCtrl.getAllCategories);

export default router;