import React,{Component} from 'react';
import throttle from 'lodash/throttle';


class InfiniteScroll extends Component{
    state = {
        reachedBottom:false,
        scrollListener:null
    }

    throttledScroll = throttle((e)=>this.handleScroll(e),500);

    handleScroll = (e) =>{
        const {containerHeight,gap,callback,stop,requested} = this.props;
        const canCall = typeof requested === 'undefined' ? true : !requested;
        if(stop){
            this.stopListening();
        }else{
            const { scrollY } = window;
            const { offsetTop, scrollHeight } = this.props.refContainer;
            if(containerHeight+scrollY > (offsetTop + scrollHeight - gap) 
            && canCall){
                if(!this.state.reachedBottom){
                    callback();
                    this.setState({reachedBottom:true});
                }
            }else{
                if(this.state.reachedBottom){
                    this.setState({reachedBottom:false});
                }
            }
        }
        
    }

    stopListening = () =>{
        if(typeof window != 'undefined'){
            window.removeEventListener('scroll',this.throttledScroll);
        }
    }
    componentDidMount = () =>{
        if(typeof window != 'undefined'){
            window.addEventListener('scroll',this.throttledScroll);
        }
    }


    componentWillUnmount = () =>{
        this.stopListening();
    }

    render(){
        return (     
               this.props.children
        )
    }
}

InfiniteScroll.defaultProps = {
    gap:50,
    containerHeight:window.innerHeight
}

export default InfiniteScroll;