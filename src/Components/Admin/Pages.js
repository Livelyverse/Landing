import React from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../Redux/PaginationSlice";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

const Pages = (props) => {

    const Total = parseInt(props.total);
    const Page = parseInt(props.page);
    console.log("Total com", Total);

    const button = [];

    const dispatch = useDispatch();

    for (let i = 0; i < Total; i++) {
        button.push(
            <button style={ Page == i ? { backgroundColor: "#185069", color: "white", border: "1px solid white", marginLeft: "3px" } : { marginLeft: "3px" }} onClick={(e) => { e.preventDefault(); dispatch(changePage(`${i}`)); window.location.reload() }}>
                {++i}
            </button>
        );
        --i;

    }

    return (
        <>
            <Col xs={4} lg={2}>
                {button}
            </Col>
        </>
    )
}

export default Pages;