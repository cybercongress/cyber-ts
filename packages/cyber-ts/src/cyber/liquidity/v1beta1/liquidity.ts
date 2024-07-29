import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { MsgDepositWithinBatch, MsgDepositWithinBatchAmino, MsgDepositWithinBatchSDKType, MsgWithdrawWithinBatch, MsgWithdrawWithinBatchAmino, MsgWithdrawWithinBatchSDKType, MsgSwapWithinBatch, MsgSwapWithinBatchAmino, MsgSwapWithinBatchSDKType } from "./tx";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/**
 * Structure for the pool type to distinguish the characteristics of the reserve
 * pools.
 */
export interface PoolType {
  /**
   * This is the id of the pool_type that is used as pool_type_id for pool
   * creation. In this version, only pool-type-id 1 is supported.
   * {"id":1,"name":"ConstantProductLiquidityPool","min_reserve_coin_num":2,"max_reserve_coin_num":2,"description":""}
   */
  id: number;
  /** name of the pool type. */
  name: string;
  /**
   * minimum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
   * are supported.
   */
  min_reserve_coin_num: number;
  /**
   * maximum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
   * are supported.
   */
  max_reserve_coin_num: number;
  /** description of the pool type. */
  description: string;
}
export interface PoolTypeProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.PoolType";
  value: Uint8Array;
}
/**
 * Structure for the pool type to distinguish the characteristics of the reserve
 * pools.
 */
export interface PoolTypeAmino {
  /**
   * This is the id of the pool_type that is used as pool_type_id for pool
   * creation. In this version, only pool-type-id 1 is supported.
   * {"id":1,"name":"ConstantProductLiquidityPool","min_reserve_coin_num":2,"max_reserve_coin_num":2,"description":""}
   */
  id?: number;
  /** name of the pool type. */
  name?: string;
  /**
   * minimum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
   * are supported.
   */
  min_reserve_coin_num?: number;
  /**
   * maximum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
   * are supported.
   */
  max_reserve_coin_num?: number;
  /** description of the pool type. */
  description?: string;
}
export interface PoolTypeAminoMsg {
  type: "/cyber.liquidity.v1beta1.PoolType";
  value: PoolTypeAmino;
}
/**
 * Structure for the pool type to distinguish the characteristics of the reserve
 * pools.
 */
export interface PoolTypeSDKType {
  id: number;
  name: string;
  min_reserve_coin_num: number;
  max_reserve_coin_num: number;
  description: string;
}
/** Params defines the parameters for the liquidity module. */
export interface Params {
  /** list of available pool types */
  pool_types: PoolType[];
  /**
   * Minimum number of coins to be deposited to the liquidity pool on pool
   * creation.
   */
  min_init_deposit_amount: string;
  /** Initial mint amount of pool coins upon pool creation. */
  init_pool_coin_mint_amount: string;
  /**
   * Limit the size of each liquidity pool to minimize risk. In development, set
   * to 0 for no limit. In production, set a limit.
   */
  max_reserve_coin_amount: string;
  /** Fee paid to create a Liquidity Pool. Set a fee to prevent spamming. */
  pool_creation_fee: Coin[];
  /** Swap fee rate for every executed swap. */
  swap_fee_rate: string;
  /** Reserve coin withdrawal with less proportion by withdrawFeeRate. */
  withdraw_fee_rate: string;
  /** Maximum ratio of reserve coins that can be ordered at a swap order. */
  max_order_amount_ratio: string;
  /** The smallest unit batch height for every liquidity pool. */
  unit_batch_height: number;
  /**
   * Circuit breaker enables or disables transaction messages in liquidity
   * module.
   */
  circuit_breaker_enabled: boolean;
}
export interface ParamsProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the liquidity module. */
export interface ParamsAmino {
  /** list of available pool types */
  pool_types?: PoolTypeAmino[];
  /**
   * Minimum number of coins to be deposited to the liquidity pool on pool
   * creation.
   */
  min_init_deposit_amount?: string;
  /** Initial mint amount of pool coins upon pool creation. */
  init_pool_coin_mint_amount?: string;
  /**
   * Limit the size of each liquidity pool to minimize risk. In development, set
   * to 0 for no limit. In production, set a limit.
   */
  max_reserve_coin_amount?: string;
  /** Fee paid to create a Liquidity Pool. Set a fee to prevent spamming. */
  pool_creation_fee?: CoinAmino[];
  /** Swap fee rate for every executed swap. */
  swap_fee_rate?: string;
  /** Reserve coin withdrawal with less proportion by withdrawFeeRate. */
  withdraw_fee_rate?: string;
  /** Maximum ratio of reserve coins that can be ordered at a swap order. */
  max_order_amount_ratio?: string;
  /** The smallest unit batch height for every liquidity pool. */
  unit_batch_height?: number;
  /**
   * Circuit breaker enables or disables transaction messages in liquidity
   * module.
   */
  circuit_breaker_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/cyber.liquidity.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the liquidity module. */
export interface ParamsSDKType {
  pool_types: PoolTypeSDKType[];
  min_init_deposit_amount: string;
  init_pool_coin_mint_amount: string;
  max_reserve_coin_amount: string;
  pool_creation_fee: CoinSDKType[];
  swap_fee_rate: string;
  withdraw_fee_rate: string;
  max_order_amount_ratio: string;
  unit_batch_height: number;
  circuit_breaker_enabled: boolean;
}
/** Pool defines the liquidity pool that contains pool information. */
export interface Pool {
  /** id of the pool */
  id: bigint;
  /** id of the pool_type */
  type_id: number;
  /** denoms of reserve coin pair of the pool */
  reserve_coin_denoms: string[];
  /** reserve account address of the pool */
  reserve_account_address: string;
  /** denom of pool coin of the pool */
  pool_coin_denom: string;
}
export interface PoolProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.Pool";
  value: Uint8Array;
}
/** Pool defines the liquidity pool that contains pool information. */
export interface PoolAmino {
  /** id of the pool */
  id: string;
  /** id of the pool_type */
  type_id?: number;
  /** denoms of reserve coin pair of the pool */
  reserve_coin_denoms?: string[];
  /** reserve account address of the pool */
  reserve_account_address?: string;
  /** denom of pool coin of the pool */
  pool_coin_denom?: string;
}
export interface PoolAminoMsg {
  type: "/cyber.liquidity.v1beta1.Pool";
  value: PoolAmino;
}
/** Pool defines the liquidity pool that contains pool information. */
export interface PoolSDKType {
  id: bigint;
  type_id: number;
  reserve_coin_denoms: string[];
  reserve_account_address: string;
  pool_coin_denom: string;
}
/**
 * Metadata for the state of each pool for invariant checking after genesis
 * export or import.
 */
export interface PoolMetadata {
  /** id of the pool */
  pool_id: bigint;
  /** pool coin issued at the pool */
  pool_coin_total_supply: Coin;
  /** reserve coins deposited in the pool */
  reserve_coins: Coin[];
}
export interface PoolMetadataProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.PoolMetadata";
  value: Uint8Array;
}
/**
 * Metadata for the state of each pool for invariant checking after genesis
 * export or import.
 */
export interface PoolMetadataAmino {
  /** id of the pool */
  pool_id: string;
  /** pool coin issued at the pool */
  pool_coin_total_supply?: CoinAmino;
  /** reserve coins deposited in the pool */
  reserve_coins?: CoinAmino[];
}
export interface PoolMetadataAminoMsg {
  type: "/cyber.liquidity.v1beta1.PoolMetadata";
  value: PoolMetadataAmino;
}
/**
 * Metadata for the state of each pool for invariant checking after genesis
 * export or import.
 */
export interface PoolMetadataSDKType {
  pool_id: bigint;
  pool_coin_total_supply: CoinSDKType;
  reserve_coins: CoinSDKType[];
}
/**
 * PoolBatch defines the batch or batches of a given liquidity pool that
 * contains indexes of deposit, withdraw, and swap messages. Index param
 * increments by 1 if the pool id is same.
 */
