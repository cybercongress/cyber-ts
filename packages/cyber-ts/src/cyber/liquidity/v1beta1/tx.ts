import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create
 * liquidity pool tx.
 * 
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgCreatePool {
  pool_creator_address: string;
  /**
   * id of the target pool type, must match the value in the pool. Only
   * pool-type-id 1 is supported.
   */
  pool_type_id: number;
  /** reserve coin pair of the pool to deposit. */
  deposit_coins: Coin[];
}
export interface MsgCreatePoolProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.MsgCreatePool";
  value: Uint8Array;
}
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create
 * liquidity pool tx.
 * 
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgCreatePoolAmino {
  pool_creator_address?: string;
  /**
   * id of the target pool type, must match the value in the pool. Only
   * pool-type-id 1 is supported.
   */
  pool_type_id?: number;
  /** reserve coin pair of the pool to deposit. */
  deposit_coins?: CoinAmino[];
}
export interface MsgCreatePoolAminoMsg {
  type: "/cyber.liquidity.v1beta1.MsgCreatePool";
  value: MsgCreatePoolAmino;
}
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create
 * liquidity pool tx.
 * 
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgCreatePoolSDKType {
  pool_creator_address: string;
  pool_type_id: number;
  deposit_coins: CoinSDKType[];
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.MsgCreatePoolResponse";
  value: Uint8Array;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseAmino {}
export interface MsgCreatePoolResponseAminoMsg {
  type: "/cyber.liquidity.v1beta1.MsgCreatePoolResponse";
  value: MsgCreatePoolResponseAmino;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseSDKType {}
/**
 * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
 * a deposit request to the batch of the liquidity pool.
 * Deposit is submitted to the batch of the Liquidity pool with the specified
 * `pool_id`, `deposit_coins` for reserve.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 * 
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositWithinBatch {
  depositor_address: string;
  /** id of the target pool */
  pool_id: bigint;
  /** reserve coin pair of the pool to deposit */
  deposit_coins: Coin[];
}
export interface MsgDepositWithinBatchProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.MsgDepositWithinBatch";
  value: Uint8Array;
}
/**
 * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
 * a deposit request to the batch of the liquidity pool.
 * Deposit is submitted to the batch of the Liquidity pool with the specified
 * `pool_id`, `deposit_coins` for reserve.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 * 
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositWithinBatchAmino {
  depositor_address?: string;
  /** id of the target pool */
  pool_id?: string;
  /** reserve coin pair of the pool to deposit */
  deposit_coins?: CoinAmino[];
}
export interface MsgDepositWithinBatchAminoMsg {
  type: "/cyber.liquidity.v1beta1.MsgDepositWithinBatch";
  value: MsgDepositWithinBatchAmino;
}
/**
 * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
 * a deposit request to the batch of the liquidity pool.
 * Deposit is submitted to the batch of the Liquidity pool with the specified
 * `pool_id`, `deposit_coins` for reserve.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 * 
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositWithinBatchSDKType {
  depositor_address: string;
  pool_id: bigint;
  deposit_coins: CoinSDKType[];
}
/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response
 * type.
 */
export interface MsgDepositWithinBatchResponse {}
export interface MsgDepositWithinBatchResponseProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.MsgDepositWithinBatchResponse";
  value: Uint8Array;
}
/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response
 * type.
 */
export interface MsgDepositWithinBatchResponseAmino {}
export interface MsgDepositWithinBatchResponseAminoMsg {
  type: "/cyber.liquidity.v1beta1.MsgDepositWithinBatchResponse";
  value: MsgDepositWithinBatchResponseAmino;
}
/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response
 * type.
 */
export interface MsgDepositWithinBatchResponseSDKType {}
/**
 * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
 * a withdraw request to the batch of the liquidity pool.
 * Withdraw is submitted to the batch from the Liquidity pool with the
 * specified `pool_id`, `pool_coin` of the pool.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 * 
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawWithinBatch {
  withdrawer_address: string;
  /** id of the target pool */
  pool_id: bigint;
  pool_coin: Coin;
}
export interface MsgWithdrawWithinBatchProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.MsgWithdrawWithinBatch";
  value: Uint8Array;
}
/**
 * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
 * a withdraw request to the batch of the liquidity pool.
 * Withdraw is submitted to the batch from the Liquidity pool with the
 * specified `pool_id`, `pool_coin` of the pool.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 * 
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawWithinBatchAmino {
  withdrawer_address?: string;
  /** id of the target pool */
  pool_id?: string;
  pool_coin?: CoinAmino;
}
export interface MsgWithdrawWithinBatchAminoMsg {
  type: "/cyber.liquidity.v1beta1.MsgWithdrawWithinBatch";
  value: MsgWithdrawWithinBatchAmino;
}
/**
 * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
 * a withdraw request to the batch of the liquidity pool.
 * Withdraw is submitted to the batch from the Liquidity pool with the
 * specified `pool_id`, `pool_coin` of the pool.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 * 
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawWithinBatchSDKType {
  withdrawer_address: string;
  pool_id: bigint;
  pool_coin: CoinSDKType;
}
/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response
 * type.
 */
