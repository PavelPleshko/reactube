import React,{Component} from 'react';

const generateAsyncComponent = ({loader,Placeholder}) => {
	console.log(loader,typeof loader)
	let NewComponent = null;

	return class AsyncRouteComponent extends Component{
		state = {
			NewComponent
		};

		componentWillMount = () =>{
			AsyncRouteComponent.load().then(this.updateState);
		}

		updateState = () =>{
			if(this.state.NewComponent !== NewComponent){
				this.setState({NewComponent});
			}
		}

		static load(){
			return loader().then((ResolvedComponent)=>{
				NewComponent = ResolvedComponent.default || ResolvedComponent;
			})
		}

		render(){
			const {NewComponent:ComponentFromState} = this.state;
			if(ComponentFromState){
				return <ComponentFromState {...this.props} />
			}
			
			return null;
		}
	}
}

export default generateAsyncComponent;