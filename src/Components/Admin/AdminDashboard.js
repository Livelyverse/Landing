import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from "react-router-dom";
import axios from "axios";

// import Users from "./AdminAccess/Users";
// import Groups from "./AdminAccess/Groups";
// import Roles from "./AdminAccess/Roles";
import Users from "./Pages/Users";
import Groups from "./Pages/Groups";
import Roles from "./Pages/Roles";

const AdminDashboard = () => {

    const [dataUser, setDataUser] = useState([]);
    const [dataGroup, setDataGroup] = useState([]);
    const [dataRole, setDataRole] = useState([]);

    useEffect(() => {
        getUsersApi();
        getGroupApi();
        getRoleApi();

    }, []);

    const getUsersApi = () => {
        const userHolder = [];

        axios({
            method: 'get',
            url: 'http://localhost:3000/User',
            headers: {}
        }).then(res => {
            console.log(res);
            res.data.map((item) => {
                const row = {
                    "id": `${item.id}`,
                    "username": `${item.username}`,
                    "email": `${item.email}`,
                    "group": `${item.group}`,
                    "role": `${item.role}`,
                    "firstName": `${item.firstName}`,
                    "lastName": `${item.lastName}`,
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

        axios({
            method: 'get',
            url: 'http://localhost:3000/Group',
            headers: {}
        }).then(res => {
            console.log(res);
            res.data.map((item) => {
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
            console.log(err);
            
        })
    }

    const getRoleApi = () => {
        const roleHolder = [];

        axios({
            method: 'get',
            url: 'http://localhost:3000/Role',
            headers: {}
        }).then(res => {
            console.log(res);
            res.data.map((item) => {
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

    return(
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
                        <h1>
                            Wellcome to LivelyPlanet Admin Page, Please Select Item ...!
                        </h1>
                    </Route>
                    <Route path={`${path}/Users`}>
                        <Users 
                            dataUsers = {dataUser}
                        />
                    </Route>
                    <Route path={`${path}/Groups`}>
                        <Groups 
                            dataGroups = {dataGroup}
                        />
                    </Route>
                    <Route path={`${path}/Roles`}>
                        <Roles 
                            dataRoles = {dataRole}
                        />
                    </Route>
                </div>
            </Switch>
        </Router>
    )
}

export default AdminDashboard;