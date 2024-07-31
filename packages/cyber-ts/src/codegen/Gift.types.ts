/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface AllReleaseStageStatesResponse {
  releases: number[];
  [k: string]: unknown;
}
export type Uint128 = string;
export type Decimal = string;
export interface ClaimResponse {
  claim: Uint128;
  multiplier: Decimal;
  [k: string]: unknown;
}
export type Uint64 = string;
export interface ConfigResponse {
  allowed_native: string;
  coefficient_down: Uint128;
  coefficient_up: Uint128;
  initial_balance: Uint128;
  owner?: string | null;
  passport: string;
  target_claim: Uint64;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  execute: {
    msgs: CosmosMsgForCyberMsgWrapper[];
    [k: string]: unknown;
  };
} | {
  update_owner: {
    new_owner?: string | null;
    [k: string]: unknown;
  };
} | {
  update_treasury_addr: {
    new_treasury_addr: string;
    [k: string]: unknown;
  };
} | {
  update_target: {
    new_target: Uint64;
    [k: string]: unknown;
  };
} | {
  update_coefficients: {
    new_coefficient_down: Uint128;
    new_coefficient_up: Uint128;
    [k: string]: unknown;
  };
} | {
  register_merkle_root: {
    merkle_root: string;
    [k: string]: unknown;
  };
} | {
  claim: {
    gift_amount: Uint128;
    gift_claiming_address: string;
    nickname: string;
    proof: string[];
    [k: string]: unknown;
  };
} | {
  release: {
    gift_address: string;
    [k: string]: unknown;
  };
};
export type CosmosMsgForCyberMsgWrapper = {
  bank: BankMsg;
} | {
  custom: CyberMsgWrapper;
} | {
  staking: StakingMsg;
} | {
  distribution: DistributionMsg;
} | {
  wasm: WasmMsg;
};
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Coin[];
    [k: string]: unknown;
  };
};
export type CyberMsg = {
  cyberlink: {
    links: Link[];
    neuron: string;
    [k: string]: unknown;
  };
} | {
  investmint: {
    amount: Coin;
    length: number;
    neuron: string;
    resource: string;
    [k: string]: unknown;
  };
} | {
  create_energy_route: {
    destination: string;
    name: string;
    source: string;
    [k: string]: unknown;
  };
} | {
  edit_energy_route: {
    destination: string;
    source: string;
    value: Coin;
    [k: string]: unknown;
  };
} | {
  edit_energy_route_name: {
    destination: string;
    name: string;
    source: string;
    [k: string]: unknown;
  };
} | {
  delete_energy_route: {
    destination: string;
    source: string;
    [k: string]: unknown;
  };
} | {
  create_thought: {
    load: Load;
    name: string;
    particle: string;
    program: string;
    trigger: Trigger;
    [k: string]: unknown;
  };
} | {
  forget_thought: {
    name: string;
    program: string;
    [k: string]: unknown;
  };
} | {
  change_thought_input: {
    input: string;
    name: string;
    program: string;
    [k: string]: unknown;
  };
} | {
  change_thought_period: {
    name: string;
    period: number;
    program: string;
    [k: string]: unknown;
  };
} | {
  change_thought_block: {
    block: number;
    name: string;
    program: string;
    [k: string]: unknown;
  };
} | {
  create_pool: {
    deposit_coins: Coin[];
    pool_creator_address: string;
    pool_type_id: number;
    [k: string]: unknown;
  };
} | {
  deposit_within_batch: {
    deposit_coins: Coin[];
    depositor_address: string;
    pool_id: number;
    [k: string]: unknown;
  };
} | {
  withdraw_within_batch: {
    pool_coin: Coin;
    pool_id: number;
    withdrawer_address: string;
    [k: string]: unknown;
  };
} | {
  swap_within_batch: {
    demand_coin_denom: string;
    offer_coin: Coin;
    offer_coin_fee: Coin;
    order_price: Decimal;
    pool_id: number;
    swap_requester_address: string;
    swap_type_id: number;
    [k: string]: unknown;
  };
};
export type CyberRoute = "rank" | "graph" | "resources" | "grid" | "dmn" | "bandwidth" | "liquidity";
export type StakingMsg = {
  delegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  undelegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  redelegate: {
    amount: Coin;
    dst_validator: string;
    src_validator: string;
    [k: string]: unknown;
  };
};
export type DistributionMsg = {
  set_withdraw_address: {
    address: string;
    [k: string]: unknown;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
    [k: string]: unknown;
  };
};
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
    [k: string]: unknown;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
    [k: string]: unknown;
  };
} | {
  clear_admin: {
    contract_addr: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface CyberMsgWrapper {
  msg_data: CyberMsg;
  route: CyberRoute;
  [k: string]: unknown;
}
export interface Link {
  from: string;
  to: string;
  [k: string]: unknown;
}
export interface Load {
  gas_price: Coin;
  input: string;
  [k: string]: unknown;
}
export interface Trigger {
  block: number;
  period: number;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  allowed_native: string;
  coefficient: Uint128;
  coefficient_down: Uint128;
  coefficient_up: Uint128;
  initial_balance: Uint128;
  owner?: string | null;
  passport: string;
  target_claim: Uint64;
  treasury: string;
  [k: string]: unknown;
}
export interface IsClaimedResponse {
  is_claimed: boolean;
  [k: string]: unknown;
}
export interface MerkleRootResponse {
  merkle_root: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {
    [k: string]: unknown;
  };
} | {
  state: {
    [k: string]: unknown;
  };
} | {
  merkle_root: {
    [k: string]: unknown;
  };
} | {
  is_claimed: {
    address: string;
    [k: string]: unknown;
  };
} | {
  claim: {
    address: string;
    [k: string]: unknown;
  };
} | {
  release_state: {
    address: string;
    [k: string]: unknown;
  };
} | {
  release_stage_state: {
    stage: number;
    [k: string]: unknown;
  };
} | {
  all_release_stage_states: {
    [k: string]: unknown;
  };
};
export interface ReleaseStageStateResponse {
  releases: number;
  [k: string]: unknown;
}
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export interface ReleaseStateResponse {
  address: string;
  balance_claim: Uint128;
  stage: Uint64;
  stage_expiration: Expiration;
  [k: string]: unknown;
}
export interface StateResponse {
  claims: Uint64;
  coefficient: Decimal;
  current_balance: Uint128;
  releases: Uint64;
  [k: string]: unknown;
}