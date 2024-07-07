const web3 = new Web3(window.ethereum);
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [/* ABI del contrato */];
const contract = new web3.eth.Contract(abi, contractAddress);

document.getElementById('connect').onclick = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    console.log('Connected account:', accounts[0]);
};

async function stakeTokens(amount) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.stake(amount).send({ from: accounts[0] });
}