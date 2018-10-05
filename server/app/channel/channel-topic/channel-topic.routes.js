import express from 'express';
import channelTopicCtrl from './channel-topic.controller';

const router = express.Router();


router.route('/topic/create')
  .post(channelTopicCtrl.create);

router.route('/topic/all')
	.get(channelTopicCtrl.listAll);

export default router;