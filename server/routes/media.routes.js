import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import mediaCtrl from '../controllers/media.controller';

const router = express.Router();

router.route('/media/upload_link')
        .post(authCtrl.requireSignin,mediaCtrl.getUploadDetails)

router.route('/media/new/:userId')
        .post(authCtrl.requireSignin, mediaCtrl.create);

   
//router.param('userId', userCtrl.userById)
//router.param('mediaId', mediaCtrl.mediaByID)


export default router;