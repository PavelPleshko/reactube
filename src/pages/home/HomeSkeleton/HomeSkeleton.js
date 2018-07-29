import React from 'react';
import Grid from '@material-ui/core/Grid';
import VerticalMediaCard from '../../../components/UI/skeletons/VerticalMediaCard'
import HorizontalMediaCard from '../../../components/UI/skeletons/HorizontalMediaCard'

const homeSkeleton = (props)=>{
const {columns=4,rows=3,cellHeight=230} = props;
const totalTilesArray = new Array(columns*rows).fill(1);
return (

	<Grid container spacing={24}>
	<Grid item sm={8}>
	<Grid container spacing={24}>
		{totalTilesArray.map((_,i)=>{

				return 	(
	<Grid item sm={3} key={i} style={{height:cellHeight}}>
<VerticalMediaCard  />
</Grid>
)
			})}
	</Grid>
		</Grid>
		<Grid item sm={4}>
		<div style={{ padding: '0 2.5rem 1.5rem 2.5rem',display:'flex',flexDirection:'column'}}>
			<HorizontalMediaCard />
			<HorizontalMediaCard />
			<HorizontalMediaCard />
			<HorizontalMediaCard />
			<HorizontalMediaCard />
         </div>
		</Grid>
		</Grid>
	)
}


export default homeSkeleton;