export interface MsgWithdrawWithinBatchResponse {}
export interface MsgWithdrawWithinBatchResponseProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.MsgWithdrawWithinBatchResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response
 * type.
 */
export interface MsgWithdrawWithinBatchResponseAmino {}
export interface MsgWithdrawWithinBatchResponseAminoMsg {
  type: "/cyber.liquidity.v1beta1.MsgWithdrawWithinBatchResponse";
  value: MsgWithdrawWithinBatchResponseAmino;
}
/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response
 * type.
 */
export interface MsgWithdrawWithinBatchResponseSDKType {}
/**
 * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap
 * offer request to the batch of the liquidity pool. Submit swap offer to the
 * liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
 * `demand_coin_denom` with the coin and the price you're offering
 * and `offer_coin_fee` must be half of offer coin amount * current
 * `params.swap_fee_rate` and ceil for reservation to pay fees. This request is
 * stacked in the batch of the liquidity pool, is not processed immediately, and
 * is processed in the `endblock` at the same time as other requests. You must
 * request the same fields as the pool. Only the default `swap_type_id` 1 is
 * supported.
 * 
 * See: https://github.com/gravity-devs/liquidity/tree/develop/doc
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwapWithinBatch {
  /** address of swap requester */
  swap_requester_address: string;
  /**
   * id of swap type, must match the value in the pool. Only `swap_type_id` 1 is
   * supported.
   */
  pool_id: bigint;
  /** id of swap type. Must match the value in the pool. */
  swap_type_id: number;
  /** offer sdk.coin for the swap request, must match the denom in the pool. */
  offer_coin: Coin;
  /**
   * denom of demand coin to be exchanged on the swap request, must match the
   * denom in the pool.
   */
  demand_coin_denom: string;
  /**
   * half of offer coin amount * params.swap_fee_rate and ceil for reservation
   * to pay fees.
   */
  offer_coin_fee: Coin;
  /**
   * limit order price for the order, the price is the exchange ratio of X/Y
   * where X is the amount of the first coin and Y is the amount
   * of the second coin when their denoms are sorted alphabetically.
   */
  order_price: string;
}
export interface MsgSwapWithinBatchProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.MsgSwapWithinBatch";
  value: Uint8Array;
}
/**
 * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap
 * offer request to the batch of the liquidity pool. Submit swap offer to the
 * liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
 * `demand_coin_denom` with the coin and the price you're offering
 * and `offer_coin_fee` must be half of offer coin amount * current
 * `params.swap_fee_rate` and ceil for reservation to pay fees. This request is
 * stacked in the batch of the liquidity pool, is not processed immediately, and
 * is processed in the `endblock` at the same time as other requests. You must
 * request the same fields as the pool. Only the default `swap_type_id` 1 is
 * supported.
 * 
 * See: https://github.com/gravity-devs/liquidity/tree/develop/doc
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwapWithinBatchAmino {
  /** address of swap requester */
  swap_requester_address?: string;
  /**
   * id of swap type, must match the value in the pool. Only `swap_type_id` 1 is
   * supported.
   */
  pool_id?: string;
  /** id of swap type. Must match the value in the pool. */
  swap_type_id?: number;
  /** offer sdk.coin for the swap request, must match the denom in the pool. */
  offer_coin?: CoinAmino;
  /**
   * denom of demand coin to be exchanged on the swap request, must match the
   * denom in the pool.
   */
  demand_coin_denom?: string;
  /**
   * half of offer coin amount * params.swap_fee_rate and ceil for reservation
   * to pay fees.
   */
  offer_coin_fee?: CoinAmino;
  /**
   * limit order price for the order, the price is the exchange ratio of X/Y
   * where X is the amount of the first coin and Y is the amount
   * of the second coin when their denoms are sorted alphabetically.
   */
  order_price?: string;
}
export interface MsgSwapWithinBatchAminoMsg {
  type: "/cyber.liquidity.v1beta1.MsgSwapWithinBatch";
  value: MsgSwapWithinBatchAmino;
}
/**
 * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap
 * offer request to the batch of the liquidity pool. Submit swap offer to the
 * liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
 * `demand_coin_denom` with the coin and the price you're offering
 * and `offer_coin_fee` must be half of offer coin amount * current
 * `params.swap_fee_rate` and ceil for reservation to pay fees. This request is
 * stacked in the batch of the liquidity pool, is not processed immediately, and
 * is processed in the `endblock` at the same time as other requests. You must
 * request the same fields as the pool. Only the default `swap_type_id` 1 is
 * supported.
 * 
 * See: https://github.com/gravity-devs/liquidity/tree/develop/doc
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwapWithinBatchSDKType {
  swap_requester_address: string;
  pool_id: bigint;
  swap_type_id: number;
  offer_coin: CoinSDKType;
  demand_coin_denom: string;
  offer_coin_fee: CoinSDKType;
  order_price: string;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponse {}
export interface MsgSwapWithinBatchResponseProtoMsg {
  type_url: "/cyber.liquidity.v1beta1.MsgSwapWithinBatchResponse";
  value: Uint8Array;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponseAmino {}
export interface MsgSwapWithinBatchResponseAminoMsg {
  type: "/cyber.liquidity.v1beta1.MsgSwapWithinBatchResponse";
  value: MsgSwapWithinBatchResponseAmino;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponseSDKType {}
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    pool_creator_address: "",
    pool_type_id: 0,
    deposit_coins: []
  };
}
export const MsgCreatePool = {
  typeUrl: "/cyber.liquidity.v1beta1.MsgCreatePool",
  is(o: any): o is MsgCreatePool {
    return o && (o.$typeUrl === MsgCreatePool.typeUrl || typeof o.pool_creator_address === "string" && typeof o.pool_type_id === "number" && Array.isArray(o.deposit_coins) && (!o.deposit_coins.length || Coin.is(o.deposit_coins[0])));
  },
  isSDK(o: any): o is MsgCreatePoolSDKType {
    return o && (o.$typeUrl === MsgCreatePool.typeUrl || typeof o.pool_creator_address === "string" && typeof o.pool_type_id === "number" && Array.isArray(o.deposit_coins) && (!o.deposit_coins.length || Coin.isSDK(o.deposit_coins[0])));
  },
  isAmino(o: any): o is MsgCreatePoolAmino {
    return o && (o.$typeUrl === MsgCreatePool.typeUrl || typeof o.pool_creator_address === "string" && typeof o.pool_type_id === "number" && Array.isArray(o.deposit_coins) && (!o.deposit_coins.length || Coin.isAmino(o.deposit_coins[0])));
  },
  encode(message: MsgCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_creator_address !== "") {
      writer.uint32(10).string(message.pool_creator_address);
    }
    if (message.pool_type_id !== 0) {
      writer.uint32(16).uint32(message.pool_type_id);
    }
    for (const v of message.deposit_coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_creator_address = reader.string();
          break;
        case 2:
          message.pool_type_id = reader.uint32();
          break;
        case 4:
          message.deposit_coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePool {
    return {
      pool_creator_address: isSet(object.pool_creator_address) ? String(object.pool_creator_address) : "",
      pool_type_id: isSet(object.pool_type_id) ? Number(object.pool_type_id) : 0,
      deposit_coins: Array.isArray(object?.deposit_coins) ? object.deposit_coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreatePool): JsonSafe<MsgCreatePool> {
    const obj: any = {};
    message.pool_creator_address !== undefined && (obj.pool_creator_address = message.pool_creator_address);
    message.pool_type_id !== undefined && (obj.pool_type_id = Math.round(message.pool_type_id));
    if (message.deposit_coins) {
      obj.deposit_coins = message.deposit_coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit_coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.pool_creator_address = object.pool_creator_address ?? "";
    message.pool_type_id = object.pool_type_id ?? 0;
    message.deposit_coins = object.deposit_coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    if (object.pool_creator_address !== undefined && object.pool_creator_address !== null) {
      message.pool_creator_address = object.pool_creator_address;
    }
    if (object.pool_type_id !== undefined && object.pool_type_id !== null) {
      message.pool_type_id = object.pool_type_id;
    }
    message.deposit_coins = object.deposit_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreatePool): MsgCreatePoolAmino {
    const obj: any = {};
    obj.pool_creator_address = message.pool_creator_address === "" ? undefined : message.pool_creator_address;
    obj.pool_type_id = message.pool_type_id === 0 ? undefined : message.pool_type_id;
    if (message.deposit_coins) {
      obj.deposit_coins = message.deposit_coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.deposit_coins = message.deposit_coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool {
    return MsgCreatePool.decode(message.value);
  },
  toProto(message: MsgCreatePool): Uint8Array {
    return MsgCreatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.MsgCreatePool",
      value: MsgCreatePool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePool.typeUrl, MsgCreatePool);
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  typeUrl: "/cyber.liquidity.v1beta1.MsgCreatePoolResponse",
  is(o: any): o is MsgCreatePoolResponse {
    return o && o.$typeUrl === MsgCreatePoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreatePoolResponseSDKType {
    return o && o.$typeUrl === MsgCreatePoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreatePoolResponseAmino {
    return o && o.$typeUrl === MsgCreatePoolResponse.typeUrl;
  },
  encode(_: MsgCreatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },
  toJSON(_: MsgCreatePoolResponse): JsonSafe<MsgCreatePoolResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.decode(message.value);
  },
  toProto(message: MsgCreatePoolResponse): Uint8Array {
    return MsgCreatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.MsgCreatePoolResponse",
      value: MsgCreatePoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePoolResponse.typeUrl, MsgCreatePoolResponse);
function createBaseMsgDepositWithinBatch(): MsgDepositWithinBatch {
  return {
    depositor_address: "",
    pool_id: BigInt(0),
    deposit_coins: []
  };
}
export const MsgDepositWithinBatch = {
  typeUrl: "/cyber.liquidity.v1beta1.MsgDepositWithinBatch",
  is(o: any): o is MsgDepositWithinBatch {
    return o && (o.$typeUrl === MsgDepositWithinBatch.typeUrl || typeof o.depositor_address === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.deposit_coins) && (!o.deposit_coins.length || Coin.is(o.deposit_coins[0])));
  },
  isSDK(o: any): o is MsgDepositWithinBatchSDKType {
    return o && (o.$typeUrl === MsgDepositWithinBatch.typeUrl || typeof o.depositor_address === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.deposit_coins) && (!o.deposit_coins.length || Coin.isSDK(o.deposit_coins[0])));
  },
  isAmino(o: any): o is MsgDepositWithinBatchAmino {
    return o && (o.$typeUrl === MsgDepositWithinBatch.typeUrl || typeof o.depositor_address === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.deposit_coins) && (!o.deposit_coins.length || Coin.isAmino(o.deposit_coins[0])));
  },
  encode(message: MsgDepositWithinBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor_address !== "") {
      writer.uint32(10).string(message.depositor_address);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    for (const v of message.deposit_coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositWithinBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositWithinBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor_address = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.deposit_coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDepositWithinBatch {
    return {
      depositor_address: isSet(object.depositor_address) ? String(object.depositor_address) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      deposit_coins: Array.isArray(object?.deposit_coins) ? object.deposit_coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgDepositWithinBatch): JsonSafe<MsgDepositWithinBatch> {
    const obj: any = {};
    message.depositor_address !== undefined && (obj.depositor_address = message.depositor_address);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    if (message.deposit_coins) {
      obj.deposit_coins = message.deposit_coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit_coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDepositWithinBatch>): MsgDepositWithinBatch {
    const message = createBaseMsgDepositWithinBatch();
    message.depositor_address = object.depositor_address ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.deposit_coins = object.deposit_coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositWithinBatchAmino): MsgDepositWithinBatch {
    const message = createBaseMsgDepositWithinBatch();
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositor_address = object.depositor_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.pool_id = BigInt(object.pool_id);
    }
    message.deposit_coins = object.deposit_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDepositWithinBatch): MsgDepositWithinBatchAmino {
    const obj: any = {};
    obj.depositor_address = message.depositor_address === "" ? undefined : message.depositor_address;
    obj.pool_id = message.pool_id !== BigInt(0) ? message.pool_id.toString() : undefined;
    if (message.deposit_coins) {
      obj.deposit_coins = message.deposit_coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.deposit_coins = message.deposit_coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDepositWithinBatchAminoMsg): MsgDepositWithinBatch {
    return MsgDepositWithinBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositWithinBatchProtoMsg): MsgDepositWithinBatch {
    return MsgDepositWithinBatch.decode(message.value);
  },
  toProto(message: MsgDepositWithinBatch): Uint8Array {
    return MsgDepositWithinBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositWithinBatch): MsgDepositWithinBatchProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.MsgDepositWithinBatch",
      value: MsgDepositWithinBatch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDepositWithinBatch.typeUrl, MsgDepositWithinBatch);
function createBaseMsgDepositWithinBatchResponse(): MsgDepositWithinBatchResponse {
  return {};
}
export const MsgDepositWithinBatchResponse = {
  typeUrl: "/cyber.liquidity.v1beta1.MsgDepositWithinBatchResponse",
  is(o: any): o is MsgDepositWithinBatchResponse {
    return o && o.$typeUrl === MsgDepositWithinBatchResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDepositWithinBatchResponseSDKType {
    return o && o.$typeUrl === MsgDepositWithinBatchResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDepositWithinBatchResponseAmino {
    return o && o.$typeUrl === MsgDepositWithinBatchResponse.typeUrl;
  },
  encode(_: MsgDepositWithinBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositWithinBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositWithinBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDepositWithinBatchResponse {
    return {};
  },
  toJSON(_: MsgDepositWithinBatchResponse): JsonSafe<MsgDepositWithinBatchResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDepositWithinBatchResponse>): MsgDepositWithinBatchResponse {
    const message = createBaseMsgDepositWithinBatchResponse();
    return message;
  },
  fromAmino(_: MsgDepositWithinBatchResponseAmino): MsgDepositWithinBatchResponse {
    const message = createBaseMsgDepositWithinBatchResponse();
    return message;
  },
  toAmino(_: MsgDepositWithinBatchResponse): MsgDepositWithinBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositWithinBatchResponseAminoMsg): MsgDepositWithinBatchResponse {
    return MsgDepositWithinBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositWithinBatchResponseProtoMsg): MsgDepositWithinBatchResponse {
    return MsgDepositWithinBatchResponse.decode(message.value);
  },
  toProto(message: MsgDepositWithinBatchResponse): Uint8Array {
    return MsgDepositWithinBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositWithinBatchResponse): MsgDepositWithinBatchResponseProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.MsgDepositWithinBatchResponse",
      value: MsgDepositWithinBatchResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDepositWithinBatchResponse.typeUrl, MsgDepositWithinBatchResponse);
function createBaseMsgWithdrawWithinBatch(): MsgWithdrawWithinBatch {
  return {
    withdrawer_address: "",
    pool_id: BigInt(0),
    pool_coin: Coin.fromPartial({})
  };
}
export const MsgWithdrawWithinBatch = {
  typeUrl: "/cyber.liquidity.v1beta1.MsgWithdrawWithinBatch",
  is(o: any): o is MsgWithdrawWithinBatch {
    return o && (o.$typeUrl === MsgWithdrawWithinBatch.typeUrl || typeof o.withdrawer_address === "string" && typeof o.pool_id === "bigint" && Coin.is(o.pool_coin));
  },
  isSDK(o: any): o is MsgWithdrawWithinBatchSDKType {
    return o && (o.$typeUrl === MsgWithdrawWithinBatch.typeUrl || typeof o.withdrawer_address === "string" && typeof o.pool_id === "bigint" && Coin.isSDK(o.pool_coin));
  },
  isAmino(o: any): o is MsgWithdrawWithinBatchAmino {
    return o && (o.$typeUrl === MsgWithdrawWithinBatch.typeUrl || typeof o.withdrawer_address === "string" && typeof o.pool_id === "bigint" && Coin.isAmino(o.pool_coin));
  },
  encode(message: MsgWithdrawWithinBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawer_address !== "") {
      writer.uint32(10).string(message.withdrawer_address);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.pool_coin !== undefined) {
      Coin.encode(message.pool_coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawWithinBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawWithinBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawer_address = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.pool_coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawWithinBatch {
    return {
      withdrawer_address: isSet(object.withdrawer_address) ? String(object.withdrawer_address) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      pool_coin: isSet(object.pool_coin) ? Coin.fromJSON(object.pool_coin) : undefined
    };
  },
  toJSON(message: MsgWithdrawWithinBatch): JsonSafe<MsgWithdrawWithinBatch> {
    const obj: any = {};
    message.withdrawer_address !== undefined && (obj.withdrawer_address = message.withdrawer_address);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.pool_coin !== undefined && (obj.pool_coin = message.pool_coin ? Coin.toJSON(message.pool_coin) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawWithinBatch>): MsgWithdrawWithinBatch {
    const message = createBaseMsgWithdrawWithinBatch();
    message.withdrawer_address = object.withdrawer_address ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.pool_coin = object.pool_coin !== undefined && object.pool_coin !== null ? Coin.fromPartial(object.pool_coin) : undefined;
    return message;
  },
  fromAmino(object: MsgWithdrawWithinBatchAmino): MsgWithdrawWithinBatch {
    const message = createBaseMsgWithdrawWithinBatch();
    if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
      message.withdrawer_address = object.withdrawer_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.pool_id = BigInt(object.pool_id);
    }
    if (object.pool_coin !== undefined && object.pool_coin !== null) {
      message.pool_coin = Coin.fromAmino(object.pool_coin);
    }
    return message;
  },
  toAmino(message: MsgWithdrawWithinBatch): MsgWithdrawWithinBatchAmino {
    const obj: any = {};
    obj.withdrawer_address = message.withdrawer_address === "" ? undefined : message.withdrawer_address;
    obj.pool_id = message.pool_id !== BigInt(0) ? message.pool_id.toString() : undefined;
    obj.pool_coin = message.pool_coin ? Coin.toAmino(message.pool_coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawWithinBatchAminoMsg): MsgWithdrawWithinBatch {
    return MsgWithdrawWithinBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawWithinBatchProtoMsg): MsgWithdrawWithinBatch {
    return MsgWithdrawWithinBatch.decode(message.value);
  },
  toProto(message: MsgWithdrawWithinBatch): Uint8Array {
    return MsgWithdrawWithinBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawWithinBatch): MsgWithdrawWithinBatchProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.MsgWithdrawWithinBatch",
      value: MsgWithdrawWithinBatch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawWithinBatch.typeUrl, MsgWithdrawWithinBatch);
function createBaseMsgWithdrawWithinBatchResponse(): MsgWithdrawWithinBatchResponse {
  return {};
}
export const MsgWithdrawWithinBatchResponse = {
  typeUrl: "/cyber.liquidity.v1beta1.MsgWithdrawWithinBatchResponse",
  is(o: any): o is MsgWithdrawWithinBatchResponse {
    return o && o.$typeUrl === MsgWithdrawWithinBatchResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWithdrawWithinBatchResponseSDKType {
    return o && o.$typeUrl === MsgWithdrawWithinBatchResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWithdrawWithinBatchResponseAmino {
    return o && o.$typeUrl === MsgWithdrawWithinBatchResponse.typeUrl;
  },
  encode(_: MsgWithdrawWithinBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawWithinBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawWithinBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawWithinBatchResponse {
    return {};
  },
  toJSON(_: MsgWithdrawWithinBatchResponse): JsonSafe<MsgWithdrawWithinBatchResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgWithdrawWithinBatchResponse>): MsgWithdrawWithinBatchResponse {
    const message = createBaseMsgWithdrawWithinBatchResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawWithinBatchResponseAmino): MsgWithdrawWithinBatchResponse {
    const message = createBaseMsgWithdrawWithinBatchResponse();
    return message;
  },
  toAmino(_: MsgWithdrawWithinBatchResponse): MsgWithdrawWithinBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawWithinBatchResponseAminoMsg): MsgWithdrawWithinBatchResponse {
    return MsgWithdrawWithinBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawWithinBatchResponseProtoMsg): MsgWithdrawWithinBatchResponse {
    return MsgWithdrawWithinBatchResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawWithinBatchResponse): Uint8Array {
    return MsgWithdrawWithinBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawWithinBatchResponse): MsgWithdrawWithinBatchResponseProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.MsgWithdrawWithinBatchResponse",
      value: MsgWithdrawWithinBatchResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawWithinBatchResponse.typeUrl, MsgWithdrawWithinBatchResponse);
function createBaseMsgSwapWithinBatch(): MsgSwapWithinBatch {
  return {
    swap_requester_address: "",
    pool_id: BigInt(0),
    swap_type_id: 0,
    offer_coin: Coin.fromPartial({}),
    demand_coin_denom: "",
    offer_coin_fee: Coin.fromPartial({}),
    order_price: ""
  };
}
export const MsgSwapWithinBatch = {
  typeUrl: "/cyber.liquidity.v1beta1.MsgSwapWithinBatch",
  is(o: any): o is MsgSwapWithinBatch {
    return o && (o.$typeUrl === MsgSwapWithinBatch.typeUrl || typeof o.swap_requester_address === "string" && typeof o.pool_id === "bigint" && typeof o.swap_type_id === "number" && Coin.is(o.offer_coin) && typeof o.demand_coin_denom === "string" && Coin.is(o.offer_coin_fee) && typeof o.order_price === "string");
  },
  isSDK(o: any): o is MsgSwapWithinBatchSDKType {
    return o && (o.$typeUrl === MsgSwapWithinBatch.typeUrl || typeof o.swap_requester_address === "string" && typeof o.pool_id === "bigint" && typeof o.swap_type_id === "number" && Coin.isSDK(o.offer_coin) && typeof o.demand_coin_denom === "string" && Coin.isSDK(o.offer_coin_fee) && typeof o.order_price === "string");
  },
  isAmino(o: any): o is MsgSwapWithinBatchAmino {
    return o && (o.$typeUrl === MsgSwapWithinBatch.typeUrl || typeof o.swap_requester_address === "string" && typeof o.pool_id === "bigint" && typeof o.swap_type_id === "number" && Coin.isAmino(o.offer_coin) && typeof o.demand_coin_denom === "string" && Coin.isAmino(o.offer_coin_fee) && typeof o.order_price === "string");
  },
  encode(message: MsgSwapWithinBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swap_requester_address !== "") {
      writer.uint32(10).string(message.swap_requester_address);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.swap_type_id !== 0) {
      writer.uint32(24).uint32(message.swap_type_id);
    }
    if (message.offer_coin !== undefined) {
      Coin.encode(message.offer_coin, writer.uint32(34).fork()).ldelim();
    }
    if (message.demand_coin_denom !== "") {
      writer.uint32(42).string(message.demand_coin_denom);
    }
    if (message.offer_coin_fee !== undefined) {
      Coin.encode(message.offer_coin_fee, writer.uint32(50).fork()).ldelim();
    }
    if (message.order_price !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.order_price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapWithinBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapWithinBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap_requester_address = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.swap_type_id = reader.uint32();
          break;
        case 4:
          message.offer_coin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.demand_coin_denom = reader.string();
          break;
        case 6:
          message.offer_coin_fee = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.order_price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapWithinBatch {
    return {
      swap_requester_address: isSet(object.swap_requester_address) ? String(object.swap_requester_address) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      swap_type_id: isSet(object.swap_type_id) ? Number(object.swap_type_id) : 0,
      offer_coin: isSet(object.offer_coin) ? Coin.fromJSON(object.offer_coin) : undefined,
      demand_coin_denom: isSet(object.demand_coin_denom) ? String(object.demand_coin_denom) : "",
      offer_coin_fee: isSet(object.offer_coin_fee) ? Coin.fromJSON(object.offer_coin_fee) : undefined,
      order_price: isSet(object.order_price) ? String(object.order_price) : ""
    };
  },
  toJSON(message: MsgSwapWithinBatch): JsonSafe<MsgSwapWithinBatch> {
    const obj: any = {};
    message.swap_requester_address !== undefined && (obj.swap_requester_address = message.swap_requester_address);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.swap_type_id !== undefined && (obj.swap_type_id = Math.round(message.swap_type_id));
    message.offer_coin !== undefined && (obj.offer_coin = message.offer_coin ? Coin.toJSON(message.offer_coin) : undefined);
    message.demand_coin_denom !== undefined && (obj.demand_coin_denom = message.demand_coin_denom);
    message.offer_coin_fee !== undefined && (obj.offer_coin_fee = message.offer_coin_fee ? Coin.toJSON(message.offer_coin_fee) : undefined);
    message.order_price !== undefined && (obj.order_price = message.order_price);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSwapWithinBatch>): MsgSwapWithinBatch {
    const message = createBaseMsgSwapWithinBatch();
    message.swap_requester_address = object.swap_requester_address ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.swap_type_id = object.swap_type_id ?? 0;
    message.offer_coin = object.offer_coin !== undefined && object.offer_coin !== null ? Coin.fromPartial(object.offer_coin) : undefined;
    message.demand_coin_denom = object.demand_coin_denom ?? "";
    message.offer_coin_fee = object.offer_coin_fee !== undefined && object.offer_coin_fee !== null ? Coin.fromPartial(object.offer_coin_fee) : undefined;
    message.order_price = object.order_price ?? "";
    return message;
  },
  fromAmino(object: MsgSwapWithinBatchAmino): MsgSwapWithinBatch {
    const message = createBaseMsgSwapWithinBatch();
    if (object.swap_requester_address !== undefined && object.swap_requester_address !== null) {
      message.swap_requester_address = object.swap_requester_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.pool_id = BigInt(object.pool_id);
    }
    if (object.swap_type_id !== undefined && object.swap_type_id !== null) {
      message.swap_type_id = object.swap_type_id;
    }
    if (object.offer_coin !== undefined && object.offer_coin !== null) {
      message.offer_coin = Coin.fromAmino(object.offer_coin);
    }
    if (object.demand_coin_denom !== undefined && object.demand_coin_denom !== null) {
      message.demand_coin_denom = object.demand_coin_denom;
    }
    if (object.offer_coin_fee !== undefined && object.offer_coin_fee !== null) {
      message.offer_coin_fee = Coin.fromAmino(object.offer_coin_fee);
    }
    if (object.order_price !== undefined && object.order_price !== null) {
      message.order_price = object.order_price;
    }
    return message;
  },
  toAmino(message: MsgSwapWithinBatch): MsgSwapWithinBatchAmino {
    const obj: any = {};
    obj.swap_requester_address = message.swap_requester_address === "" ? undefined : message.swap_requester_address;
    obj.pool_id = message.pool_id !== BigInt(0) ? message.pool_id.toString() : undefined;
    obj.swap_type_id = message.swap_type_id === 0 ? undefined : message.swap_type_id;
    obj.offer_coin = message.offer_coin ? Coin.toAmino(message.offer_coin) : undefined;
    obj.demand_coin_denom = message.demand_coin_denom === "" ? undefined : message.demand_coin_denom;
    obj.offer_coin_fee = message.offer_coin_fee ? Coin.toAmino(message.offer_coin_fee) : undefined;
    obj.order_price = message.order_price === "" ? undefined : message.order_price;
    return obj;
  },
  fromAminoMsg(object: MsgSwapWithinBatchAminoMsg): MsgSwapWithinBatch {
    return MsgSwapWithinBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapWithinBatchProtoMsg): MsgSwapWithinBatch {
    return MsgSwapWithinBatch.decode(message.value);
  },
  toProto(message: MsgSwapWithinBatch): Uint8Array {
    return MsgSwapWithinBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapWithinBatch): MsgSwapWithinBatchProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.MsgSwapWithinBatch",
      value: MsgSwapWithinBatch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSwapWithinBatch.typeUrl, MsgSwapWithinBatch);
function createBaseMsgSwapWithinBatchResponse(): MsgSwapWithinBatchResponse {
  return {};
}
export const MsgSwapWithinBatchResponse = {
  typeUrl: "/cyber.liquidity.v1beta1.MsgSwapWithinBatchResponse",
  is(o: any): o is MsgSwapWithinBatchResponse {
    return o && o.$typeUrl === MsgSwapWithinBatchResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSwapWithinBatchResponseSDKType {
    return o && o.$typeUrl === MsgSwapWithinBatchResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSwapWithinBatchResponseAmino {
    return o && o.$typeUrl === MsgSwapWithinBatchResponse.typeUrl;
  },
  encode(_: MsgSwapWithinBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapWithinBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapWithinBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSwapWithinBatchResponse {
    return {};
  },
  toJSON(_: MsgSwapWithinBatchResponse): JsonSafe<MsgSwapWithinBatchResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSwapWithinBatchResponse>): MsgSwapWithinBatchResponse {
    const message = createBaseMsgSwapWithinBatchResponse();
    return message;
  },
  fromAmino(_: MsgSwapWithinBatchResponseAmino): MsgSwapWithinBatchResponse {
    const message = createBaseMsgSwapWithinBatchResponse();
    return message;
  },
  toAmino(_: MsgSwapWithinBatchResponse): MsgSwapWithinBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSwapWithinBatchResponseAminoMsg): MsgSwapWithinBatchResponse {
    return MsgSwapWithinBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapWithinBatchResponseProtoMsg): MsgSwapWithinBatchResponse {
    return MsgSwapWithinBatchResponse.decode(message.value);
  },
  toProto(message: MsgSwapWithinBatchResponse): Uint8Array {
    return MsgSwapWithinBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapWithinBatchResponse): MsgSwapWithinBatchResponseProtoMsg {
    return {
      typeUrl: "/cyber.liquidity.v1beta1.MsgSwapWithinBatchResponse",
      value: MsgSwapWithinBatchResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSwapWithinBatchResponse.typeUrl, MsgSwapWithinBatchResponse);