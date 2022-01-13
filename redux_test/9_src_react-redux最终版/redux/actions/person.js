import { ADD_PERSON } from "../constant";

//创建一个 增加一个人的action对象
export const addPerson = (personObj) => ({ type: ADD_PERSON, data: personObj })