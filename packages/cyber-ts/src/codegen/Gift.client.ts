/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { AllReleaseStageStatesResponse, Uint128, Decimal, ClaimResponse, Uint64, ConfigResponse, ExecuteMsg, CosmosMsgForCyberMsgWrapper, BankMsg, CyberMsg, CyberRoute, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, CyberMsgWrapper, Link, Load, Trigger, InstantiateMsg, IsClaimedResponse, MerkleRootResponse, QueryMsg, ReleaseStageStateResponse, Expiration, Timestamp, ReleaseStateResponse, StateResponse } from "./Gift.types";
export interface GiftReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  state: () => Promise<StateResponse>;
  merkleRoot: () => Promise<MerkleRootResponse>;
  isClaimed: ({
    address
  }: {
    address: string;
  }) => Promise<IsClaimedResponse>;
  query_claim: ({
    address
  }: {
    address: string;
  }) => Promise<ClaimResponse>;
  releaseState: ({
    address
  }: {
    address: string;
  }) => Promise<ReleaseStateResponse>;
  releaseStageState: ({
    stage
  }: {
    stage: number;
  }) => Promise<ReleaseStageStateResponse>;
  allReleaseStageStates: () => Promise<AllReleaseStageStatesResponse>;
}
export class GiftQueryClient implements GiftReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.state = this.state.bind(this);
    this.merkleRoot = this.merkleRoot.bind(this);
    this.isClaimed = this.isClaimed.bind(this);
    this.query_claim = this.query_claim.bind(this);
    this.releaseState = this.releaseState.bind(this);
    this.releaseStageState = this.releaseStageState.bind(this);
    this.allReleaseStageStates = this.allReleaseStageStates.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  state = async (): Promise<StateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      state: {}
    });
  };
  merkleRoot = async (): Promise<MerkleRootResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      merkle_root: {}
    });
  };
  isClaimed = async ({
    address
  }: {
    address: string;
  }): Promise<IsClaimedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_claimed: {
        address
      }
    });
  };
  query_claim = async ({
    address
  }: {
    address: string;
  }): Promise<ClaimResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      claim: {
        address
      }
    });
  };
  releaseState = async ({
    address
  }: {
    address: string;
  }): Promise<ReleaseStateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      release_state: {
        address
      }
    });
  };
  releaseStageState = async ({
    stage
  }: {
    stage: number;
  }): Promise<ReleaseStageStateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      release_stage_state: {
        stage
      }
    });
  };
  allReleaseStageStates = async (): Promise<AllReleaseStageStatesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_release_stage_states: {}
    });
  };
}
export interface GiftInterface extends GiftReadOnlyInterface {
  contractAddress: string;
  sender: string;
  execute: ({
    msgs
  }: {
    msgs: CosmosMsgForCyberMsgWrapper[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateOwner: ({
    newOwner
  }: {
    newOwner?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateTreasuryAddr: ({
    newTreasuryAddr
  }: {
    newTreasuryAddr: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateTarget: ({
    newTarget
  }: {
    newTarget: Uint64;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateCoefficients: ({
    newCoefficientDown,
    newCoefficientUp
  }: {
    newCoefficientDown: Uint128;
    newCoefficientUp: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  registerMerkleRoot: ({
    merkleRoot
  }: {
    merkleRoot: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  execute_claim: ({
    giftAmount,
    giftClaimingAddress,
    nickname,
    proof
  }: {
    giftAmount: Uint128;
    giftClaimingAddress: string;
    nickname: string;
    proof: string[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  release: ({
    giftAddress
  }: {
    giftAddress: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class GiftClient extends GiftQueryClient implements GiftInterface {
  declare client: SigningCosmWasmClient;
  sender: string;
  declare contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.execute = this.execute.bind(this);
    this.updateOwner = this.updateOwner.bind(this);
    this.updateTreasuryAddr = this.updateTreasuryAddr.bind(this);
    this.updateTarget = this.updateTarget.bind(this);
    this.updateCoefficients = this.updateCoefficients.bind(this);
    this.registerMerkleRoot = this.registerMerkleRoot.bind(this);
    this.execute_claim = this.execute_claim.bind(this);
    this.release = this.release.bind(this);
  }

  execute = async ({
    msgs
  }: {
    msgs: CosmosMsgForCyberMsgWrapper[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute: {
        msgs
      }
    }, fee, memo, _funds);
  };
  updateOwner = async ({
    newOwner
  }: {
    newOwner?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_owner: {
        new_owner: newOwner
      }
    }, fee, memo, _funds);
  };
  updateTreasuryAddr = async ({
    newTreasuryAddr
  }: {
    newTreasuryAddr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_treasury_addr: {
        new_treasury_addr: newTreasuryAddr
      }
    }, fee, memo, _funds);
  };
  updateTarget = async ({
    newTarget
  }: {
    newTarget: Uint64;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_target: {
        new_target: newTarget
      }
    }, fee, memo, _funds);
  };
  updateCoefficients = async ({
    newCoefficientDown,
    newCoefficientUp
  }: {
    newCoefficientDown: Uint128;
    newCoefficientUp: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_coefficients: {
        new_coefficient_down: newCoefficientDown,
        new_coefficient_up: newCoefficientUp
      }
    }, fee, memo, _funds);
  };
  registerMerkleRoot = async ({
    merkleRoot
  }: {
    merkleRoot: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      register_merkle_root: {
        merkle_root: merkleRoot
      }
    }, fee, memo, _funds);
  };
  execute_claim = async ({
    giftAmount,
    giftClaimingAddress,
    nickname,
    proof
  }: {
    giftAmount: Uint128;
    giftClaimingAddress: string;
    nickname: string;
    proof: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim: {
        gift_amount: giftAmount,
        gift_claiming_address: giftClaimingAddress,
        nickname,
        proof
      }
    }, fee, memo, _funds);
  };
  release = async ({
    giftAddress
  }: {
    giftAddress: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      release: {
        gift_address: giftAddress
      }
    }, fee, memo, _funds);
  };
}