const axios = require('axios');

const erc20 = async () => {
    const res = await axios.get('https://api.blockchair.com/ethereum/erc-20/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/stats');

    return Number((res.data.data.circulation / (10 ** 6)).toFixed(2));
}

const algorand = async () => {
    const res = await axios.get('https://algoexplorerapi.io/v1/asset/31566704');

    if (res.data)
	return Number((res.data.circulatingsupply / (10 ** res.data.decimals)).toFixed(2));
    else
	return -1;
};

const stellar = async () => {
    const res = await axios.get('/assets', {
	baseURL: 'https://horizon.stellar.org',
	params: {
	    asset_code: 'USDC',
	    asset_issuer: 'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN'
	}
    });

    if (res.data && res.data._embedded && res.data._embedded.records &&
	res.data._embedded.records[0] && res.data._embedded.records[0].amount)
	return Number(Number(res.data._embedded.records[0].amount).toFixed(2));
    else
	return -1;
};

const solana = async () => {
    const res = await axios.post('https://api.mainnet-beta.solana.com/', {
	jsonrpc: '2.0',
	id: 1,
	method: 'getTokenSupply',
	params: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v']
    });

    if (res.data && res.data.result && res.data.result.value &&
	res.data.result.value.amount && res.data.result.value.decimals)
	return Number((res.data.result.value.amount / (10 ** res.data.result.value.decimals)).toFixed(2));
    else
	return -1;
};

const tron = async () => {
    const res = await axios.get('https://apilist.tronscan.org/api/token_trc20?limit=1&start=3318');

    if (res.data && res.data.trc20_tokens && res.data.trc20_tokens[0] &&
	res.data.trc20_tokens[0].symbol == 'USDC')
        return Number((res.data.trc20_tokens[0].total_supply_with_decimals / (10 ** res.data.trc20_tokens[0].decimals)).toFixed(2));
    else
	return -1;

}

const main = async () => {
    const erc20supply = await erc20();
    const algorandSupply = await algorand();
    const stellarSupply = await stellar();
    const solanaSupply = await solana();
    const tronSupply = await tron();

    const total = erc20supply + algorandSupply + stellarSupply + solanaSupply + tronSupply;

    const formatter = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
    });
    
    console.log('USDC Supply');
    console.log('-----------------------------------------');
    console.log('      Ethereum USDC:', formatter.format(erc20supply).padStart(20));
    console.log('      Algorand USDC:', formatter.format(algorandSupply).padStart(20));
    console.log('       Stellar USDC:', formatter.format(stellarSupply).padStart(20));
    console.log('        Solana USDC:', formatter.format(solanaSupply).padStart(20));
    console.log('          Tron USDC:', formatter.format(tronSupply).padStart(20));
    console.log('-----------------------------------------');
    console.log('USDC in circulation:', formatter.format(total).padStart(20));

};

main();
