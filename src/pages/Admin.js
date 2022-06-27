import React, {useState, useEffect} from "react";
import AdminSection from "../Components/Admin";
import AdminLogIn from "../Components/Admin/AdminLogIn";
import BackgroundParticles from "../Components/BackgroundParticles";
import { getUserName } from "../Components/Util/helper";

const Admin = () => {
    
    const [load , setload] = useState(false);

    useEffect(() => {
        const userName = getUserName();

        if (userName == undefined || userName != "admin") {
            setload(false);

        } else {
            setload(true);
        }
    }, [])

    if (load) {
        return(
            <AdminSection 
                menuActive={0}
            />
        )
    } else {
        return(
            <>
                <BackgroundParticles />
                <AdminLogIn />
            </>
        )
    }
}

export default Admin;