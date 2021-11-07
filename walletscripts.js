async function addToMetamask() {
	if (typeof window.ethereum !== "undefined") {
		await ethereum.request({ method: 'wallet_addEthereumChain', params: [{chainId: '0x89',chainName: 'Polygon',nativeCurrency:{name: 'Matic',symbol: 'Matic',decimals: 18},rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],blockExplorerUrls :['https://polygonscan.com/'],}]})
		await await ethereum.request({method: 'wallet_watchAsset',params: {type: 'ERC20',options: {address: "0x56F483CF2f1F6cf224656647CA0a0D11BFB0404E",symbol: "WRVL",decimals: 18,image: "https://i1.wp.com/ravencoinlite.info/wp-content/uploads/2021/09/RVL-transparent-bg.png?w=1080&ssl=1",},},});
	}
}