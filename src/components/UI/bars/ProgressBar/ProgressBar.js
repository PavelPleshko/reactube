import React, {Component} from 'react';
import styles from './ProgressBar.css';

class ProgressBar extends Component{
	
state={
  progress:0,
  animationFrame:null,
  paused:false
}

	componentDidMount = () =>{
		if(this.props.start){
			this.startTimeout();
		}
	}

	shouldComponentUpdate = (nextProps,nextState) => {
		return this.state.progress != nextState.progress ||
		this.state.paused != nextState.paused || 
		this.props.start != nextProps.start;
	}

	componentWillUnmount = () => {
		let {animationFrame} = this.state;
		if(animationFrame){
			cancelAnimationFrame(animationFrame);
		}	
	}

	startTimeout = (startTime=0) => {
		const start = performance.now();

		const calculate = () => {
			const {onDone} = this.props;
				if(window.requestAnimationFrame && !this.state.animationFrame){
					  let animationFrame = requestAnimationFrame((timestamp)=>{
				      let {paused} = this.state;
				      const {redirectTimeout} = this.props;
				      const runtime = timestamp + startTime - start;
				      const progress = Math.min(runtime / redirectTimeout, 1);
				      if(paused){
				      	cancelAnimationFrame(animationFrame);
				      }else if(runtime < redirectTimeout){
				      	this.setState({progress});
				      	calculate();
				      }else{
				      	this.setState({progress:1,animationFrame:null});	      	
				      	cancelAnimationFrame(animationFrame);
				      	this.props.onDone();
				      }	   
			});
		}
		}
		calculate();
	}

	
	render(){
		const {progress} = this.state;
	return (
		<div className={styles.progress} style={{width:`${progress*100}%`}}></div>
	)
	}
}


export default ProgressBar;

ProgressBar.defaultProps = {
	 redirectTimeout:3000
}