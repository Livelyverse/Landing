import React, {useEffect, useState} from "react";
import { getAllTransaction } from "../../../API/Polygon";

const DashboardBody = (props) => {

    useEffect(() => {
        getTransactionCount();

    }, [])

    const User = props.Users;
    const Group = props.Groups;
    const Role = props.Roles;
    const [transaction, setTransaction] = useState();

    const getTransactionCount = () => {
        return(
            getAllTransaction().then(res => {
                console.log("transactio counter", res);
                setTransaction(res.data.result.length)
                console.log(transaction);

            }).catch(err => {
                console.log("transaction counter err", err);

            })
        )
    }

    return(
        <div className="dashboardBody">
            <h1>
                Users: {User}
            </h1>
            <h1>
                Groups: {Group}
            </h1>
            <h1>
                Roles: {Role}
            </h1>
            <h1>
                Transactions: {transaction}
            </h1>
        </div>
    )
}

export default DashboardBody;