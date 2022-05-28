import React from "react";

import BackgroundParticles from "../BackgroundParticles";
import AdminMenu from "./AdminMenu";
import AdminBody from "./AdminBody";
import Admin from "../../pages/Admin";

const AdminSection = () => {
    return(
        <>
            <BackgroundParticles />

            <AdminMenu />

            <AdminBody />
        </>
    )
}

export default AdminSection;