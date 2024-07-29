import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../auth/v1beta1/auth";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
  base_account?: BaseAccount;
  original_vesting: Coin[];
  delegated_free: Coin[];
  delegated_vesting: Coin[];
  end_time: bigint;
}
export interface BaseVestingAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.BaseVestingAccount";
  value: Uint8Array;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountAmino {
  base_account?: BaseAccountAmino;
  original_vesting?: CoinAmino[];
  delegated_free?: CoinAmino[];
  delegated_vesting?: CoinAmino[];
  end_time?: string;
}
export interface BaseVestingAccountAminoMsg {
  type: "cosmos-sdk/BaseVestingAccount";
  value: BaseVestingAccountAmino;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountSDKType {
  base_account?: BaseAccountSDKType;
  original_vesting: CoinSDKType[];
  delegated_free: CoinSDKType[];
  delegated_vesting: CoinSDKType[];
  end_time: bigint;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
  base_vesting_account?: BaseVestingAccount;
  start_time: bigint;
}
export interface ContinuousVestingAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.ContinuousVestingAccount";
  value: Uint8Array;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  start_time?: string;
}
export interface ContinuousVestingAccountAminoMsg {
  type: "cosmos-sdk/ContinuousVestingAccount";
  value: ContinuousVestingAccountAmino;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  start_time: bigint;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
  base_vesting_account?: BaseVestingAccount;
}
export interface DelayedVestingAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.DelayedVestingAccount";
  value: Uint8Array;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
}
export interface DelayedVestingAccountAminoMsg {
  type: "cosmos-sdk/DelayedVestingAccount";
  value: DelayedVestingAccountAmino;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
  length: bigint;
  amount: Coin[];
}
export interface PeriodProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.Period";
  value: Uint8Array;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodAmino {
  length?: string;
  amount?: CoinAmino[];
}
export interface PeriodAminoMsg {
  type: "cosmos-sdk/Period";
  value: PeriodAmino;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodSDKType {
  length: bigint;
  amount: CoinSDKType[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
  base_vesting_account?: BaseVestingAccount;
  start_time: bigint;
  vesting_periods: Period[];
}
export interface PeriodicVestingAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.PeriodicVestingAccount";
  value: Uint8Array;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  start_time?: string;
  vesting_periods?: PeriodAmino[];
}
export interface PeriodicVestingAccountAminoMsg {
  type: "cosmos-sdk/PeriodicVestingAccount";
  value: PeriodicVestingAccountAmino;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  start_time: bigint;
  vesting_periods: PeriodSDKType[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
  base_vesting_account?: BaseVestingAccount;
}
export interface PermanentLockedAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.PermanentLockedAccount";
  value: Uint8Array;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
}
export interface PermanentLockedAccountAminoMsg {
  type: "cosmos-sdk/PermanentLockedAccount";
  value: PermanentLockedAccountAmino;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
}
function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    base_account: undefined,
    original_vesting: [],
    delegated_free: [],
    delegated_vesting: [],
    end_time: BigInt(0)
  };
}
export const BaseVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
  aminoType: "cosmos-sdk/BaseVestingAccount",
  is(o: any): o is BaseVestingAccount {
    return o && (o.$typeUrl === BaseVestingAccount.typeUrl || Array.isArray(o.original_vesting) && (!o.original_vesting.length || Coin.is(o.original_vesting[0])) && Array.isArray(o.delegated_free) && (!o.delegated_free.length || Coin.is(o.delegated_free[0])) && Array.isArray(o.delegated_vesting) && (!o.delegated_vesting.length || Coin.is(o.delegated_vesting[0])) && typeof o.end_time === "bigint");
  },
  isSDK(o: any): o is BaseVestingAccountSDKType {
    return o && (o.$typeUrl === BaseVestingAccount.typeUrl || Array.isArray(o.original_vesting) && (!o.original_vesting.length || Coin.isSDK(o.original_vesting[0])) && Array.isArray(o.delegated_free) && (!o.delegated_free.length || Coin.isSDK(o.delegated_free[0])) && Array.isArray(o.delegated_vesting) && (!o.delegated_vesting.length || Coin.isSDK(o.delegated_vesting[0])) && typeof o.end_time === "bigint");
  },
  isAmino(o: any): o is BaseVestingAccountAmino {
    return o && (o.$typeUrl === BaseVestingAccount.typeUrl || Array.isArray(o.original_vesting) && (!o.original_vesting.length || Coin.isAmino(o.original_vesting[0])) && Array.isArray(o.delegated_free) && (!o.delegated_free.length || Coin.isAmino(o.delegated_free[0])) && Array.isArray(o.delegated_vesting) && (!o.delegated_vesting.length || Coin.isAmino(o.delegated_vesting[0])) && typeof o.end_time === "bigint");
  },
  encode(message: BaseVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.original_vesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegated_free) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegated_vesting) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.end_time !== BigInt(0)) {
      writer.uint32(40).int64(message.end_time);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BaseVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_account = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.original_vesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegated_free.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegated_vesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.end_time = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseVestingAccount {
    return {
      base_account: isSet(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
      original_vesting: Array.isArray(object?.original_vesting) ? object.original_vesting.map((e: any) => Coin.fromJSON(e)) : [],
      delegated_free: Array.isArray(object?.delegated_free) ? object.delegated_free.map((e: any) => Coin.fromJSON(e)) : [],
      delegated_vesting: Array.isArray(object?.delegated_vesting) ? object.delegated_vesting.map((e: any) => Coin.fromJSON(e)) : [],
      end_time: isSet(object.end_time) ? BigInt(object.end_time.toString()) : BigInt(0)
    };
  },
  toJSON(message: BaseVestingAccount): JsonSafe<BaseVestingAccount> {
    const obj: any = {};
    message.base_account !== undefined && (obj.base_account = message.base_account ? BaseAccount.toJSON(message.base_account) : undefined);
    if (message.original_vesting) {
      obj.original_vesting = message.original_vesting.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.original_vesting = [];
    }
    if (message.delegated_free) {
      obj.delegated_free = message.delegated_free.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.delegated_free = [];
    }
    if (message.delegated_vesting) {
      obj.delegated_vesting = message.delegated_vesting.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.delegated_vesting = [];
    }
    message.end_time !== undefined && (obj.end_time = (message.end_time || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<BaseVestingAccount>): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
    message.original_vesting = object.original_vesting?.map(e => Coin.fromPartial(e)) || [];
    message.delegated_free = object.delegated_free?.map(e => Coin.fromPartial(e)) || [];
    message.delegated_vesting = object.delegated_vesting?.map(e => Coin.fromPartial(e)) || [];
    message.end_time = object.end_time !== undefined && object.end_time !== null ? BigInt(object.end_time.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BaseVestingAccountAmino): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.base_account = BaseAccount.fromAmino(object.base_account);
    }
    message.original_vesting = object.original_vesting?.map(e => Coin.fromAmino(e)) || [];
    message.delegated_free = object.delegated_free?.map(e => Coin.fromAmino(e)) || [];
    message.delegated_vesting = object.delegated_vesting?.map(e => Coin.fromAmino(e)) || [];
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = BigInt(object.end_time);
    }
    return message;
  },
  toAmino(message: BaseVestingAccount): BaseVestingAccountAmino {
    const obj: any = {};
    obj.base_account = message.base_account ? BaseAccount.toAmino(message.base_account) : undefined;
    if (message.original_vesting) {
      obj.original_vesting = message.original_vesting.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.original_vesting = message.original_vesting;
    }
    if (message.delegated_free) {
      obj.delegated_free = message.delegated_free.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.delegated_free = message.delegated_free;
    }
    if (message.delegated_vesting) {
      obj.delegated_vesting = message.delegated_vesting.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.delegated_vesting = message.delegated_vesting;
    }
    obj.end_time = message.end_time !== BigInt(0) ? message.end_time.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BaseVestingAccountAminoMsg): BaseVestingAccount {
    return BaseVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: BaseVestingAccount): BaseVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/BaseVestingAccount",
      value: BaseVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: BaseVestingAccountProtoMsg): BaseVestingAccount {
    return BaseVestingAccount.decode(message.value);
  },
  toProto(message: BaseVestingAccount): Uint8Array {
    return BaseVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: BaseVestingAccount): BaseVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
      value: BaseVestingAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BaseVestingAccount.typeUrl, BaseVestingAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(BaseVestingAccount.aminoType, BaseVestingAccount.typeUrl);
