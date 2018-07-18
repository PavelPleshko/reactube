import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import mediaCtrl from '../controllers/media.controller';

const router = express.Router();

router.route('/media/upload_link')
        .post(authCtrl.requireSignin,mediaCtrl.getUploadDetails)

router.route('/media/new')
        .post(authCtrl.requireSignin, mediaCtrl.create);


router.route('/media/all')
        .get(mediaCtrl.list);

router.route('/media/popular')
          .get(mediaCtrl.listPopular)

router.route('/media/by/:userId')
         .get(mediaCtrl.listByUser) 

router.route('/media/:mediaId')
		.get( mediaCtrl.incrementViews,
						 mediaCtrl.read)
        .put(authCtrl.requireSignin, 
                mediaCtrl.isPoster, 
                    mediaCtrl.update)
         .delete(authCtrl.requireSignin, 
                    mediaCtrl.isPoster, 
                        mediaCtrl.remove)

router.route('/media/related/:mediaId')
        .get(mediaCtrl.listRelated)
       

router.param('mediaId', mediaCtrl.mediaByID)
router.param('userId', userCtrl.userByID)


export default router;