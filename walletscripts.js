async function addToMetamask() {
	if (typeof window.ethereum !== "undefined") {
		await ethereum.request({ method: 'wallet_addEthereumChain', params: [{chainId: '0x89',chainName: 'Polygon',nativeCurrency:{name: 'Matic',symbol: 'Matic',decimals: 18},rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],blockExplorerUrls :['https://polygonscan.com/'],}]})
		await await ethereum.request({method: 'wallet_watchAsset',params: {type: 'ERC20',options: {address: "0x752dc265eaf6da2db0f8e4a32d5596d3f18e8701",symbol: "WAVN",decimals: 18,image: "https://github.com/AvianNetwork/WAVN/blob/master/avn512x512x32.png?raw=true",},},});
	}
}
