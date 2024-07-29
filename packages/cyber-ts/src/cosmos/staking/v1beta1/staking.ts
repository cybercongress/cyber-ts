import { Header, HeaderAmino, HeaderSDKType } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
/** BondStatus is the status of a validator. */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}
export const BondStatusSDKType = BondStatus;
export const BondStatusAmino = BondStatus;
export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  header: Header;
  valset: Validator[];
}
export interface HistoricalInfoProtoMsg {
  type_url: "/cosmos.staking.v1beta1.HistoricalInfo";
  value: Uint8Array;
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfoAmino {
  header?: HeaderAmino;
  valset?: ValidatorAmino[];
}
export interface HistoricalInfoAminoMsg {
  type: "cosmos-sdk/HistoricalInfo";
  value: HistoricalInfoAmino;
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfoSDKType {
  header: HeaderSDKType;
  valset: ValidatorSDKType[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  max_rate: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  max_change_rate: string;
}
export interface CommissionRatesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.CommissionRates";
  value: Uint8Array;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRatesAmino {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate?: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  max_rate?: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  max_change_rate?: string;
}
export interface CommissionRatesAminoMsg {
  type: "cosmos-sdk/CommissionRates";
  value: CommissionRatesAmino;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRatesSDKType {
  rate: string;
  max_rate: string;
  max_change_rate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commission_rates: CommissionRates;
  /** update_time is the last time the commission rate was changed. */
  update_time: Date;
}
export interface CommissionProtoMsg {
  type_url: "/cosmos.staking.v1beta1.Commission";
  value: Uint8Array;
}
/** Commission defines commission parameters for a given validator. */
export interface CommissionAmino {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commission_rates?: CommissionRatesAmino;
  /** update_time is the last time the commission rate was changed. */
  update_time?: string;
}
export interface CommissionAminoMsg {
  type: "cosmos-sdk/Commission";
  value: CommissionAmino;
}
/** Commission defines commission parameters for a given validator. */
export interface CommissionSDKType {
  commission_rates: CommissionRatesSDKType;
  update_time: Date;
}
/** Description defines a validator description. */
export interface Description {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity: string;
  /** website defines an optional website link. */
  website: string;
  /** security_contact defines an optional email for security contact. */
  security_contact: string;
  /** details define other optional details. */
  details: string;
}
export interface DescriptionProtoMsg {
  type_url: "/cosmos.staking.v1beta1.Description";
  value: Uint8Array;
}
/** Description defines a validator description. */
export interface DescriptionAmino {
  /** moniker defines a human-readable name for the validator. */
  moniker?: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity?: string;
  /** website defines an optional website link. */
  website?: string;
  /** security_contact defines an optional email for security contact. */
  security_contact?: string;
  /** details define other optional details. */
  details?: string;
}
export interface DescriptionAminoMsg {
  type: "cosmos-sdk/Description";
  value: DescriptionAmino;
}
/** Description defines a validator description. */
export interface DescriptionSDKType {
  moniker: string;
  identity: string;
  website: string;
  security_contact: string;
  details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operator_address: string;
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
  consensus_pubkey?: Any | undefined;
  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegator_shares: string;
  /** description defines the description terms for the validator. */
  description: Description;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
  unbonding_height: bigint;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
  unbonding_time: Date;
  /** commission defines the commission parameters. */
  commission: Commission;
  /** min_self_delegation is the validator's self declared minimum self delegation. */
  min_self_delegation: string;
}
export interface ValidatorProtoMsg {
  type_url: "/cosmos.staking.v1beta1.Validator";
  value: Uint8Array;
}
export type ValidatorEncoded = Omit<Validator, "consensus_pubkey"> & {
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */consensus_pubkey?: AnyProtoMsg | undefined;
};
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorAmino {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operator_address?: string;
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
  consensus_pubkey?: AnyAmino;
  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed?: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status?: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens?: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegator_shares?: string;
  /** description defines the description terms for the validator. */
  description?: DescriptionAmino;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
  unbonding_height?: string;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
  unbonding_time?: string;
  /** commission defines the commission parameters. */
  commission?: CommissionAmino;
  /** min_self_delegation is the validator's self declared minimum self delegation. */
  min_self_delegation?: string;
}
export interface ValidatorAminoMsg {
  type: "cosmos-sdk/Validator";
  value: ValidatorAmino;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorSDKType {
  operator_address: string;
  consensus_pubkey?: AnySDKType | undefined;
  jailed: boolean;
  status: BondStatus;
  tokens: string;
  delegator_shares: string;
  description: DescriptionSDKType;
  unbonding_height: bigint;
  unbonding_time: Date;
  commission: CommissionSDKType;
  min_self_delegation: string;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
  addresses: string[];
}
export interface ValAddressesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.ValAddresses";
  value: Uint8Array;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddressesAmino {
  addresses?: string[];
}
export interface ValAddressesAminoMsg {
  type: "cosmos-sdk/ValAddresses";
  value: ValAddressesAmino;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddressesSDKType {
  addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  delegator_address: string;
  validator_address: string;
}
export interface DVPairProtoMsg {
  type_url: "/cosmos.staking.v1beta1.DVPair";
  value: Uint8Array;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPairAmino {
  delegator_address?: string;
  validator_address?: string;
}
export interface DVPairAminoMsg {
  type: "cosmos-sdk/DVPair";
  value: DVPairAmino;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPairSDKType {
  delegator_address: string;
  validator_address: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
  pairs: DVPair[];
}
export interface DVPairsProtoMsg {
  type_url: "/cosmos.staking.v1beta1.DVPairs";
  value: Uint8Array;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairsAmino {
  pairs?: DVPairAmino[];
}
export interface DVPairsAminoMsg {
  type: "cosmos-sdk/DVPairs";
  value: DVPairsAmino;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairsSDKType {
  pairs: DVPairSDKType[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
}
export interface DVVTripletProtoMsg {
  type_url: "/cosmos.staking.v1beta1.DVVTriplet";
  value: Uint8Array;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTripletAmino {
  delegator_address?: string;
  validator_src_address?: string;
  validator_dst_address?: string;
}
export interface DVVTripletAminoMsg {
  type: "cosmos-sdk/DVVTriplet";
  value: DVVTripletAmino;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTripletSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
  triplets: DVVTriplet[];
}
export interface DVVTripletsProtoMsg {
  type_url: "/cosmos.staking.v1beta1.DVVTriplets";
  value: Uint8Array;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTripletsAmino {
  triplets?: DVVTripletAmino[];
}
export interface DVVTripletsAminoMsg {
  type: "cosmos-sdk/DVVTriplets";
  value: DVVTripletsAmino;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTripletsSDKType {
  triplets: DVVTripletSDKType[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address: string;
  /** shares define the delegation shares received. */
  shares: string;
}
export interface DelegationProtoMsg {
  type_url: "/cosmos.staking.v1beta1.Delegation";
  value: Uint8Array;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationAmino {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;
  /** shares define the delegation shares received. */
  shares?: string;
}
export interface DelegationAminoMsg {
  type: "cosmos-sdk/Delegation";
  value: DelegationAmino;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationSDKType {
  delegator_address: string;
  validator_address: string;
  shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address: string;
  /** entries are the unbonding delegation entries. */
  entries: UnbondingDelegationEntry[];
}
export interface UnbondingDelegationProtoMsg {
  type_url: "/cosmos.staking.v1beta1.UnbondingDelegation";
  value: Uint8Array;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegationAmino {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;
  /** entries are the unbonding delegation entries. */
  entries?: UnbondingDelegationEntryAmino[];
}
export interface UnbondingDelegationAminoMsg {
  type: "cosmos-sdk/UnbondingDelegation";
  value: UnbondingDelegationAmino;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegationSDKType {
  delegator_address: string;
  validator_address: string;
  entries: UnbondingDelegationEntrySDKType[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  /** creation_height is the height which the unbonding took place. */
  creation_height: bigint;
  /** completion_time is the unix time for unbonding completion. */
  completion_time: Date;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initial_balance: string;
  /** balance defines the tokens to receive at completion. */
  balance: string;
}
export interface UnbondingDelegationEntryProtoMsg {
  type_url: "/cosmos.staking.v1beta1.UnbondingDelegationEntry";
  value: Uint8Array;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntryAmino {
  /** creation_height is the height which the unbonding took place. */
  creation_height?: string;
  /** completion_time is the unix time for unbonding completion. */
  completion_time?: string;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initial_balance?: string;
  /** balance defines the tokens to receive at completion. */
  balance?: string;
}
export interface UnbondingDelegationEntryAminoMsg {
  type: "cosmos-sdk/UnbondingDelegationEntry";
  value: UnbondingDelegationEntryAmino;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntrySDKType {
  creation_height: bigint;
  completion_time: Date;
  initial_balance: string;
  balance: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  /** creation_height  defines the height which the redelegation took place. */
  creation_height: bigint;
  /** completion_time defines the unix time for redelegation completion. */
  completion_time: Date;
  /** initial_balance defines the initial balance when redelegation started. */
  initial_balance: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  shares_dst: string;
}
export interface RedelegationEntryProtoMsg {
  type_url: "/cosmos.staking.v1beta1.RedelegationEntry";
  value: Uint8Array;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntryAmino {
  /** creation_height  defines the height which the redelegation took place. */
  creation_height?: string;
  /** completion_time defines the unix time for redelegation completion. */
  completion_time?: string;
  /** initial_balance defines the initial balance when redelegation started. */
  initial_balance?: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  shares_dst?: string;
}
export interface RedelegationEntryAminoMsg {
  type: "cosmos-sdk/RedelegationEntry";
  value: RedelegationEntryAmino;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntrySDKType {
  creation_height: bigint;
  completion_time: Date;
  initial_balance: string;
  shares_dst: string;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_src_address is the validator redelegation source operator address. */
  validator_src_address: string;
  /** validator_dst_address is the validator redelegation destination operator address. */
  validator_dst_address: string;
  /** entries are the redelegation entries. */
  entries: RedelegationEntry[];
}
export interface RedelegationProtoMsg {
  type_url: "/cosmos.staking.v1beta1.Redelegation";
  value: Uint8Array;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface RedelegationAmino {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;
  /** validator_src_address is the validator redelegation source operator address. */
  validator_src_address?: string;
  /** validator_dst_address is the validator redelegation destination operator address. */
  validator_dst_address?: string;
  /** entries are the redelegation entries. */
  entries?: RedelegationEntryAmino[];
}
export interface RedelegationAminoMsg {
  type: "cosmos-sdk/Redelegation";
  value: RedelegationAmino;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface RedelegationSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  entries: RedelegationEntrySDKType[];
}
/** Params defines the parameters for the staking module. */
export interface Params {
  /** unbonding_time is the time duration of unbonding. */
  unbonding_time: Duration;
  /** max_validators is the maximum number of validators. */
  max_validators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  max_entries: number;
  /** historical_entries is the number of historical entries to persist. */
  historical_entries: number;
  /** bond_denom defines the bondable coin denomination. */
  bond_denom: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  min_commission_rate: string;
}
export interface ParamsProtoMsg {
  type_url: "/cosmos.staking.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the staking module. */
export interface ParamsAmino {
  /** unbonding_time is the time duration of unbonding. */
  unbonding_time?: DurationAmino;
  /** max_validators is the maximum number of validators. */
  max_validators?: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  max_entries?: number;
  /** historical_entries is the number of historical entries to persist. */
  historical_entries?: number;
  /** bond_denom defines the bondable coin denomination. */
  bond_denom?: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  min_commission_rate?: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the staking module. */
export interface ParamsSDKType {
  unbonding_time: DurationSDKType;
  max_validators: number;
  max_entries: number;
  historical_entries: number;
  bond_denom: string;
  min_commission_rate: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation: Delegation;
  balance: Coin;
}
export interface DelegationResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.DelegationResponse";
  value: Uint8Array;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseAmino {
  delegation?: DelegationAmino;
  balance?: CoinAmino;
}
export interface DelegationResponseAminoMsg {
  type: "cosmos-sdk/DelegationResponse";
  value: DelegationResponseAmino;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseSDKType {
  delegation: DelegationSDKType;
  balance: CoinSDKType;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
  redelegation_entry: RedelegationEntry;
  balance: string;
}
export interface RedelegationEntryResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.RedelegationEntryResponse";
  value: Uint8Array;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponseAmino {
  redelegation_entry?: RedelegationEntryAmino;
  balance?: string;
}
export interface RedelegationEntryResponseAminoMsg {
  type: "cosmos-sdk/RedelegationEntryResponse";
  value: RedelegationEntryResponseAmino;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponseSDKType {
  redelegation_entry: RedelegationEntrySDKType;
  balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
  redelegation: Redelegation;
  entries: RedelegationEntryResponse[];
}
export interface RedelegationResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.RedelegationResponse";
  value: Uint8Array;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponseAmino {
  redelegation?: RedelegationAmino;
  entries?: RedelegationEntryResponseAmino[];
}
export interface RedelegationResponseAminoMsg {
  type: "cosmos-sdk/RedelegationResponse";
  value: RedelegationResponseAmino;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponseSDKType {
  redelegation: RedelegationSDKType;
  entries: RedelegationEntryResponseSDKType[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
  not_bonded_tokens: string;
  bonded_tokens: string;
}
export interface PoolProtoMsg {
  type_url: "/cosmos.staking.v1beta1.Pool";
  value: Uint8Array;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface PoolAmino {
  not_bonded_tokens: string;
  bonded_tokens: string;
}
export interface PoolAminoMsg {
  type: "cosmos-sdk/Pool";
  value: PoolAmino;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface PoolSDKType {
  not_bonded_tokens: string;
  bonded_tokens: string;
}
function createBaseHistoricalInfo(): HistoricalInfo {
  return {
    header: Header.fromPartial({}),
    valset: []
  };
}
export const HistoricalInfo = {
  typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
  aminoType: "cosmos-sdk/HistoricalInfo",
  is(o: any): o is HistoricalInfo {
    return o && (o.$typeUrl === HistoricalInfo.typeUrl || Header.is(o.header) && Array.isArray(o.valset) && (!o.valset.length || Validator.is(o.valset[0])));
  },
  isSDK(o: any): o is HistoricalInfoSDKType {
    return o && (o.$typeUrl === HistoricalInfo.typeUrl || Header.isSDK(o.header) && Array.isArray(o.valset) && (!o.valset.length || Validator.isSDK(o.valset[0])));
  },
  isAmino(o: any): o is HistoricalInfoAmino {
    return o && (o.$typeUrl === HistoricalInfo.typeUrl || Header.isAmino(o.header) && Array.isArray(o.valset) && (!o.valset.length || Validator.isAmino(o.valset[0])));
  },
  encode(message: HistoricalInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalInfo {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      valset: Array.isArray(object?.valset) ? object.valset.map((e: any) => Validator.fromJSON(e)) : []
    };
  },
  toJSON(message: HistoricalInfo): JsonSafe<HistoricalInfo> {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.valset = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.valset = object.valset?.map(e => Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: HistoricalInfoAmino): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    message.valset = object.valset?.map(e => Validator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: HistoricalInfo): HistoricalInfoAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    if (message.valset) {
      obj.valset = message.valset.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.valset = message.valset;
    }
    return obj;
  },
  fromAminoMsg(object: HistoricalInfoAminoMsg): HistoricalInfo {
    return HistoricalInfo.fromAmino(object.value);
  },
  toAminoMsg(message: HistoricalInfo): HistoricalInfoAminoMsg {
    return {
      type: "cosmos-sdk/HistoricalInfo",
      value: HistoricalInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: HistoricalInfoProtoMsg): HistoricalInfo {
    return HistoricalInfo.decode(message.value);
  },
  toProto(message: HistoricalInfo): Uint8Array {
    return HistoricalInfo.encode(message).finish();
  },
  toProtoMsg(message: HistoricalInfo): HistoricalInfoProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
      value: HistoricalInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HistoricalInfo.typeUrl, HistoricalInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(HistoricalInfo.aminoType, HistoricalInfo.typeUrl);
function createBaseCommissionRates(): CommissionRates {
  return {
    rate: "",
    max_rate: "",
    max_change_rate: ""
  };
}
export const CommissionRates = {
  typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
  aminoType: "cosmos-sdk/CommissionRates",
  is(o: any): o is CommissionRates {
    return o && (o.$typeUrl === CommissionRates.typeUrl || typeof o.rate === "string" && typeof o.max_rate === "string" && typeof o.max_change_rate === "string");
  },
  isSDK(o: any): o is CommissionRatesSDKType {
    return o && (o.$typeUrl === CommissionRates.typeUrl || typeof o.rate === "string" && typeof o.max_rate === "string" && typeof o.max_change_rate === "string");
  },
  isAmino(o: any): o is CommissionRatesAmino {
    return o && (o.$typeUrl === CommissionRates.typeUrl || typeof o.rate === "string" && typeof o.max_rate === "string" && typeof o.max_change_rate === "string");
  },
  encode(message: CommissionRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.max_rate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.max_rate, 18).atomics);
    }
    if (message.max_change_rate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.max_change_rate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommissionRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.max_rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.max_change_rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommissionRates {
    return {
      rate: isSet(object.rate) ? String(object.rate) : "",
      max_rate: isSet(object.max_rate) ? String(object.max_rate) : "",
      max_change_rate: isSet(object.max_change_rate) ? String(object.max_change_rate) : ""
    };
  },
  toJSON(message: CommissionRates): JsonSafe<CommissionRates> {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.max_rate !== undefined && (obj.max_rate = message.max_rate);
    message.max_change_rate !== undefined && (obj.max_change_rate = message.max_change_rate);
    return obj;
  },
  fromPartial(object: DeepPartial<CommissionRates>): CommissionRates {
    const message = createBaseCommissionRates();
    message.rate = object.rate ?? "";
    message.max_rate = object.max_rate ?? "";
    message.max_change_rate = object.max_change_rate ?? "";
    return message;
  },
  fromAmino(object: CommissionRatesAmino): CommissionRates {
    const message = createBaseCommissionRates();
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    if (object.max_rate !== undefined && object.max_rate !== null) {
      message.max_rate = object.max_rate;
    }
    if (object.max_change_rate !== undefined && object.max_change_rate !== null) {
      message.max_change_rate = object.max_change_rate;
    }
    return message;
  },
  toAmino(message: CommissionRates): CommissionRatesAmino {
    const obj: any = {};
    obj.rate = message.rate === "" ? undefined : message.rate;
    obj.max_rate = message.max_rate === "" ? undefined : message.max_rate;
    obj.max_change_rate = message.max_change_rate === "" ? undefined : message.max_change_rate;
    return obj;
  },
  fromAminoMsg(object: CommissionRatesAminoMsg): CommissionRates {
    return CommissionRates.fromAmino(object.value);
  },
  toAminoMsg(message: CommissionRates): CommissionRatesAminoMsg {
    return {
      type: "cosmos-sdk/CommissionRates",
      value: CommissionRates.toAmino(message)
    };
  },
  fromProtoMsg(message: CommissionRatesProtoMsg): CommissionRates {
    return CommissionRates.decode(message.value);
  },
  toProto(message: CommissionRates): Uint8Array {
    return CommissionRates.encode(message).finish();
  },
  toProtoMsg(message: CommissionRates): CommissionRatesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
      value: CommissionRates.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CommissionRates.typeUrl, CommissionRates);
GlobalDecoderRegistry.registerAminoProtoMapping(CommissionRates.aminoType, CommissionRates.typeUrl);
function createBaseCommission(): Commission {
  return {
    commission_rates: CommissionRates.fromPartial({}),
    update_time: new Date()
  };
}
export const Commission = {
  typeUrl: "/cosmos.staking.v1beta1.Commission",
  aminoType: "cosmos-sdk/Commission",
  is(o: any): o is Commission {
    return o && (o.$typeUrl === Commission.typeUrl || CommissionRates.is(o.commission_rates) && Timestamp.is(o.update_time));
  },
  isSDK(o: any): o is CommissionSDKType {
    return o && (o.$typeUrl === Commission.typeUrl || CommissionRates.isSDK(o.commission_rates) && Timestamp.isSDK(o.update_time));
  },
  isAmino(o: any): o is CommissionAmino {
    return o && (o.$typeUrl === Commission.typeUrl || CommissionRates.isAmino(o.commission_rates) && Timestamp.isAmino(o.update_time));
  },
  encode(message: Commission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commission_rates !== undefined) {
      CommissionRates.encode(message.commission_rates, writer.uint32(10).fork()).ldelim();
    }
    if (message.update_time !== undefined) {
      Timestamp.encode(toTimestamp(message.update_time), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Commission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission_rates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.update_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Commission {
    return {
      commission_rates: isSet(object.commission_rates) ? CommissionRates.fromJSON(object.commission_rates) : undefined,
      update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined
    };
  },
  toJSON(message: Commission): JsonSafe<Commission> {
    const obj: any = {};
    message.commission_rates !== undefined && (obj.commission_rates = message.commission_rates ? CommissionRates.toJSON(message.commission_rates) : undefined);
    message.update_time !== undefined && (obj.update_time = message.update_time.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<Commission>): Commission {
    const message = createBaseCommission();
    message.commission_rates = object.commission_rates !== undefined && object.commission_rates !== null ? CommissionRates.fromPartial(object.commission_rates) : undefined;
    message.update_time = object.update_time ?? undefined;
    return message;
  },
  fromAmino(object: CommissionAmino): Commission {
    const message = createBaseCommission();
    if (object.commission_rates !== undefined && object.commission_rates !== null) {
      message.commission_rates = CommissionRates.fromAmino(object.commission_rates);
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.update_time = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    return message;
  },
  toAmino(message: Commission): CommissionAmino {
    const obj: any = {};
    obj.commission_rates = message.commission_rates ? CommissionRates.toAmino(message.commission_rates) : undefined;
    obj.update_time = message.update_time ? Timestamp.toAmino(toTimestamp(message.update_time)) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommissionAminoMsg): Commission {
    return Commission.fromAmino(object.value);
  },
  toAminoMsg(message: Commission): CommissionAminoMsg {
    return {
      type: "cosmos-sdk/Commission",
      value: Commission.toAmino(message)
    };
  },
  fromProtoMsg(message: CommissionProtoMsg): Commission {
    return Commission.decode(message.value);
  },
  toProto(message: Commission): Uint8Array {
    return Commission.encode(message).finish();
  },
  toProtoMsg(message: Commission): CommissionProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Commission",
      value: Commission.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Commission.typeUrl, Commission);
GlobalDecoderRegistry.registerAminoProtoMapping(Commission.aminoType, Commission.typeUrl);
function createBaseDescription(): Description {
  return {
    moniker: "",
    identity: "",
    website: "",
    security_contact: "",
    details: ""
  };
}
export const Description = {
  typeUrl: "/cosmos.staking.v1beta1.Description",
  aminoType: "cosmos-sdk/Description",
  is(o: any): o is Description {
    return o && (o.$typeUrl === Description.typeUrl || typeof o.moniker === "string" && typeof o.identity === "string" && typeof o.website === "string" && typeof o.security_contact === "string" && typeof o.details === "string");
  },
  isSDK(o: any): o is DescriptionSDKType {
    return o && (o.$typeUrl === Description.typeUrl || typeof o.moniker === "string" && typeof o.identity === "string" && typeof o.website === "string" && typeof o.security_contact === "string" && typeof o.details === "string");
  },
  isAmino(o: any): o is DescriptionAmino {
    return o && (o.$typeUrl === Description.typeUrl || typeof o.moniker === "string" && typeof o.identity === "string" && typeof o.website === "string" && typeof o.security_contact === "string" && typeof o.details === "string");
  },
  encode(message: Description, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.security_contact !== "") {
      writer.uint32(34).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Description {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.security_contact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Description {
    return {
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      security_contact: isSet(object.security_contact) ? String(object.security_contact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },
  toJSON(message: Description): JsonSafe<Description> {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.security_contact !== undefined && (obj.security_contact = message.security_contact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },
  fromPartial(object: DeepPartial<Description>): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.security_contact = object.security_contact ?? "";
    message.details = object.details ?? "";
    return message;
  },
  fromAmino(object: DescriptionAmino): Description {
    const message = createBaseDescription();
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.security_contact !== undefined && object.security_contact !== null) {
      message.security_contact = object.security_contact;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    }
    return message;
  },
  toAmino(message: Description): DescriptionAmino {
    const obj: any = {};
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.identity = message.identity === "" ? undefined : message.identity;
    obj.website = message.website === "" ? undefined : message.website;
    obj.security_contact = message.security_contact === "" ? undefined : message.security_contact;
    obj.details = message.details === "" ? undefined : message.details;
    return obj;
  },
  fromAminoMsg(object: DescriptionAminoMsg): Description {
    return Description.fromAmino(object.value);
  },
  toAminoMsg(message: Description): DescriptionAminoMsg {
    return {
      type: "cosmos-sdk/Description",
      value: Description.toAmino(message)
    };
  },
  fromProtoMsg(message: DescriptionProtoMsg): Description {
    return Description.decode(message.value);
  },
  toProto(message: Description): Uint8Array {
    return Description.encode(message).finish();
  },
  toProtoMsg(message: Description): DescriptionProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Description",
      value: Description.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Description.typeUrl, Description);
GlobalDecoderRegistry.registerAminoProtoMapping(Description.aminoType, Description.typeUrl);
function createBaseValidator(): Validator {
  return {
    operator_address: "",
    consensus_pubkey: undefined,
    jailed: false,
    status: 0,
    tokens: "",
    delegator_shares: "",
    description: Description.fromPartial({}),
    unbonding_height: BigInt(0),
    unbonding_time: new Date(),
    commission: Commission.fromPartial({}),
    min_self_delegation: ""
  };
}
export const Validator = {
  typeUrl: "/cosmos.staking.v1beta1.Validator",
  aminoType: "cosmos-sdk/Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.operator_address === "string" && typeof o.jailed === "boolean" && isSet(o.status) && typeof o.tokens === "string" && typeof o.delegator_shares === "string" && Description.is(o.description) && typeof o.unbonding_height === "bigint" && Timestamp.is(o.unbonding_time) && Commission.is(o.commission) && typeof o.min_self_delegation === "string");
  },
  isSDK(o: any): o is ValidatorSDKType {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.operator_address === "string" && typeof o.jailed === "boolean" && isSet(o.status) && typeof o.tokens === "string" && typeof o.delegator_shares === "string" && Description.isSDK(o.description) && typeof o.unbonding_height === "bigint" && Timestamp.isSDK(o.unbonding_time) && Commission.isSDK(o.commission) && typeof o.min_self_delegation === "string");
  },
  isAmino(o: any): o is ValidatorAmino {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.operator_address === "string" && typeof o.jailed === "boolean" && isSet(o.status) && typeof o.tokens === "string" && typeof o.delegator_shares === "string" && Description.isAmino(o.description) && typeof o.unbonding_height === "bigint" && Timestamp.isAmino(o.unbonding_time) && Commission.isAmino(o.commission) && typeof o.min_self_delegation === "string");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator_address !== "") {
      writer.uint32(10).string(message.operator_address);
    }
    if (message.consensus_pubkey !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.consensus_pubkey), writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegator_shares !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.delegator_shares, 18).atomics);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbonding_height !== BigInt(0)) {
      writer.uint32(64).int64(message.unbonding_height);
    }
    if (message.unbonding_time !== undefined) {
      Timestamp.encode(toTimestamp(message.unbonding_time), writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.min_self_delegation !== "") {
      writer.uint32(90).string(message.min_self_delegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator_address = reader.string();
          break;
        case 2:
          message.consensus_pubkey = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegator_shares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbonding_height = reader.int64();
          break;
        case 9:
          message.unbonding_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.min_self_delegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      operator_address: isSet(object.operator_address) ? String(object.operator_address) : "",
      consensus_pubkey: isSet(object.consensus_pubkey) ? GlobalDecoderRegistry.fromJSON(object.consensus_pubkey) : undefined,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
      tokens: isSet(object.tokens) ? String(object.tokens) : "",
      delegator_shares: isSet(object.delegator_shares) ? String(object.delegator_shares) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      unbonding_height: isSet(object.unbonding_height) ? BigInt(object.unbonding_height.toString()) : BigInt(0),
      unbonding_time: isSet(object.unbonding_time) ? fromJsonTimestamp(object.unbonding_time) : undefined,
      commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : ""
    };
  },
  toJSON(message: Validator): JsonSafe<Validator> {
    const obj: any = {};
    message.operator_address !== undefined && (obj.operator_address = message.operator_address);
    message.consensus_pubkey !== undefined && (obj.consensus_pubkey = message.consensus_pubkey ? GlobalDecoderRegistry.toJSON(message.consensus_pubkey) : undefined);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.delegator_shares !== undefined && (obj.delegator_shares = message.delegator_shares);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.unbonding_height !== undefined && (obj.unbonding_height = (message.unbonding_height || BigInt(0)).toString());
    message.unbonding_time !== undefined && (obj.unbonding_time = message.unbonding_time.toISOString());
    message.commission !== undefined && (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
    message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
    return obj;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.operator_address = object.operator_address ?? "";
    message.consensus_pubkey = object.consensus_pubkey !== undefined && object.consensus_pubkey !== null ? GlobalDecoderRegistry.fromPartial(object.consensus_pubkey) : undefined;
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegator_shares = object.delegator_shares ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.unbonding_height = object.unbonding_height !== undefined && object.unbonding_height !== null ? BigInt(object.unbonding_height.toString()) : BigInt(0);
    message.unbonding_time = object.unbonding_time ?? undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
    message.min_self_delegation = object.min_self_delegation ?? "";
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operator_address = object.operator_address;
    }
    if (object.consensus_pubkey !== undefined && object.consensus_pubkey !== null) {
      message.consensus_pubkey = encodePubkey(object.consensus_pubkey);
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = object.jailed;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    }
    if (object.delegator_shares !== undefined && object.delegator_shares !== null) {
      message.delegator_shares = object.delegator_shares;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.unbonding_height !== undefined && object.unbonding_height !== null) {
      message.unbonding_height = BigInt(object.unbonding_height);
    }
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbonding_time = fromTimestamp(Timestamp.fromAmino(object.unbonding_time));
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = Commission.fromAmino(object.commission);
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.min_self_delegation = object.min_self_delegation;
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.operator_address = message.operator_address === "" ? undefined : message.operator_address;
    obj.consensus_pubkey = message.consensus_pubkey ? decodePubkey(message.consensus_pubkey) : undefined;
    obj.jailed = message.jailed === false ? undefined : message.jailed;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.tokens = message.tokens === "" ? undefined : message.tokens;
    obj.delegator_shares = message.delegator_shares === "" ? undefined : message.delegator_shares;
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.unbonding_height = message.unbonding_height !== BigInt(0) ? message.unbonding_height.toString() : undefined;
    obj.unbonding_time = message.unbonding_time ? Timestamp.toAmino(toTimestamp(message.unbonding_time)) : undefined;
    obj.commission = message.commission ? Commission.toAmino(message.commission) : undefined;
    obj.min_self_delegation = message.min_self_delegation === "" ? undefined : message.min_self_delegation;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg(message: Validator): ValidatorAminoMsg {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
GlobalDecoderRegistry.registerAminoProtoMapping(Validator.aminoType, Validator.typeUrl);
function createBaseValAddresses(): ValAddresses {
  return {
    addresses: []
  };
}
export const ValAddresses = {
  typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
  aminoType: "cosmos-sdk/ValAddresses",
  is(o: any): o is ValAddresses {
    return o && (o.$typeUrl === ValAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  isSDK(o: any): o is ValAddressesSDKType {
    return o && (o.$typeUrl === ValAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  isAmino(o: any): o is ValAddressesAmino {
    return o && (o.$typeUrl === ValAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  encode(message: ValAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValAddresses {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ValAddresses): JsonSafe<ValAddresses> {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValAddresses>): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ValAddressesAmino): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: ValAddresses): ValAddressesAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: ValAddressesAminoMsg): ValAddresses {
    return ValAddresses.fromAmino(object.value);
  },
  toAminoMsg(message: ValAddresses): ValAddressesAminoMsg {
    return {
      type: "cosmos-sdk/ValAddresses",
      value: ValAddresses.toAmino(message)
    };
  },
  fromProtoMsg(message: ValAddressesProtoMsg): ValAddresses {
    return ValAddresses.decode(message.value);
  },
  toProto(message: ValAddresses): Uint8Array {
    return ValAddresses.encode(message).finish();
  },
  toProtoMsg(message: ValAddresses): ValAddressesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
      value: ValAddresses.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValAddresses.typeUrl, ValAddresses);
GlobalDecoderRegistry.registerAminoProtoMapping(ValAddresses.aminoType, ValAddresses.typeUrl);
function createBaseDVPair(): DVPair {
  return {
    delegator_address: "",
    validator_address: ""
  };
}
export const DVPair = {
  typeUrl: "/cosmos.staking.v1beta1.DVPair",
  aminoType: "cosmos-sdk/DVPair",
  is(o: any): o is DVPair {
    return o && (o.$typeUrl === DVPair.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
  },
  isSDK(o: any): o is DVPairSDKType {
    return o && (o.$typeUrl === DVPair.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
  },
  isAmino(o: any): o is DVPairAmino {
    return o && (o.$typeUrl === DVPair.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
  },
  encode(message: DVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPair {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  toJSON(message: DVPair): JsonSafe<DVPair> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    return obj;
  },
  fromPartial(object: DeepPartial<DVPair>): DVPair {
    const message = createBaseDVPair();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    return message;
  },
  fromAmino(object: DVPairAmino): DVPair {
    const message = createBaseDVPair();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    return message;
  },
  toAmino(message: DVPair): DVPairAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    return obj;
  },
  fromAminoMsg(object: DVPairAminoMsg): DVPair {
    return DVPair.fromAmino(object.value);
  },
  toAminoMsg(message: DVPair): DVPairAminoMsg {
    return {
      type: "cosmos-sdk/DVPair",
      value: DVPair.toAmino(message)
    };
  },
  fromProtoMsg(message: DVPairProtoMsg): DVPair {
    return DVPair.decode(message.value);
  },
  toProto(message: DVPair): Uint8Array {
    return DVPair.encode(message).finish();
  },
  toProtoMsg(message: DVPair): DVPairProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVPair",
      value: DVPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DVPair.typeUrl, DVPair);
GlobalDecoderRegistry.registerAminoProtoMapping(DVPair.aminoType, DVPair.typeUrl);
function createBaseDVPairs(): DVPairs {
  return {
    pairs: []
  };
}
export const DVPairs = {
  typeUrl: "/cosmos.staking.v1beta1.DVPairs",
  aminoType: "cosmos-sdk/DVPairs",
  is(o: any): o is DVPairs {
    return o && (o.$typeUrl === DVPairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || DVPair.is(o.pairs[0])));
  },
  isSDK(o: any): o is DVPairsSDKType {
    return o && (o.$typeUrl === DVPairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || DVPair.isSDK(o.pairs[0])));
  },
  isAmino(o: any): o is DVPairsAmino {
    return o && (o.$typeUrl === DVPairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || DVPair.isAmino(o.pairs[0])));
  },
  encode(message: DVPairs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVPairs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPairs {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => DVPair.fromJSON(e)) : []
    };
  },
  toJSON(message: DVPairs): JsonSafe<DVPairs> {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? DVPair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DVPairs>): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map(e => DVPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DVPairsAmino): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map(e => DVPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DVPairs): DVPairsAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? DVPair.toAmino(e) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    return obj;
  },
  fromAminoMsg(object: DVPairsAminoMsg): DVPairs {
    return DVPairs.fromAmino(object.value);
  },
  toAminoMsg(message: DVPairs): DVPairsAminoMsg {
    return {
      type: "cosmos-sdk/DVPairs",
      value: DVPairs.toAmino(message)
    };
  },
  fromProtoMsg(message: DVPairsProtoMsg): DVPairs {
    return DVPairs.decode(message.value);
  },
  toProto(message: DVPairs): Uint8Array {
    return DVPairs.encode(message).finish();
  },
  toProtoMsg(message: DVPairs): DVPairsProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVPairs",
      value: DVPairs.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DVPairs.typeUrl, DVPairs);
GlobalDecoderRegistry.registerAminoProtoMapping(DVPairs.aminoType, DVPairs.typeUrl);
function createBaseDVVTriplet(): DVVTriplet {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: ""
  };
}
export const DVVTriplet = {
  typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
  aminoType: "cosmos-sdk/DVVTriplet",
  is(o: any): o is DVVTriplet {
    return o && (o.$typeUrl === DVVTriplet.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string");
  },
  isSDK(o: any): o is DVVTripletSDKType {
    return o && (o.$typeUrl === DVVTriplet.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string");
  },
  isAmino(o: any): o is DVVTripletAmino {
    return o && (o.$typeUrl === DVVTriplet.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string");
  },
  encode(message: DVVTriplet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_src_address = reader.string();
          break;
        case 3:
          message.validator_dst_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplet {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : ""
    };
  },
  toJSON(message: DVVTriplet): JsonSafe<DVVTriplet> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
    message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
    return obj;
  },
  fromPartial(object: DeepPartial<DVVTriplet>): DVVTriplet {
    const message = createBaseDVVTriplet();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_src_address = object.validator_src_address ?? "";
    message.validator_dst_address = object.validator_dst_address ?? "";
    return message;
  },
  fromAmino(object: DVVTripletAmino): DVVTriplet {
    const message = createBaseDVVTriplet();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
      message.validator_src_address = object.validator_src_address;
    }
    if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
      message.validator_dst_address = object.validator_dst_address;
    }
    return message;
  },
  toAmino(message: DVVTriplet): DVVTripletAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_src_address = message.validator_src_address === "" ? undefined : message.validator_src_address;
    obj.validator_dst_address = message.validator_dst_address === "" ? undefined : message.validator_dst_address;
    return obj;
  },
  fromAminoMsg(object: DVVTripletAminoMsg): DVVTriplet {
    return DVVTriplet.fromAmino(object.value);
  },
  toAminoMsg(message: DVVTriplet): DVVTripletAminoMsg {
    return {
      type: "cosmos-sdk/DVVTriplet",
      value: DVVTriplet.toAmino(message)
    };
  },
  fromProtoMsg(message: DVVTripletProtoMsg): DVVTriplet {
    return DVVTriplet.decode(message.value);
  },
  toProto(message: DVVTriplet): Uint8Array {
    return DVVTriplet.encode(message).finish();
  },
  toProtoMsg(message: DVVTriplet): DVVTripletProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
      value: DVVTriplet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DVVTriplet.typeUrl, DVVTriplet);
GlobalDecoderRegistry.registerAminoProtoMapping(DVVTriplet.aminoType, DVVTriplet.typeUrl);
function createBaseDVVTriplets(): DVVTriplets {
  return {
    triplets: []
  };
}
export const DVVTriplets = {
  typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
  aminoType: "cosmos-sdk/DVVTriplets",
  is(o: any): o is DVVTriplets {
    return o && (o.$typeUrl === DVVTriplets.typeUrl || Array.isArray(o.triplets) && (!o.triplets.length || DVVTriplet.is(o.triplets[0])));
  },
  isSDK(o: any): o is DVVTripletsSDKType {
    return o && (o.$typeUrl === DVVTriplets.typeUrl || Array.isArray(o.triplets) && (!o.triplets.length || DVVTriplet.isSDK(o.triplets[0])));
  },
  isAmino(o: any): o is DVVTripletsAmino {
    return o && (o.$typeUrl === DVVTriplets.typeUrl || Array.isArray(o.triplets) && (!o.triplets.length || DVVTriplet.isAmino(o.triplets[0])));
  },
  encode(message: DVVTriplets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplets {
    return {
      triplets: Array.isArray(object?.triplets) ? object.triplets.map((e: any) => DVVTriplet.fromJSON(e)) : []
    };
  },
  toJSON(message: DVVTriplets): JsonSafe<DVVTriplets> {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map(e => e ? DVVTriplet.toJSON(e) : undefined);
    } else {
      obj.triplets = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DVVTriplets>): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map(e => DVVTriplet.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DVVTripletsAmino): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map(e => DVVTriplet.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DVVTriplets): DVVTripletsAmino {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map(e => e ? DVVTriplet.toAmino(e) : undefined);
    } else {
      obj.triplets = message.triplets;
    }
    return obj;
  },
  fromAminoMsg(object: DVVTripletsAminoMsg): DVVTriplets {
    return DVVTriplets.fromAmino(object.value);
  },
  toAminoMsg(message: DVVTriplets): DVVTripletsAminoMsg {
    return {
      type: "cosmos-sdk/DVVTriplets",
      value: DVVTriplets.toAmino(message)
    };
  },
  fromProtoMsg(message: DVVTripletsProtoMsg): DVVTriplets {
    return DVVTriplets.decode(message.value);
  },
  toProto(message: DVVTriplets): Uint8Array {
    return DVVTriplets.encode(message).finish();
  },
  toProtoMsg(message: DVVTriplets): DVVTripletsProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
      value: DVVTriplets.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DVVTriplets.typeUrl, DVVTriplets);
GlobalDecoderRegistry.registerAminoProtoMapping(DVVTriplets.aminoType, DVVTriplets.typeUrl);
function createBaseDelegation(): Delegation {
  return {
    delegator_address: "",
    validator_address: "",
    shares: ""
  };
}
export const Delegation = {
  typeUrl: "/cosmos.staking.v1beta1.Delegation",
  aminoType: "cosmos-sdk/Delegation",
  is(o: any): o is Delegation {
    return o && (o.$typeUrl === Delegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.shares === "string");
  },
  isSDK(o: any): o is DelegationSDKType {
    return o && (o.$typeUrl === Delegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.shares === "string");
  },
  isAmino(o: any): o is DelegationAmino {
    return o && (o.$typeUrl === Delegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.shares === "string");
  },
  encode(message: Delegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.shares, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.shares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Delegation {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      shares: isSet(object.shares) ? String(object.shares) : ""
    };
  },
  toJSON(message: Delegation): JsonSafe<Delegation> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },
  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
  fromAmino(object: DelegationAmino): Delegation {
    const message = createBaseDelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = object.shares;
    }
    return message;
  },
  toAmino(message: Delegation): DelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.shares = message.shares === "" ? undefined : message.shares;
    return obj;
  },
  fromAminoMsg(object: DelegationAminoMsg): Delegation {
    return Delegation.fromAmino(object.value);
  },
  toAminoMsg(message: Delegation): DelegationAminoMsg {
    return {
      type: "cosmos-sdk/Delegation",
      value: Delegation.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegationProtoMsg): Delegation {
    return Delegation.decode(message.value);
  },
  toProto(message: Delegation): Uint8Array {
    return Delegation.encode(message).finish();
  },
  toProtoMsg(message: Delegation): DelegationProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Delegation",
      value: Delegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Delegation.typeUrl, Delegation);
GlobalDecoderRegistry.registerAminoProtoMapping(Delegation.aminoType, Delegation.typeUrl);
function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    delegator_address: "",
    validator_address: "",
    entries: []
  };
}
export const UnbondingDelegation = {
  typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
  aminoType: "cosmos-sdk/UnbondingDelegation",
  is(o: any): o is UnbondingDelegation {
    return o && (o.$typeUrl === UnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Array.isArray(o.entries) && (!o.entries.length || UnbondingDelegationEntry.is(o.entries[0])));
  },
  isSDK(o: any): o is UnbondingDelegationSDKType {
    return o && (o.$typeUrl === UnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Array.isArray(o.entries) && (!o.entries.length || UnbondingDelegationEntry.isSDK(o.entries[0])));
  },
  isAmino(o: any): o is UnbondingDelegationAmino {
    return o && (o.$typeUrl === UnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Array.isArray(o.entries) && (!o.entries.length || UnbondingDelegationEntry.isAmino(o.entries[0])));
  },
  encode(message: UnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegation {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: UnbondingDelegation): JsonSafe<UnbondingDelegation> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UnbondingDelegationAmino): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UnbondingDelegation): UnbondingDelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: UnbondingDelegationAminoMsg): UnbondingDelegation {
    return UnbondingDelegation.fromAmino(object.value);
  },
  toAminoMsg(message: UnbondingDelegation): UnbondingDelegationAminoMsg {
    return {
      type: "cosmos-sdk/UnbondingDelegation",
      value: UnbondingDelegation.toAmino(message)
    };
  },
  fromProtoMsg(message: UnbondingDelegationProtoMsg): UnbondingDelegation {
    return UnbondingDelegation.decode(message.value);
  },
  toProto(message: UnbondingDelegation): Uint8Array {
    return UnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message: UnbondingDelegation): UnbondingDelegationProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
      value: UnbondingDelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UnbondingDelegation.typeUrl, UnbondingDelegation);
GlobalDecoderRegistry.registerAminoProtoMapping(UnbondingDelegation.aminoType, UnbondingDelegation.typeUrl);
function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creation_height: BigInt(0),
    completion_time: new Date(),
    initial_balance: "",
    balance: ""
  };
}
export const UnbondingDelegationEntry = {
  typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
  aminoType: "cosmos-sdk/UnbondingDelegationEntry",
  is(o: any): o is UnbondingDelegationEntry {
    return o && (o.$typeUrl === UnbondingDelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.is(o.completion_time) && typeof o.initial_balance === "string" && typeof o.balance === "string");
  },
  isSDK(o: any): o is UnbondingDelegationEntrySDKType {
    return o && (o.$typeUrl === UnbondingDelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.isSDK(o.completion_time) && typeof o.initial_balance === "string" && typeof o.balance === "string");
  },
  isAmino(o: any): o is UnbondingDelegationEntryAmino {
    return o && (o.$typeUrl === UnbondingDelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.isAmino(o.completion_time) && typeof o.initial_balance === "string" && typeof o.balance === "string");
  },
  encode(message: UnbondingDelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creation_height !== BigInt(0)) {
      writer.uint32(8).int64(message.creation_height);
    }
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(18).fork()).ldelim();
    }
    if (message.initial_balance !== "") {
      writer.uint32(26).string(message.initial_balance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creation_height = reader.int64();
          break;
        case 2:
          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initial_balance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegationEntry {
    return {
      creation_height: isSet(object.creation_height) ? BigInt(object.creation_height.toString()) : BigInt(0),
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
      initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },
  toJSON(message: UnbondingDelegationEntry): JsonSafe<UnbondingDelegationEntry> {
    const obj: any = {};
    message.creation_height !== undefined && (obj.creation_height = (message.creation_height || BigInt(0)).toString());
    message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
    message.initial_balance !== undefined && (obj.initial_balance = message.initial_balance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
  fromPartial(object: DeepPartial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? BigInt(object.creation_height.toString()) : BigInt(0);
    message.completion_time = object.completion_time ?? undefined;
    message.initial_balance = object.initial_balance ?? "";
    message.balance = object.balance ?? "";
    return message;
  },
  fromAmino(object: UnbondingDelegationEntryAmino): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    if (object.creation_height !== undefined && object.creation_height !== null) {
      message.creation_height = BigInt(object.creation_height);
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completion_time = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    if (object.initial_balance !== undefined && object.initial_balance !== null) {
      message.initial_balance = object.initial_balance;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    return message;
  },
  toAmino(message: UnbondingDelegationEntry): UnbondingDelegationEntryAmino {
    const obj: any = {};
    obj.creation_height = message.creation_height !== BigInt(0) ? message.creation_height.toString() : undefined;
    obj.completion_time = message.completion_time ? Timestamp.toAmino(toTimestamp(message.completion_time)) : undefined;
    obj.initial_balance = message.initial_balance === "" ? undefined : message.initial_balance;
    obj.balance = message.balance === "" ? undefined : message.balance;
    return obj;
  },
  fromAminoMsg(object: UnbondingDelegationEntryAminoMsg): UnbondingDelegationEntry {
    return UnbondingDelegationEntry.fromAmino(object.value);
  },
  toAminoMsg(message: UnbondingDelegationEntry): UnbondingDelegationEntryAminoMsg {
    return {
      type: "cosmos-sdk/UnbondingDelegationEntry",
      value: UnbondingDelegationEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: UnbondingDelegationEntryProtoMsg): UnbondingDelegationEntry {
    return UnbondingDelegationEntry.decode(message.value);
  },
  toProto(message: UnbondingDelegationEntry): Uint8Array {
    return UnbondingDelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: UnbondingDelegationEntry): UnbondingDelegationEntryProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
      value: UnbondingDelegationEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UnbondingDelegationEntry.typeUrl, UnbondingDelegationEntry);
GlobalDecoderRegistry.registerAminoProtoMapping(UnbondingDelegationEntry.aminoType, UnbondingDelegationEntry.typeUrl);
function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creation_height: BigInt(0),
    completion_time: new Date(),
    initial_balance: "",
    shares_dst: ""
  };
}
export const RedelegationEntry = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
  aminoType: "cosmos-sdk/RedelegationEntry",
  is(o: any): o is RedelegationEntry {
    return o && (o.$typeUrl === RedelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.is(o.completion_time) && typeof o.initial_balance === "string" && typeof o.shares_dst === "string");
  },
  isSDK(o: any): o is RedelegationEntrySDKType {
    return o && (o.$typeUrl === RedelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.isSDK(o.completion_time) && typeof o.initial_balance === "string" && typeof o.shares_dst === "string");
  },
  isAmino(o: any): o is RedelegationEntryAmino {
    return o && (o.$typeUrl === RedelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.isAmino(o.completion_time) && typeof o.initial_balance === "string" && typeof o.shares_dst === "string");
  },
  encode(message: RedelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creation_height !== BigInt(0)) {
      writer.uint32(8).int64(message.creation_height);
    }
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(18).fork()).ldelim();
    }
    if (message.initial_balance !== "") {
      writer.uint32(26).string(message.initial_balance);
    }
    if (message.shares_dst !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.shares_dst, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creation_height = reader.int64();
          break;
        case 2:
          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initial_balance = reader.string();
          break;
        case 4:
          message.shares_dst = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntry {
    return {
      creation_height: isSet(object.creation_height) ? BigInt(object.creation_height.toString()) : BigInt(0),
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
      initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
      shares_dst: isSet(object.shares_dst) ? String(object.shares_dst) : ""
    };
  },
  toJSON(message: RedelegationEntry): JsonSafe<RedelegationEntry> {
    const obj: any = {};
    message.creation_height !== undefined && (obj.creation_height = (message.creation_height || BigInt(0)).toString());
    message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
    message.initial_balance !== undefined && (obj.initial_balance = message.initial_balance);
    message.shares_dst !== undefined && (obj.shares_dst = message.shares_dst);
    return obj;
  },
  fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? BigInt(object.creation_height.toString()) : BigInt(0);
    message.completion_time = object.completion_time ?? undefined;
    message.initial_balance = object.initial_balance ?? "";
    message.shares_dst = object.shares_dst ?? "";
    return message;
  },
  fromAmino(object: RedelegationEntryAmino): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    if (object.creation_height !== undefined && object.creation_height !== null) {
      message.creation_height = BigInt(object.creation_height);
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completion_time = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    if (object.initial_balance !== undefined && object.initial_balance !== null) {
      message.initial_balance = object.initial_balance;
    }
    if (object.shares_dst !== undefined && object.shares_dst !== null) {
      message.shares_dst = object.shares_dst;
    }
    return message;
  },
  toAmino(message: RedelegationEntry): RedelegationEntryAmino {
    const obj: any = {};
    obj.creation_height = message.creation_height !== BigInt(0) ? message.creation_height.toString() : undefined;
    obj.completion_time = message.completion_time ? Timestamp.toAmino(toTimestamp(message.completion_time)) : undefined;
    obj.initial_balance = message.initial_balance === "" ? undefined : message.initial_balance;
    obj.shares_dst = message.shares_dst === "" ? undefined : message.shares_dst;
    return obj;
  },
  fromAminoMsg(object: RedelegationEntryAminoMsg): RedelegationEntry {
    return RedelegationEntry.fromAmino(object.value);
  },
  toAminoMsg(message: RedelegationEntry): RedelegationEntryAminoMsg {
    return {
      type: "cosmos-sdk/RedelegationEntry",
      value: RedelegationEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: RedelegationEntryProtoMsg): RedelegationEntry {
    return RedelegationEntry.decode(message.value);
  },
  toProto(message: RedelegationEntry): Uint8Array {
    return RedelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: RedelegationEntry): RedelegationEntryProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
      value: RedelegationEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RedelegationEntry.typeUrl, RedelegationEntry);
GlobalDecoderRegistry.registerAminoProtoMapping(RedelegationEntry.aminoType, RedelegationEntry.typeUrl);
function createBaseRedelegation(): Redelegation {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: "",
    entries: []
  };
}
export const Redelegation = {
  typeUrl: "/cosmos.staking.v1beta1.Redelegation",
  aminoType: "cosmos-sdk/Redelegation",
  is(o: any): o is Redelegation {
    return o && (o.$typeUrl === Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntry.is(o.entries[0])));
  },
  isSDK(o: any): o is RedelegationSDKType {
    return o && (o.$typeUrl === Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntry.isSDK(o.entries[0])));
  },
  isAmino(o: any): o is RedelegationAmino {
    return o && (o.$typeUrl === Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntry.isAmino(o.entries[0])));
  },
  encode(message: Redelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_src_address = reader.string();
          break;
        case 3:
          message.validator_dst_address = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Redelegation {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: Redelegation): JsonSafe<Redelegation> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
    message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_src_address = object.validator_src_address ?? "";
    message.validator_dst_address = object.validator_dst_address ?? "";
    message.entries = object.entries?.map(e => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RedelegationAmino): Redelegation {
    const message = createBaseRedelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
      message.validator_src_address = object.validator_src_address;
    }
    if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
      message.validator_dst_address = object.validator_dst_address;
    }
    message.entries = object.entries?.map(e => RedelegationEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Redelegation): RedelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_src_address = message.validator_src_address === "" ? undefined : message.validator_src_address;
    obj.validator_dst_address = message.validator_dst_address === "" ? undefined : message.validator_dst_address;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: RedelegationAminoMsg): Redelegation {
    return Redelegation.fromAmino(object.value);
  },
  toAminoMsg(message: Redelegation): RedelegationAminoMsg {
    return {
      type: "cosmos-sdk/Redelegation",
      value: Redelegation.toAmino(message)
    };
  },
  fromProtoMsg(message: RedelegationProtoMsg): Redelegation {
    return Redelegation.decode(message.value);
  },
  toProto(message: Redelegation): Uint8Array {
    return Redelegation.encode(message).finish();
  },
  toProtoMsg(message: Redelegation): RedelegationProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Redelegation",
      value: Redelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Redelegation.typeUrl, Redelegation);
GlobalDecoderRegistry.registerAminoProtoMapping(Redelegation.aminoType, Redelegation.typeUrl);
function createBaseParams(): Params {
  return {
    unbonding_time: Duration.fromPartial({}),
    max_validators: 0,
    max_entries: 0,
    historical_entries: 0,
    bond_denom: "",
    min_commission_rate: ""
  };
}
export const Params = {
  typeUrl: "/cosmos.staking.v1beta1.Params",
  aminoType: "cosmos-sdk/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Duration.is(o.unbonding_time) && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Duration.isSDK(o.unbonding_time) && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Duration.isAmino(o.unbonding_time) && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbonding_time !== undefined) {
      Duration.encode(message.unbonding_time, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_validators !== 0) {
      writer.uint32(16).uint32(message.max_validators);
    }
    if (message.max_entries !== 0) {
      writer.uint32(24).uint32(message.max_entries);
    }
    if (message.historical_entries !== 0) {
      writer.uint32(32).uint32(message.historical_entries);
    }
    if (message.bond_denom !== "") {
      writer.uint32(42).string(message.bond_denom);
    }
    if (message.min_commission_rate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.min_commission_rate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding_time = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.max_validators = reader.uint32();
          break;
        case 3:
          message.max_entries = reader.uint32();
          break;
        case 4:
          message.historical_entries = reader.uint32();
          break;
        case 5:
          message.bond_denom = reader.string();
          break;
        case 6:
          message.min_commission_rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      unbonding_time: isSet(object.unbonding_time) ? Duration.fromJSON(object.unbonding_time) : undefined,
      max_validators: isSet(object.max_validators) ? Number(object.max_validators) : 0,
      max_entries: isSet(object.max_entries) ? Number(object.max_entries) : 0,
      historical_entries: isSet(object.historical_entries) ? Number(object.historical_entries) : 0,
      bond_denom: isSet(object.bond_denom) ? String(object.bond_denom) : "",
      min_commission_rate: isSet(object.min_commission_rate) ? String(object.min_commission_rate) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.unbonding_time !== undefined && (obj.unbonding_time = message.unbonding_time ? Duration.toJSON(message.unbonding_time) : undefined);
    message.max_validators !== undefined && (obj.max_validators = Math.round(message.max_validators));
    message.max_entries !== undefined && (obj.max_entries = Math.round(message.max_entries));
    message.historical_entries !== undefined && (obj.historical_entries = Math.round(message.historical_entries));
    message.bond_denom !== undefined && (obj.bond_denom = message.bond_denom);
    message.min_commission_rate !== undefined && (obj.min_commission_rate = message.min_commission_rate);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.unbonding_time = object.unbonding_time !== undefined && object.unbonding_time !== null ? Duration.fromPartial(object.unbonding_time) : undefined;
    message.max_validators = object.max_validators ?? 0;
    message.max_entries = object.max_entries ?? 0;
    message.historical_entries = object.historical_entries ?? 0;
    message.bond_denom = object.bond_denom ?? "";
    message.min_commission_rate = object.min_commission_rate ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbonding_time = Duration.fromAmino(object.unbonding_time);
    }
    if (object.max_validators !== undefined && object.max_validators !== null) {
      message.max_validators = object.max_validators;
    }
    if (object.max_entries !== undefined && object.max_entries !== null) {
      message.max_entries = object.max_entries;
    }
    if (object.historical_entries !== undefined && object.historical_entries !== null) {
      message.historical_entries = object.historical_entries;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bond_denom = object.bond_denom;
    }
    if (object.min_commission_rate !== undefined && object.min_commission_rate !== null) {
      message.min_commission_rate = object.min_commission_rate;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.unbonding_time = message.unbonding_time ? Duration.toAmino(message.unbonding_time) : undefined;
    obj.max_validators = message.max_validators === 0 ? undefined : message.max_validators;
    obj.max_entries = message.max_entries === 0 ? undefined : message.max_entries;
    obj.historical_entries = message.historical_entries === 0 ? undefined : message.historical_entries;
    obj.bond_denom = message.bond_denom === "" ? undefined : message.bond_denom;
    obj.min_commission_rate = message.min_commission_rate === "" ? undefined : message.min_commission_rate;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: Delegation.fromPartial({}),
    balance: Coin.fromPartial({})
  };
}
export const DelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
  aminoType: "cosmos-sdk/DelegationResponse",
  is(o: any): o is DelegationResponse {
    return o && (o.$typeUrl === DelegationResponse.typeUrl || Delegation.is(o.delegation) && Coin.is(o.balance));
  },
  isSDK(o: any): o is DelegationResponseSDKType {
    return o && (o.$typeUrl === DelegationResponse.typeUrl || Delegation.isSDK(o.delegation) && Coin.isSDK(o.balance));
  },
  isAmino(o: any): o is DelegationResponseAmino {
    return o && (o.$typeUrl === DelegationResponse.typeUrl || Delegation.isAmino(o.delegation) && Coin.isAmino(o.balance));
  },
  encode(message: DelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationResponse {
    return {
      delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },
  toJSON(message: DelegationResponse): JsonSafe<DelegationResponse> {
    const obj: any = {};
    message.delegation !== undefined && (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: DelegationResponseAmino): DelegationResponse {
    const message = createBaseDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromAmino(object.delegation);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: DelegationResponse): DelegationResponseAmino {
    const obj: any = {};
    obj.delegation = message.delegation ? Delegation.toAmino(message.delegation) : undefined;
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegationResponseAminoMsg): DelegationResponse {
    return DelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: DelegationResponse): DelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/DelegationResponse",
      value: DelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegationResponseProtoMsg): DelegationResponse {
    return DelegationResponse.decode(message.value);
  },
  toProto(message: DelegationResponse): Uint8Array {
    return DelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: DelegationResponse): DelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
      value: DelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegationResponse.typeUrl, DelegationResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegationResponse.aminoType, DelegationResponse.typeUrl);
function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
  return {
    redelegation_entry: RedelegationEntry.fromPartial({}),
    balance: ""
  };
}
export const RedelegationEntryResponse = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
  aminoType: "cosmos-sdk/RedelegationEntryResponse",
  is(o: any): o is RedelegationEntryResponse {
    return o && (o.$typeUrl === RedelegationEntryResponse.typeUrl || RedelegationEntry.is(o.redelegation_entry) && typeof o.balance === "string");
  },
  isSDK(o: any): o is RedelegationEntryResponseSDKType {
    return o && (o.$typeUrl === RedelegationEntryResponse.typeUrl || RedelegationEntry.isSDK(o.redelegation_entry) && typeof o.balance === "string");
  },
  isAmino(o: any): o is RedelegationEntryResponseAmino {
    return o && (o.$typeUrl === RedelegationEntryResponse.typeUrl || RedelegationEntry.isAmino(o.redelegation_entry) && typeof o.balance === "string");
  },
  encode(message: RedelegationEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redelegation_entry !== undefined) {
      RedelegationEntry.encode(message.redelegation_entry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation_entry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntryResponse {
    return {
      redelegation_entry: isSet(object.redelegation_entry) ? RedelegationEntry.fromJSON(object.redelegation_entry) : undefined,
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },
  toJSON(message: RedelegationEntryResponse): JsonSafe<RedelegationEntryResponse> {
    const obj: any = {};
    message.redelegation_entry !== undefined && (obj.redelegation_entry = message.redelegation_entry ? RedelegationEntry.toJSON(message.redelegation_entry) : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
  fromPartial(object: DeepPartial<RedelegationEntryResponse>): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    message.redelegation_entry = object.redelegation_entry !== undefined && object.redelegation_entry !== null ? RedelegationEntry.fromPartial(object.redelegation_entry) : undefined;
    message.balance = object.balance ?? "";
    return message;
  },
  fromAmino(object: RedelegationEntryResponseAmino): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    if (object.redelegation_entry !== undefined && object.redelegation_entry !== null) {
      message.redelegation_entry = RedelegationEntry.fromAmino(object.redelegation_entry);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    return message;
  },
  toAmino(message: RedelegationEntryResponse): RedelegationEntryResponseAmino {
    const obj: any = {};
    obj.redelegation_entry = message.redelegation_entry ? RedelegationEntry.toAmino(message.redelegation_entry) : undefined;
    obj.balance = message.balance === "" ? undefined : message.balance;
    return obj;
  },
  fromAminoMsg(object: RedelegationEntryResponseAminoMsg): RedelegationEntryResponse {
    return RedelegationEntryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: RedelegationEntryResponse): RedelegationEntryResponseAminoMsg {
    return {
      type: "cosmos-sdk/RedelegationEntryResponse",
      value: RedelegationEntryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: RedelegationEntryResponseProtoMsg): RedelegationEntryResponse {
    return RedelegationEntryResponse.decode(message.value);
  },
  toProto(message: RedelegationEntryResponse): Uint8Array {
    return RedelegationEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: RedelegationEntryResponse): RedelegationEntryResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
      value: RedelegationEntryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RedelegationEntryResponse.typeUrl, RedelegationEntryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(RedelegationEntryResponse.aminoType, RedelegationEntryResponse.typeUrl);
function createBaseRedelegationResponse(): RedelegationResponse {
  return {
    redelegation: Redelegation.fromPartial({}),
    entries: []
  };
}
export const RedelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
  aminoType: "cosmos-sdk/RedelegationResponse",
  is(o: any): o is RedelegationResponse {
    return o && (o.$typeUrl === RedelegationResponse.typeUrl || Redelegation.is(o.redelegation) && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntryResponse.is(o.entries[0])));
  },
  isSDK(o: any): o is RedelegationResponseSDKType {
    return o && (o.$typeUrl === RedelegationResponse.typeUrl || Redelegation.isSDK(o.redelegation) && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntryResponse.isSDK(o.entries[0])));
  },
  isAmino(o: any): o is RedelegationResponseAmino {
    return o && (o.$typeUrl === RedelegationResponse.typeUrl || Redelegation.isAmino(o.redelegation) && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntryResponse.isAmino(o.entries[0])));
  },
  encode(message: RedelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationResponse {
    return {
      redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntryResponse.fromJSON(e)) : []
    };
  },
  toJSON(message: RedelegationResponse): JsonSafe<RedelegationResponse> {
    const obj: any = {};
    message.redelegation !== undefined && (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : undefined);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<RedelegationResponse>): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
    message.entries = object.entries?.map(e => RedelegationEntryResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RedelegationResponseAmino): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    if (object.redelegation !== undefined && object.redelegation !== null) {
      message.redelegation = Redelegation.fromAmino(object.redelegation);
    }
    message.entries = object.entries?.map(e => RedelegationEntryResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RedelegationResponse): RedelegationResponseAmino {
    const obj: any = {};
    obj.redelegation = message.redelegation ? Redelegation.toAmino(message.redelegation) : undefined;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: RedelegationResponseAminoMsg): RedelegationResponse {
    return RedelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: RedelegationResponse): RedelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/RedelegationResponse",
      value: RedelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: RedelegationResponseProtoMsg): RedelegationResponse {
    return RedelegationResponse.decode(message.value);
  },
  toProto(message: RedelegationResponse): Uint8Array {
    return RedelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: RedelegationResponse): RedelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
      value: RedelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RedelegationResponse.typeUrl, RedelegationResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(RedelegationResponse.aminoType, RedelegationResponse.typeUrl);
function createBasePool(): Pool {
  return {
    not_bonded_tokens: "",
    bonded_tokens: ""
  };
}
export const Pool = {
  typeUrl: "/cosmos.staking.v1beta1.Pool",
  aminoType: "cosmos-sdk/Pool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.not_bonded_tokens === "string" && typeof o.bonded_tokens === "string");
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.not_bonded_tokens === "string" && typeof o.bonded_tokens === "string");
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.not_bonded_tokens === "string" && typeof o.bonded_tokens === "string");
  },
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.not_bonded_tokens !== "") {
      writer.uint32(10).string(message.not_bonded_tokens);
    }
    if (message.bonded_tokens !== "") {
      writer.uint32(18).string(message.bonded_tokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.not_bonded_tokens = reader.string();
          break;
        case 2:
          message.bonded_tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    return {
      not_bonded_tokens: isSet(object.not_bonded_tokens) ? String(object.not_bonded_tokens) : "",
      bonded_tokens: isSet(object.bonded_tokens) ? String(object.bonded_tokens) : ""
    };
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.not_bonded_tokens !== undefined && (obj.not_bonded_tokens = message.not_bonded_tokens);
    message.bonded_tokens !== undefined && (obj.bonded_tokens = message.bonded_tokens);
    return obj;
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.not_bonded_tokens = object.not_bonded_tokens ?? "";
    message.bonded_tokens = object.bonded_tokens ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.not_bonded_tokens !== undefined && object.not_bonded_tokens !== null) {
      message.not_bonded_tokens = object.not_bonded_tokens;
    }
    if (object.bonded_tokens !== undefined && object.bonded_tokens !== null) {
      message.bonded_tokens = object.bonded_tokens;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.not_bonded_tokens = message.not_bonded_tokens ?? "";
    obj.bonded_tokens = message.bonded_tokens ?? "";
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  toAminoMsg(message: Pool): PoolAminoMsg {
    return {
      type: "cosmos-sdk/Pool",
      value: Pool.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);
GlobalDecoderRegistry.registerAminoProtoMapping(Pool.aminoType, Pool.typeUrl);