import {
  QueryVCs,
  SaveVC,
  DeleteVC,
  CreateVP,
  TogglePopups,
  GetDID,
  GetMethod,
  GetAvailableMethods,
  SwitchMethod,
  GetVCStore,
  SetVCStore,
  GetAvailableVCStores,
  GetAccountSettings,
  GetSnapSettings,
  ResolveDID,
} from './methods';

export type MetaMaskSSISnapRPCRequest =
  | QueryVCs
  | SaveVC
  | CreateVP
  | DeleteVC
  | TogglePopups
  | GetDID
  | GetMethod
  | GetAvailableMethods
  | SwitchMethod
  | GetVCStore
  | SetVCStore
  | GetAvailableVCStores
  | GetAccountSettings
  | GetSnapSettings
  | ResolveDID;

export type Method = MetaMaskSSISnapRPCRequest['method'];

export interface WalletEnableRequest {
  method: 'wallet_enable';
  params: unknown[];
}

export interface GetSnapsRequest {
  method: 'wallet_getSnaps';
}

export interface SnapRpcMethodRequest {
  method: string;
  params: [MetaMaskSSISnapRPCRequest];
}

export type MetamaskRpcRequest =
  | WalletEnableRequest
  | GetSnapsRequest
  | SnapRpcMethodRequest;
