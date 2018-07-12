import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';

const router = express.Router();


router.route('/users/signup')
  .post(userCtrl.create)

router.param('userId', userCtrl.userByID);

export default router;