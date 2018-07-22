import express from 'express';
import userCtrl from './user.controller';
import authCtrl from '../auth/auth.controller';

const router = express.Router();


router.route('/users/signup')
  .post(userCtrl.create)

router.param('userId', userCtrl.userByID);

export default router;