export interface NetworkParams {
  chainId: string;
  rpcUrls: string[];
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls: string[];
}

export const chainIdNetworkParamsMapping: Record<string, NetworkParams> = {
  '0x89': {
    chainId: '0x89',
    rpcUrls: ['https://polygon-rpc.com/'],
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://polygonscan.com/'],
  },
  '0x13881': {
    chainId: '0x13881',
    rpcUrls: ['https://polygon-mumbai.blockpi.network/v1/rpc/public'],
    chainName: 'Polygon Mumbai',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  },
};
