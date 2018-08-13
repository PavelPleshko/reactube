import express from 'express';
import userCtrl from '../user/user.controller';
import authCtrl from '../auth/auth.controller';
import mediaCtrl from './media.controller';

const router = express.Router();

router.route('/media/upload_link')
        .get(authCtrl.requireSignin,mediaCtrl.getUploadDetails)

router.route('/media/new')
        .post(authCtrl.requireSignin, mediaCtrl.create);


router.route('/media/all')
        .get(mediaCtrl.list);

router.route('/media/history')
        .get(mediaCtrl.getOwnHistoryList);

router.route('/media/popular')
          .get(mediaCtrl.listPopular)

router.route('/media/by/:userId')
         .get(mediaCtrl.listByUser) 


router.route('/media/suggestions')
         .get(mediaCtrl.getSuggestions) 

router.route('/media/search')
         .get(mediaCtrl.searchByKeywords) 

router.route('/media/like')
        .post(authCtrl.requireSignin,mediaCtrl.like)
router.route('/media/dislike')
        .post(authCtrl.requireSignin,mediaCtrl.dislike)

    
router.route('/media/related/:mediaId')
        .get(mediaCtrl.listRelated)

    
router.route('/media/:mediaId')
		.get(authCtrl.requireSignin,mediaCtrl.incrementViews,userCtrl.addToHistory,
						 mediaCtrl.read)
        .put(authCtrl.requireSignin, 
                mediaCtrl.isPoster, 
                    mediaCtrl.update)
         .delete(authCtrl.requireSignin, 
                    mediaCtrl.isPoster, 
                        mediaCtrl.remove)




       

router.param('mediaId', mediaCtrl.mediaByID)
router.param('userId', userCtrl.userByID)


export default router;