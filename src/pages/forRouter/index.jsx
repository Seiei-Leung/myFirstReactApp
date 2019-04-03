import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Route1 from "../route1";
import Route2 from "../route2";
import * as actionTypes from '../../actions/actionType';
import { increaseCount, decreaseCount } from '../../actions/count-action';
import { addTodo } from '../../actions/todo-action';



//需要渲染什么数据
function mapStateToProps(state) {
    console.log(state);
    return {
        count: state.countReducer,
        todoList: state.todoReducer
    }
}

//需要触发什么行为
function mapDispatchToProps(dispatch,ownPorps) {
	console.log(dispatch)
    return {
        addCount: (num) => dispatch({
			type: actionTypes.INCREASE
		}),
        minusCount: (num) => dispatch({
			type: actionTypes.DECREASE
		}),
		addToDoList: () => dispatch({
			type: actionTypes.ADDTODO,
			payload: "吃饭"
		})
    }
}

/*function mapDispatchToProps(dispatch, ownPorps) {
	console.log(dispatch);
	return {
		addCount: () => {
			dispatch(increaseCount());
		},
		minusCount: () => {
			dispatch(decreaseCount());
		},
		addToDoList: () => {
			dispatch(addTodo("吃饭"));
		}
	}
}*/


class ForRouter extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
	render() {
    	const { addCount, minusCount,addToDoList } = this.props;
		return (
			<div>
				<div>
        			<h2>计数结果为{this.props.count}</h2>
        			<button onClick={addCount}>count + 1</button>
        			<button onClick={minusCount}>count - 1</button>
        			<button onClick={addToDoList}>增加吃饭</button>
        			<div>
        				todoList：
        			</div>
        			<ul>
        				{
        					this.props.todoList.map((item, index) => 
        						(<li key={index}>{item}</li>))
        				}
        			</ul>
				</div>
				<BrowserRouter>
					<div>
						<Route path="/route/route1/:content" component={Route1} exact></Route>
						<Route path="/route2" component={Route2} exact></Route>
						<Route path="/route" render={() => {return (<div>route</div>)}}></Route>
						<NavLink to="/route/route1/seiei" activeClassName="active">go route1</NavLink>
						<NavLink to="/route2" activeClassName="active" exact>go route2</NavLink>
						<NavLink to="/route" activeClassName="active" exact replace>go route</NavLink>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default ForRouter = connect(mapStateToProps, mapDispatchToProps)(ForRouter);