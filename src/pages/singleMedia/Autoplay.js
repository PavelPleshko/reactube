import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const autoplay = (props)=>{
	const {autoPlay,autoplayChange} = props;
	
	

	return (
		<FormControlLabel 
		    control={
		            <Switch
		              checked={autoPlay}
		              onChange={autoplayChange}
		              color="primary"
		            />
		          }
		    label={'AUTOPLAY'}
		/>
	)
	
}


export default autoplay;