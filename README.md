redux
    store：redux中有一个redux对象，通过reduce对象中的createStore
        state：状态
        reducer：仓库管理员是一个函数，需要返回一个对象,需要接收(old state,action)
        action：(同步和异步)修改状态
        getState：用来从仓库中获取状态
        dispatch：给reduce派发一个aciton
        subscribe：订阅,当状态改变，就会执行回调函数
        action creators : 表示创造一个action
react
    jsx 
    组件 
    props
    state  setState   
    事件
    受控制与非受控  
react-redux:虽然react和redux都是独立的，但是一般我们会把他俩结合起来用，靠react-redux来结合。
    import {connect} from "react-redux"
    export default connect(mapStateToProps,mapDispatchToProps)(Counter);
    第一个括号放映射方法，自己命名
    把redux中的某个状态映射到react中的某个组件(笨拙组件-->智能组件)
   