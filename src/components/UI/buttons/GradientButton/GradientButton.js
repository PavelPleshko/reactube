import React,{Component} from 'react';
import styles from './GradientButton.css';

class GradientButton extends Component{

	state = {
		gradientVisible:false,
		gradientLeft:0,
		gradientTop:0,
		gradientRadius:0
	}

	mouseEnterHandler = (e) =>{
		this.setState({
			gradientVisible:true
		})
	}

	mouseLeaveHandler = (e) =>{
		this.setState({
			gradientVisible:false
		})
	}

	mouseMoveHandler = (e) =>{
		let gradientLeft = e.pageX - this.rootRef.offsetLeft;
		let gradientTop = e.pageY - this.rootRef.offsetTop;
		this.setState({
			gradientLeft,
			gradientTop
		})
	}

	getGradientStyle = () =>{
		let {gradientColor='#000000'} = this.props;
		let {gradientLeft,gradientTop,gradientRadius,gradientVisible} = this.state;
		gradientRadius = gradientVisible ? gradientRadius : 0;

		return {
			position:'absolute',
			background:`radial-gradient(circle closest-side,${gradientColor},transparent)`,
			transform:'translate(-50%,-50%)',
			transition:'width .2s ease, height .2s ease',
			height:gradientRadius+'px',
			width:gradientRadius+'px',
			top:gradientTop+'px',
			left:gradientLeft+'px',
			zIndex:4,
			cursor:'pointer'
		}
	}

	setRootRef = (node) =>{
		this.rootRef = node;
	}

	componentDidMount = () => {
		let gradientRadius = this.rootRef.getBoundingClientRect().width;
		this.setState({gradientRadius});
	}

	getButtonClasses = () =>{
		const {fullWidth,disabled} = this.props;
		return [
		styles.btnElement,
		fullWidth && styles.fullWidth,
		disabled && styles.disabled
		].join(' ');
	}

	render(){
		const {children,element,type="submit",classes,borderRadius='4px'} = this.props;

		return (
			<div  ref={this.setRootRef} 
			style={{position:'relative',overflow:'hidden',borderRadius:borderRadius}}  
			onMouseEnter={this.mouseEnterHandler}
			onMouseLeave={this.mouseLeaveHandler}
			onMouseMove={this.mouseMoveHandler}
			>
			<span style={this.getGradientStyle()}>
			</span>
			 <button type={type} className={this.getButtonClasses()+classes.btn} style={{borderRadius:borderRadius}}>
				<span style={{zIndex:7,position:'relative'}}>{children}</span>
			</button>
				</div>
			)
	}
}

GradientButton.defaultProps = {
	fullWidth:true,
	classes:{
		btn:''
	}
}

export default GradientButton;