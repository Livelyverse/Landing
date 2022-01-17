
import { useWeb3React } from "@web3-react/core"
import { useState } from "react";
import { injected } from "./../../API/Wallet";
import Cookies from "universal-cookie";

import copy from './../../img/dashboard/copy.png';

const WalletConnect = ({purpose}) => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    const [address , setAddress] = useState('');
    const [balance , setBalance] = useState(0);

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
                
                await library?.eth?.getBalance(account).then(res=> setBalance(res))
                } catch (ex) {
                console.log(ex)
                }
        }
    }

    console.log('balance = ' , balance)


    if(active){
        Cookie.set('address' , account)
        if(purpose === 'balance') return(<span> {balance} </span>)
        else if(purpose === 'address') return (<span> {account.substring(0 , 6)+'...'+account.substring(account.length - 4 , account.length-1)}   <img onClick={(e)=> {e.preventDefault(); navigator.clipboard.writeText(account);}} className="copyIcon" src={copy}/>  </span>)
        return(
            <span> {' '} </span>
        )
    }
    return(
            <div className="walletConnectBtn" onClick={()=> {connect();} }> Connect </div>
    )

}

export default WalletConnect;