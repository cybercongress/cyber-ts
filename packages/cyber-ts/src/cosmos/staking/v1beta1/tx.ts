import { Description, DescriptionAmino, DescriptionSDKType, CommissionRates, CommissionRatesAmino, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
  description: Description;
  commission: CommissionRates;
  min_self_delegation: string;
  delegator_address: string;
  validator_address: string;
  pubkey?: Any | undefined;
  value: Coin;
}
export interface MsgCreateValidatorProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgCreateValidator";
  value: Uint8Array;
}
export type MsgCreateValidatorEncoded = Omit<MsgCreateValidator, "pubkey"> & {
  pubkey?: AnyProtoMsg | undefined;
};
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorAmino {
  description?: DescriptionAmino;
  commission?: CommissionRatesAmino;
  min_self_delegation?: string;
  delegator_address?: string;
  validator_address?: string;
  pubkey?: AnyAmino;
  value?: CoinAmino;
}
export interface MsgCreateValidatorAminoMsg {
  type: "cosmos-sdk/MsgCreateValidator";
  value: MsgCreateValidatorAmino;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorSDKType {
  description: DescriptionSDKType;
  commission: CommissionRatesSDKType;
  min_self_delegation: string;
  delegator_address: string;
  validator_address: string;
  pubkey?: AnySDKType | undefined;
  value: CoinSDKType;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {}
export interface MsgCreateValidatorResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse";
  value: Uint8Array;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseAmino {}
export interface MsgCreateValidatorResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateValidatorResponse";
  value: MsgCreateValidatorResponseAmino;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseSDKType {}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
  description: Description;
  validator_address: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */
  commission_rate: string;
  min_self_delegation: string;
}
export interface MsgEditValidatorProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgEditValidator";
  value: Uint8Array;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorAmino {
  description?: DescriptionAmino;
  validator_address?: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */
  commission_rate?: string;
  min_self_delegation?: string;
}
export interface MsgEditValidatorAminoMsg {
  type: "cosmos-sdk/MsgEditValidator";
  value: MsgEditValidatorAmino;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorSDKType {
  description: DescriptionSDKType;
  validator_address: string;
  commission_rate: string;
  min_self_delegation: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {}
export interface MsgEditValidatorResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgEditValidatorResponse";
  value: Uint8Array;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseAmino {}
export interface MsgEditValidatorResponseAminoMsg {
  type: "cosmos-sdk/MsgEditValidatorResponse";
  value: MsgEditValidatorResponseAmino;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseSDKType {}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
  delegator_address: string;
  validator_address: string;
  amount: Coin;
}
export interface MsgDelegateProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgDelegate";
  value: Uint8Array;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: CoinAmino;
}
export interface MsgDelegateAminoMsg {
  type: "cosmos-sdk/MsgDelegate";
  value: MsgDelegateAmino;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {}
export interface MsgDelegateResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgDelegateResponse";
  value: Uint8Array;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseAmino {}
export interface MsgDelegateResponseAminoMsg {
  type: "cosmos-sdk/MsgDelegateResponse";
  value: MsgDelegateResponseAmino;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseSDKType {}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount: Coin;
}
export interface MsgBeginRedelegateProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgBeginRedelegate";
  value: Uint8Array;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateAmino {
  delegator_address?: string;
  validator_src_address?: string;
  validator_dst_address?: string;
  amount?: CoinAmino;
}
export interface MsgBeginRedelegateAminoMsg {
  type: "cosmos-sdk/MsgBeginRedelegate";
  value: MsgBeginRedelegateAmino;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount: CoinSDKType;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
  completion_time: Date;
}
export interface MsgBeginRedelegateResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse";
  value: Uint8Array;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseAmino {
  completion_time?: string;
}
export interface MsgBeginRedelegateResponseAminoMsg {
  type: "cosmos-sdk/MsgBeginRedelegateResponse";
  value: MsgBeginRedelegateResponseAmino;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseSDKType {
  completion_time: Date;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
  delegator_address: string;
  validator_address: string;
  amount: Coin;
}
export interface MsgUndelegateProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgUndelegate";
  value: Uint8Array;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: CoinAmino;
}
export interface MsgUndelegateAminoMsg {
  type: "cosmos-sdk/MsgUndelegate";
  value: MsgUndelegateAmino;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
  completion_time: Date;
}
export interface MsgUndelegateResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgUndelegateResponse";
  value: Uint8Array;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseAmino {
  completion_time?: string;
}
export interface MsgUndelegateResponseAminoMsg {
  type: "cosmos-sdk/MsgUndelegateResponse";
  value: MsgUndelegateResponseAmino;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseSDKType {
  completion_time: Date;
}
function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    description: Description.fromPartial({}),
    commission: CommissionRates.fromPartial({}),
    min_self_delegation: "",
    delegator_address: "",
    validator_address: "",
    pubkey: undefined,
    value: Coin.fromPartial({})
  };
}
export const MsgCreateValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
  aminoType: "cosmos-sdk/MsgCreateValidator",
  is(o: any): o is MsgCreateValidator {
    return o && (o.$typeUrl === MsgCreateValidator.typeUrl || Description.is(o.description) && CommissionRates.is(o.commission) && typeof o.min_self_delegation === "string" && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.is(o.value));
  },
  isSDK(o: any): o is MsgCreateValidatorSDKType {
    return o && (o.$typeUrl === MsgCreateValidator.typeUrl || Description.isSDK(o.description) && CommissionRates.isSDK(o.commission) && typeof o.min_self_delegation === "string" && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isSDK(o.value));
  },
  isAmino(o: any): o is MsgCreateValidatorAmino {
    return o && (o.$typeUrl === MsgCreateValidator.typeUrl || Description.isAmino(o.description) && CommissionRates.isAmino(o.commission) && typeof o.min_self_delegation === "string" && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.value));
  },
  encode(message: MsgCreateValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }
    if (message.min_self_delegation !== "") {
      writer.uint32(26).string(message.min_self_delegation);
    }
    if (message.delegator_address !== "") {
      writer.uint32(34).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(42).string(message.validator_address);
    }
    if (message.pubkey !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.pubkey), writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
          break;
        case 3:
          message.min_self_delegation = reader.string();
          break;
        case 4:
          message.delegator_address = reader.string();
          break;
        case 5:
          message.validator_address = reader.string();
          break;
        case 6:
          message.pubkey = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 7:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateValidator {
    return {
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      pubkey: isSet(object.pubkey) ? GlobalDecoderRegistry.fromJSON(object.pubkey) : undefined,
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: MsgCreateValidator): JsonSafe<MsgCreateValidator> {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : undefined);
    message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? GlobalDecoderRegistry.toJSON(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateValidator>): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
    message.min_self_delegation = object.min_self_delegation ?? "";
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? GlobalDecoderRegistry.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateValidatorAmino): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = CommissionRates.fromAmino(object.commission);
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.min_self_delegation = object.min_self_delegation;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = encodePubkey(object.pubkey);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: MsgCreateValidator): MsgCreateValidatorAmino {
    const obj: any = {};
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.commission = message.commission ? CommissionRates.toAmino(message.commission) : undefined;
    obj.min_self_delegation = message.min_self_delegation === "" ? undefined : message.min_self_delegation;
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    obj.value = message.value ? Coin.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateValidatorAminoMsg): MsgCreateValidator {
    return MsgCreateValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateValidator): MsgCreateValidatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateValidator",
      value: MsgCreateValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateValidatorProtoMsg): MsgCreateValidator {
    return MsgCreateValidator.decode(message.value);
  },
  toProto(message: MsgCreateValidator): Uint8Array {
    return MsgCreateValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateValidator): MsgCreateValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value: MsgCreateValidator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateValidator.typeUrl, MsgCreateValidator);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateValidator.aminoType, MsgCreateValidator.typeUrl);
