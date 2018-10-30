import express from 'express';
import channelCtrl from './channel.controller';
import authCtrl from '../auth/auth.controller';
import channelTopicRouter from './channel-topic/channel-topic.routes';

const router = express.Router();


router.route('/channels/create')
  .post(authCtrl.requireSignin,channelCtrl.create);

router.route('/channels/:channelId/media')
  .get(channelCtrl.listChannelMedia);

router.route('/channels/:channelId/subscribe')
  .post(authCtrl.requireSignin,channelCtrl.notOwner,channelCtrl.subscribe);

router.route('/channels/:channelId/unsubscribe')
  .post(authCtrl.requireSignin,channelCtrl.notOwner,channelCtrl.unsubscribe);


router.route('/channels/:channelId')
  .patch(authCtrl.requireSignin,channelCtrl.updateChannel);

router.route('/channels/:channelSlug')
  .get(channelCtrl.readBySlug);



router.param('channelId', channelCtrl.findById)

router.use('/channels',channelTopicRouter);


// router.route('/users/profile/update')
//   .put(authCtrl.requireSignin,userCtrl.update)

// router.route('/users/profile/watchlater')
//   .put(authCtrl.requireSignin,userCtrl.addWatchlater)
  

export default router;