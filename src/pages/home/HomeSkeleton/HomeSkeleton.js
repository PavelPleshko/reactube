import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';


const homeSkeleton = (props)=>{
const {columns=4,rows=2,cellHeight=230} = props;
const totalTilesArray = new Array(columns*rows).fill(1);
return (

	<Grid container spacing={24}>
	<Grid item sm={8}>
	<GridList cols={columns} cellHeight={cellHeight}>
	
			{totalTilesArray.map((_,i)=>{

				return <GridListTile key={i}>
					
                    
                 <div style={{height:'130px',width:'100%',background:'#dedede'}}>
                
                 </div>    
                 <div style={{height:'15px',width:'70%',background:'#dedede',margin:'5px 0'}}>
                
                 </div>
                 <div style={{height:'15px',width:'90%',background:'#dedede'}}>
                
                 </div>
              
				</GridListTile>
			})}
				
			

		</GridList>
		</Grid>
		<Grid item sm={4}>
		 <div style={{height:'130px',width:'100%',background:'#dedede'}}>
                
                 </div>
                  <div style={{height:'130px',width:'100%',background:'#dedede'}}>
                
                 </div>
                  <div style={{height:'130px',width:'100%',background:'#dedede'}}>
                
                 </div>
		</Grid>
		</Grid>
	)
}


export default homeSkeleton;