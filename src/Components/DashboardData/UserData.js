import { useCallback, useEffect, useMemo, useState } from "react";
import WalletConnect from "../WalletConnect";
import moment from 'moment';
import { getAllTransactionByWallet } from './../../API/Polygon';
import DataTable from "../Basic/DataTable";
import Cookies from "universal-cookie";

const UserData = (props) => {
    const {type , icon , title , unit , value } = props;
    
    const [data , setData] = useState([]);
    const [apiCall , setApiCall] = useState(true);
    const [loading , setLoading] = useState(false);
    const Coookie = new Cookies();
    const add = Coookie.get('address'); 
    const [address , setAddress]= useState(add)

    useEffect(()=> {
        console.log('new render' , address) ;
        if(apiCall && type === 'table'){
            console.log('now');
            walletTrans(address);
            setApiCall(false)
        }
    }, [apiCall])

    const columns = useMemo(
        () => [
              {
                Header: 'Txn Hash',
                accessor: 'txnHash',
              },
              {
                Header: 'Method',
                accessor: 'method',
              },
              {
                Header: 'Block',
                accessor: 'block',
              },
              {
                Header: 'From',
                accessor: 'from',
              },
              {
                Header: 'To',
                accessor: 'to',
              },
              {
                Header: 'Volume',
                accessor: 'volume',
              },
              {
                Header: 'Date',
                accessor: 'date',
              },
              {
                Header: 'Transaction Fee',
                accessor: 'tfee',
              },
            ],
        []
      )
    
     
      const walletTrans = (address) => {
        getAllTransactionByWallet(address).then(res=> {
            setLoading(true);
            const t = [];
            res.data.result.map((item) => {
                const n = moment.unix(item.timeStamp);
                const row = {
                    'txnHash' : <a href={`https://polygonscan.com/tx/${item.hash}`} target='_blank'> {item.hash.substring(0 , 30)}... </a>,
                    'method' : 'Transfer',
                    'block' : item?.blockNumber,
                    'from' :`${item.from.substring(0,8)} .... ${item.from.substring(item.from.length - 9,item.from.length - 1)}`, 
                    'to' : `${item.to.substring(0,8)} .... ${item.to.substring(item.to.length - 9,item.to.length - 1)}`,
                    'volume' : item.value/Math.pow(10,18),
                    'date' : moment(n).format("DD.MM.YYYY hh:MM"),
                    'tfee' : (item.gas/Math.pow(10 , 18)).toFixed(18),
                }
                t.push(row);
            })
            
            setData(t);
            setApiCall(false)
            setLoading(false);
        }).catch(err => {
            console.error(err);
        })
    }

    if(type === 'common'){
        return(
            <div className="dashboardUserData">
                <img src={icon} />
                <span className="title"> {title} : </span>
                <span className="value"> {value} </span>
                <span className="unit"> {unit} </span>
            </div>
        )
    }

    if(type === 'address'){
        return(
            <div className="dashboardUserData">
                <img src={icon} />
                <span className="title"> {title} : </span>
                <WalletConnect purpose={'address'}/>
                <span className="unit"> {unit} </span>
            </div>
        )
    }

    if(type !== 'table'){
        return(
            <div className="dashboardUserData">
                <img src={icon} />
                <span className="title"> {title} : </span>
                {type === 'balance' && <WalletConnect purpose={'balance'} />} {type === "value" && ( <span> 0.0376 </span> )}
                <span className="unit"> {unit} </span>
            </div>
        )
    }
   

    

    return(
        <div className="userTransaction">
            <div className="dashboardUserData">
                <img src={icon} />
                <span className="title"> {title} : </span>
                <span>{address === undefined  ? 'All Lively Contract Transactions' :  'Your Wallet Transactions' }  </span>  
            </div>
            <DataTable columns={columns} data={data} loading={loading}/>
        </div>
    )
    
}

export default UserData;