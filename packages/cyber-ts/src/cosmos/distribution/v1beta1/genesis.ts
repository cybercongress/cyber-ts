import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionAmino, ValidatorAccumulatedCommissionSDKType, ValidatorHistoricalRewards, ValidatorHistoricalRewardsAmino, ValidatorHistoricalRewardsSDKType, ValidatorCurrentRewards, ValidatorCurrentRewardsAmino, ValidatorCurrentRewardsSDKType, DelegatorStartingInfo, DelegatorStartingInfoAmino, DelegatorStartingInfoSDKType, ValidatorSlashEvent, ValidatorSlashEventAmino, ValidatorSlashEventSDKType, Params, ParamsAmino, ParamsSDKType, FeePool, FeePoolAmino, FeePoolSDKType } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdraw_address: string;
}
export interface DelegatorWithdrawInfoProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo";
  value: Uint8Array;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address?: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdraw_address?: string;
}
export interface DelegatorWithdrawInfoAminoMsg {
  type: "cosmos-sdk/DelegatorWithdrawInfo";
  value: DelegatorWithdrawInfoAmino;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstanding_rewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord";
  value: Uint8Array;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address?: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstanding_rewards?: DecCoinAmino[];
}
export interface ValidatorOutstandingRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorOutstandingRewardsRecord";
  value: ValidatorOutstandingRewardsRecordAmino;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordSDKType {
  validator_address: string;
  outstanding_rewards: DecCoinSDKType[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated: ValidatorAccumulatedCommission;
}
export interface ValidatorAccumulatedCommissionRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord";
  value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address?: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated?: ValidatorAccumulatedCommissionAmino;
}
export interface ValidatorAccumulatedCommissionRecordAminoMsg {
  type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord";
  value: ValidatorAccumulatedCommissionRecordAmino;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordSDKType {
  validator_address: string;
  accumulated: ValidatorAccumulatedCommissionSDKType;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** period defines the period the historical rewards apply to. */
  period: bigint;
  /** rewards defines the historical rewards of a validator. */
  rewards: ValidatorHistoricalRewards;
}
export interface ValidatorHistoricalRewardsRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord";
  value: Uint8Array;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address?: string;
  /** period defines the period the historical rewards apply to. */
  period?: string;
  /** rewards defines the historical rewards of a validator. */
  rewards?: ValidatorHistoricalRewardsAmino;
}
export interface ValidatorHistoricalRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorHistoricalRewardsRecord";
  value: ValidatorHistoricalRewardsRecordAmino;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordSDKType {
  validator_address: string;
  period: bigint;
  rewards: ValidatorHistoricalRewardsSDKType;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** rewards defines the current rewards of a validator. */
  rewards: ValidatorCurrentRewards;
}
export interface ValidatorCurrentRewardsRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord";
  value: Uint8Array;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address?: string;
  /** rewards defines the current rewards of a validator. */
  rewards?: ValidatorCurrentRewardsAmino;
}
export interface ValidatorCurrentRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorCurrentRewardsRecord";
  value: ValidatorCurrentRewardsRecordAmino;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordSDKType {
  validator_address: string;
  rewards: ValidatorCurrentRewardsSDKType;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** starting_info defines the starting info of a delegator. */
  starting_info: DelegatorStartingInfo;
}
export interface DelegatorStartingInfoRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord";
  value: Uint8Array;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address?: string;
  /** validator_address is the address of the validator. */
  validator_address?: string;
  /** starting_info defines the starting info of a delegator. */
  starting_info?: DelegatorStartingInfoAmino;
}
export interface DelegatorStartingInfoRecordAminoMsg {
  type: "cosmos-sdk/DelegatorStartingInfoRecord";
  value: DelegatorStartingInfoRecordAmino;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordSDKType {
  delegator_address: string;
  validator_address: string;
  starting_info: DelegatorStartingInfoSDKType;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** height defines the block height at which the slash event occured. */
  height: bigint;
  /** period is the period of the slash event. */
  period: bigint;
  /** validator_slash_event describes the slash event. */
  validator_slash_event: ValidatorSlashEvent;
}
export interface ValidatorSlashEventRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord";
  value: Uint8Array;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address?: string;
  /** height defines the block height at which the slash event occured. */
  height?: string;
  /** period is the period of the slash event. */
  period?: string;
  /** validator_slash_event describes the slash event. */
  validator_slash_event?: ValidatorSlashEventAmino;
}
export interface ValidatorSlashEventRecordAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEventRecord";
  value: ValidatorSlashEventRecordAmino;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordSDKType {
  validator_address: string;
  height: bigint;
  period: bigint;
  validator_slash_event: ValidatorSlashEventSDKType;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** fee_pool defines the fee pool at genesis. */
  fee_pool: FeePool;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegator_withdraw_infos: DelegatorWithdrawInfo[];
  /** fee_pool defines the previous proposer at genesis. */
  previous_proposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstanding_rewards: ValidatorOutstandingRewardsRecord[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecord[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validator_historical_rewards: ValidatorHistoricalRewardsRecord[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validator_current_rewards: ValidatorCurrentRewardsRecord[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegator_starting_infos: DelegatorStartingInfoRecord[];
  /** fee_pool defines the validator slash events at genesis. */
  validator_slash_events: ValidatorSlashEventRecord[];
}
export interface GenesisStateProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  /** fee_pool defines the fee pool at genesis. */
  fee_pool?: FeePoolAmino;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegator_withdraw_infos?: DelegatorWithdrawInfoAmino[];
  /** fee_pool defines the previous proposer at genesis. */
  previous_proposer?: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstanding_rewards?: ValidatorOutstandingRewardsRecordAmino[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validator_accumulated_commissions?: ValidatorAccumulatedCommissionRecordAmino[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validator_historical_rewards?: ValidatorHistoricalRewardsRecordAmino[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validator_current_rewards?: ValidatorCurrentRewardsRecordAmino[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegator_starting_infos?: DelegatorStartingInfoRecordAmino[];
  /** fee_pool defines the validator slash events at genesis. */
  validator_slash_events?: ValidatorSlashEventRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_pool: FeePoolSDKType;
  delegator_withdraw_infos: DelegatorWithdrawInfoSDKType[];
  previous_proposer: string;
  outstanding_rewards: ValidatorOutstandingRewardsRecordSDKType[];
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordSDKType[];
  validator_historical_rewards: ValidatorHistoricalRewardsRecordSDKType[];
  validator_current_rewards: ValidatorCurrentRewardsRecordSDKType[];
  delegator_starting_infos: DelegatorStartingInfoRecordSDKType[];
  validator_slash_events: ValidatorSlashEventRecordSDKType[];
}
function createBaseDelegatorWithdrawInfo(): DelegatorWithdrawInfo {
  return {
    delegator_address: "",
    withdraw_address: ""
  };
}
export const DelegatorWithdrawInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
  aminoType: "cosmos-sdk/DelegatorWithdrawInfo",
  is(o: any): o is DelegatorWithdrawInfo {
    return o && (o.$typeUrl === DelegatorWithdrawInfo.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
  },
  isSDK(o: any): o is DelegatorWithdrawInfoSDKType {
    return o && (o.$typeUrl === DelegatorWithdrawInfo.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
  },
  isAmino(o: any): o is DelegatorWithdrawInfoAmino {
    return o && (o.$typeUrl === DelegatorWithdrawInfo.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
  },
  encode(message: DelegatorWithdrawInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.withdraw_address !== "") {
      writer.uint32(18).string(message.withdraw_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorWithdrawInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.withdraw_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorWithdrawInfo {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : ""
    };
  },
  toJSON(message: DelegatorWithdrawInfo): JsonSafe<DelegatorWithdrawInfo> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    message.delegator_address = object.delegator_address ?? "";
    message.withdraw_address = object.withdraw_address ?? "";
    return message;
  },
  fromAmino(object: DelegatorWithdrawInfoAmino): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdraw_address = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.withdraw_address = message.withdraw_address === "" ? undefined : message.withdraw_address;
    return obj;
  },
  fromAminoMsg(object: DelegatorWithdrawInfoAminoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorWithdrawInfoProtoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.decode(message.value);
  },
  toProto(message: DelegatorWithdrawInfo): Uint8Array {
    return DelegatorWithdrawInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegatorWithdrawInfo.typeUrl, DelegatorWithdrawInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegatorWithdrawInfo.aminoType, DelegatorWithdrawInfo.typeUrl);
function createBaseValidatorOutstandingRewardsRecord(): ValidatorOutstandingRewardsRecord {
  return {
    validator_address: "",
    outstanding_rewards: []
  };
}
export const ValidatorOutstandingRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
  is(o: any): o is ValidatorOutstandingRewardsRecord {
    return o && (o.$typeUrl === ValidatorOutstandingRewardsRecord.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || DecCoin.is(o.outstanding_rewards[0])));
  },
  isSDK(o: any): o is ValidatorOutstandingRewardsRecordSDKType {
    return o && (o.$typeUrl === ValidatorOutstandingRewardsRecord.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || DecCoin.isSDK(o.outstanding_rewards[0])));
  },
  isAmino(o: any): o is ValidatorOutstandingRewardsRecordAmino {
    return o && (o.$typeUrl === ValidatorOutstandingRewardsRecord.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || DecCoin.isAmino(o.outstanding_rewards[0])));
  },
  encode(message: ValidatorOutstandingRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    for (const v of message.outstanding_rewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.outstanding_rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorOutstandingRewardsRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorOutstandingRewardsRecord): JsonSafe<ValidatorOutstandingRewardsRecord> {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    if (message.outstanding_rewards) {
      obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorOutstandingRewardsRecord>): ValidatorOutstandingRewardsRecord {
    const message = createBaseValidatorOutstandingRewardsRecord();
    message.validator_address = object.validator_address ?? "";
    message.outstanding_rewards = object.outstanding_rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorOutstandingRewardsRecordAmino): ValidatorOutstandingRewardsRecord {
    const message = createBaseValidatorOutstandingRewardsRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    message.outstanding_rewards = object.outstanding_rewards?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    if (message.outstanding_rewards) {
      obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = message.outstanding_rewards;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorOutstandingRewardsRecordAminoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorOutstandingRewardsRecordProtoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorOutstandingRewardsRecord): Uint8Array {
    return ValidatorOutstandingRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorOutstandingRewardsRecord.typeUrl, ValidatorOutstandingRewardsRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorOutstandingRewardsRecord.aminoType, ValidatorOutstandingRewardsRecord.typeUrl);
function createBaseValidatorAccumulatedCommissionRecord(): ValidatorAccumulatedCommissionRecord {
  return {
    validator_address: "",
    accumulated: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const ValidatorAccumulatedCommissionRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
  aminoType: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
  is(o: any): o is ValidatorAccumulatedCommissionRecord {
    return o && (o.$typeUrl === ValidatorAccumulatedCommissionRecord.typeUrl || typeof o.validator_address === "string" && ValidatorAccumulatedCommission.is(o.accumulated));
  },
  isSDK(o: any): o is ValidatorAccumulatedCommissionRecordSDKType {
    return o && (o.$typeUrl === ValidatorAccumulatedCommissionRecord.typeUrl || typeof o.validator_address === "string" && ValidatorAccumulatedCommission.isSDK(o.accumulated));
  },
  isAmino(o: any): o is ValidatorAccumulatedCommissionRecordAmino {
    return o && (o.$typeUrl === ValidatorAccumulatedCommissionRecord.typeUrl || typeof o.validator_address === "string" && ValidatorAccumulatedCommission.isAmino(o.accumulated));
  },
  encode(message: ValidatorAccumulatedCommissionRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.accumulated !== undefined) {
      ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorAccumulatedCommissionRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
    };
  },
  toJSON(message: ValidatorAccumulatedCommissionRecord): JsonSafe<ValidatorAccumulatedCommissionRecord> {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.accumulated !== undefined && (obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorAccumulatedCommissionRecord>): ValidatorAccumulatedCommissionRecord {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    message.validator_address = object.validator_address ?? "";
    message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
    return message;
  },
  fromAmino(object: ValidatorAccumulatedCommissionRecordAmino): ValidatorAccumulatedCommissionRecord {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.accumulated !== undefined && object.accumulated !== null) {
      message.accumulated = ValidatorAccumulatedCommission.fromAmino(object.accumulated);
    }
    return message;
  },
  toAmino(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toAmino(message.accumulated) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAccumulatedCommissionRecordAminoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorAccumulatedCommissionRecordProtoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.decode(message.value);
  },
  toProto(message: ValidatorAccumulatedCommissionRecord): Uint8Array {
    return ValidatorAccumulatedCommissionRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorAccumulatedCommissionRecord.typeUrl, ValidatorAccumulatedCommissionRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorAccumulatedCommissionRecord.aminoType, ValidatorAccumulatedCommissionRecord.typeUrl);
function createBaseValidatorHistoricalRewardsRecord(): ValidatorHistoricalRewardsRecord {
  return {
    validator_address: "",
    period: BigInt(0),
    rewards: ValidatorHistoricalRewards.fromPartial({})
  };
}
export const ValidatorHistoricalRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
  is(o: any): o is ValidatorHistoricalRewardsRecord {
    return o && (o.$typeUrl === ValidatorHistoricalRewardsRecord.typeUrl || typeof o.validator_address === "string" && typeof o.period === "bigint" && ValidatorHistoricalRewards.is(o.rewards));
  },
  isSDK(o: any): o is ValidatorHistoricalRewardsRecordSDKType {
    return o && (o.$typeUrl === ValidatorHistoricalRewardsRecord.typeUrl || typeof o.validator_address === "string" && typeof o.period === "bigint" && ValidatorHistoricalRewards.isSDK(o.rewards));
  },
  isAmino(o: any): o is ValidatorHistoricalRewardsRecordAmino {
    return o && (o.$typeUrl === ValidatorHistoricalRewardsRecord.typeUrl || typeof o.validator_address === "string" && typeof o.period === "bigint" && ValidatorHistoricalRewards.isAmino(o.rewards));
  },
  encode(message: ValidatorHistoricalRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorHistoricalRewardsRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
    };
  },
  toJSON(message: ValidatorHistoricalRewardsRecord): JsonSafe<ValidatorHistoricalRewardsRecord> {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorHistoricalRewardsRecord>): ValidatorHistoricalRewardsRecord {
    const message = createBaseValidatorHistoricalRewardsRecord();
    message.validator_address = object.validator_address ?? "";
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: ValidatorHistoricalRewardsRecordAmino): ValidatorHistoricalRewardsRecord {
    const message = createBaseValidatorHistoricalRewardsRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorHistoricalRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.period = message.period !== BigInt(0) ? message.period.toString() : undefined;
    obj.rewards = message.rewards ? ValidatorHistoricalRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorHistoricalRewardsRecordAminoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorHistoricalRewardsRecordProtoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorHistoricalRewardsRecord): Uint8Array {
    return ValidatorHistoricalRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorHistoricalRewardsRecord.typeUrl, ValidatorHistoricalRewardsRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorHistoricalRewardsRecord.aminoType, ValidatorHistoricalRewardsRecord.typeUrl);
function createBaseValidatorCurrentRewardsRecord(): ValidatorCurrentRewardsRecord {
  return {
    validator_address: "",
    rewards: ValidatorCurrentRewards.fromPartial({})
  };
}
export const ValidatorCurrentRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorCurrentRewardsRecord",
  is(o: any): o is ValidatorCurrentRewardsRecord {
    return o && (o.$typeUrl === ValidatorCurrentRewardsRecord.typeUrl || typeof o.validator_address === "string" && ValidatorCurrentRewards.is(o.rewards));
  },
  isSDK(o: any): o is ValidatorCurrentRewardsRecordSDKType {
    return o && (o.$typeUrl === ValidatorCurrentRewardsRecord.typeUrl || typeof o.validator_address === "string" && ValidatorCurrentRewards.isSDK(o.rewards));
  },
  isAmino(o: any): o is ValidatorCurrentRewardsRecordAmino {
    return o && (o.$typeUrl === ValidatorCurrentRewardsRecord.typeUrl || typeof o.validator_address === "string" && ValidatorCurrentRewards.isAmino(o.rewards));
  },
  encode(message: ValidatorCurrentRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.rewards !== undefined) {
      ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorCurrentRewardsRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
    };
  },
  toJSON(message: ValidatorCurrentRewardsRecord): JsonSafe<ValidatorCurrentRewardsRecord> {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorCurrentRewardsRecord>): ValidatorCurrentRewardsRecord {
    const message = createBaseValidatorCurrentRewardsRecord();
    message.validator_address = object.validator_address ?? "";
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: ValidatorCurrentRewardsRecordAmino): ValidatorCurrentRewardsRecord {
    const message = createBaseValidatorCurrentRewardsRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorCurrentRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.rewards = message.rewards ? ValidatorCurrentRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorCurrentRewardsRecordAminoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorCurrentRewardsRecordProtoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorCurrentRewardsRecord): Uint8Array {
    return ValidatorCurrentRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorCurrentRewardsRecord.typeUrl, ValidatorCurrentRewardsRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorCurrentRewardsRecord.aminoType, ValidatorCurrentRewardsRecord.typeUrl);
function createBaseDelegatorStartingInfoRecord(): DelegatorStartingInfoRecord {
  return {
    delegator_address: "",
    validator_address: "",
    starting_info: DelegatorStartingInfo.fromPartial({})
  };
}
export const DelegatorStartingInfoRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
  aminoType: "cosmos-sdk/DelegatorStartingInfoRecord",
  is(o: any): o is DelegatorStartingInfoRecord {
    return o && (o.$typeUrl === DelegatorStartingInfoRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && DelegatorStartingInfo.is(o.starting_info));
  },
  isSDK(o: any): o is DelegatorStartingInfoRecordSDKType {
    return o && (o.$typeUrl === DelegatorStartingInfoRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && DelegatorStartingInfo.isSDK(o.starting_info));
  },
  isAmino(o: any): o is DelegatorStartingInfoRecordAmino {
    return o && (o.$typeUrl === DelegatorStartingInfoRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && DelegatorStartingInfo.isAmino(o.starting_info));
  },
  encode(message: DelegatorStartingInfoRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.starting_info !== undefined) {
      DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfoRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
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
          message.starting_info = DelegatorStartingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorStartingInfoRecord {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      starting_info: isSet(object.starting_info) ? DelegatorStartingInfo.fromJSON(object.starting_info) : undefined
    };
  },
  toJSON(message: DelegatorStartingInfoRecord): JsonSafe<DelegatorStartingInfoRecord> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.starting_info !== undefined && (obj.starting_info = message.starting_info ? DelegatorStartingInfo.toJSON(message.starting_info) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.starting_info = object.starting_info !== undefined && object.starting_info !== null ? DelegatorStartingInfo.fromPartial(object.starting_info) : undefined;
    return message;
  },
  fromAmino(object: DelegatorStartingInfoRecordAmino): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.starting_info !== undefined && object.starting_info !== null) {
      message.starting_info = DelegatorStartingInfo.fromAmino(object.starting_info);
    }
    return message;
  },
  toAmino(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.starting_info = message.starting_info ? DelegatorStartingInfo.toAmino(message.starting_info) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoRecordAminoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorStartingInfoRecordProtoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.decode(message.value);
  },
  toProto(message: DelegatorStartingInfoRecord): Uint8Array {
    return DelegatorStartingInfoRecord.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegatorStartingInfoRecord.typeUrl, DelegatorStartingInfoRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegatorStartingInfoRecord.aminoType, DelegatorStartingInfoRecord.typeUrl);
function createBaseValidatorSlashEventRecord(): ValidatorSlashEventRecord {
  return {
    validator_address: "",
    height: BigInt(0),
    period: BigInt(0),
    validator_slash_event: ValidatorSlashEvent.fromPartial({})
  };
}
export const ValidatorSlashEventRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
  aminoType: "cosmos-sdk/ValidatorSlashEventRecord",
  is(o: any): o is ValidatorSlashEventRecord {
    return o && (o.$typeUrl === ValidatorSlashEventRecord.typeUrl || typeof o.validator_address === "string" && typeof o.height === "bigint" && typeof o.period === "bigint" && ValidatorSlashEvent.is(o.validator_slash_event));
  },
  isSDK(o: any): o is ValidatorSlashEventRecordSDKType {
    return o && (o.$typeUrl === ValidatorSlashEventRecord.typeUrl || typeof o.validator_address === "string" && typeof o.height === "bigint" && typeof o.period === "bigint" && ValidatorSlashEvent.isSDK(o.validator_slash_event));
  },
  isAmino(o: any): o is ValidatorSlashEventRecordAmino {
    return o && (o.$typeUrl === ValidatorSlashEventRecord.typeUrl || typeof o.validator_address === "string" && typeof o.height === "bigint" && typeof o.period === "bigint" && ValidatorSlashEvent.isAmino(o.validator_slash_event));
  },
  encode(message: ValidatorSlashEventRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validator_slash_event !== undefined) {
      ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashEventRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.period = reader.uint64();
          break;
        case 4:
          message.validator_slash_event = ValidatorSlashEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEventRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      validator_slash_event: isSet(object.validator_slash_event) ? ValidatorSlashEvent.fromJSON(object.validator_slash_event) : undefined
    };
  },
  toJSON(message: ValidatorSlashEventRecord): JsonSafe<ValidatorSlashEventRecord> {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    message.validator_slash_event !== undefined && (obj.validator_slash_event = message.validator_slash_event ? ValidatorSlashEvent.toJSON(message.validator_slash_event) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSlashEventRecord>): ValidatorSlashEventRecord {
    const message = createBaseValidatorSlashEventRecord();
    message.validator_address = object.validator_address ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.validator_slash_event = object.validator_slash_event !== undefined && object.validator_slash_event !== null ? ValidatorSlashEvent.fromPartial(object.validator_slash_event) : undefined;
    return message;
  },
  fromAmino(object: ValidatorSlashEventRecordAmino): ValidatorSlashEventRecord {
    const message = createBaseValidatorSlashEventRecord();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.validator_slash_event !== undefined && object.validator_slash_event !== null) {
      message.validator_slash_event = ValidatorSlashEvent.fromAmino(object.validator_slash_event);
    }
    return message;
  },
  toAmino(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.period = message.period !== BigInt(0) ? message.period.toString() : undefined;
    obj.validator_slash_event = message.validator_slash_event ? ValidatorSlashEvent.toAmino(message.validator_slash_event) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventRecordAminoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventRecordProtoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.decode(message.value);
  },
  toProto(message: ValidatorSlashEventRecord): Uint8Array {
    return ValidatorSlashEventRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorSlashEventRecord.typeUrl, ValidatorSlashEventRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorSlashEventRecord.aminoType, ValidatorSlashEventRecord.typeUrl);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    fee_pool: FeePool.fromPartial({}),
    delegator_withdraw_infos: [],
    previous_proposer: "",
    outstanding_rewards: [],
    validator_accumulated_commissions: [],
    validator_historical_rewards: [],
    validator_current_rewards: [],
    delegator_starting_infos: [],
    validator_slash_events: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && FeePool.is(o.fee_pool) && Array.isArray(o.delegator_withdraw_infos) && (!o.delegator_withdraw_infos.length || DelegatorWithdrawInfo.is(o.delegator_withdraw_infos[0])) && typeof o.previous_proposer === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || ValidatorOutstandingRewardsRecord.is(o.outstanding_rewards[0])) && Array.isArray(o.validator_accumulated_commissions) && (!o.validator_accumulated_commissions.length || ValidatorAccumulatedCommissionRecord.is(o.validator_accumulated_commissions[0])) && Array.isArray(o.validator_historical_rewards) && (!o.validator_historical_rewards.length || ValidatorHistoricalRewardsRecord.is(o.validator_historical_rewards[0])) && Array.isArray(o.validator_current_rewards) && (!o.validator_current_rewards.length || ValidatorCurrentRewardsRecord.is(o.validator_current_rewards[0])) && Array.isArray(o.delegator_starting_infos) && (!o.delegator_starting_infos.length || DelegatorStartingInfoRecord.is(o.delegator_starting_infos[0])) && Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || ValidatorSlashEventRecord.is(o.validator_slash_events[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && FeePool.isSDK(o.fee_pool) && Array.isArray(o.delegator_withdraw_infos) && (!o.delegator_withdraw_infos.length || DelegatorWithdrawInfo.isSDK(o.delegator_withdraw_infos[0])) && typeof o.previous_proposer === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || ValidatorOutstandingRewardsRecord.isSDK(o.outstanding_rewards[0])) && Array.isArray(o.validator_accumulated_commissions) && (!o.validator_accumulated_commissions.length || ValidatorAccumulatedCommissionRecord.isSDK(o.validator_accumulated_commissions[0])) && Array.isArray(o.validator_historical_rewards) && (!o.validator_historical_rewards.length || ValidatorHistoricalRewardsRecord.isSDK(o.validator_historical_rewards[0])) && Array.isArray(o.validator_current_rewards) && (!o.validator_current_rewards.length || ValidatorCurrentRewardsRecord.isSDK(o.validator_current_rewards[0])) && Array.isArray(o.delegator_starting_infos) && (!o.delegator_starting_infos.length || DelegatorStartingInfoRecord.isSDK(o.delegator_starting_infos[0])) && Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || ValidatorSlashEventRecord.isSDK(o.validator_slash_events[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && FeePool.isAmino(o.fee_pool) && Array.isArray(o.delegator_withdraw_infos) && (!o.delegator_withdraw_infos.length || DelegatorWithdrawInfo.isAmino(o.delegator_withdraw_infos[0])) && typeof o.previous_proposer === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || ValidatorOutstandingRewardsRecord.isAmino(o.outstanding_rewards[0])) && Array.isArray(o.validator_accumulated_commissions) && (!o.validator_accumulated_commissions.length || ValidatorAccumulatedCommissionRecord.isAmino(o.validator_accumulated_commissions[0])) && Array.isArray(o.validator_historical_rewards) && (!o.validator_historical_rewards.length || ValidatorHistoricalRewardsRecord.isAmino(o.validator_historical_rewards[0])) && Array.isArray(o.validator_current_rewards) && (!o.validator_current_rewards.length || ValidatorCurrentRewardsRecord.isAmino(o.validator_current_rewards[0])) && Array.isArray(o.delegator_starting_infos) && (!o.delegator_starting_infos.length || DelegatorStartingInfoRecord.isAmino(o.delegator_starting_infos[0])) && Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || ValidatorSlashEventRecord.isAmino(o.validator_slash_events[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee_pool !== undefined) {
      FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegator_withdraw_infos) {
      DelegatorWithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previous_proposer !== "") {
      writer.uint32(34).string(message.previous_proposer);
    }
    for (const v of message.outstanding_rewards) {
      ValidatorOutstandingRewardsRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validator_accumulated_commissions) {
      ValidatorAccumulatedCommissionRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validator_historical_rewards) {
      ValidatorHistoricalRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.validator_current_rewards) {
      ValidatorCurrentRewardsRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegator_starting_infos) {
      DelegatorStartingInfoRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validator_slash_events) {
      ValidatorSlashEventRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee_pool = FeePool.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegator_withdraw_infos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previous_proposer = reader.string();
          break;
        case 5:
          message.outstanding_rewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validator_accumulated_commissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.validator_historical_rewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validator_current_rewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.delegator_starting_infos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validator_slash_events.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      fee_pool: isSet(object.fee_pool) ? FeePool.fromJSON(object.fee_pool) : undefined,
      delegator_withdraw_infos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromJSON(e)) : [],
      previous_proposer: isSet(object.previous_proposer) ? String(object.previous_proposer) : "",
      outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromJSON(e)) : [],
      validator_accumulated_commissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromJSON(e)) : [],
      validator_historical_rewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromJSON(e)) : [],
      validator_current_rewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromJSON(e)) : [],
      delegator_starting_infos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromJSON(e)) : [],
      validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.fee_pool !== undefined && (obj.fee_pool = message.fee_pool ? FeePool.toJSON(message.fee_pool) : undefined);
    if (message.delegator_withdraw_infos) {
      obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map(e => e ? DelegatorWithdrawInfo.toJSON(e) : undefined);
    } else {
      obj.delegator_withdraw_infos = [];
    }
    message.previous_proposer !== undefined && (obj.previous_proposer = message.previous_proposer);
    if (message.outstanding_rewards) {
      obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    if (message.validator_accumulated_commissions) {
      obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
    } else {
      obj.validator_accumulated_commissions = [];
    }
    if (message.validator_historical_rewards) {
      obj.validator_historical_rewards = message.validator_historical_rewards.map(e => e ? ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validator_historical_rewards = [];
    }
    if (message.validator_current_rewards) {
      obj.validator_current_rewards = message.validator_current_rewards.map(e => e ? ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validator_current_rewards = [];
    }
    if (message.delegator_starting_infos) {
      obj.delegator_starting_infos = message.delegator_starting_infos.map(e => e ? DelegatorStartingInfoRecord.toJSON(e) : undefined);
    } else {
      obj.delegator_starting_infos = [];
    }
    if (message.validator_slash_events) {
      obj.validator_slash_events = message.validator_slash_events.map(e => e ? ValidatorSlashEventRecord.toJSON(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.fee_pool = object.fee_pool !== undefined && object.fee_pool !== null ? FeePool.fromPartial(object.fee_pool) : undefined;
    message.delegator_withdraw_infos = object.delegator_withdraw_infos?.map(e => DelegatorWithdrawInfo.fromPartial(e)) || [];
    message.previous_proposer = object.previous_proposer ?? "";
    message.outstanding_rewards = object.outstanding_rewards?.map(e => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
    message.validator_accumulated_commissions = object.validator_accumulated_commissions?.map(e => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
    message.validator_historical_rewards = object.validator_historical_rewards?.map(e => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
    message.validator_current_rewards = object.validator_current_rewards?.map(e => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
    message.delegator_starting_infos = object.delegator_starting_infos?.map(e => DelegatorStartingInfoRecord.fromPartial(e)) || [];
    message.validator_slash_events = object.validator_slash_events?.map(e => ValidatorSlashEventRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.fee_pool !== undefined && object.fee_pool !== null) {
      message.fee_pool = FeePool.fromAmino(object.fee_pool);
    }
    message.delegator_withdraw_infos = object.delegator_withdraw_infos?.map(e => DelegatorWithdrawInfo.fromAmino(e)) || [];
    if (object.previous_proposer !== undefined && object.previous_proposer !== null) {
      message.previous_proposer = object.previous_proposer;
    }
    message.outstanding_rewards = object.outstanding_rewards?.map(e => ValidatorOutstandingRewardsRecord.fromAmino(e)) || [];
    message.validator_accumulated_commissions = object.validator_accumulated_commissions?.map(e => ValidatorAccumulatedCommissionRecord.fromAmino(e)) || [];
    message.validator_historical_rewards = object.validator_historical_rewards?.map(e => ValidatorHistoricalRewardsRecord.fromAmino(e)) || [];
    message.validator_current_rewards = object.validator_current_rewards?.map(e => ValidatorCurrentRewardsRecord.fromAmino(e)) || [];
    message.delegator_starting_infos = object.delegator_starting_infos?.map(e => DelegatorStartingInfoRecord.fromAmino(e)) || [];
    message.validator_slash_events = object.validator_slash_events?.map(e => ValidatorSlashEventRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.fee_pool = message.fee_pool ? FeePool.toAmino(message.fee_pool) : undefined;
    if (message.delegator_withdraw_infos) {
      obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map(e => e ? DelegatorWithdrawInfo.toAmino(e) : undefined);
    } else {
      obj.delegator_withdraw_infos = message.delegator_withdraw_infos;
    }
    obj.previous_proposer = message.previous_proposer === "" ? undefined : message.previous_proposer;
    if (message.outstanding_rewards) {
      obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? ValidatorOutstandingRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = message.outstanding_rewards;
    }
    if (message.validator_accumulated_commissions) {
      obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toAmino(e) : undefined);
    } else {
      obj.validator_accumulated_commissions = message.validator_accumulated_commissions;
    }
    if (message.validator_historical_rewards) {
      obj.validator_historical_rewards = message.validator_historical_rewards.map(e => e ? ValidatorHistoricalRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.validator_historical_rewards = message.validator_historical_rewards;
    }
    if (message.validator_current_rewards) {
      obj.validator_current_rewards = message.validator_current_rewards.map(e => e ? ValidatorCurrentRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.validator_current_rewards = message.validator_current_rewards;
    }
    if (message.delegator_starting_infos) {
      obj.delegator_starting_infos = message.delegator_starting_infos.map(e => e ? DelegatorStartingInfoRecord.toAmino(e) : undefined);
    } else {
      obj.delegator_starting_infos = message.delegator_starting_infos;
    }
    if (message.validator_slash_events) {
      obj.validator_slash_events = message.validator_slash_events.map(e => e ? ValidatorSlashEventRecord.toAmino(e) : undefined);
    } else {
      obj.validator_slash_events = message.validator_slash_events;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);