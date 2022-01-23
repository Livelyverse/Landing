
import { useWeb3React } from "@web3-react/core"
import { useState } from "react";
import { injected } from "./../../API/Wallet";
import Cookies from "universal-cookie";

import copy from './../../img/dashboard/copy.png';
import { getUserBalance } from "../../API/Polygon";


const WalletConnect = ({purpose }) => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    const [address , setAddress] = useState('');
    const [balance , setBalance] = useState(undefined);

    const Cookie = new Cookies();


    async function connect() {
        const isExtention = window.ethereum;
        if(isExtention === undefined){
            const meta = window.open('https://metamask.io/download.html' , '_blank');
            meta.focus();
        }
        else{
            try {
                await activate(injected)
                setAddress(account);
                } catch (ex) {
                console.log(ex)
                }
        }
    }


    if(active){
        Cookie.set('address' , account);
        if(purpose === 'balance'){ 
            if(balance === undefined){
                getUserBalance(account).then(res=> {
                    console.log(res.data.result / Math.pow(10 , 18));
                    setBalance(res.data.result / Math.pow(10 , 18));
                }).catch(err => {
                    console.log(err);
                })
            }
            return(<span> {balance} </span>)
        }
        else if(purpose === 'address') return (<span> {account.substring(0 , 6)+'...'+account.substring(account.length - 4 , account.length-1)}   <img onClick={(e)=> {e.preventDefault(); navigator.clipboard.writeText(account);}} className="copyIcon" src={copy}/>  </span>)
        return(
            <span> {' '} </span>
        )
    }
    return(
        <>{purpose === 'address' && 
            <div className="walletConnectBtn" onClick={()=> {connect();} }> Connect </div>
        }
        </>

    )

}

export default WalletConnect;