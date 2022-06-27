import React from "react";
import BackgroundParticles from "../BackgroundParticles";
import AdminMenu from "./AdminMenu";
import AdminBody from "./AdminBody";

const AdminSection = (props) => {
    return(
        <>
            <BackgroundParticles />

            <AdminMenu
                active={props.menuActive}
            />

            <AdminBody />
        </>
    )
}

export default AdminSection;