function createBaseContinuousVestingAccount(): ContinuousVestingAccount {
  return {
    base_vesting_account: undefined,
    start_time: BigInt(0)
  };
}
export const ContinuousVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
  aminoType: "cosmos-sdk/ContinuousVestingAccount",
  is(o: any): o is ContinuousVestingAccount {
    return o && (o.$typeUrl === ContinuousVestingAccount.typeUrl || typeof o.start_time === "bigint");
  },
  isSDK(o: any): o is ContinuousVestingAccountSDKType {
    return o && (o.$typeUrl === ContinuousVestingAccount.typeUrl || typeof o.start_time === "bigint");
  },
  isAmino(o: any): o is ContinuousVestingAccountAmino {
    return o && (o.$typeUrl === ContinuousVestingAccount.typeUrl || typeof o.start_time === "bigint");
  },
  encode(message: ContinuousVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    if (message.start_time !== BigInt(0)) {
      writer.uint32(16).int64(message.start_time);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContinuousVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.start_time = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContinuousVestingAccount {
    return {
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
      start_time: isSet(object.start_time) ? BigInt(object.start_time.toString()) : BigInt(0)
    };
  },
  toJSON(message: ContinuousVestingAccount): JsonSafe<ContinuousVestingAccount> {
    const obj: any = {};
    message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account ? BaseVestingAccount.toJSON(message.base_vesting_account) : undefined);
    message.start_time !== undefined && (obj.start_time = (message.start_time || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ContinuousVestingAccount>): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    message.start_time = object.start_time !== undefined && object.start_time !== null ? BigInt(object.start_time.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContinuousVestingAccountAmino): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.base_vesting_account = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = BigInt(object.start_time);
    }
    return message;
  },
  toAmino(message: ContinuousVestingAccount): ContinuousVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.base_vesting_account ? BaseVestingAccount.toAmino(message.base_vesting_account) : undefined;
    obj.start_time = message.start_time !== BigInt(0) ? message.start_time.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContinuousVestingAccountAminoMsg): ContinuousVestingAccount {
    return ContinuousVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/ContinuousVestingAccount",
      value: ContinuousVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: ContinuousVestingAccountProtoMsg): ContinuousVestingAccount {
    return ContinuousVestingAccount.decode(message.value);
  },
  toProto(message: ContinuousVestingAccount): Uint8Array {
    return ContinuousVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
      value: ContinuousVestingAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ContinuousVestingAccount.typeUrl, ContinuousVestingAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(ContinuousVestingAccount.aminoType, ContinuousVestingAccount.typeUrl);
function createBaseDelayedVestingAccount(): DelayedVestingAccount {
  return {
    base_vesting_account: undefined
  };
}
export const DelayedVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
  aminoType: "cosmos-sdk/DelayedVestingAccount",
  is(o: any): o is DelayedVestingAccount {
    return o && o.$typeUrl === DelayedVestingAccount.typeUrl;
  },
  isSDK(o: any): o is DelayedVestingAccountSDKType {
    return o && o.$typeUrl === DelayedVestingAccount.typeUrl;
  },
  isAmino(o: any): o is DelayedVestingAccountAmino {
    return o && o.$typeUrl === DelayedVestingAccount.typeUrl;
  },
  encode(message: DelayedVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelayedVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelayedVestingAccount {
    return {
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined
    };
  },
  toJSON(message: DelayedVestingAccount): JsonSafe<DelayedVestingAccount> {
    const obj: any = {};
    message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account ? BaseVestingAccount.toJSON(message.base_vesting_account) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DelayedVestingAccount>): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    return message;
  },
  fromAmino(object: DelayedVestingAccountAmino): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.base_vesting_account = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    return message;
  },
  toAmino(message: DelayedVestingAccount): DelayedVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.base_vesting_account ? BaseVestingAccount.toAmino(message.base_vesting_account) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelayedVestingAccountAminoMsg): DelayedVestingAccount {
    return DelayedVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: DelayedVestingAccount): DelayedVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/DelayedVestingAccount",
      value: DelayedVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: DelayedVestingAccountProtoMsg): DelayedVestingAccount {
    return DelayedVestingAccount.decode(message.value);
  },
  toProto(message: DelayedVestingAccount): Uint8Array {
    return DelayedVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: DelayedVestingAccount): DelayedVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
      value: DelayedVestingAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelayedVestingAccount.typeUrl, DelayedVestingAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(DelayedVestingAccount.aminoType, DelayedVestingAccount.typeUrl);
