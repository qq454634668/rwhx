import formMiddlePromise from './myutil';
import axios from 'axios';
import NProgress from 'nprogress';
import Qs from 'qs';

let base = '';
// TODO
let hotelBaseUrl = 'http://localhost:8080/'; // 天津公安appcan中连接到企业联络员津公安appcan中连接到企业联络员的地址
// process.env.NODE_ENV == 'development'
//     (base = 'localhost:8080'); //域名测试地址

// 接口地址
export { base };
export { hotelBaseUrl };
//登陆
export const requestLogin = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/user/login`, params, method);
};
//菜单
export const pjgzList = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/quotaList`, params, method);
};
//修改权重
export const weightEdit = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/editWeight`, params, method);
};
//添加
export const addQuota = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/addQuota`, params, method);
};
//修改
export const editQuota = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/editQuota`, params, method);
};
//删除
export const delQuota = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/delQuota`, params, method);
};


// 字典查询
// 选择学级
export const dicGrade = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/dicGrade`, params, method);
};
// 选择科系
export const dicDepartment = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/dicDepartment`, params, method);
};
// 选择专业
export const dicSpecialty = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/dicSpecialty`, params, method);
};
// 选择班级
export const dicTeam = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/dicTeam`, params, method);
};
// 选择角色
export const dicRole = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/dicRole`, params, method);
};
// 选择老师
export const usersList = (params, method) => {
  return formMiddlePromise(`${hotelBaseUrl}/quota/usersList`, params, method);
};