import { ITransfer, ITransferPayload } from '../interfaces';
import { Api } from '../providers';

async function createTransfer(payload: ITransferPayload) {
  return Api.post('/v1/transfers', payload);
}

async function acceptTransfer(payload: { onChainId: string; privateKey: string }) {
  return Api.post('/v1/transfers/accept', payload);
}

async function getTransfers() {
  return Api.get<ITransfer[]>('/v1/transfers');
}

async function getOneTransfer(chainId: string) {
  return Api.get<ITransfer>(`/v1/transfers/${chainId}`);
}

export const TransferService = {
  createTransfer,
  acceptTransfer,
  getTransfers,
  getOneTransfer,
};
