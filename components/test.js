import React,{Component} from 'react';
import store from '../redux/store.js';
import * as actionCreators from '../redux/actions/action.js';
import {doThis} from '../redux/actions/action.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Test extends React.Component {
	constructor(props) {
    
    super(props);

	}
	render() {
		
		return(
			<div>
			<p>here is the test page</p>
			<button onClick={() => doThis({number:7})}>it was clicked</button>
			<p>{this.props.test}</p>
			</div>
			)
	}
}

export default Test;

function mapStateToProps(state) {
	console.log(state)
  return {test:state.reduce.test}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)