function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
  return {};
}
export const MsgCreateValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
  aminoType: "cosmos-sdk/MsgCreateValidatorResponse",
  is(o: any): o is MsgCreateValidatorResponse {
    return o && o.$typeUrl === MsgCreateValidatorResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateValidatorResponseSDKType {
    return o && o.$typeUrl === MsgCreateValidatorResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateValidatorResponseAmino {
    return o && o.$typeUrl === MsgCreateValidatorResponse.typeUrl;
  },
  encode(_: MsgCreateValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();
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
  fromJSON(_: any): MsgCreateValidatorResponse {
    return {};
  },
  toJSON(_: MsgCreateValidatorResponse): JsonSafe<MsgCreateValidatorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateValidatorResponse>): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  fromAmino(_: MsgCreateValidatorResponseAmino): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  toAmino(_: MsgCreateValidatorResponse): MsgCreateValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateValidatorResponseAminoMsg): MsgCreateValidatorResponse {
    return MsgCreateValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateValidatorResponseProtoMsg): MsgCreateValidatorResponse {
    return MsgCreateValidatorResponse.decode(message.value);
  },
  toProto(message: MsgCreateValidatorResponse): Uint8Array {
    return MsgCreateValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateValidatorResponse.typeUrl, MsgCreateValidatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateValidatorResponse.aminoType, MsgCreateValidatorResponse.typeUrl);
function createBaseMsgEditValidator(): MsgEditValidator {
  return {
    description: Description.fromPartial({}),
    validator_address: "",
    commission_rate: "",
    min_self_delegation: ""
  };
}
export const MsgEditValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
  aminoType: "cosmos-sdk/MsgEditValidator",
  is(o: any): o is MsgEditValidator {
    return o && (o.$typeUrl === MsgEditValidator.typeUrl || Description.is(o.description) && typeof o.validator_address === "string" && typeof o.commission_rate === "string" && typeof o.min_self_delegation === "string");
  },
  isSDK(o: any): o is MsgEditValidatorSDKType {
    return o && (o.$typeUrl === MsgEditValidator.typeUrl || Description.isSDK(o.description) && typeof o.validator_address === "string" && typeof o.commission_rate === "string" && typeof o.min_self_delegation === "string");
  },
  isAmino(o: any): o is MsgEditValidatorAmino {
    return o && (o.$typeUrl === MsgEditValidator.typeUrl || Description.isAmino(o.description) && typeof o.validator_address === "string" && typeof o.commission_rate === "string" && typeof o.min_self_delegation === "string");
  },
  encode(message: MsgEditValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.commission_rate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.commission_rate, 18).atomics);
    }
    if (message.min_self_delegation !== "") {
      writer.uint32(34).string(message.min_self_delegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.commission_rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.min_self_delegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEditValidator {
    return {
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      commission_rate: isSet(object.commission_rate) ? String(object.commission_rate) : "",
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : ""
    };
  },
  toJSON(message: MsgEditValidator): JsonSafe<MsgEditValidator> {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
    message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgEditValidator>): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.validator_address = object.validator_address ?? "";
    message.commission_rate = object.commission_rate ?? "";
    message.min_self_delegation = object.min_self_delegation ?? "";
    return message;
  },
  fromAmino(object: MsgEditValidatorAmino): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.commission_rate !== undefined && object.commission_rate !== null) {
      message.commission_rate = object.commission_rate;
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.min_self_delegation = object.min_self_delegation;
    }
    return message;
  },
  toAmino(message: MsgEditValidator): MsgEditValidatorAmino {
    const obj: any = {};
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.commission_rate = message.commission_rate === "" ? undefined : message.commission_rate;
    obj.min_self_delegation = message.min_self_delegation === "" ? undefined : message.min_self_delegation;
    return obj;
  },
  fromAminoMsg(object: MsgEditValidatorAminoMsg): MsgEditValidator {
    return MsgEditValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditValidator): MsgEditValidatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgEditValidator",
      value: MsgEditValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditValidatorProtoMsg): MsgEditValidator {
    return MsgEditValidator.decode(message.value);
  },
  toProto(message: MsgEditValidator): Uint8Array {
    return MsgEditValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgEditValidator): MsgEditValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
      value: MsgEditValidator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgEditValidator.typeUrl, MsgEditValidator);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgEditValidator.aminoType, MsgEditValidator.typeUrl);
