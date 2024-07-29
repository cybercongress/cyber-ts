import { Pool, PoolAmino, PoolSDKType, PoolMetadata, PoolMetadataAmino, PoolMetadataSDKType, PoolBatch, PoolBatchAmino, PoolBatchSDKType, DepositMsgState, DepositMsgStateAmino, DepositMsgStateSDKType, WithdrawMsgState, WithdrawMsgStateAmino, WithdrawMsgStateSDKType, SwapMsgState, SwapMsgStateAmino, SwapMsgStateSDKType, Params, ParamsAmino, ParamsSDKType } from "./liquidity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * records the state of each pool after genesis export or import, used to check
 * variables
 */
export interface PoolRecord {
  pool: Pool;
  pool_metadata: PoolMetadata;
  pool_batch: PoolBatch;
  deposit_msg_states: DepositMsgState[];
  withdraw_msg_states: WithdrawMsgState[];
  swap_msg_states: SwapMsgState[];
}
export interface PoolRecordProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.PoolRecord";
  value: Uint8Array;
}
/**
 * records the state of each pool after genesis export or import, used to check
 * variables
 */
export interface PoolRecordAmino {
  pool?: PoolAmino;
  pool_metadata?: PoolMetadataAmino;
  pool_batch?: PoolBatchAmino;
  deposit_msg_states?: DepositMsgStateAmino[];
  withdraw_msg_states?: WithdrawMsgStateAmino[];
  swap_msg_states?: SwapMsgStateAmino[];
}
export interface PoolRecordAminoMsg {
  type: "/cyber.liquidity.v1beta1.PoolRecord";
  value: PoolRecordAmino;
}
/**
 * records the state of each pool after genesis export or import, used to check
 * variables
 */
