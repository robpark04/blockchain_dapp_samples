<p align="center"><a href="https://blockchain-dapp-sample.netlify.app/" target="_blank"><h1>Blockchain Dapp Samples</h1></a></p>

# Ganache running on local
1. npx ganache-cli -m "recall exit lawsuit early about crack empower execute outdoor artefact harbor cover"
2. npx ganache-cli --deterministic

# Deploying a Smart Contract
npx truffle migrate --network development


# Interacting from the Console using ganache
1. npx truffle exec --network development ./scripts/index.js

2. console commands
// order 
pool = await DexPool.deployed()
token_addr = await pool.token()
token = await DexToken.at(token_addr)

// 0.1
await pool.buy({from: accounts[0],value: 100000000000000000})
await pool.sell(web3.utils.toBN("100000000000000000"), {from: accounts[0]})

await token.approve(accounts[0], web3.utils.toBN("100000000000000000"), {from: accounts[0]})
