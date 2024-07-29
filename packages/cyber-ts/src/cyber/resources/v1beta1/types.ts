import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Params {
  max_slots: number;
  halving_period_volt_blocks: number;
  halving_period_ampere_blocks: number;
  base_investmint_period_volt: number;
  base_investmint_period_ampere: number;
  min_investmint_period: number;
  base_investmint_amount_volt: Coin;
  base_investmint_amount_ampere: Coin;
}
export interface ParamsProtoMsg {
  type_url: "/cyber.resources.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  max_slots?: number;
  halving_period_volt_blocks?: number;
  halving_period_ampere_blocks?: number;
  base_investmint_period_volt?: number;
  base_investmint_period_ampere?: number;
  min_investmint_period?: number;
  base_investmint_amount_volt?: CoinAmino;
  base_investmint_amount_ampere?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/cyber.resources.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  max_slots: number;
  halving_period_volt_blocks: number;
  halving_period_ampere_blocks: number;
  base_investmint_period_volt: number;
  base_investmint_period_ampere: number;
  min_investmint_period: number;
  base_investmint_amount_volt: CoinSDKType;
  base_investmint_amount_ampere: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    max_slots: 0,
    halving_period_volt_blocks: 0,
    halving_period_ampere_blocks: 0,
    base_investmint_period_volt: 0,
    base_investmint_period_ampere: 0,
    min_investmint_period: 0,
    base_investmint_amount_volt: Coin.fromPartial({}),
    base_investmint_amount_ampere: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/cyber.resources.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_slots === "number" && typeof o.halving_period_volt_blocks === "number" && typeof o.halving_period_ampere_blocks === "number" && typeof o.base_investmint_period_volt === "number" && typeof o.base_investmint_period_ampere === "number" && typeof o.min_investmint_period === "number" && Coin.is(o.base_investmint_amount_volt) && Coin.is(o.base_investmint_amount_ampere));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_slots === "number" && typeof o.halving_period_volt_blocks === "number" && typeof o.halving_period_ampere_blocks === "number" && typeof o.base_investmint_period_volt === "number" && typeof o.base_investmint_period_ampere === "number" && typeof o.min_investmint_period === "number" && Coin.isSDK(o.base_investmint_amount_volt) && Coin.isSDK(o.base_investmint_amount_ampere));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_slots === "number" && typeof o.halving_period_volt_blocks === "number" && typeof o.halving_period_ampere_blocks === "number" && typeof o.base_investmint_period_volt === "number" && typeof o.base_investmint_period_ampere === "number" && typeof o.min_investmint_period === "number" && Coin.isAmino(o.base_investmint_amount_volt) && Coin.isAmino(o.base_investmint_amount_ampere));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.max_slots !== 0) {
      writer.uint32(8).uint32(message.max_slots);
    }
    if (message.halving_period_volt_blocks !== 0) {
      writer.uint32(16).uint32(message.halving_period_volt_blocks);
    }
    if (message.halving_period_ampere_blocks !== 0) {
      writer.uint32(24).uint32(message.halving_period_ampere_blocks);
    }
    if (message.base_investmint_period_volt !== 0) {
      writer.uint32(32).uint32(message.base_investmint_period_volt);
    }
    if (message.base_investmint_period_ampere !== 0) {
      writer.uint32(40).uint32(message.base_investmint_period_ampere);
    }
    if (message.min_investmint_period !== 0) {
      writer.uint32(48).uint32(message.min_investmint_period);
    }
    if (message.base_investmint_amount_volt !== undefined) {
      Coin.encode(message.base_investmint_amount_volt, writer.uint32(58).fork()).ldelim();
    }
    if (message.base_investmint_amount_ampere !== undefined) {
      Coin.encode(message.base_investmint_amount_ampere, writer.uint32(66).fork()).ldelim();
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
          message.max_slots = reader.uint32();
          break;
        case 2:
          message.halving_period_volt_blocks = reader.uint32();
          break;
        case 3:
          message.halving_period_ampere_blocks = reader.uint32();
          break;
        case 4:
          message.base_investmint_period_volt = reader.uint32();
          break;
        case 5:
          message.base_investmint_period_ampere = reader.uint32();
          break;
        case 6:
          message.min_investmint_period = reader.uint32();
          break;
        case 7:
          message.base_investmint_amount_volt = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.base_investmint_amount_ampere = Coin.decode(reader, reader.uint32());
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
      max_slots: isSet(object.max_slots) ? Number(object.max_slots) : 0,
      halving_period_volt_blocks: isSet(object.halving_period_volt_blocks) ? Number(object.halving_period_volt_blocks) : 0,
      halving_period_ampere_blocks: isSet(object.halving_period_ampere_blocks) ? Number(object.halving_period_ampere_blocks) : 0,
      base_investmint_period_volt: isSet(object.base_investmint_period_volt) ? Number(object.base_investmint_period_volt) : 0,
      base_investmint_period_ampere: isSet(object.base_investmint_period_ampere) ? Number(object.base_investmint_period_ampere) : 0,
      min_investmint_period: isSet(object.min_investmint_period) ? Number(object.min_investmint_period) : 0,
      base_investmint_amount_volt: isSet(object.base_investmint_amount_volt) ? Coin.fromJSON(object.base_investmint_amount_volt) : undefined,
      base_investmint_amount_ampere: isSet(object.base_investmint_amount_ampere) ? Coin.fromJSON(object.base_investmint_amount_ampere) : undefined
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.max_slots !== undefined && (obj.max_slots = Math.round(message.max_slots));
    message.halving_period_volt_blocks !== undefined && (obj.halving_period_volt_blocks = Math.round(message.halving_period_volt_blocks));
    message.halving_period_ampere_blocks !== undefined && (obj.halving_period_ampere_blocks = Math.round(message.halving_period_ampere_blocks));
    message.base_investmint_period_volt !== undefined && (obj.base_investmint_period_volt = Math.round(message.base_investmint_period_volt));
    message.base_investmint_period_ampere !== undefined && (obj.base_investmint_period_ampere = Math.round(message.base_investmint_period_ampere));
    message.min_investmint_period !== undefined && (obj.min_investmint_period = Math.round(message.min_investmint_period));
    message.base_investmint_amount_volt !== undefined && (obj.base_investmint_amount_volt = message.base_investmint_amount_volt ? Coin.toJSON(message.base_investmint_amount_volt) : undefined);
    message.base_investmint_amount_ampere !== undefined && (obj.base_investmint_amount_ampere = message.base_investmint_amount_ampere ? Coin.toJSON(message.base_investmint_amount_ampere) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.max_slots = object.max_slots ?? 0;
    message.halving_period_volt_blocks = object.halving_period_volt_blocks ?? 0;
    message.halving_period_ampere_blocks = object.halving_period_ampere_blocks ?? 0;
    message.base_investmint_period_volt = object.base_investmint_period_volt ?? 0;
    message.base_investmint_period_ampere = object.base_investmint_period_ampere ?? 0;
    message.min_investmint_period = object.min_investmint_period ?? 0;
    message.base_investmint_amount_volt = object.base_investmint_amount_volt !== undefined && object.base_investmint_amount_volt !== null ? Coin.fromPartial(object.base_investmint_amount_volt) : undefined;
    message.base_investmint_amount_ampere = object.base_investmint_amount_ampere !== undefined && object.base_investmint_amount_ampere !== null ? Coin.fromPartial(object.base_investmint_amount_ampere) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_slots !== undefined && object.max_slots !== null) {
      message.max_slots = object.max_slots;
    }
    if (object.halving_period_volt_blocks !== undefined && object.halving_period_volt_blocks !== null) {
      message.halving_period_volt_blocks = object.halving_period_volt_blocks;
    }
    if (object.halving_period_ampere_blocks !== undefined && object.halving_period_ampere_blocks !== null) {
      message.halving_period_ampere_blocks = object.halving_period_ampere_blocks;
    }
    if (object.base_investmint_period_volt !== undefined && object.base_investmint_period_volt !== null) {
      message.base_investmint_period_volt = object.base_investmint_period_volt;
    }
    if (object.base_investmint_period_ampere !== undefined && object.base_investmint_period_ampere !== null) {
      message.base_investmint_period_ampere = object.base_investmint_period_ampere;
    }
    if (object.min_investmint_period !== undefined && object.min_investmint_period !== null) {
      message.min_investmint_period = object.min_investmint_period;
    }
    if (object.base_investmint_amount_volt !== undefined && object.base_investmint_amount_volt !== null) {
      message.base_investmint_amount_volt = Coin.fromAmino(object.base_investmint_amount_volt);
    }
    if (object.base_investmint_amount_ampere !== undefined && object.base_investmint_amount_ampere !== null) {
      message.base_investmint_amount_ampere = Coin.fromAmino(object.base_investmint_amount_ampere);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_slots = message.max_slots === 0 ? undefined : message.max_slots;
    obj.halving_period_volt_blocks = message.halving_period_volt_blocks === 0 ? undefined : message.halving_period_volt_blocks;
    obj.halving_period_ampere_blocks = message.halving_period_ampere_blocks === 0 ? undefined : message.halving_period_ampere_blocks;
    obj.base_investmint_period_volt = message.base_investmint_period_volt === 0 ? undefined : message.base_investmint_period_volt;
    obj.base_investmint_period_ampere = message.base_investmint_period_ampere === 0 ? undefined : message.base_investmint_period_ampere;
    obj.min_investmint_period = message.min_investmint_period === 0 ? undefined : message.min_investmint_period;
    obj.base_investmint_amount_volt = message.base_investmint_amount_volt ? Coin.toAmino(message.base_investmint_amount_volt) : undefined;
    obj.base_investmint_amount_ampere = message.base_investmint_amount_ampere ? Coin.toAmino(message.base_investmint_amount_ampere) : undefined;
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
      typeUrl: "/cyber.resources.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);