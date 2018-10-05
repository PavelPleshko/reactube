import express from 'express';
import channelCtrl from './channel.controller';
import authCtrl from '../auth/auth.controller';
import channelTopicRouter from './channel-topic/channel-topic.routes';

const router = express.Router();


router.route('/channels/create')
  .post(authCtrl.requireSignin,channelCtrl.create)

router.use('/channels',channelTopicRouter);


// router.route('/users/profile/update')
//   .put(authCtrl.requireSignin,userCtrl.update)

// router.route('/users/profile/watchlater')
//   .put(authCtrl.requireSignin,userCtrl.addWatchlater)
  

export default router;