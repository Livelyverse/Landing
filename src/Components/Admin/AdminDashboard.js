import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import axios from "axios";
import Users from "./Pages/Users";
import Groups from "./Pages/Groups";
import Roles from "./Pages/Roles";
import DashboardBody from "./Pages/DashboardBody";

import { useSelector } from "react-redux";
// import Cookies from "universal-cookie";

import { getDashboarData, getUserData, getRoleData, getGroupData } from "../../API/Admin";
import { store } from "../../Redux/store";

const AdminDashboard = () => {

    const [dataUser, setDataUser] = useState([]);
    const [dataGroup, setDataGroup] = useState([]);
    const [dataRole, setDataRole] = useState([]);

    const [roleCount, setRoleCount] = useState([]);
    const [userCount, setUserCount] = useState([]);
    const [groupCount, setGroupCount] = useState([]);

    const [userTotalPage, setUserTotalPage] = useState();
    const [roleTotalPage, setRoleTotalPage] = useState();
    const [groupTotalPage, setGroupTotalPage] = useState();

    const [userCurrentPage, setUserCurrentPage] = useState();
    const [groupCurrentPage, setGroupCurrentPage] = useState();
    const [roleCurrentPage, setroleCurrentPage] = useState();


    const getPagination = useSelector((store) => store.paginationStatus)

    useEffect(() => {
        getUsersApi();
        getGroupApi();
        getRoleApi();
        dashboardData();

    }, []);

    const dashboardData = () => {
        getDashboarData().then(res => {
            console.log("dashboard data", res);
            setRoleCount(res.data.roles);
            setUserCount(res.data.users);
            setGroupCount(res.data.groups);
        }).catch(err => {
            console.log("dashboard data err", err);
        })
        // console.log("pagination", getPagination);
    }

    const getUsersApi = () => {
        const userHolder = [];
        const userPaginate = getPagination;
        if (userPaginate.sortBy == "name") {
            userPaginate.sortBy = "username"
        }
        getUserData(userPaginate).then(res => {
            console.log("original res log", res);
            setUserTotalPage(res.data.totalPage);
            setUserCurrentPage(res.data.page);
            res.data.data.map((item) => {
                const row = {
                    "id": `${item.id}`,
                    "username": `${item.username}`,
                    "email": `${item.email}`,
                    "group": `${item.group}`,
                    "role": `${item.role}`,
                    "firstName": `${item.firstname}`,
                    "lastName": `${item.lastname}`,
                    "imageUrl": `${item.imageUrl}`,
                    "walletAddress": `${item.walletAddress}`,
                    "createdAt": `${item.createdAt}`,
                    "updatedAt": `${item.updatedAt}`
                }
                userHolder.push(row);
            })
            setDataUser(userHolder);
            console.log("log final t", userHolder);
            console.log("log final data", dataUser);
        }).catch(err => {
            console.log(err);
        })
    }

    const getGroupApi = () => {
        const groupHolder = [];
        const groupPaginate = getPagination;
        console.log("group paginate", groupPaginate);
        if (groupPaginate.sortBy == "username") {
            groupPaginate.sortBy = "name";
        }

        getGroupData(groupPaginate).then(res => {
            console.log("func get group open");
            console.log("res get group", res);
            setGroupTotalPage(res.data.totalPage);
            setGroupCurrentPage(res.data.page);
            res.data.data.map((item) => {
                const rowGroup = {
                    "id": `${item.id}`,
                    "name": `${item.name}`,
                    "role": `${item.role}`,
                    "isActive": `${item.isActive}`,
                    "isUpdatable": `${item.isUpdatable}`,
                    "createdAt": `${item.createdAt}`,
                    "updatedAt": `${item.updatedAt}`
                }
                groupHolder.push(rowGroup);
            })

            setDataGroup(groupHolder);
            console.log("log final t", groupHolder);
            console.log("log final data", dataGroup);

        }).catch(err => {
            console.log("err get group", err);

        })
    }

    const getRoleApi = () => {
        const roleHolder = [];
        const rolePaginate = getPagination;
        if (rolePaginate.sortBy == "username") {
            rolePaginate.sortBy = "name"
        }

        getRoleData(getPagination).then(res => {
            console.log("log get Role", res);
            setRoleTotalPage(res.data.totalPage);
            setroleCurrentPage(res.data.page);
            res.data.data.map((item) => {
                const rowRole = {
                    "id": `${item.id}`,
                    "name": `${item.name}`,
                    "role": `${item.role}`,
                    "isActive": `${item.isActive}`,
                    "isUpdatable": `${item.isUpdatable}`
                }
                roleHolder.push(rowRole);
            })

            setDataRole(roleHolder);
            console.log("log final t", roleHolder);
            console.log("log final data", dataRole);

        }).catch(err => {
            console.log(err);

        })
    }

    let { path, url } = useRouteMatch();

    return (
        <Router>
            <div className="AdminDashboard">
                <ul>
                    <li>
                        <Link to={`${url}/Users`}>User - Management</Link>
                    </li>
                    <li>
                        <Link to={`${url}/Groups`}>Group - Management</Link>
                    </li>
                    <li>
                        <Link to={`${url}/Roles`}>Role Management</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <div className="adminUrlChange">
                    <Route exact path={path}>
                        <DashboardBody
                            Users={userCount}
                            Roles={roleCount}
                            Groups={groupCount}
                        />
                    </Route>
                    <Route path={`${path}/Users`}>
                        <Users
                            dataUsers={dataUser}
                            total={userTotalPage}
                            page={userCurrentPage}
                        />
                    </Route>
                    <Route path={`${path}/Groups`}>
                        <Groups
                            dataGroups={dataGroup}
                            total={groupTotalPage}
                            page={groupCurrentPage}
                        />
                    </Route>
                    <Route path={`${path}/Roles`}>
                        <Roles
                            dataRoles={dataRole}
                            total={roleTotalPage}
                            page={groupCurrentPage}
                        />
                    </Route>
                </div>
            </Switch>
        </Router>
    )
}

export default AdminDashboard;