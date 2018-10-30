import React,{Component} from 'react';
import { connect } from 'react-redux'
import styles from './AnimatedSubmitButton.css';
import classnames from 'classnames';


class AnimatedButton extends Component{
	state = {
		clicked:false
	}

	handleClick = () =>{
		if(!this.state.clicked && !this.props.loading){
			this.setState({clicked:true});
			this.props.clicked();
		}
	}

	render(){
		const {loading,done,defaultText="submit",doneIcon,type="button",classes={}} =this.props;
		const {clicked} = this.state;
		return (
			<div className={styles.root}>
				  {!done && <button onClick={this.handleClick} type={type} className={classnames(styles.button,classes.button,{
				  	[styles.shrink]:clicked
				  })}>{defaultText}
				  {loading && <div className={styles.loader}></div>}

				  </button>}
				   {done && <div className={styles.doneIcon}>{doneIcon}</div>}
		  </div>
		
		)
	}
} 








export default AnimatedButton;