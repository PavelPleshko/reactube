import express from 'express';
import userCtrl from './user.controller';
import authCtrl from '../auth/auth.controller';

const router = express.Router();


router.route('/users/signup')
  .post(userCtrl.create)


router.route('/users/profile/update')
  .put(authCtrl.requireSignin,userCtrl.update)

router.route('/users/profile/watchlater')
  .put(authCtrl.requireSignin,userCtrl.addWatchlater)


router.route('/users/history/clear')
  .put(authCtrl.requireSignin,userCtrl.clearHistory)

 router.route('/users/:userId/channels')
  .get(userCtrl.listUserChannels)
  

export default router;