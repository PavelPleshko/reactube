import express from 'express';
import userCtrl from './user.controller';
import authCtrl from '../auth/auth.controller';

const router = express.Router();


router.route('/users/signup')
  .post(userCtrl.create)

router.route('/users/verify/:token')
  .get(userCtrl.verify)


router.route('/users/continue-watching/:mediaId')
  .post(userCtrl.addToContinueWatching)

router.route('/users/media-completed/:mediaId')
  .post(userCtrl.removeFromContinueWatching)


router.route('/users/profile/update')
  .patch(authCtrl.requireSignin,userCtrl.update)

router.route('/users/profile/watchlater')
  .put(authCtrl.requireSignin,userCtrl.addWatchlater)


router.route('/users/history/clear')
  .put(authCtrl.requireSignin,userCtrl.clearHistory)

 router.route('/users/:userId/channels')
  .get(userCtrl.listUserChannels)
  

export default router;