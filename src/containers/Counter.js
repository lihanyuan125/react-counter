import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../actions/counter"

import Show from "../components/Show"
import Add from "../components/Add"
import Sub from "../components/Sub"
import AsyncAdd from "../components/AsyncAdd"
import OddAdd from "../components/OddAdd"
 
class Counter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props.counter)
        return (
            <div>
                <Show counter={this.props.counter}></Show>
                <br/>
                <Add increment={this.props.increment}></Add>
                <br/>
                <Sub decrement={this.props.decrement}></Sub>
                <br/>
                {/* 异步action要使用中间件，redux-thunk */}
                <AsyncAdd Asyncincrement = {this.props.Asyncdecrement}></AsyncAdd>
                <br/>
                <OddAdd incrementifOdd = {this.props.incrementifOdd}>OddAdd+</OddAdd>
            </div>
        )
    }
}
// 把redux中的状态映射成一个组件的属性
// state 表示redux中的状态
function mapStateToProps(state){
    return {
        counter:state.counter
    }
}
// 把dispatch方法也映射到Counter组件上
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}

// 第1个小括号中就写两个映射方法，名字自己定
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