export interface PoolBatch {
  /** id of the pool */
  pool_id: bigint;
  /** index of this batch */
  index: bigint;
  /** height where this batch is started */
  begin_height: bigint;
  /** last index of DepositMsgStates */
  deposit_msg_index: bigint;
  /** last index of WithdrawMsgStates */
  withdraw_msg_index: bigint;
  /** last index of SwapMsgStates */
  swap_msg_index: bigint;
  /** true if executed, false if not executed */
  executed: boolean;
}
export interface PoolBatchProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.PoolBatch";
  value: Uint8Array;
}
/**
 * PoolBatch defines the batch or batches of a given liquidity pool that
 * contains indexes of deposit, withdraw, and swap messages. Index param
 * increments by 1 if the pool id is same.
 */
export interface PoolBatchAmino {
  /** id of the pool */
  pool_id: string;
  /** index of this batch */
  index?: string;
  /** height where this batch is started */
  begin_height?: string;
  /** last index of DepositMsgStates */
  deposit_msg_index?: string;
  /** last index of WithdrawMsgStates */
  withdraw_msg_index?: string;
  /** last index of SwapMsgStates */
  swap_msg_index?: string;
  /** true if executed, false if not executed */
  executed?: boolean;
}
export interface PoolBatchAminoMsg {
  type: "/cyber.liquidity.v1beta1.PoolBatch";
  value: PoolBatchAmino;
}
/**
 * PoolBatch defines the batch or batches of a given liquidity pool that
 * contains indexes of deposit, withdraw, and swap messages. Index param
 * increments by 1 if the pool id is same.
 */
export interface PoolBatchSDKType {
  pool_id: bigint;
  index: bigint;
  begin_height: bigint;
  deposit_msg_index: bigint;
  withdraw_msg_index: bigint;
  swap_msg_index: bigint;
  executed: boolean;
}
/**
 * DepositMsgState defines the state of deposit message that contains state
 * information as it is processed in the next batch or batches.
 */
export interface DepositMsgState {
  /** height where this message is appended to the batch */
  msg_height: bigint;
  /** index of this deposit message in this liquidity pool */
  msg_index: bigint;
  /** true if executed on this batch, false if not executed */
  executed: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  to_be_deleted: boolean;
  /** MsgDepositWithinBatch */
  msg?: MsgDepositWithinBatch;
}
export interface DepositMsgStateProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.DepositMsgState";
  value: Uint8Array;
}
/**
 * DepositMsgState defines the state of deposit message that contains state
 * information as it is processed in the next batch or batches.
 */
export interface DepositMsgStateAmino {
  /** height where this message is appended to the batch */
  msg_height?: string;
  /** index of this deposit message in this liquidity pool */
  msg_index?: string;
  /** true if executed on this batch, false if not executed */
  executed?: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded?: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  to_be_deleted?: boolean;
  /** MsgDepositWithinBatch */
  msg?: MsgDepositWithinBatchAmino;
}
export interface DepositMsgStateAminoMsg {
  type: "/cyber.liquidity.v1beta1.DepositMsgState";
  value: DepositMsgStateAmino;
}
/**
 * DepositMsgState defines the state of deposit message that contains state
 * information as it is processed in the next batch or batches.
 */
export interface DepositMsgStateSDKType {
  msg_height: bigint;
  msg_index: bigint;
  executed: boolean;
  succeeded: boolean;
  to_be_deleted: boolean;
  msg?: MsgDepositWithinBatchSDKType;
}
/**
 * WithdrawMsgState defines the state of the withdraw message that contains
 * state information as the message is processed in the next batch or batches.
 */
export interface WithdrawMsgState {
  /** height where this message is appended to the batch */
  msg_height: bigint;
  /** index of this withdraw message in this liquidity pool */
  msg_index: bigint;
  /** true if executed on this batch, false if not executed */
  executed: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  to_be_deleted: boolean;
  /** MsgWithdrawWithinBatch */
  msg?: MsgWithdrawWithinBatch;
}
export interface WithdrawMsgStateProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.WithdrawMsgState";
  value: Uint8Array;
}
/**
 * WithdrawMsgState defines the state of the withdraw message that contains
 * state information as the message is processed in the next batch or batches.
 */
export interface WithdrawMsgStateAmino {
  /** height where this message is appended to the batch */
  msg_height?: string;
  /** index of this withdraw message in this liquidity pool */
  msg_index?: string;
  /** true if executed on this batch, false if not executed */
  executed?: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded?: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  to_be_deleted?: boolean;
  /** MsgWithdrawWithinBatch */
  msg?: MsgWithdrawWithinBatchAmino;
}
export interface WithdrawMsgStateAminoMsg {
  type: "/cyber.liquidity.v1beta1.WithdrawMsgState";
  value: WithdrawMsgStateAmino;
}
/**
 * WithdrawMsgState defines the state of the withdraw message that contains
 * state information as the message is processed in the next batch or batches.
 */
export interface WithdrawMsgStateSDKType {
  msg_height: bigint;
  msg_index: bigint;
  executed: boolean;
  succeeded: boolean;
  to_be_deleted: boolean;
  msg?: MsgWithdrawWithinBatchSDKType;
}
/**
 * SwapMsgState defines the state of the swap message that contains state
 * information as the message is processed in the next batch or batches.
 */
export interface SwapMsgState {
  /** height where this message is appended to the batch */
  msg_height: bigint;
  /** index of this swap message in this liquidity pool */
  msg_index: bigint;
  /** true if executed on this batch, false if not executed */
  executed: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  to_be_deleted: boolean;
  /**
   * swap orders are cancelled when current height is equal to or higher than
   * ExpiryHeight
   */
  order_expiry_height: bigint;
  /** offer coin exchanged until now */
  exchanged_offer_coin: Coin;
  /** offer coin currently remaining to be exchanged */
  remaining_offer_coin: Coin;
  /** reserve fee for pays fee in half offer coin */
  reserved_offer_coin_fee: Coin;
  /** MsgSwapWithinBatch */
  msg?: MsgSwapWithinBatch;
}
export interface SwapMsgStateProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.SwapMsgState";
  value: Uint8Array;
}
/**
 * SwapMsgState defines the state of the swap message that contains state
 * information as the message is processed in the next batch or batches.
 */
export interface SwapMsgStateAmino {
  /** height where this message is appended to the batch */
  msg_height?: string;
  /** index of this swap message in this liquidity pool */
  msg_index?: string;
  /** true if executed on this batch, false if not executed */
  executed?: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded?: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  to_be_deleted?: boolean;
  /**
   * swap orders are cancelled when current height is equal to or higher than
   * ExpiryHeight
   */
  order_expiry_height?: string;
  /** offer coin exchanged until now */
  exchanged_offer_coin?: CoinAmino;
  /** offer coin currently remaining to be exchanged */
  remaining_offer_coin?: CoinAmino;
  /** reserve fee for pays fee in half offer coin */
  reserved_offer_coin_fee?: CoinAmino;
  /** MsgSwapWithinBatch */
  msg?: MsgSwapWithinBatchAmino;
}
export interface SwapMsgStateAminoMsg {
  type: "/cyber.liquidity.v1beta1.SwapMsgState";
  value: SwapMsgStateAmino;
}
/**
 * SwapMsgState defines the state of the swap message that contains state
 * information as the message is processed in the next batch or batches.
 */
