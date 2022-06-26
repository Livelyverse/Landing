import React, { useEffect, useState } from "react";
import Modals from "../Modals";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import DropdownPage from "../Pages";
import { useDispatch, useSelector } from "react-redux";
import { changeSortBy, changeSortType, changeOffset } from "../../../Redux/PaginationSlice";

const Groups = (props) => {

    const [openItem, setOpenItem] = useState(false);
    const [itemHandler, setItemHandler] = useState();
    const [openAdd, setOpenAdd] = useState(false);

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

    useEffect(() => {
        console.log("log Groups", props);

    }, []);

    return (
        <>
            <div className="headerPagination">
                <Container>
                    <Row>
                        <Col xs={6} lg={2}>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Field: {selector.sortBy}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item style={selector.sortBy == "time" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); dispatch(changeSortBy("time")); window.location.reload(); }}>
                                        Time
                                    </Dropdown.Item>
                                    <Dropdown.Item style={selector.sortBy == "name" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); dispatch(changeSortBy("username")); window.location.reload(); }}>
                                        User Name
                                    </Dropdown.Item >
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col xs={6} lg={2}>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Type: {selector.sortType}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item style={selector.sortType == "ASC" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); dispatch(changeSortType("ASC")); window.location.reload(); }}>
                                        ASC
                                    </Dropdown.Item>
                                    <Dropdown.Item style={selector.sortType == "DESC" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); dispatch(changeSortType("DESC")); window.location.reload(); }}>
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
                    Group Name:
                </h1>
                <h1>
                    Group Id:
                </h1>
                <h1>
                    Role Name:
                </h1>
            </div>
            {props.dataGroups.map((item) => {
                // console.log("map group remder");
                return (
                    <div className="items">
                        <h1>
                            {item.name}
                        </h1>
                        <h1>
                            {item.id}
                        </h1>
                        <h1>
                            {item.role}
                        </h1>
                        <h1 onClick={(e) => { e.preventDefault(); handleToggle(item) }} id={`${item.id}`}>
                            read more ...
                            {itemHandler == `${item.id}` ? openItem ? <Modals type={"group"} data={item} show={openItem} /> : null : null}
                        </h1>
                    </div>
                )
            })}
            <div className="addNew">
                <button className="addNewButton" onClick={(e) => { e.preventDefault(); handleToggleAdd(); }}>
                    + Add new Group
                    {openAdd ? <Modals type={"addGroup"} show={openAdd} /> : null}
                </button>
                <DropdownPage
                    total={Total}
                    page={currentPage}
                />
                {/* <Container> */}
                <Row>
                    <Col xs={6} lg={2}>
                        <Dropdown className="dropdownOffset">
                            <Dropdown.Toggle id="dropdown-basic">
                                offset: {selector.offset}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item style={selector.offset == "10" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); dispatch(changeOffset("10")); window.location.reload(); }}>
                                    10
                                </Dropdown.Item>
                                <Dropdown.Item style={selector.offset == "25" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); dispatch(changeOffset("25")); window.location.reload(); }}>
                                    25
                                </Dropdown.Item>
                                <Dropdown.Item style={selector.offset == "50" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); dispatch(changeOffset("50")); window.location.reload(); }}>
                                    50
                                </Dropdown.Item>
                                <Dropdown.Item style={selector.offset == "100" ? { backgroundColor: "#0588c5", color: "white", border: "1px solid white" } : {}} onClick={(e) => { e.preventDefault(); dispatch(changeOffset("100")); window.location.reload(); }}>
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

export default Groups;