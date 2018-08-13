import express from 'express';
import userCtrl from './user.controller';
import authCtrl from '../auth/auth.controller';

const router = express.Router();


router.route('/users/signup')
  .post(userCtrl.create)


router.route('/users/history/clear')
  .put(authCtrl.requireSignin,userCtrl.clearHistory)

router.param('userId', userCtrl.userByID);

export default router;