export interface ITransfer {
  id: string;
  player_address: string;
  onChainId: string;
  name: string;
  club_now: string;
  club_asking: string;
  club_now_private: string;
  club_asking_private: string;
  transfer_type: string;
  date: string;
  state: string;
  value: string;
  salary: string;
  type: string;
  init_contract: string;
  end_contract: string;
  contract: string;
  isPending: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface ITransferPayload {
  privateKey: string;
  privateKeyFederal: string;
  player_address: string;
  type: string;
  value: string;
  date: string;
  init_contract: string;
  end_contract: string;
  salary: string;
  contract: string;
  isPending: boolean;
}
