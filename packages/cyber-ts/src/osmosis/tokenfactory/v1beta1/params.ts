import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  denom_creation_fee: Coin[];
  /**
   * if denom_creation_fee is an empty array, then this field is used to add
   * more gas consumption to the base cost.
   * https://github.com/CosmWasm/token-factory/issues/11
   */
  denom_creation_gas_consume?: bigint;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.tokenfactory.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsAmino {
  denom_creation_fee?: CoinAmino[];
  /**
   * if denom_creation_fee is an empty array, then this field is used to add
   * more gas consumption to the base cost.
   * https://github.com/CosmWasm/token-factory/issues/11
   */
  denom_creation_gas_consume?: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/tokenfactory/params";
  value: ParamsAmino;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType[];
  denom_creation_gas_consume?: bigint;
}
function createBaseParams(): Params {
  return {
    denom_creation_fee: [],
    denom_creation_gas_consume: undefined
  };
}
export const Params = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
  aminoType: "osmosis/tokenfactory/params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.denom_creation_fee) && (!o.denom_creation_fee.length || Coin.is(o.denom_creation_fee[0])));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.denom_creation_fee) && (!o.denom_creation_fee.length || Coin.isSDK(o.denom_creation_fee[0])));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.denom_creation_fee) && (!o.denom_creation_fee.length || Coin.isAmino(o.denom_creation_fee[0])));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denom_creation_fee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.denom_creation_gas_consume !== undefined) {
      writer.uint32(16).uint64(message.denom_creation_gas_consume);
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
          message.denom_creation_fee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.denom_creation_gas_consume = reader.uint64();
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
      denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e: any) => Coin.fromJSON(e)) : [],
      denom_creation_gas_consume: isSet(object.denom_creation_gas_consume) ? BigInt(object.denom_creation_gas_consume.toString()) : undefined
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.denom_creation_fee) {
      obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.denom_creation_fee = [];
    }
    if (message.denom_creation_gas_consume !== undefined) {
      obj.denom_creation_gas_consume = message.denom_creation_gas_consume.toString();
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.denom_creation_fee = object.denom_creation_fee?.map(e => Coin.fromPartial(e)) || [];
    message.denom_creation_gas_consume = object.denom_creation_gas_consume !== undefined && object.denom_creation_gas_consume !== null ? BigInt(object.denom_creation_gas_consume.toString()) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.denom_creation_fee = object.denom_creation_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.denom_creation_gas_consume !== undefined && object.denom_creation_gas_consume !== null) {
      message.denom_creation_gas_consume = BigInt(object.denom_creation_gas_consume);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.denom_creation_fee) {
      obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.denom_creation_fee = message.denom_creation_fee;
    }
    obj.denom_creation_gas_consume = message.denom_creation_gas_consume !== BigInt(0) ? message.denom_creation_gas_consume.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/tokenfactory/params",
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
      typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);