export interface SwapMsgStateSDKType {
  msg_height: bigint;
  msg_index: bigint;
  executed: boolean;
  succeeded: boolean;
  to_be_deleted: boolean;
  order_expiry_height: bigint;
  exchanged_offer_coin: CoinSDKType;
  remaining_offer_coin: CoinSDKType;
  reserved_offer_coin_fee: CoinSDKType;
  msg?: MsgSwapWithinBatchSDKType;
}
function createBasePoolType(): PoolType {
  return {
    id: 0,
    name: "",
    min_reserve_coin_num: 0,
    max_reserve_coin_num: 0,
    description: ""
  };
}
export const PoolType = {
  typeUrl: "/cyber.liquidity.v1beta1.PoolType",
  is(o: any): o is PoolType {
    return o && (o.$typeUrl === PoolType.typeUrl || typeof o.id === "number" && typeof o.name === "string" && typeof o.min_reserve_coin_num === "number" && typeof o.max_reserve_coin_num === "number" && typeof o.description === "string");
  },
  isSDK(o: any): o is PoolTypeSDKType {
    return o && (o.$typeUrl === PoolType.typeUrl || typeof o.id === "number" && typeof o.name === "string" && typeof o.min_reserve_coin_num === "number" && typeof o.max_reserve_coin_num === "number" && typeof o.description === "string");
  },
  isAmino(o: any): o is PoolTypeAmino {
    return o && (o.$typeUrl === PoolType.typeUrl || typeof o.id === "number" && typeof o.name === "string" && typeof o.min_reserve_coin_num === "number" && typeof o.max_reserve_coin_num === "number" && typeof o.description === "string");
  },
  encode(message: PoolType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.min_reserve_coin_num !== 0) {
      writer.uint32(24).uint32(message.min_reserve_coin_num);
    }
    if (message.max_reserve_coin_num !== 0) {
      writer.uint32(32).uint32(message.max_reserve_coin_num);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.min_reserve_coin_num = reader.uint32();
          break;
        case 4:
          message.max_reserve_coin_num = reader.uint32();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolType {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      min_reserve_coin_num: isSet(object.min_reserve_coin_num) ? Number(object.min_reserve_coin_num) : 0,
      max_reserve_coin_num: isSet(object.max_reserve_coin_num) ? Number(object.max_reserve_coin_num) : 0,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toJSON(message: PoolType): JsonSafe<PoolType> {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.min_reserve_coin_num !== undefined && (obj.min_reserve_coin_num = Math.round(message.min_reserve_coin_num));
    message.max_reserve_coin_num !== undefined && (obj.max_reserve_coin_num = Math.round(message.max_reserve_coin_num));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<PoolType>): PoolType {
    const message = createBasePoolType();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.min_reserve_coin_num = object.min_reserve_coin_num ?? 0;
    message.max_reserve_coin_num = object.max_reserve_coin_num ?? 0;
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: PoolTypeAmino): PoolType {
    const message = createBasePoolType();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.min_reserve_coin_num !== undefined && object.min_reserve_coin_num !== null) {
      message.min_reserve_coin_num = object.min_reserve_coin_num;
    }
    if (object.max_reserve_coin_num !== undefined && object.max_reserve_coin_num !== null) {
      message.max_reserve_coin_num = object.max_reserve_coin_num;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: PoolType): PoolTypeAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.min_reserve_coin_num = message.min_reserve_coin_num === 0 ? undefined : message.min_reserve_coin_num;
    obj.max_reserve_coin_num = message.max_reserve_coin_num === 0 ? undefined : message.max_reserve_coin_num;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: PoolTypeAminoMsg): PoolType {
    return PoolType.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolTypeProtoMsg): PoolType {
    return PoolType.decode(message.value);
  },
  toProto(message: PoolType): Uint8Array {
    return PoolType.encode(message).finish();
  },
  toProtoMsg(message: PoolType): PoolTypeProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.PoolType",
      value: PoolType.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolType.typeUrl, PoolType);
function createBaseParams(): Params {
  return {
    pool_types: [],
    min_init_deposit_amount: "",
    init_pool_coin_mint_amount: "",
    max_reserve_coin_amount: "",
    pool_creation_fee: [],
    swap_fee_rate: "",
    withdraw_fee_rate: "",
    max_order_amount_ratio: "",
    unit_batch_height: 0,
    circuit_breaker_enabled: false
  };
}
export const Params = {
  typeUrl: "/cyber.liquidity.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.pool_types) && (!o.pool_types.length || PoolType.is(o.pool_types[0])) && typeof o.min_init_deposit_amount === "string" && typeof o.init_pool_coin_mint_amount === "string" && typeof o.max_reserve_coin_amount === "string" && Array.isArray(o.pool_creation_fee) && (!o.pool_creation_fee.length || Coin.is(o.pool_creation_fee[0])) && typeof o.swap_fee_rate === "string" && typeof o.withdraw_fee_rate === "string" && typeof o.max_order_amount_ratio === "string" && typeof o.unit_batch_height === "number" && typeof o.circuit_breaker_enabled === "boolean");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.pool_types) && (!o.pool_types.length || PoolType.isSDK(o.pool_types[0])) && typeof o.min_init_deposit_amount === "string" && typeof o.init_pool_coin_mint_amount === "string" && typeof o.max_reserve_coin_amount === "string" && Array.isArray(o.pool_creation_fee) && (!o.pool_creation_fee.length || Coin.isSDK(o.pool_creation_fee[0])) && typeof o.swap_fee_rate === "string" && typeof o.withdraw_fee_rate === "string" && typeof o.max_order_amount_ratio === "string" && typeof o.unit_batch_height === "number" && typeof o.circuit_breaker_enabled === "boolean");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.pool_types) && (!o.pool_types.length || PoolType.isAmino(o.pool_types[0])) && typeof o.min_init_deposit_amount === "string" && typeof o.init_pool_coin_mint_amount === "string" && typeof o.max_reserve_coin_amount === "string" && Array.isArray(o.pool_creation_fee) && (!o.pool_creation_fee.length || Coin.isAmino(o.pool_creation_fee[0])) && typeof o.swap_fee_rate === "string" && typeof o.withdraw_fee_rate === "string" && typeof o.max_order_amount_ratio === "string" && typeof o.unit_batch_height === "number" && typeof o.circuit_breaker_enabled === "boolean");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool_types) {
      PoolType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.min_init_deposit_amount !== "") {
      writer.uint32(18).string(message.min_init_deposit_amount);
    }
    if (message.init_pool_coin_mint_amount !== "") {
      writer.uint32(26).string(message.init_pool_coin_mint_amount);
    }
    if (message.max_reserve_coin_amount !== "") {
      writer.uint32(34).string(message.max_reserve_coin_amount);
    }
    for (const v of message.pool_creation_fee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.swap_fee_rate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.swap_fee_rate, 18).atomics);
    }
    if (message.withdraw_fee_rate !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.withdraw_fee_rate, 18).atomics);
    }
    if (message.max_order_amount_ratio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.max_order_amount_ratio, 18).atomics);
    }
    if (message.unit_batch_height !== 0) {
      writer.uint32(72).uint32(message.unit_batch_height);
    }
    if (message.circuit_breaker_enabled === true) {
      writer.uint32(80).bool(message.circuit_breaker_enabled);
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
          message.pool_types.push(PoolType.decode(reader, reader.uint32()));
          break;
        case 2:
          message.min_init_deposit_amount = reader.string();
          break;
        case 3:
          message.init_pool_coin_mint_amount = reader.string();
          break;
        case 4:
          message.max_reserve_coin_amount = reader.string();
          break;
        case 5:
          message.pool_creation_fee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.swap_fee_rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.withdraw_fee_rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.max_order_amount_ratio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.unit_batch_height = reader.uint32();
          break;
        case 10:
          message.circuit_breaker_enabled = reader.bool();
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
      pool_types: Array.isArray(object?.pool_types) ? object.pool_types.map((e: any) => PoolType.fromJSON(e)) : [],
      min_init_deposit_amount: isSet(object.min_init_deposit_amount) ? String(object.min_init_deposit_amount) : "",
      init_pool_coin_mint_amount: isSet(object.init_pool_coin_mint_amount) ? String(object.init_pool_coin_mint_amount) : "",
      max_reserve_coin_amount: isSet(object.max_reserve_coin_amount) ? String(object.max_reserve_coin_amount) : "",
      pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromJSON(e)) : [],
      swap_fee_rate: isSet(object.swap_fee_rate) ? String(object.swap_fee_rate) : "",
      withdraw_fee_rate: isSet(object.withdraw_fee_rate) ? String(object.withdraw_fee_rate) : "",
      max_order_amount_ratio: isSet(object.max_order_amount_ratio) ? String(object.max_order_amount_ratio) : "",
      unit_batch_height: isSet(object.unit_batch_height) ? Number(object.unit_batch_height) : 0,
      circuit_breaker_enabled: isSet(object.circuit_breaker_enabled) ? Boolean(object.circuit_breaker_enabled) : false
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.pool_types) {
      obj.pool_types = message.pool_types.map(e => e ? PoolType.toJSON(e) : undefined);
    } else {
      obj.pool_types = [];
    }
    message.min_init_deposit_amount !== undefined && (obj.min_init_deposit_amount = message.min_init_deposit_amount);
    message.init_pool_coin_mint_amount !== undefined && (obj.init_pool_coin_mint_amount = message.init_pool_coin_mint_amount);
    message.max_reserve_coin_amount !== undefined && (obj.max_reserve_coin_amount = message.max_reserve_coin_amount);
    if (message.pool_creation_fee) {
      obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.pool_creation_fee = [];
    }
    message.swap_fee_rate !== undefined && (obj.swap_fee_rate = message.swap_fee_rate);
    message.withdraw_fee_rate !== undefined && (obj.withdraw_fee_rate = message.withdraw_fee_rate);
    message.max_order_amount_ratio !== undefined && (obj.max_order_amount_ratio = message.max_order_amount_ratio);
    message.unit_batch_height !== undefined && (obj.unit_batch_height = Math.round(message.unit_batch_height));
    message.circuit_breaker_enabled !== undefined && (obj.circuit_breaker_enabled = message.circuit_breaker_enabled);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.pool_types = object.pool_types?.map(e => PoolType.fromPartial(e)) || [];
    message.min_init_deposit_amount = object.min_init_deposit_amount ?? "";
    message.init_pool_coin_mint_amount = object.init_pool_coin_mint_amount ?? "";
    message.max_reserve_coin_amount = object.max_reserve_coin_amount ?? "";
    message.pool_creation_fee = object.pool_creation_fee?.map(e => Coin.fromPartial(e)) || [];
    message.swap_fee_rate = object.swap_fee_rate ?? "";
    message.withdraw_fee_rate = object.withdraw_fee_rate ?? "";
    message.max_order_amount_ratio = object.max_order_amount_ratio ?? "";
    message.unit_batch_height = object.unit_batch_height ?? 0;
    message.circuit_breaker_enabled = object.circuit_breaker_enabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.pool_types = object.pool_types?.map(e => PoolType.fromAmino(e)) || [];
    if (object.min_init_deposit_amount !== undefined && object.min_init_deposit_amount !== null) {
      message.min_init_deposit_amount = object.min_init_deposit_amount;
    }
    if (object.init_pool_coin_mint_amount !== undefined && object.init_pool_coin_mint_amount !== null) {
      message.init_pool_coin_mint_amount = object.init_pool_coin_mint_amount;
    }
    if (object.max_reserve_coin_amount !== undefined && object.max_reserve_coin_amount !== null) {
      message.max_reserve_coin_amount = object.max_reserve_coin_amount;
    }
    message.pool_creation_fee = object.pool_creation_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.swap_fee_rate !== undefined && object.swap_fee_rate !== null) {
      message.swap_fee_rate = object.swap_fee_rate;
    }
    if (object.withdraw_fee_rate !== undefined && object.withdraw_fee_rate !== null) {
      message.withdraw_fee_rate = object.withdraw_fee_rate;
    }
    if (object.max_order_amount_ratio !== undefined && object.max_order_amount_ratio !== null) {
      message.max_order_amount_ratio = object.max_order_amount_ratio;
    }
    if (object.unit_batch_height !== undefined && object.unit_batch_height !== null) {
      message.unit_batch_height = object.unit_batch_height;
    }
    if (object.circuit_breaker_enabled !== undefined && object.circuit_breaker_enabled !== null) {
      message.circuit_breaker_enabled = object.circuit_breaker_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.pool_types) {
      obj.pool_types = message.pool_types.map(e => e ? PoolType.toAmino(e) : undefined);
    } else {
      obj.pool_types = message.pool_types;
    }
    obj.min_init_deposit_amount = message.min_init_deposit_amount === "" ? undefined : message.min_init_deposit_amount;
    obj.init_pool_coin_mint_amount = message.init_pool_coin_mint_amount === "" ? undefined : message.init_pool_coin_mint_amount;
    obj.max_reserve_coin_amount = message.max_reserve_coin_amount === "" ? undefined : message.max_reserve_coin_amount;
    if (message.pool_creation_fee) {
      obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool_creation_fee = message.pool_creation_fee;
    }
    obj.swap_fee_rate = message.swap_fee_rate === "" ? undefined : message.swap_fee_rate;
    obj.withdraw_fee_rate = message.withdraw_fee_rate === "" ? undefined : message.withdraw_fee_rate;
    obj.max_order_amount_ratio = message.max_order_amount_ratio === "" ? undefined : message.max_order_amount_ratio;
    obj.unit_batch_height = message.unit_batch_height === 0 ? undefined : message.unit_batch_height;
    obj.circuit_breaker_enabled = message.circuit_breaker_enabled === false ? undefined : message.circuit_breaker_enabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBasePool(): Pool {
  return {
    id: BigInt(0),
    type_id: 0,
    reserve_coin_denoms: [],
    reserve_account_address: "",
    pool_coin_denom: ""
  };
}
export const Pool = {
  typeUrl: "/cyber.liquidity.v1beta1.Pool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.id === "bigint" && typeof o.type_id === "number" && Array.isArray(o.reserve_coin_denoms) && (!o.reserve_coin_denoms.length || typeof o.reserve_coin_denoms[0] === "string") && typeof o.reserve_account_address === "string" && typeof o.pool_coin_denom === "string");
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.id === "bigint" && typeof o.type_id === "number" && Array.isArray(o.reserve_coin_denoms) && (!o.reserve_coin_denoms.length || typeof o.reserve_coin_denoms[0] === "string") && typeof o.reserve_account_address === "string" && typeof o.pool_coin_denom === "string");
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.id === "bigint" && typeof o.type_id === "number" && Array.isArray(o.reserve_coin_denoms) && (!o.reserve_coin_denoms.length || typeof o.reserve_coin_denoms[0] === "string") && typeof o.reserve_account_address === "string" && typeof o.pool_coin_denom === "string");
  },
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.type_id !== 0) {
      writer.uint32(16).uint32(message.type_id);
    }
    for (const v of message.reserve_coin_denoms) {
      writer.uint32(26).string(v!);
    }
    if (message.reserve_account_address !== "") {
      writer.uint32(34).string(message.reserve_account_address);
    }
    if (message.pool_coin_denom !== "") {
      writer.uint32(42).string(message.pool_coin_denom);
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
          message.id = reader.uint64();
          break;
        case 2:
          message.type_id = reader.uint32();
          break;
        case 3:
          message.reserve_coin_denoms.push(reader.string());
          break;
        case 4:
          message.reserve_account_address = reader.string();
          break;
        case 5:
          message.pool_coin_denom = reader.string();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      type_id: isSet(object.type_id) ? Number(object.type_id) : 0,
      reserve_coin_denoms: Array.isArray(object?.reserve_coin_denoms) ? object.reserve_coin_denoms.map((e: any) => String(e)) : [],
      reserve_account_address: isSet(object.reserve_account_address) ? String(object.reserve_account_address) : "",
      pool_coin_denom: isSet(object.pool_coin_denom) ? String(object.pool_coin_denom) : ""
    };
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.type_id !== undefined && (obj.type_id = Math.round(message.type_id));
    if (message.reserve_coin_denoms) {
      obj.reserve_coin_denoms = message.reserve_coin_denoms.map(e => e);
    } else {
      obj.reserve_coin_denoms = [];
    }
    message.reserve_account_address !== undefined && (obj.reserve_account_address = message.reserve_account_address);
    message.pool_coin_denom !== undefined && (obj.pool_coin_denom = message.pool_coin_denom);
    return obj;
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.type_id = object.type_id ?? 0;
    message.reserve_coin_denoms = object.reserve_coin_denoms?.map(e => e) || [];
    message.reserve_account_address = object.reserve_account_address ?? "";
    message.pool_coin_denom = object.pool_coin_denom ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.type_id !== undefined && object.type_id !== null) {
      message.type_id = object.type_id;
    }
    message.reserve_coin_denoms = object.reserve_coin_denoms?.map(e => e) || [];
    if (object.reserve_account_address !== undefined && object.reserve_account_address !== null) {
      message.reserve_account_address = object.reserve_account_address;
    }
    if (object.pool_coin_denom !== undefined && object.pool_coin_denom !== null) {
      message.pool_coin_denom = object.pool_coin_denom;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : "0";
    obj.type_id = message.type_id === 0 ? undefined : message.type_id;
    if (message.reserve_coin_denoms) {
      obj.reserve_coin_denoms = message.reserve_coin_denoms.map(e => e);
    } else {
      obj.reserve_coin_denoms = message.reserve_coin_denoms;
    }
    obj.reserve_account_address = message.reserve_account_address === "" ? undefined : message.reserve_account_address;
    obj.pool_coin_denom = message.pool_coin_denom === "" ? undefined : message.pool_coin_denom;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);
