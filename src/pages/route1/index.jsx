import React, { Component } from 'react';
import { connect } from 'react-redux';

//需要渲染什么数据
function mapStateToProps(state) {
    console.log(state);
    return {
        salary: state
    }
}

class Route1 extends Component {
	constructor(props) {
		super(props);
		console.log(123);
	}
	render() {
		return (
				<p>这是路由传来的信息：{this.props.match.params.content}</p>
			);
	}
}

export default Route1 = connect(mapStateToProps)(Route1);