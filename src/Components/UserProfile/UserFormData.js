import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import edit from './../../img/edit.png';
import check from './../../img/check.png';

const UserFormData = ({title , value , editable , inputData , onChange , submit}) => {
    const [editMode , setEditMode] = useState(false);
    if(editMode){
        return(
            <Row className="profileUserData">
                <Col xs={6} lg={3} className="profileUserTitle"> {title} </Col>
                <Col xs={6} lg={9} className="profileUserValue"> 
                    <input type={'text'} value={value} onChange={onChange} /> 
                    {editable ? (<img src={check} onClick={()=>{setEditMode(false); submit();}}/>) : (<></>)}
                </Col>
            </Row>
        )
    }
    return(
        <Row className="profileUserData">
            <Col xs={6} lg={3} className="profileUserTitle"> {title} </Col>
            <Col xs={6} lg={9} className="profileUserValue"> 
                {value}
                {editable ? (<img src={edit}  onClick={()=>setEditMode(true)}/>) : (<></>)}
            </Col>
        </Row>
    )
}

export default UserFormData;