function createBasePeriod(): Period {
  return {
    length: BigInt(0),
    amount: []
  };
}
export const Period = {
  typeUrl: "/cosmos.vesting.v1beta1.Period",
  aminoType: "cosmos-sdk/Period",
  is(o: any): o is Period {
    return o && (o.$typeUrl === Period.typeUrl || typeof o.length === "bigint" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is PeriodSDKType {
    return o && (o.$typeUrl === Period.typeUrl || typeof o.length === "bigint" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is PeriodAmino {
    return o && (o.$typeUrl === Period.typeUrl || typeof o.length === "bigint" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: Period, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.length !== BigInt(0)) {
      writer.uint32(8).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Period {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Period {
    return {
      length: isSet(object.length) ? BigInt(object.length.toString()) : BigInt(0),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Period): JsonSafe<Period> {
    const obj: any = {};
    message.length !== undefined && (obj.length = (message.length || BigInt(0)).toString());
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Period>): Period {
    const message = createBasePeriod();
    message.length = object.length !== undefined && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PeriodAmino): Period {
    const message = createBasePeriod();
    if (object.length !== undefined && object.length !== null) {
      message.length = BigInt(object.length);
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Period): PeriodAmino {
    const obj: any = {};
    obj.length = message.length !== BigInt(0) ? message.length.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: PeriodAminoMsg): Period {
    return Period.fromAmino(object.value);
  },
  toAminoMsg(message: Period): PeriodAminoMsg {
    return {
      type: "cosmos-sdk/Period",
      value: Period.toAmino(message)
    };
  },
  fromProtoMsg(message: PeriodProtoMsg): Period {
    return Period.decode(message.value);
  },
  toProto(message: Period): Uint8Array {
    return Period.encode(message).finish();
  },
  toProtoMsg(message: Period): PeriodProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.Period",
      value: Period.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Period.typeUrl, Period);
GlobalDecoderRegistry.registerAminoProtoMapping(Period.aminoType, Period.typeUrl);
function createBasePeriodicVestingAccount(): PeriodicVestingAccount {
  return {
    base_vesting_account: undefined,
    start_time: BigInt(0),
    vesting_periods: []
  };
}
export const PeriodicVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
  aminoType: "cosmos-sdk/PeriodicVestingAccount",
  is(o: any): o is PeriodicVestingAccount {
    return o && (o.$typeUrl === PeriodicVestingAccount.typeUrl || typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || Period.is(o.vesting_periods[0])));
  },
  isSDK(o: any): o is PeriodicVestingAccountSDKType {
    return o && (o.$typeUrl === PeriodicVestingAccount.typeUrl || typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || Period.isSDK(o.vesting_periods[0])));
  },
  isAmino(o: any): o is PeriodicVestingAccountAmino {
    return o && (o.$typeUrl === PeriodicVestingAccount.typeUrl || typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || Period.isAmino(o.vesting_periods[0])));
  },
  encode(message: PeriodicVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    if (message.start_time !== BigInt(0)) {
      writer.uint32(16).int64(message.start_time);
    }
    for (const v of message.vesting_periods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodicVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.start_time = reader.int64();
          break;
        case 3:
          message.vesting_periods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeriodicVestingAccount {
    return {
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
      start_time: isSet(object.start_time) ? BigInt(object.start_time.toString()) : BigInt(0),
      vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  toJSON(message: PeriodicVestingAccount): JsonSafe<PeriodicVestingAccount> {
    const obj: any = {};
    message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account ? BaseVestingAccount.toJSON(message.base_vesting_account) : undefined);
    message.start_time !== undefined && (obj.start_time = (message.start_time || BigInt(0)).toString());
    if (message.vesting_periods) {
      obj.vesting_periods = message.vesting_periods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PeriodicVestingAccount>): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    message.start_time = object.start_time !== undefined && object.start_time !== null ? BigInt(object.start_time.toString()) : BigInt(0);
    message.vesting_periods = object.vesting_periods?.map(e => Period.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PeriodicVestingAccountAmino): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.base_vesting_account = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = BigInt(object.start_time);
    }
    message.vesting_periods = object.vesting_periods?.map(e => Period.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PeriodicVestingAccount): PeriodicVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.base_vesting_account ? BaseVestingAccount.toAmino(message.base_vesting_account) : undefined;
    obj.start_time = message.start_time !== BigInt(0) ? message.start_time.toString() : undefined;
    if (message.vesting_periods) {
      obj.vesting_periods = message.vesting_periods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.vesting_periods = message.vesting_periods;
    }
    return obj;
  },
  fromAminoMsg(object: PeriodicVestingAccountAminoMsg): PeriodicVestingAccount {
    return PeriodicVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/PeriodicVestingAccount",
      value: PeriodicVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: PeriodicVestingAccountProtoMsg): PeriodicVestingAccount {
    return PeriodicVestingAccount.decode(message.value);
  },
  toProto(message: PeriodicVestingAccount): Uint8Array {
    return PeriodicVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
      value: PeriodicVestingAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PeriodicVestingAccount.typeUrl, PeriodicVestingAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(PeriodicVestingAccount.aminoType, PeriodicVestingAccount.typeUrl);
function createBasePermanentLockedAccount(): PermanentLockedAccount {
  return {
    base_vesting_account: undefined
  };
}
export const PermanentLockedAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
  aminoType: "cosmos-sdk/PermanentLockedAccount",
  is(o: any): o is PermanentLockedAccount {
    return o && o.$typeUrl === PermanentLockedAccount.typeUrl;
  },
  isSDK(o: any): o is PermanentLockedAccountSDKType {
    return o && o.$typeUrl === PermanentLockedAccount.typeUrl;
  },
  isAmino(o: any): o is PermanentLockedAccountAmino {
    return o && o.$typeUrl === PermanentLockedAccount.typeUrl;
  },
  encode(message: PermanentLockedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PermanentLockedAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PermanentLockedAccount {
    return {
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined
    };
  },
  toJSON(message: PermanentLockedAccount): JsonSafe<PermanentLockedAccount> {
    const obj: any = {};
    message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account ? BaseVestingAccount.toJSON(message.base_vesting_account) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<PermanentLockedAccount>): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    return message;
  },
  fromAmino(object: PermanentLockedAccountAmino): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.base_vesting_account = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    return message;
  },
  toAmino(message: PermanentLockedAccount): PermanentLockedAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.base_vesting_account ? BaseVestingAccount.toAmino(message.base_vesting_account) : undefined;
    return obj;
  },
  fromAminoMsg(object: PermanentLockedAccountAminoMsg): PermanentLockedAccount {
    return PermanentLockedAccount.fromAmino(object.value);
  },
  toAminoMsg(message: PermanentLockedAccount): PermanentLockedAccountAminoMsg {
    return {
      type: "cosmos-sdk/PermanentLockedAccount",
      value: PermanentLockedAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: PermanentLockedAccountProtoMsg): PermanentLockedAccount {
    return PermanentLockedAccount.decode(message.value);
  },
  toProto(message: PermanentLockedAccount): Uint8Array {
    return PermanentLockedAccount.encode(message).finish();
  },
  toProtoMsg(message: PermanentLockedAccount): PermanentLockedAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
      value: PermanentLockedAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PermanentLockedAccount.typeUrl, PermanentLockedAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(PermanentLockedAccount.aminoType, PermanentLockedAccount.typeUrl);