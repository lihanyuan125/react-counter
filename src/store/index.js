import { createStore, applyMiddleware } from "redux";
import reducer from "../reduces/";
import thunkMiddleware from "redux-thunk";

// 初始化状态
const state = {
  counter: 99
  /*..... */
};

// 使用中间件来创建仓库,对老的仓库进行增强
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer, state);
export default store;