function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
  return {};
}
export const MsgEditValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
  aminoType: "cosmos-sdk/MsgEditValidatorResponse",
  is(o: any): o is MsgEditValidatorResponse {
    return o && o.$typeUrl === MsgEditValidatorResponse.typeUrl;
  },
  isSDK(o: any): o is MsgEditValidatorResponseSDKType {
    return o && o.$typeUrl === MsgEditValidatorResponse.typeUrl;
  },
  isAmino(o: any): o is MsgEditValidatorResponseAmino {
    return o && o.$typeUrl === MsgEditValidatorResponse.typeUrl;
  },
  encode(_: MsgEditValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();
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
  fromJSON(_: any): MsgEditValidatorResponse {
    return {};
  },
  toJSON(_: MsgEditValidatorResponse): JsonSafe<MsgEditValidatorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgEditValidatorResponse>): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
  fromAmino(_: MsgEditValidatorResponseAmino): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
  toAmino(_: MsgEditValidatorResponse): MsgEditValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditValidatorResponseAminoMsg): MsgEditValidatorResponse {
    return MsgEditValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditValidatorResponseProtoMsg): MsgEditValidatorResponse {
    return MsgEditValidatorResponse.decode(message.value);
  },
  toProto(message: MsgEditValidatorResponse): Uint8Array {
    return MsgEditValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgEditValidatorResponse.typeUrl, MsgEditValidatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgEditValidatorResponse.aminoType, MsgEditValidatorResponse.typeUrl);