function createBasePoolMetadata(): PoolMetadata {
  return {
    pool_id: BigInt(0),
    pool_coin_total_supply: Coin.fromPartial({}),
    reserve_coins: []
  };
}
export const PoolMetadata = {
  typeUrl: "/cyber.liquidity.v1beta1.PoolMetadata",
  is(o: any): o is PoolMetadata {
    return o && (o.$typeUrl === PoolMetadata.typeUrl || typeof o.pool_id === "bigint" && Coin.is(o.pool_coin_total_supply) && Array.isArray(o.reserve_coins) && (!o.reserve_coins.length || Coin.is(o.reserve_coins[0])));
  },
  isSDK(o: any): o is PoolMetadataSDKType {
    return o && (o.$typeUrl === PoolMetadata.typeUrl || typeof o.pool_id === "bigint" && Coin.isSDK(o.pool_coin_total_supply) && Array.isArray(o.reserve_coins) && (!o.reserve_coins.length || Coin.isSDK(o.reserve_coins[0])));
  },
  isAmino(o: any): o is PoolMetadataAmino {
    return o && (o.$typeUrl === PoolMetadata.typeUrl || typeof o.pool_id === "bigint" && Coin.isAmino(o.pool_coin_total_supply) && Array.isArray(o.reserve_coins) && (!o.reserve_coins.length || Coin.isAmino(o.reserve_coins[0])));
  },
  encode(message: PoolMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.pool_coin_total_supply !== undefined) {
      Coin.encode(message.pool_coin_total_supply, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.reserve_coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.pool_coin_total_supply = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.reserve_coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolMetadata {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      pool_coin_total_supply: isSet(object.pool_coin_total_supply) ? Coin.fromJSON(object.pool_coin_total_supply) : undefined,
      reserve_coins: Array.isArray(object?.reserve_coins) ? object.reserve_coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: PoolMetadata): JsonSafe<PoolMetadata> {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.pool_coin_total_supply !== undefined && (obj.pool_coin_total_supply = message.pool_coin_total_supply ? Coin.toJSON(message.pool_coin_total_supply) : undefined);
    if (message.reserve_coins) {
      obj.reserve_coins = message.reserve_coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.reserve_coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PoolMetadata>): PoolMetadata {
    const message = createBasePoolMetadata();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.pool_coin_total_supply = object.pool_coin_total_supply !== undefined && object.pool_coin_total_supply !== null ? Coin.fromPartial(object.pool_coin_total_supply) : undefined;
    message.reserve_coins = object.reserve_coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolMetadataAmino): PoolMetadata {
    const message = createBasePoolMetadata();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.pool_id = BigInt(object.pool_id);
    }
    if (object.pool_coin_total_supply !== undefined && object.pool_coin_total_supply !== null) {
      message.pool_coin_total_supply = Coin.fromAmino(object.pool_coin_total_supply);
    }
    message.reserve_coins = object.reserve_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PoolMetadata): PoolMetadataAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : "0";
    obj.pool_coin_total_supply = message.pool_coin_total_supply ? Coin.toAmino(message.pool_coin_total_supply) : undefined;
    if (message.reserve_coins) {
      obj.reserve_coins = message.reserve_coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reserve_coins = message.reserve_coins;
    }
    return obj;
  },
  fromAminoMsg(object: PoolMetadataAminoMsg): PoolMetadata {
    return PoolMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolMetadataProtoMsg): PoolMetadata {
    return PoolMetadata.decode(message.value);
  },
  toProto(message: PoolMetadata): Uint8Array {
    return PoolMetadata.encode(message).finish();
  },
  toProtoMsg(message: PoolMetadata): PoolMetadataProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.PoolMetadata",
      value: PoolMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolMetadata.typeUrl, PoolMetadata);
function createBasePoolBatch(): PoolBatch {
  return {
    pool_id: BigInt(0),
    index: BigInt(0),
    begin_height: BigInt(0),
    deposit_msg_index: BigInt(0),
    withdraw_msg_index: BigInt(0),
    swap_msg_index: BigInt(0),
    executed: false
  };
}
export const PoolBatch = {
  typeUrl: "/cyber.liquidity.v1beta1.PoolBatch",
  is(o: any): o is PoolBatch {
    return o && (o.$typeUrl === PoolBatch.typeUrl || typeof o.pool_id === "bigint" && typeof o.index === "bigint" && typeof o.begin_height === "bigint" && typeof o.deposit_msg_index === "bigint" && typeof o.withdraw_msg_index === "bigint" && typeof o.swap_msg_index === "bigint" && typeof o.executed === "boolean");
  },
  isSDK(o: any): o is PoolBatchSDKType {
    return o && (o.$typeUrl === PoolBatch.typeUrl || typeof o.pool_id === "bigint" && typeof o.index === "bigint" && typeof o.begin_height === "bigint" && typeof o.deposit_msg_index === "bigint" && typeof o.withdraw_msg_index === "bigint" && typeof o.swap_msg_index === "bigint" && typeof o.executed === "boolean");
  },
  isAmino(o: any): o is PoolBatchAmino {
    return o && (o.$typeUrl === PoolBatch.typeUrl || typeof o.pool_id === "bigint" && typeof o.index === "bigint" && typeof o.begin_height === "bigint" && typeof o.deposit_msg_index === "bigint" && typeof o.withdraw_msg_index === "bigint" && typeof o.swap_msg_index === "bigint" && typeof o.executed === "boolean");
  },
  encode(message: PoolBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(16).uint64(message.index);
    }
    if (message.begin_height !== BigInt(0)) {
      writer.uint32(24).int64(message.begin_height);
    }
    if (message.deposit_msg_index !== BigInt(0)) {
      writer.uint32(32).uint64(message.deposit_msg_index);
    }
    if (message.withdraw_msg_index !== BigInt(0)) {
      writer.uint32(40).uint64(message.withdraw_msg_index);
    }
    if (message.swap_msg_index !== BigInt(0)) {
      writer.uint32(48).uint64(message.swap_msg_index);
    }
    if (message.executed === true) {
      writer.uint32(56).bool(message.executed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.index = reader.uint64();
          break;
        case 3:
          message.begin_height = reader.int64();
          break;
        case 4:
          message.deposit_msg_index = reader.uint64();
          break;
        case 5:
          message.withdraw_msg_index = reader.uint64();
          break;
        case 6:
          message.swap_msg_index = reader.uint64();
          break;
        case 7:
          message.executed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolBatch {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      begin_height: isSet(object.begin_height) ? BigInt(object.begin_height.toString()) : BigInt(0),
      deposit_msg_index: isSet(object.deposit_msg_index) ? BigInt(object.deposit_msg_index.toString()) : BigInt(0),
      withdraw_msg_index: isSet(object.withdraw_msg_index) ? BigInt(object.withdraw_msg_index.toString()) : BigInt(0),
      swap_msg_index: isSet(object.swap_msg_index) ? BigInt(object.swap_msg_index.toString()) : BigInt(0),
      executed: isSet(object.executed) ? Boolean(object.executed) : false
    };
  },
  toJSON(message: PoolBatch): JsonSafe<PoolBatch> {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.begin_height !== undefined && (obj.begin_height = (message.begin_height || BigInt(0)).toString());
    message.deposit_msg_index !== undefined && (obj.deposit_msg_index = (message.deposit_msg_index || BigInt(0)).toString());
    message.withdraw_msg_index !== undefined && (obj.withdraw_msg_index = (message.withdraw_msg_index || BigInt(0)).toString());
    message.swap_msg_index !== undefined && (obj.swap_msg_index = (message.swap_msg_index || BigInt(0)).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    return obj;
  },
  fromPartial(object: DeepPartial<PoolBatch>): PoolBatch {
    const message = createBasePoolBatch();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.begin_height = object.begin_height !== undefined && object.begin_height !== null ? BigInt(object.begin_height.toString()) : BigInt(0);
    message.deposit_msg_index = object.deposit_msg_index !== undefined && object.deposit_msg_index !== null ? BigInt(object.deposit_msg_index.toString()) : BigInt(0);
    message.withdraw_msg_index = object.withdraw_msg_index !== undefined && object.withdraw_msg_index !== null ? BigInt(object.withdraw_msg_index.toString()) : BigInt(0);
    message.swap_msg_index = object.swap_msg_index !== undefined && object.swap_msg_index !== null ? BigInt(object.swap_msg_index.toString()) : BigInt(0);
    message.executed = object.executed ?? false;
    return message;
  },
  fromAmino(object: PoolBatchAmino): PoolBatch {
    const message = createBasePoolBatch();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.pool_id = BigInt(object.pool_id);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.begin_height !== undefined && object.begin_height !== null) {
      message.begin_height = BigInt(object.begin_height);
    }
    if (object.deposit_msg_index !== undefined && object.deposit_msg_index !== null) {
      message.deposit_msg_index = BigInt(object.deposit_msg_index);
    }
    if (object.withdraw_msg_index !== undefined && object.withdraw_msg_index !== null) {
      message.withdraw_msg_index = BigInt(object.withdraw_msg_index);
    }
    if (object.swap_msg_index !== undefined && object.swap_msg_index !== null) {
      message.swap_msg_index = BigInt(object.swap_msg_index);
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    }
    return message;
  },
  toAmino(message: PoolBatch): PoolBatchAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : "0";
    obj.index = message.index !== BigInt(0) ? message.index.toString() : undefined;
    obj.begin_height = message.begin_height !== BigInt(0) ? message.begin_height.toString() : undefined;
    obj.deposit_msg_index = message.deposit_msg_index !== BigInt(0) ? message.deposit_msg_index.toString() : undefined;
    obj.withdraw_msg_index = message.withdraw_msg_index !== BigInt(0) ? message.withdraw_msg_index.toString() : undefined;
    obj.swap_msg_index = message.swap_msg_index !== BigInt(0) ? message.swap_msg_index.toString() : undefined;
    obj.executed = message.executed === false ? undefined : message.executed;
    return obj;
  },
  fromAminoMsg(object: PoolBatchAminoMsg): PoolBatch {
    return PoolBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolBatchProtoMsg): PoolBatch {
    return PoolBatch.decode(message.value);
  },
  toProto(message: PoolBatch): Uint8Array {
    return PoolBatch.encode(message).finish();
  },
  toProtoMsg(message: PoolBatch): PoolBatchProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.PoolBatch",
      value: PoolBatch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolBatch.typeUrl, PoolBatch);
function createBaseDepositMsgState(): DepositMsgState {
  return {
    msg_height: BigInt(0),
    msg_index: BigInt(0),
    executed: false,
    succeeded: false,
    to_be_deleted: false,
    msg: undefined
  };
}
export const DepositMsgState = {
  typeUrl: "/cyber.liquidity.v1beta1.DepositMsgState",
  is(o: any): o is DepositMsgState {
    return o && (o.$typeUrl === DepositMsgState.typeUrl || typeof o.msg_height === "bigint" && typeof o.msg_index === "bigint" && typeof o.executed === "boolean" && typeof o.succeeded === "boolean" && typeof o.to_be_deleted === "boolean");
  },
  isSDK(o: any): o is DepositMsgStateSDKType {
    return o && (o.$typeUrl === DepositMsgState.typeUrl || typeof o.msg_height === "bigint" && typeof o.msg_index === "bigint" && typeof o.executed === "boolean" && typeof o.succeeded === "boolean" && typeof o.to_be_deleted === "boolean");
  },
  isAmino(o: any): o is DepositMsgStateAmino {
    return o && (o.$typeUrl === DepositMsgState.typeUrl || typeof o.msg_height === "bigint" && typeof o.msg_index === "bigint" && typeof o.executed === "boolean" && typeof o.succeeded === "boolean" && typeof o.to_be_deleted === "boolean");
  },
  encode(message: DepositMsgState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg_height !== BigInt(0)) {
      writer.uint32(8).int64(message.msg_height);
    }
    if (message.msg_index !== BigInt(0)) {
      writer.uint32(16).uint64(message.msg_index);
    }
    if (message.executed === true) {
      writer.uint32(24).bool(message.executed);
    }
    if (message.succeeded === true) {
      writer.uint32(32).bool(message.succeeded);
    }
    if (message.to_be_deleted === true) {
      writer.uint32(40).bool(message.to_be_deleted);
    }
    if (message.msg !== undefined) {
      MsgDepositWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositMsgState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositMsgState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_height = reader.int64();
          break;
        case 2:
          message.msg_index = reader.uint64();
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.to_be_deleted = reader.bool();
          break;
        case 6:
          message.msg = MsgDepositWithinBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositMsgState {
    return {
      msg_height: isSet(object.msg_height) ? BigInt(object.msg_height.toString()) : BigInt(0),
      msg_index: isSet(object.msg_index) ? BigInt(object.msg_index.toString()) : BigInt(0),
      executed: isSet(object.executed) ? Boolean(object.executed) : false,
      succeeded: isSet(object.succeeded) ? Boolean(object.succeeded) : false,
      to_be_deleted: isSet(object.to_be_deleted) ? Boolean(object.to_be_deleted) : false,
      msg: isSet(object.msg) ? MsgDepositWithinBatch.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: DepositMsgState): JsonSafe<DepositMsgState> {
    const obj: any = {};
    message.msg_height !== undefined && (obj.msg_height = (message.msg_height || BigInt(0)).toString());
    message.msg_index !== undefined && (obj.msg_index = (message.msg_index || BigInt(0)).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.to_be_deleted !== undefined && (obj.to_be_deleted = message.to_be_deleted);
    message.msg !== undefined && (obj.msg = message.msg ? MsgDepositWithinBatch.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DepositMsgState>): DepositMsgState {
    const message = createBaseDepositMsgState();
    message.msg_height = object.msg_height !== undefined && object.msg_height !== null ? BigInt(object.msg_height.toString()) : BigInt(0);
    message.msg_index = object.msg_index !== undefined && object.msg_index !== null ? BigInt(object.msg_index.toString()) : BigInt(0);
    message.executed = object.executed ?? false;
    message.succeeded = object.succeeded ?? false;
    message.to_be_deleted = object.to_be_deleted ?? false;
    message.msg = object.msg !== undefined && object.msg !== null ? MsgDepositWithinBatch.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: DepositMsgStateAmino): DepositMsgState {
    const message = createBaseDepositMsgState();
    if (object.msg_height !== undefined && object.msg_height !== null) {
      message.msg_height = BigInt(object.msg_height);
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = BigInt(object.msg_index);
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = object.succeeded;
    }
    if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
      message.to_be_deleted = object.to_be_deleted;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgDepositWithinBatch.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: DepositMsgState): DepositMsgStateAmino {
    const obj: any = {};
    obj.msg_height = message.msg_height !== BigInt(0) ? message.msg_height.toString() : undefined;
    obj.msg_index = message.msg_index !== BigInt(0) ? message.msg_index.toString() : undefined;
    obj.executed = message.executed === false ? undefined : message.executed;
    obj.succeeded = message.succeeded === false ? undefined : message.succeeded;
    obj.to_be_deleted = message.to_be_deleted === false ? undefined : message.to_be_deleted;
    obj.msg = message.msg ? MsgDepositWithinBatch.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositMsgStateAminoMsg): DepositMsgState {
    return DepositMsgState.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositMsgStateProtoMsg): DepositMsgState {
    return DepositMsgState.decode(message.value);
  },
  toProto(message: DepositMsgState): Uint8Array {
    return DepositMsgState.encode(message).finish();
  },
  toProtoMsg(message: DepositMsgState): DepositMsgStateProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.DepositMsgState",
      value: DepositMsgState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DepositMsgState.typeUrl, DepositMsgState);
function createBaseWithdrawMsgState(): WithdrawMsgState {
  return {
    msg_height: BigInt(0),
    msg_index: BigInt(0),
    executed: false,
    succeeded: false,
    to_be_deleted: false,
    msg: undefined
  };
}
export const WithdrawMsgState = {
  typeUrl: "/cyber.liquidity.v1beta1.WithdrawMsgState",
  is(o: any): o is WithdrawMsgState {
    return o && (o.$typeUrl === WithdrawMsgState.typeUrl || typeof o.msg_height === "bigint" && typeof o.msg_index === "bigint" && typeof o.executed === "boolean" && typeof o.succeeded === "boolean" && typeof o.to_be_deleted === "boolean");
  },
  isSDK(o: any): o is WithdrawMsgStateSDKType {
    return o && (o.$typeUrl === WithdrawMsgState.typeUrl || typeof o.msg_height === "bigint" && typeof o.msg_index === "bigint" && typeof o.executed === "boolean" && typeof o.succeeded === "boolean" && typeof o.to_be_deleted === "boolean");
  },
  isAmino(o: any): o is WithdrawMsgStateAmino {
    return o && (o.$typeUrl === WithdrawMsgState.typeUrl || typeof o.msg_height === "bigint" && typeof o.msg_index === "bigint" && typeof o.executed === "boolean" && typeof o.succeeded === "boolean" && typeof o.to_be_deleted === "boolean");
  },
  encode(message: WithdrawMsgState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg_height !== BigInt(0)) {
      writer.uint32(8).int64(message.msg_height);
    }
    if (message.msg_index !== BigInt(0)) {
      writer.uint32(16).uint64(message.msg_index);
    }
    if (message.executed === true) {
      writer.uint32(24).bool(message.executed);
    }
    if (message.succeeded === true) {
      writer.uint32(32).bool(message.succeeded);
    }
    if (message.to_be_deleted === true) {
      writer.uint32(40).bool(message.to_be_deleted);
    }
    if (message.msg !== undefined) {
      MsgWithdrawWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WithdrawMsgState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawMsgState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_height = reader.int64();
          break;
        case 2:
          message.msg_index = reader.uint64();
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.to_be_deleted = reader.bool();
          break;
        case 6:
          message.msg = MsgWithdrawWithinBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WithdrawMsgState {
    return {
      msg_height: isSet(object.msg_height) ? BigInt(object.msg_height.toString()) : BigInt(0),
      msg_index: isSet(object.msg_index) ? BigInt(object.msg_index.toString()) : BigInt(0),
      executed: isSet(object.executed) ? Boolean(object.executed) : false,
      succeeded: isSet(object.succeeded) ? Boolean(object.succeeded) : false,
      to_be_deleted: isSet(object.to_be_deleted) ? Boolean(object.to_be_deleted) : false,
      msg: isSet(object.msg) ? MsgWithdrawWithinBatch.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: WithdrawMsgState): JsonSafe<WithdrawMsgState> {
    const obj: any = {};
    message.msg_height !== undefined && (obj.msg_height = (message.msg_height || BigInt(0)).toString());
    message.msg_index !== undefined && (obj.msg_index = (message.msg_index || BigInt(0)).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.to_be_deleted !== undefined && (obj.to_be_deleted = message.to_be_deleted);
    message.msg !== undefined && (obj.msg = message.msg ? MsgWithdrawWithinBatch.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<WithdrawMsgState>): WithdrawMsgState {
    const message = createBaseWithdrawMsgState();
    message.msg_height = object.msg_height !== undefined && object.msg_height !== null ? BigInt(object.msg_height.toString()) : BigInt(0);
    message.msg_index = object.msg_index !== undefined && object.msg_index !== null ? BigInt(object.msg_index.toString()) : BigInt(0);
    message.executed = object.executed ?? false;
    message.succeeded = object.succeeded ?? false;
    message.to_be_deleted = object.to_be_deleted ?? false;
    message.msg = object.msg !== undefined && object.msg !== null ? MsgWithdrawWithinBatch.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: WithdrawMsgStateAmino): WithdrawMsgState {
    const message = createBaseWithdrawMsgState();
    if (object.msg_height !== undefined && object.msg_height !== null) {
      message.msg_height = BigInt(object.msg_height);
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = BigInt(object.msg_index);
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = object.succeeded;
    }
    if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
      message.to_be_deleted = object.to_be_deleted;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgWithdrawWithinBatch.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: WithdrawMsgState): WithdrawMsgStateAmino {
    const obj: any = {};
    obj.msg_height = message.msg_height !== BigInt(0) ? message.msg_height.toString() : undefined;
    obj.msg_index = message.msg_index !== BigInt(0) ? message.msg_index.toString() : undefined;
    obj.executed = message.executed === false ? undefined : message.executed;
    obj.succeeded = message.succeeded === false ? undefined : message.succeeded;
    obj.to_be_deleted = message.to_be_deleted === false ? undefined : message.to_be_deleted;
    obj.msg = message.msg ? MsgWithdrawWithinBatch.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: WithdrawMsgStateAminoMsg): WithdrawMsgState {
    return WithdrawMsgState.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawMsgStateProtoMsg): WithdrawMsgState {
    return WithdrawMsgState.decode(message.value);
  },
  toProto(message: WithdrawMsgState): Uint8Array {
    return WithdrawMsgState.encode(message).finish();
  },
  toProtoMsg(message: WithdrawMsgState): WithdrawMsgStateProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.WithdrawMsgState",
      value: WithdrawMsgState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WithdrawMsgState.typeUrl, WithdrawMsgState);
function createBaseSwapMsgState(): SwapMsgState {
  return {
    msg_height: BigInt(0),
    msg_index: BigInt(0),
    executed: false,
    succeeded: false,
    to_be_deleted: false,
    order_expiry_height: BigInt(0),
    exchanged_offer_coin: Coin.fromPartial({}),
    remaining_offer_coin: Coin.fromPartial({}),
    reserved_offer_coin_fee: Coin.fromPartial({}),
    msg: undefined
  };
}
export const SwapMsgState = {
  typeUrl: "/cyber.liquidity.v1beta1.SwapMsgState",
  is(o: any): o is SwapMsgState {
    return o && (o.$typeUrl === SwapMsgState.typeUrl || typeof o.msg_height === "bigint" && typeof o.msg_index === "bigint" && typeof o.executed === "boolean" && typeof o.succeeded === "boolean" && typeof o.to_be_deleted === "boolean" && typeof o.order_expiry_height === "bigint" && Coin.is(o.exchanged_offer_coin) && Coin.is(o.remaining_offer_coin) && Coin.is(o.reserved_offer_coin_fee));
  },
  isSDK(o: any): o is SwapMsgStateSDKType {
    return o && (o.$typeUrl === SwapMsgState.typeUrl || typeof o.msg_height === "bigint" && typeof o.msg_index === "bigint" && typeof o.executed === "boolean" && typeof o.succeeded === "boolean" && typeof o.to_be_deleted === "boolean" && typeof o.order_expiry_height === "bigint" && Coin.isSDK(o.exchanged_offer_coin) && Coin.isSDK(o.remaining_offer_coin) && Coin.isSDK(o.reserved_offer_coin_fee));
  },
  isAmino(o: any): o is SwapMsgStateAmino {
    return o && (o.$typeUrl === SwapMsgState.typeUrl || typeof o.msg_height === "bigint" && typeof o.msg_index === "bigint" && typeof o.executed === "boolean" && typeof o.succeeded === "boolean" && typeof o.to_be_deleted === "boolean" && typeof o.order_expiry_height === "bigint" && Coin.isAmino(o.exchanged_offer_coin) && Coin.isAmino(o.remaining_offer_coin) && Coin.isAmino(o.reserved_offer_coin_fee));
  },
  encode(message: SwapMsgState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg_height !== BigInt(0)) {
      writer.uint32(8).int64(message.msg_height);
    }
    if (message.msg_index !== BigInt(0)) {
      writer.uint32(16).uint64(message.msg_index);
    }
    if (message.executed === true) {
      writer.uint32(24).bool(message.executed);
    }
    if (message.succeeded === true) {
      writer.uint32(32).bool(message.succeeded);
    }
    if (message.to_be_deleted === true) {
      writer.uint32(40).bool(message.to_be_deleted);
    }
    if (message.order_expiry_height !== BigInt(0)) {
      writer.uint32(48).int64(message.order_expiry_height);
    }
    if (message.exchanged_offer_coin !== undefined) {
      Coin.encode(message.exchanged_offer_coin, writer.uint32(58).fork()).ldelim();
    }
    if (message.remaining_offer_coin !== undefined) {
      Coin.encode(message.remaining_offer_coin, writer.uint32(66).fork()).ldelim();
    }
    if (message.reserved_offer_coin_fee !== undefined) {
      Coin.encode(message.reserved_offer_coin_fee, writer.uint32(74).fork()).ldelim();
    }
    if (message.msg !== undefined) {
      MsgSwapWithinBatch.encode(message.msg, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapMsgState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapMsgState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_height = reader.int64();
          break;
        case 2:
          message.msg_index = reader.uint64();
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.to_be_deleted = reader.bool();
          break;
        case 6:
          message.order_expiry_height = reader.int64();
          break;
        case 7:
          message.exchanged_offer_coin = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.remaining_offer_coin = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.reserved_offer_coin_fee = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.msg = MsgSwapWithinBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapMsgState {
    return {
      msg_height: isSet(object.msg_height) ? BigInt(object.msg_height.toString()) : BigInt(0),
      msg_index: isSet(object.msg_index) ? BigInt(object.msg_index.toString()) : BigInt(0),
      executed: isSet(object.executed) ? Boolean(object.executed) : false,
      succeeded: isSet(object.succeeded) ? Boolean(object.succeeded) : false,
      to_be_deleted: isSet(object.to_be_deleted) ? Boolean(object.to_be_deleted) : false,
      order_expiry_height: isSet(object.order_expiry_height) ? BigInt(object.order_expiry_height.toString()) : BigInt(0),
      exchanged_offer_coin: isSet(object.exchanged_offer_coin) ? Coin.fromJSON(object.exchanged_offer_coin) : undefined,
      remaining_offer_coin: isSet(object.remaining_offer_coin) ? Coin.fromJSON(object.remaining_offer_coin) : undefined,
      reserved_offer_coin_fee: isSet(object.reserved_offer_coin_fee) ? Coin.fromJSON(object.reserved_offer_coin_fee) : undefined,
      msg: isSet(object.msg) ? MsgSwapWithinBatch.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: SwapMsgState): JsonSafe<SwapMsgState> {
    const obj: any = {};
    message.msg_height !== undefined && (obj.msg_height = (message.msg_height || BigInt(0)).toString());
    message.msg_index !== undefined && (obj.msg_index = (message.msg_index || BigInt(0)).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.to_be_deleted !== undefined && (obj.to_be_deleted = message.to_be_deleted);
    message.order_expiry_height !== undefined && (obj.order_expiry_height = (message.order_expiry_height || BigInt(0)).toString());
    message.exchanged_offer_coin !== undefined && (obj.exchanged_offer_coin = message.exchanged_offer_coin ? Coin.toJSON(message.exchanged_offer_coin) : undefined);
    message.remaining_offer_coin !== undefined && (obj.remaining_offer_coin = message.remaining_offer_coin ? Coin.toJSON(message.remaining_offer_coin) : undefined);
    message.reserved_offer_coin_fee !== undefined && (obj.reserved_offer_coin_fee = message.reserved_offer_coin_fee ? Coin.toJSON(message.reserved_offer_coin_fee) : undefined);
    message.msg !== undefined && (obj.msg = message.msg ? MsgSwapWithinBatch.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SwapMsgState>): SwapMsgState {
    const message = createBaseSwapMsgState();
    message.msg_height = object.msg_height !== undefined && object.msg_height !== null ? BigInt(object.msg_height.toString()) : BigInt(0);
    message.msg_index = object.msg_index !== undefined && object.msg_index !== null ? BigInt(object.msg_index.toString()) : BigInt(0);
    message.executed = object.executed ?? false;
    message.succeeded = object.succeeded ?? false;
    message.to_be_deleted = object.to_be_deleted ?? false;
    message.order_expiry_height = object.order_expiry_height !== undefined && object.order_expiry_height !== null ? BigInt(object.order_expiry_height.toString()) : BigInt(0);
    message.exchanged_offer_coin = object.exchanged_offer_coin !== undefined && object.exchanged_offer_coin !== null ? Coin.fromPartial(object.exchanged_offer_coin) : undefined;
    message.remaining_offer_coin = object.remaining_offer_coin !== undefined && object.remaining_offer_coin !== null ? Coin.fromPartial(object.remaining_offer_coin) : undefined;
    message.reserved_offer_coin_fee = object.reserved_offer_coin_fee !== undefined && object.reserved_offer_coin_fee !== null ? Coin.fromPartial(object.reserved_offer_coin_fee) : undefined;
    message.msg = object.msg !== undefined && object.msg !== null ? MsgSwapWithinBatch.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: SwapMsgStateAmino): SwapMsgState {
    const message = createBaseSwapMsgState();
    if (object.msg_height !== undefined && object.msg_height !== null) {
      message.msg_height = BigInt(object.msg_height);
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = BigInt(object.msg_index);
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = object.succeeded;
    }
    if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
      message.to_be_deleted = object.to_be_deleted;
    }
    if (object.order_expiry_height !== undefined && object.order_expiry_height !== null) {
      message.order_expiry_height = BigInt(object.order_expiry_height);
    }
    if (object.exchanged_offer_coin !== undefined && object.exchanged_offer_coin !== null) {
      message.exchanged_offer_coin = Coin.fromAmino(object.exchanged_offer_coin);
    }
    if (object.remaining_offer_coin !== undefined && object.remaining_offer_coin !== null) {
      message.remaining_offer_coin = Coin.fromAmino(object.remaining_offer_coin);
    }
    if (object.reserved_offer_coin_fee !== undefined && object.reserved_offer_coin_fee !== null) {
      message.reserved_offer_coin_fee = Coin.fromAmino(object.reserved_offer_coin_fee);
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgSwapWithinBatch.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: SwapMsgState): SwapMsgStateAmino {
    const obj: any = {};
    obj.msg_height = message.msg_height !== BigInt(0) ? message.msg_height.toString() : undefined;
    obj.msg_index = message.msg_index !== BigInt(0) ? message.msg_index.toString() : undefined;
    obj.executed = message.executed === false ? undefined : message.executed;
    obj.succeeded = message.succeeded === false ? undefined : message.succeeded;
    obj.to_be_deleted = message.to_be_deleted === false ? undefined : message.to_be_deleted;
    obj.order_expiry_height = message.order_expiry_height !== BigInt(0) ? message.order_expiry_height.toString() : undefined;
    obj.exchanged_offer_coin = message.exchanged_offer_coin ? Coin.toAmino(message.exchanged_offer_coin) : undefined;
    obj.remaining_offer_coin = message.remaining_offer_coin ? Coin.toAmino(message.remaining_offer_coin) : undefined;
    obj.reserved_offer_coin_fee = message.reserved_offer_coin_fee ? Coin.toAmino(message.reserved_offer_coin_fee) : undefined;
    obj.msg = message.msg ? MsgSwapWithinBatch.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: SwapMsgStateAminoMsg): SwapMsgState {
    return SwapMsgState.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapMsgStateProtoMsg): SwapMsgState {
    return SwapMsgState.decode(message.value);
  },
  toProto(message: SwapMsgState): Uint8Array {
    return SwapMsgState.encode(message).finish();
  },
  toProtoMsg(message: SwapMsgState): SwapMsgStateProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.SwapMsgState",
      value: SwapMsgState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SwapMsgState.typeUrl, SwapMsgState);