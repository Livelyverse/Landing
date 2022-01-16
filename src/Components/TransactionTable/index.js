import React, { useState , useMemo, useEffect} from 'react';
import { Form, FormLabel } from 'react-bootstrap';
import { getAllTransaction, getAllTransactionByWallet } from '../../API/Polygon';
import DataTable from '../Basic/DataTable';
import MobileContainer from '../Basic/MobileContainer';
import moment from 'moment';

const TransactionTable  = () => {

    const [data , setData] = useState([]);

    useEffect(()=> {
        allTrans();
    }, [])

    const allTrans = () => {
        getAllTransaction().then(res => {
            const t = [];
            res.data.result.map((item) => {
                const n = moment.unix(item.timeStamp);
                const row = {
                    'txnHash' : <a href={`https://polygonscan.com/tx/${item.hash}`} target='_blank'> {item.hash.substring(0 , 30)}... </a>,
                    'from' :  `${item.from.substring(0,8)} .... ${item.from.substring(item.from.length - 9,item.from.length - 1)}` , 
                    'to' : `${item.to.substring(0,8)} .... ${item.to.substring(item.to.length - 9,item.to.length - 1)}`,
                    'volume' : item.value/Math.pow(10,18),
                    'date' : moment(n).format("DD.MM.YYYY hh:MM")
                }
                t.push(row);
            })
            
            setData(t);
        }).catch(err => {
            console.error(err)
        })       
    }

    const walletTrans = (address) => {
        getAllTransactionByWallet(address).then(res=> {
            const t = [];
            res.data.result.map((item) => {
                const n = moment.unix(item.timeStamp);
                const row = {
                    'txnHash' : <a href={`https://polygonscan.com/tx/${item.hash}`} target='_blank'> {item.hash.substring(0 , 30)}... </a>,
                    'from' :`${item.from.substring(0,8)} .... ${item.from.substring(item.from.length - 9,item.from.length - 1)}`, 
                    'to' : `${item.to.substring(0,8)} .... ${item.to.substring(item.to.length - 9,item.to.length - 1)}`,
                    'volume' : item.value/Math.pow(10,18),
                    'date' : moment(n).format("DD.MM.YYYY hh:MM")
                }
                t.push(row);
            })
            
            setData(t);
        }).catch(err => {
            console.error(err);
        })
    }

    const columns = useMemo(
        () => [
              {
                Header: 'Txn Hash',
                accessor: 'txnHash',
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
            ],
        []
      )
      
    return(
        <MobileContainer className="transactions">
            {/* <div className='tableFilter'>
                
                <FormLabel> Filter By Wallet </FormLabel>
                
                <Form.Select aria-label="Default select example" onChange={(e) => { if(e.target.value === ''){allTrans()} else walletTrans(e.target.value) }}>
                    <option value=''>ALL Contarct Transactions</option>
                    <option value="0x7eA3cFefA2b13e493110EdEd87e2Ba72C115BEc1">Public Sale Wallet</option>
                    <option value="0x001b0a8A4749C70AEAD435Cf7E6dA06A7bAd1a2d">Founding Team Wallet</option>
                    <option value="0x3A528Ca83A9D4e167Dc9c14690349E3b6FC02054">Reserved Wallet</option>
                    <option value="0x90b08DCFD15447187A72f5e06592b353e5CFfA93">Audio Video Production Wallet</option>
                    <option value="0x00fc4fBcf0F01553bfC470fF85FCA2F3F21e138b">Bounty Programs Wallet</option>
                    <option value="0x7A6D0f0F96f39E54AbfEbA3D1dA6f56c921B9cB7">Charity Wallet</option>
                </Form.Select>
            </div> */}
            
            <DataTable columns={columns} data={data}/>
        </MobileContainer>
    )
}

export default TransactionTable;