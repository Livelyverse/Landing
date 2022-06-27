import React, { useEffect, useState } from "react";
import Modals from "../Modals";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeSortBy, changeSortType, changeOffset } from "../../../Redux/PaginationSlice";
import DropdownPage from "../Pages";

const Roles = (props) => {

    const [openItem, setOpenItem] = useState(false);
    const [itemHandler, setItemHandler] = useState();
    const [openAdd, setOpenAdd] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const dispatch = useDispatch();
    const selector = useSelector((store) => store.paginationStatus);

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
        dispatch(changeSortBy(props));
        console.log("sort by", props);
        handelTogglePaginat();
    }

    const sortTypeDispatcherFun = (props) => {
        dispatch(changeSortType(props));
        console.log("sort type", props);
        handelTogglePaginat();
    }

    const offsetDispatcherFun = (props) => {
        dispatch(changeOffset(props));
        console.log("offset", props);
        handelTogglePaginat();
    }

    useEffect(() => {
        console.log("log Role", props);
        if (refresh) {
            window.location.reload();

        }
    }, [refresh]);

    return (
        <>
            <div className="headerPagination">
                <Container>
                    <Row>
                        <Col xs={6} lg={2}>
                            <Dropdown>
                                <Dropdown.Toggle style={{ fontSize: "14px" }}>
                                    Field: {selector.sortBy}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item style={selector.sortBy == "time" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); sortByDispatcherFun("time"); }}>
                                        Time
                                    </Dropdown.Item>
                                    <Dropdown.Item style={selector.sortBy == "username" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); sortByDispatcherFun("name"); }}>
                                        Name
                                    </Dropdown.Item >
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col xs={6} lg={2}>
                            <Dropdown>
                                <Dropdown.Toggle style={{ fontSize: "14px" }}>
                                    Type: {selector.sortType}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item style={selector.sortType == "ASC" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); sortTypeDispatcherFun("ASC"); }}>
                                        ASC
                                    </Dropdown.Item>
                                    <Dropdown.Item style={selector.sortType == "DESC" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); sortTypeDispatcherFun("DESC"); }}>
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
                    Role Name:
                </h1>
                <h1>
                    Role Id:
                </h1>
            </div>
            {props.dataRoles.map((item) => {
                return (
                    <div className="items">
                        <h1>
                            {item.name}
                        </h1>
                        <h1>
                            {item.id}
                        </h1>
                        <h1>
                            {/* Role: {item.role} */}
                        </h1>
                        <h1 onClick={(e) => { e.preventDefault(); handleToggle(item) }} id={`${item.id}`}>
                            read more ...
                            {itemHandler == `${item.id}` ? openItem ? <Modals type={"role"} data={item} show={openItem} /> : null : null}
                        </h1>
                    </div>
                )
            })}
            <div className="addNew">
                <button className="addNewButton" onClick={(e) => { e.preventDefault(); handleToggleAdd(); }}>
                    + Add new Role
                    {openAdd ? <Modals type={"addRole"} show={openAdd} /> : null}
                </button>
                <DropdownPage
                    total={Total}
                    page={currentPage}
                />
                <Row>
                    <Col xs={6} lg={2}>
                        <Dropdown className="dropdownOffset">
                            <Dropdown.Toggle style={{ fontSize: "14px" }} id="dropdown-basic">
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
            </div>
        </>
    )
}

export default Roles;