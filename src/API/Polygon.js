import axios from 'axios';


export const getAllTransaction = () => {
    return axios.get('https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=0x60BC68f6B2F4eD1D1525D7BF01aA968155C8E52c&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=TYUH9E2R8NNJFQS21Y8ZQKQZEW58ZM81D5')
}

export const getAllTransactionByWallet = (wallet) => {
    return axios.get(
        'https://api.polygonscan.com/api',
        { params : {
            module : 'account',
            action : 'tokentx',
            address :wallet,
            contractaddress: process.env.REACT_APP_CONTRACT_ADDRESS,
            page: 1,
            offset: 1000,
            startblock : 0,
            endblock : 99999999,
            sort : 'asc',
            apikey : process.env.REACT_APP_POLYGONSCAN_KEY
        }
    }
    )
}