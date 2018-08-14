import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FavoriteIcon from '@material-ui/icons/Favorite';

const primaryMenu = [
	{
		title:'Home',
		link:'/',
		icon:<HomeIcon />
	},
	{
		title:'Popular',
		link:'/popular',
		icon:<WhatshotIcon />
	},
	{
		title:'Subscriptions',
		link:'/subscriptions',
		icon:<SubscriptionsIcon />
	}
		
]

const secondaryMenu = [
	{
		title:'History',
		link:'/history/medias',
		icon:<HistoryIcon />
	},
	{
		title:'Watch later',
		link:'/watch-later',
		icon:<WatchLaterIcon />
	},
	{
		title:'Liked',
		link:'/liked',
		icon:<FavoriteIcon />
	}
]


export {
	primaryMenu,
	secondaryMenu
}