function createBaseMsgDelegate(): MsgDelegate {
  return {
    delegator_address: "",
    validator_address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
  aminoType: "cosmos-sdk/MsgDelegate",
  is(o: any): o is MsgDelegate {
    return o && (o.$typeUrl === MsgDelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgDelegateSDKType {
    return o && (o.$typeUrl === MsgDelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgDelegateAmino {
    return o && (o.$typeUrl === MsgDelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegate {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgDelegate): JsonSafe<MsgDelegate> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgDelegateAmino): MsgDelegate {
    const message = createBaseMsgDelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDelegate): MsgDelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate {
    return MsgDelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegate): MsgDelegateAminoMsg {
    return {
      type: "cosmos-sdk/MsgDelegate",
      value: MsgDelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateProtoMsg): MsgDelegate {
    return MsgDelegate.decode(message.value);
  },
  toProto(message: MsgDelegate): Uint8Array {
    return MsgDelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegate.typeUrl, MsgDelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDelegate.aminoType, MsgDelegate.typeUrl);
function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}
export const MsgDelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
  aminoType: "cosmos-sdk/MsgDelegateResponse",
  is(o: any): o is MsgDelegateResponse {
    return o && o.$typeUrl === MsgDelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelegateResponseSDKType {
    return o && o.$typeUrl === MsgDelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDelegateResponseAmino {
    return o && o.$typeUrl === MsgDelegateResponse.typeUrl;
  },
  encode(_: MsgDelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
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
  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },
  toJSON(_: MsgDelegateResponse): JsonSafe<MsgDelegateResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  toAmino(_: MsgDelegateResponse): MsgDelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateResponse): MsgDelegateResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDelegateResponse",
      value: MsgDelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateResponseProtoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.decode(message.value);
  },
  toProto(message: MsgDelegateResponse): Uint8Array {
    return MsgDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
      value: MsgDelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegateResponse.typeUrl, MsgDelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDelegateResponse.aminoType, MsgDelegateResponse.typeUrl);
function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBeginRedelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  aminoType: "cosmos-sdk/MsgBeginRedelegate",
  is(o: any): o is MsgBeginRedelegate {
    return o && (o.$typeUrl === MsgBeginRedelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgBeginRedelegateSDKType {
    return o && (o.$typeUrl === MsgBeginRedelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgBeginRedelegateAmino {
    return o && (o.$typeUrl === MsgBeginRedelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgBeginRedelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginRedelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginRedelegate {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgBeginRedelegate): JsonSafe<MsgBeginRedelegate> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
    message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginRedelegate>): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_src_address = object.validator_src_address ?? "";
    message.validator_dst_address = object.validator_dst_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgBeginRedelegateAmino): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
      message.validator_src_address = object.validator_src_address;
    }
    if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
      message.validator_dst_address = object.validator_dst_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgBeginRedelegate): MsgBeginRedelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_src_address = message.validator_src_address === "" ? undefined : message.validator_src_address;
    obj.validator_dst_address = message.validator_dst_address === "" ? undefined : message.validator_dst_address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBeginRedelegateAminoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateAminoMsg {
    return {
      type: "cosmos-sdk/MsgBeginRedelegate",
      value: MsgBeginRedelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginRedelegateProtoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.decode(message.value);
  },
  toProto(message: MsgBeginRedelegate): Uint8Array {
    return MsgBeginRedelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: MsgBeginRedelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBeginRedelegate.typeUrl, MsgBeginRedelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginRedelegate.aminoType, MsgBeginRedelegate.typeUrl);
function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
  return {
    completion_time: new Date()
  };
}
export const MsgBeginRedelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
  aminoType: "cosmos-sdk/MsgBeginRedelegateResponse",
  is(o: any): o is MsgBeginRedelegateResponse {
    return o && (o.$typeUrl === MsgBeginRedelegateResponse.typeUrl || Timestamp.is(o.completion_time));
  },
  isSDK(o: any): o is MsgBeginRedelegateResponseSDKType {
    return o && (o.$typeUrl === MsgBeginRedelegateResponse.typeUrl || Timestamp.isSDK(o.completion_time));
  },
  isAmino(o: any): o is MsgBeginRedelegateResponseAmino {
    return o && (o.$typeUrl === MsgBeginRedelegateResponse.typeUrl || Timestamp.isAmino(o.completion_time));
  },
  encode(message: MsgBeginRedelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginRedelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginRedelegateResponse {
    return {
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
    };
  },
  toJSON(message: MsgBeginRedelegateResponse): JsonSafe<MsgBeginRedelegateResponse> {
    const obj: any = {};
    message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginRedelegateResponse>): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completion_time = object.completion_time ?? undefined;
    return message;
  },
  fromAmino(object: MsgBeginRedelegateResponseAmino): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completion_time = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completion_time ? Timestamp.toAmino(toTimestamp(message.completion_time)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBeginRedelegateResponseAminoMsg): MsgBeginRedelegateResponse {
    return MsgBeginRedelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginRedelegateResponseProtoMsg): MsgBeginRedelegateResponse {
    return MsgBeginRedelegateResponse.decode(message.value);
  },
  toProto(message: MsgBeginRedelegateResponse): Uint8Array {
    return MsgBeginRedelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBeginRedelegateResponse.typeUrl, MsgBeginRedelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginRedelegateResponse.aminoType, MsgBeginRedelegateResponse.typeUrl);
function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    delegator_address: "",
    validator_address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgUndelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
  aminoType: "cosmos-sdk/MsgUndelegate",
  is(o: any): o is MsgUndelegate {
    return o && (o.$typeUrl === MsgUndelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgUndelegateSDKType {
    return o && (o.$typeUrl === MsgUndelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgUndelegateAmino {
    return o && (o.$typeUrl === MsgUndelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegate {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgUndelegate): JsonSafe<MsgUndelegate> {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUndelegate>): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateAmino): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUndelegate): MsgUndelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate {
    return MsgUndelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegate): MsgUndelegateAminoMsg {
    return {
      type: "cosmos-sdk/MsgUndelegate",
      value: MsgUndelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateProtoMsg): MsgUndelegate {
    return MsgUndelegate.decode(message.value);
  },
  toProto(message: MsgUndelegate): Uint8Array {
    return MsgUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndelegate.typeUrl, MsgUndelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUndelegate.aminoType, MsgUndelegate.typeUrl);
function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    completion_time: new Date()
  };
}
export const MsgUndelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
  aminoType: "cosmos-sdk/MsgUndelegateResponse",
  is(o: any): o is MsgUndelegateResponse {
    return o && (o.$typeUrl === MsgUndelegateResponse.typeUrl || Timestamp.is(o.completion_time));
  },
  isSDK(o: any): o is MsgUndelegateResponseSDKType {
    return o && (o.$typeUrl === MsgUndelegateResponse.typeUrl || Timestamp.isSDK(o.completion_time));
  },
  isAmino(o: any): o is MsgUndelegateResponseAmino {
    return o && (o.$typeUrl === MsgUndelegateResponse.typeUrl || Timestamp.isAmino(o.completion_time));
  },
  encode(message: MsgUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegateResponse {
    return {
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
    };
  },
  toJSON(message: MsgUndelegateResponse): JsonSafe<MsgUndelegateResponse> {
    const obj: any = {};
    message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completion_time = object.completion_time ?? undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateResponseAmino): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completion_time = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message: MsgUndelegateResponse): MsgUndelegateResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completion_time ? Timestamp.toAmino(toTimestamp(message.completion_time)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUndelegateResponse",
      value: MsgUndelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateResponse): Uint8Array {
    return MsgUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
      value: MsgUndelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndelegateResponse.typeUrl, MsgUndelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUndelegateResponse.aminoType, MsgUndelegateResponse.typeUrl);