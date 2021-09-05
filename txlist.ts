import Axios from 'axios';


(async () => {
    const API_KEY: string = "4IAD79HM2UHC9BXKH8CF2E7EMIDQ4XNUMJ";
    const URL: string = `https://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&page=1&offset=3&sort=asc&apikey=${API_KEY}}`;
    
    const txlists = await Axios.get(URL);
    
    console.log(txlists);

})();