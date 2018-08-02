import React from 'react';
import Grid from '@material-ui/core/Grid';
import VerticalMediaCard from '../../../components/UI/skeletons/VerticalMediaCard'
import HorizontalMediaCard from '../../../components/UI/skeletons/HorizontalMediaCard'

const homeSkeleton = (props)=>{
const {columns=6,rows=2,cellHeight=230} = props;
const totalTilesArray = new Array(columns*rows).fill(1);
return (

	<Grid container spacing={0}>
	<Grid item sm={12}>
	<Grid container spacing={8}>
		{totalTilesArray.map((_,i)=>{

				return 	(
	<Grid item sm={2} key={i} style={{height:cellHeight}}>
<VerticalMediaCard  />
</Grid>
)
			})}
	</Grid>
		</Grid>
	
		</Grid>
	)
}


export default homeSkeleton;