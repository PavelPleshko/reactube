import express from 'express';
import userCtrl from '../user/user.controller';
import authCtrl from '../auth/auth.controller';
import commentCtrl from './comment.controller';

const router = express.Router();

router.route('/comment/new')
        .post(authCtrl.requireSignin,commentCtrl.postComment)

router.route('/comment/like')
        .post(authCtrl.requireSignin,commentCtrl.likeComment)

router.route('/comment/dislike')
        .post(authCtrl.requireSignin,commentCtrl.dislikeComment)

router.route('/comment/replies/:commentId')
        .get(commentCtrl.getRepliesByComment)

router.route('/comments/:mediaId')
        .get(commentCtrl.getCommentsForMedia)

export default router;