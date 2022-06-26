import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../Redux/PaginationSlice";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

const Pages = (props) => {

    const Total = parseInt(props.total);
    const Page = parseInt(props.page);
    console.log("Total com", Total);

    const [refresh, setRefresh] = useState(false);

    const button = [];

    const dispatch = useDispatch();

    const pageDispatcherFun = (props) => {
        dispatch(changePage(props));
        console.log(props);
        handelTogglePaginat();
        // window.location.reload();

    }

    const handelTogglePaginat = () => {
        setRefresh(!refresh);

    }

    useEffect(() => {
        if (refresh) {
            window.location.reload();

        }

    }, [refresh])

    for (let i = 0; i < Total; i++) {
        button.push(
            <button style={ Page == i ? { backgroundColor: "#185069", color: "white", border: "1px solid white", marginLeft: "8px" } : { marginLeft: "8px" }} onClick={(e) => { e.preventDefault(); pageDispatcherFun(`${i}`); }}>
                {++i}
            </button>
        );
        --i;
    }

    return (
        <>
            <Col xs={4} lg={3} className="paginationOffset">
                {button}
            </Col>
        </>
    )
}

export default Pages;