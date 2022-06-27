import axios from 'axios';
import { getAccessToken } from '../Components/Util/helper';

export const getDashboarData = () => {
    const getDashboarDataApi = "https://livelyplanet.io/api/backoffice/dashboard/stats";
    return axios.get(getDashboarDataApi, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

//get data

export const getUserData = (props) => {
    console.log("props", props);
    const getUserDataApi = `https://livelyplanet.io/api/profile/user/getAll?sortType=${props.sortType}&sortBy=${props.sortBy}&offset=${props.offset}&page=${props.page}`;
    return axios.get(getUserDataApi, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

export const getGroupData = (props) => {
    const getGroupDataApi = `https://livelyplanet.io/api/profile/group/getAll?sortType=${props.sortType}&sortBy=${props.sortBy}&offset=${props.offset}&page=${props.page}`;
    return axios.get(getGroupDataApi, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

export const getRoleData = (props) => {
    const getRoleDataApi = `https://livelyplanet.io/api/profile/role/getAll?sortType=${props.sortType}&sortBy=${props.sortBy}&offset=${props.offset}&page=${props.page}`;
    return axios.get(getRoleDataApi, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

//Edit

export const userEditData = (data) => {
    const postEditUserApi = `https://livelyplanet.io/api/profile/user/update`;
    return axios.post(postEditUserApi, data, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

export const groupEditData = (data) => {
    const postEditGroupApi = `https://livelyplanet.io/api/profile/group/update`;
    return axios.post(postEditGroupApi, data, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

export const roleEditData = (data) => {
    const postEditRoleApi = `https://livelyplanet.io/api/profile/role/update`;
    return axios.post(postEditRoleApi, data, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

//Delete

export const deleteUser = (param) => {
    const postDeleteUser = `https://livelyplanet.io/api/profile/user/delete/${param}`;
    return axios.post(postDeleteUser, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

export const deleteRole = (param) => {
    const postDeleteRole = `https://livelyplanet.io/api/profile/role/delete/${param}`;
    return axios.post(postDeleteRole, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

export const deleteGroup = (param) => {
    const postDeleteGroup = `https://livelyplanet.io/api/profile/role/delete/${param}`;
    return axios.post(postDeleteGroup, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

//Add New

export const addNewUser = (data) => {
    const postAddNewUser = 'https://livelyplanet.io/api/profile/user/create';
    return axios.post(postAddNewUser, data, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

export const addNewGroup = (data) => {
    const postAddNewGroup = 'https://livelyplanet.io/api/profile/group/create';
    return axios.post(postAddNewGroup, data, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}

export const addNewRole = (data) => {
    const postAddNewRole = 'https://livelyplanet.io/api/profile/role/create';
    return axios.post(postAddNewRole, data, { headers: { 'Authorization': 'Bearer ' + getAccessToken() } });
}