export interface PoolRecordSDKType {
  pool: PoolSDKType;
  pool_metadata: PoolMetadataSDKType;
  pool_batch: PoolBatchSDKType;
  deposit_msg_states: DepositMsgStateSDKType[];
  withdraw_msg_states: WithdrawMsgStateSDKType[];
  swap_msg_states: SwapMsgStateSDKType[];
}
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters for the liquidity module. */
  params: Params;
  pool_records: PoolRecord[];
}
export interface GenesisStateProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters for the liquidity module. */
  params?: ParamsAmino;
  pool_records?: PoolRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/cyber.liquidity.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_records: PoolRecordSDKType[];
}
function createBasePoolRecord(): PoolRecord {
  return {
    pool: Pool.fromPartial({}),
    pool_metadata: PoolMetadata.fromPartial({}),
    pool_batch: PoolBatch.fromPartial({}),
    deposit_msg_states: [],
    withdraw_msg_states: [],
    swap_msg_states: []
  };
}
export const PoolRecord = {
  typeUrl: "/cyber.liquidity.v1beta1.PoolRecord",
  is(o: any): o is PoolRecord {
    return o && (o.$typeUrl === PoolRecord.typeUrl || Pool.is(o.pool) && PoolMetadata.is(o.pool_metadata) && PoolBatch.is(o.pool_batch) && Array.isArray(o.deposit_msg_states) && (!o.deposit_msg_states.length || DepositMsgState.is(o.deposit_msg_states[0])) && Array.isArray(o.withdraw_msg_states) && (!o.withdraw_msg_states.length || WithdrawMsgState.is(o.withdraw_msg_states[0])) && Array.isArray(o.swap_msg_states) && (!o.swap_msg_states.length || SwapMsgState.is(o.swap_msg_states[0])));
  },
  isSDK(o: any): o is PoolRecordSDKType {
    return o && (o.$typeUrl === PoolRecord.typeUrl || Pool.isSDK(o.pool) && PoolMetadata.isSDK(o.pool_metadata) && PoolBatch.isSDK(o.pool_batch) && Array.isArray(o.deposit_msg_states) && (!o.deposit_msg_states.length || DepositMsgState.isSDK(o.deposit_msg_states[0])) && Array.isArray(o.withdraw_msg_states) && (!o.withdraw_msg_states.length || WithdrawMsgState.isSDK(o.withdraw_msg_states[0])) && Array.isArray(o.swap_msg_states) && (!o.swap_msg_states.length || SwapMsgState.isSDK(o.swap_msg_states[0])));
  },
  isAmino(o: any): o is PoolRecordAmino {
    return o && (o.$typeUrl === PoolRecord.typeUrl || Pool.isAmino(o.pool) && PoolMetadata.isAmino(o.pool_metadata) && PoolBatch.isAmino(o.pool_batch) && Array.isArray(o.deposit_msg_states) && (!o.deposit_msg_states.length || DepositMsgState.isAmino(o.deposit_msg_states[0])) && Array.isArray(o.withdraw_msg_states) && (!o.withdraw_msg_states.length || WithdrawMsgState.isAmino(o.withdraw_msg_states[0])) && Array.isArray(o.swap_msg_states) && (!o.swap_msg_states.length || SwapMsgState.isAmino(o.swap_msg_states[0])));
  },
  encode(message: PoolRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.pool_metadata !== undefined) {
      PoolMetadata.encode(message.pool_metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.pool_batch !== undefined) {
      PoolBatch.encode(message.pool_batch, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.deposit_msg_states) {
      DepositMsgState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.withdraw_msg_states) {
      WithdrawMsgState.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.swap_msg_states) {
      SwapMsgState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 2:
          message.pool_metadata = PoolMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.pool_batch = PoolBatch.decode(reader, reader.uint32());
          break;
        case 4:
          message.deposit_msg_states.push(DepositMsgState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.withdraw_msg_states.push(WithdrawMsgState.decode(reader, reader.uint32()));
          break;
        case 6:
          message.swap_msg_states.push(SwapMsgState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolRecord {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      pool_metadata: isSet(object.pool_metadata) ? PoolMetadata.fromJSON(object.pool_metadata) : undefined,
      pool_batch: isSet(object.pool_batch) ? PoolBatch.fromJSON(object.pool_batch) : undefined,
      deposit_msg_states: Array.isArray(object?.deposit_msg_states) ? object.deposit_msg_states.map((e: any) => DepositMsgState.fromJSON(e)) : [],
      withdraw_msg_states: Array.isArray(object?.withdraw_msg_states) ? object.withdraw_msg_states.map((e: any) => WithdrawMsgState.fromJSON(e)) : [],
      swap_msg_states: Array.isArray(object?.swap_msg_states) ? object.swap_msg_states.map((e: any) => SwapMsgState.fromJSON(e)) : []
    };
  },
  toJSON(message: PoolRecord): JsonSafe<PoolRecord> {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.pool_metadata !== undefined && (obj.pool_metadata = message.pool_metadata ? PoolMetadata.toJSON(message.pool_metadata) : undefined);
    message.pool_batch !== undefined && (obj.pool_batch = message.pool_batch ? PoolBatch.toJSON(message.pool_batch) : undefined);
    if (message.deposit_msg_states) {
      obj.deposit_msg_states = message.deposit_msg_states.map(e => e ? DepositMsgState.toJSON(e) : undefined);
    } else {
      obj.deposit_msg_states = [];
    }
    if (message.withdraw_msg_states) {
      obj.withdraw_msg_states = message.withdraw_msg_states.map(e => e ? WithdrawMsgState.toJSON(e) : undefined);
    } else {
      obj.withdraw_msg_states = [];
    }
    if (message.swap_msg_states) {
      obj.swap_msg_states = message.swap_msg_states.map(e => e ? SwapMsgState.toJSON(e) : undefined);
    } else {
      obj.swap_msg_states = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PoolRecord>): PoolRecord {
    const message = createBasePoolRecord();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.pool_metadata = object.pool_metadata !== undefined && object.pool_metadata !== null ? PoolMetadata.fromPartial(object.pool_metadata) : undefined;
    message.pool_batch = object.pool_batch !== undefined && object.pool_batch !== null ? PoolBatch.fromPartial(object.pool_batch) : undefined;
    message.deposit_msg_states = object.deposit_msg_states?.map(e => DepositMsgState.fromPartial(e)) || [];
    message.withdraw_msg_states = object.withdraw_msg_states?.map(e => WithdrawMsgState.fromPartial(e)) || [];
    message.swap_msg_states = object.swap_msg_states?.map(e => SwapMsgState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolRecordAmino): PoolRecord {
    const message = createBasePoolRecord();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    if (object.pool_metadata !== undefined && object.pool_metadata !== null) {
      message.pool_metadata = PoolMetadata.fromAmino(object.pool_metadata);
    }
    if (object.pool_batch !== undefined && object.pool_batch !== null) {
      message.pool_batch = PoolBatch.fromAmino(object.pool_batch);
    }
    message.deposit_msg_states = object.deposit_msg_states?.map(e => DepositMsgState.fromAmino(e)) || [];
    message.withdraw_msg_states = object.withdraw_msg_states?.map(e => WithdrawMsgState.fromAmino(e)) || [];
    message.swap_msg_states = object.swap_msg_states?.map(e => SwapMsgState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PoolRecord): PoolRecordAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    obj.pool_metadata = message.pool_metadata ? PoolMetadata.toAmino(message.pool_metadata) : undefined;
    obj.pool_batch = message.pool_batch ? PoolBatch.toAmino(message.pool_batch) : undefined;
    if (message.deposit_msg_states) {
      obj.deposit_msg_states = message.deposit_msg_states.map(e => e ? DepositMsgState.toAmino(e) : undefined);
    } else {
      obj.deposit_msg_states = message.deposit_msg_states;
    }
    if (message.withdraw_msg_states) {
      obj.withdraw_msg_states = message.withdraw_msg_states.map(e => e ? WithdrawMsgState.toAmino(e) : undefined);
    } else {
      obj.withdraw_msg_states = message.withdraw_msg_states;
    }
    if (message.swap_msg_states) {
      obj.swap_msg_states = message.swap_msg_states.map(e => e ? SwapMsgState.toAmino(e) : undefined);
    } else {
      obj.swap_msg_states = message.swap_msg_states;
    }
    return obj;
  },
  fromAminoMsg(object: PoolRecordAminoMsg): PoolRecord {
    return PoolRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolRecordProtoMsg): PoolRecord {
    return PoolRecord.decode(message.value);
  },
  toProto(message: PoolRecord): Uint8Array {
    return PoolRecord.encode(message).finish();
  },
  toProtoMsg(message: PoolRecord): PoolRecordProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.PoolRecord",
      value: PoolRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolRecord.typeUrl, PoolRecord);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    pool_records: []
  };
}
export const GenesisState = {
  typeUrl: "/cyber.liquidity.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.pool_records) && (!o.pool_records.length || PoolRecord.is(o.pool_records[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.pool_records) && (!o.pool_records.length || PoolRecord.isSDK(o.pool_records[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.pool_records) && (!o.pool_records.length || PoolRecord.isAmino(o.pool_records[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pool_records) {
      PoolRecord.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.pool_records.push(PoolRecord.decode(reader, reader.uint32()));
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
      pool_records: Array.isArray(object?.pool_records) ? object.pool_records.map((e: any) => PoolRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pool_records) {
      obj.pool_records = message.pool_records.map(e => e ? PoolRecord.toJSON(e) : undefined);
    } else {
      obj.pool_records = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.pool_records = object.pool_records?.map(e => PoolRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.pool_records = object.pool_records?.map(e => PoolRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.pool_records) {
      obj.pool_records = message.pool_records.map(e => e ? PoolRecord.toAmino(e) : undefined);
    } else {
      obj.pool_records = message.pool_records;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);