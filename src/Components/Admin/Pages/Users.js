import React, { useEffect, useState } from "react";
import Modals from "../Modals";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import DropdownPage from "../Pages";
import { useDispatch, useSelector } from "react-redux";
import { changeSortBy, changeSortType, changeOffset } from "../../../Redux/PaginationSlice";
import { store } from "../../../Redux/store";

const Users = (props) => {

    const [openItem, setOpenItem] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [itemHandler, setItemHandler] = useState();

    const dispatch = useDispatch();
    const selector = useSelector((store) => store.paginationStatus)
    // const pagination = [selector];
    // const thirdPagination = [];
    // console.log("pagination log bala", pagination);
    // console.log("pagination log 3", thirdPagination);

    const Total = props.total;
    const currentPage = props.page;

    const handleToggle = (item) => {
        setOpenItem(!openItem)
        setItemHandler(item.id)

    }

    const handleToggleAdd = () => {
        setOpenAdd(!openAdd);

    }

    const handelTogglePaginat = () => {
        setRefresh(!refresh);

    }

    const sortByDispatcherFun = (props) => {
        // console.log("log pagination1", pagination);
        dispatch(changeSortBy(props));
        console.log("sort by", props);
        handelTogglePaginat();
        // window.location.reload();
        // pagination.push(selector);
        // console.log("log pagination2", pagination);
        // thirdPagination.push(pagination);
        // console.log("log pagination3", thirdPagination);
        // console.log("log pagination30", thirdPagination[0]);
        // const counter = thirdPagination[0];
        // console.log("counter", counter);
        // console.log("counter2", selector);

    }

    const sortTypeDispatcherFun = (props) => {
        // console.log("log pagination1", pagination);
        dispatch(changeSortType(props));
        console.log("sort type", props);
        handelTogglePaginat();

        // window.location.reload();
        // pagination.push(selector);
        // console.log("log pagination2", pagination);
        // thirdPagination.push(pagination);
        // console.log("log pagination3", thirdPagination);

    }

    const offsetDispatcherFun = (props) => {
        // console.log("log pagination1", pagination);
        dispatch(changeOffset(props));
        console.log("offset", props);
        handelTogglePaginat();

        // window.location.reload();
        // pagination.push(selector);
        // console.log("log pagination2", pagination);
        // thirdPagination.push(pagination);
        // console.log("log pagination3", thirdPagination);

    }

    useEffect(() => {
        console.log("log user", props);
        console.log("log selector", selector);

        if (refresh) {
            window.location.reload();

        }



        // pagination.push(selector);
        // console.log("pagination in effect", pagination);
        // if(pagination[0].offset != selector.offset) {
        //     window.location.reload();
        // } else if (pagination[0].page != selector.page) {
        //     window.location.reload();
        // } else if (pagination[0].sortBy != selector.sortBy) {
        //     window.location.reload();
        // } else if (pagination[0].sortType != selector.sortType) {   
        //     window.location.reload();
        // }
        // window.location.reload();

    }, [refresh]);

    return (
        <>
            <div className="headerPagination">
                <Container>
                    <Row>
                        <Col xs={6} lg={2}>
                            <Dropdown>
                                <Dropdown.Toggle style={{fontSize: "14px"}}>
                                    Field: {selector.sortBy}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item style={selector.sortBy == "time" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); sortByDispatcherFun("time"); }}>
                                        Time
                                    </Dropdown.Item>
                                    <Dropdown.Item style={selector.sortBy == "username" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); sortByDispatcherFun("name") }}>
                                        User Name
                                    </Dropdown.Item >
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col xs={6} lg={2}>
                            <Dropdown>
                                <Dropdown.Toggle style={{fontSize: "14px"}}>
                                    Type: {selector.sortType}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item style={selector.sortType == "ASC" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); sortTypeDispatcherFun("ASC"); }}>
                                        ASC
                                    </Dropdown.Item>
                                    <Dropdown.Item style={selector.sortType == "DESC" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); sortTypeDispatcherFun("DESC") }}>
                                        DESC
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="itemHeader">
                <h1>
                    User Name:
                </h1>
                <h1>
                    User Id:
                </h1>
                <h1>
                    Email:
                </h1>
            </div>
            {props.dataUsers.map((item) => {
                // console.log("log data user", props.dataUsers);
                return (
                    <div className="items">
                        <h1>
                            {item.username}
                        </h1>
                        <h1>
                            {item.id}
                        </h1>
                        <h1>
                            {item.email}
                        </h1>
                        <h1 onClick={(e) => { e.preventDefault(); handleToggle(item) }} id={`${item.id}`}>
                            read more ...
                            {itemHandler == `${item.id}` ? openItem ? <Modals type={"user"} data={item} show={openItem} /> : null : null}
                        </h1>
                    </div>
                )
            })}
            <div className="addNew">
                <button className="addNewButton" onClick={(e) => { e.preventDefault(); handleToggleAdd(); }}>
                    +new User
                    {openAdd ? <Modals type={"addUser"} show={openAdd} /> : null}
                </button>
                <DropdownPage
                    total={Total}
                    page={currentPage}
                />
                {/* <Container> */}
                <Row>
                    <Col xs={6} lg={2}>
                        <Dropdown className="dropdownOffset">
                            <Dropdown.Toggle style={{fontSize: "14px"}} id="dropdown-basic">
                                offset: {selector.offset}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item style={selector.offset == "10" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); offsetDispatcherFun("10"); }}>
                                    10
                                </Dropdown.Item>
                                <Dropdown.Item style={selector.offset == "25" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); offsetDispatcherFun("25"); }}>
                                    25
                                </Dropdown.Item>
                                <Dropdown.Item style={selector.offset == "50" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); offsetDispatcherFun("50"); }}>
                                    50
                                </Dropdown.Item>
                                <Dropdown.Item style={selector.offset == "100" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); offsetDispatcherFun("100"); }}>
                                    100
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                {/* </Container> */}
            </div>
        </>
    )
}

export default Users;