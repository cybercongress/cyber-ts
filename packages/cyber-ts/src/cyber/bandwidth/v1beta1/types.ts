import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Params {
  recovery_period: bigint;
  adjust_price_period: bigint;
  base_price: string;
  base_load: string;
  max_block_bandwidth: bigint;
}
export interface ParamsProtoMsg {
  type_url: "/cyber.bandwidth.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  recovery_period?: string;
  adjust_price_period?: string;
  base_price?: string;
  base_load?: string;
  max_block_bandwidth?: string;
}
export interface ParamsAminoMsg {
  type: "/cyber.bandwidth.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  recovery_period: bigint;
  adjust_price_period: bigint;
  base_price: string;
  base_load: string;
  max_block_bandwidth: bigint;
}
export interface NeuronBandwidth {
  neuron: string;
  remained_value: bigint;
  last_updated_block: bigint;
  max_value: bigint;
}
export interface NeuronBandwidthProtoMsg {
  type_url: "/cyber.bandwidth.v1beta1.NeuronBandwidth";
  value: Uint8Array;
}
export interface NeuronBandwidthAmino {
  neuron?: string;
  remained_value?: string;
  last_updated_block?: string;
  max_value?: string;
}
export interface NeuronBandwidthAminoMsg {
  type: "/cyber.bandwidth.v1beta1.NeuronBandwidth";
  value: NeuronBandwidthAmino;
}
export interface NeuronBandwidthSDKType {
  neuron: string;
  remained_value: bigint;
  last_updated_block: bigint;
  max_value: bigint;
}
export interface Price {
  price: string;
}
export interface PriceProtoMsg {
  type_url: "/cyber.bandwidth.v1beta1.Price";
  value: Uint8Array;
}
export interface PriceAmino {
  price?: string;
}
export interface PriceAminoMsg {
  type: "/cyber.bandwidth.v1beta1.Price";
  value: PriceAmino;
}
export interface PriceSDKType {
  price: string;
}
function createBaseParams(): Params {
  return {
    recovery_period: BigInt(0),
    adjust_price_period: BigInt(0),
    base_price: "",
    base_load: "",
    max_block_bandwidth: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/cyber.bandwidth.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.recovery_period === "bigint" && typeof o.adjust_price_period === "bigint" && typeof o.base_price === "string" && typeof o.base_load === "string" && typeof o.max_block_bandwidth === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.recovery_period === "bigint" && typeof o.adjust_price_period === "bigint" && typeof o.base_price === "string" && typeof o.base_load === "string" && typeof o.max_block_bandwidth === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.recovery_period === "bigint" && typeof o.adjust_price_period === "bigint" && typeof o.base_price === "string" && typeof o.base_load === "string" && typeof o.max_block_bandwidth === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recovery_period !== BigInt(0)) {
      writer.uint32(8).uint64(message.recovery_period);
    }
    if (message.adjust_price_period !== BigInt(0)) {
      writer.uint32(16).uint64(message.adjust_price_period);
    }
    if (message.base_price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.base_price, 18).atomics);
    }
    if (message.base_load !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.base_load, 18).atomics);
    }
    if (message.max_block_bandwidth !== BigInt(0)) {
      writer.uint32(40).uint64(message.max_block_bandwidth);
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
          message.recovery_period = reader.uint64();
          break;
        case 2:
          message.adjust_price_period = reader.uint64();
          break;
        case 3:
          message.base_price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.base_load = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.max_block_bandwidth = reader.uint64();
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
      recovery_period: isSet(object.recovery_period) ? BigInt(object.recovery_period.toString()) : BigInt(0),
      adjust_price_period: isSet(object.adjust_price_period) ? BigInt(object.adjust_price_period.toString()) : BigInt(0),
      base_price: isSet(object.base_price) ? String(object.base_price) : "",
      base_load: isSet(object.base_load) ? String(object.base_load) : "",
      max_block_bandwidth: isSet(object.max_block_bandwidth) ? BigInt(object.max_block_bandwidth.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.recovery_period !== undefined && (obj.recovery_period = (message.recovery_period || BigInt(0)).toString());
    message.adjust_price_period !== undefined && (obj.adjust_price_period = (message.adjust_price_period || BigInt(0)).toString());
    message.base_price !== undefined && (obj.base_price = message.base_price);
    message.base_load !== undefined && (obj.base_load = message.base_load);
    message.max_block_bandwidth !== undefined && (obj.max_block_bandwidth = (message.max_block_bandwidth || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.recovery_period = object.recovery_period !== undefined && object.recovery_period !== null ? BigInt(object.recovery_period.toString()) : BigInt(0);
    message.adjust_price_period = object.adjust_price_period !== undefined && object.adjust_price_period !== null ? BigInt(object.adjust_price_period.toString()) : BigInt(0);
    message.base_price = object.base_price ?? "";
    message.base_load = object.base_load ?? "";
    message.max_block_bandwidth = object.max_block_bandwidth !== undefined && object.max_block_bandwidth !== null ? BigInt(object.max_block_bandwidth.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.recovery_period !== undefined && object.recovery_period !== null) {
      message.recovery_period = BigInt(object.recovery_period);
    }
    if (object.adjust_price_period !== undefined && object.adjust_price_period !== null) {
      message.adjust_price_period = BigInt(object.adjust_price_period);
    }
    if (object.base_price !== undefined && object.base_price !== null) {
      message.base_price = object.base_price;
    }
    if (object.base_load !== undefined && object.base_load !== null) {
      message.base_load = object.base_load;
    }
    if (object.max_block_bandwidth !== undefined && object.max_block_bandwidth !== null) {
      message.max_block_bandwidth = BigInt(object.max_block_bandwidth);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.recovery_period = message.recovery_period !== BigInt(0) ? message.recovery_period.toString() : undefined;
    obj.adjust_price_period = message.adjust_price_period !== BigInt(0) ? message.adjust_price_period.toString() : undefined;
    obj.base_price = message.base_price === "" ? undefined : message.base_price;
    obj.base_load = message.base_load === "" ? undefined : message.base_load;
    obj.max_block_bandwidth = message.max_block_bandwidth !== BigInt(0) ? message.max_block_bandwidth.toString() : undefined;
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
      typeUrl: "/cyber.bandwidth.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseNeuronBandwidth(): NeuronBandwidth {
  return {
    neuron: "",
    remained_value: BigInt(0),
    last_updated_block: BigInt(0),
    max_value: BigInt(0)
  };
}
export const NeuronBandwidth = {
  typeUrl: "/cyber.bandwidth.v1beta1.NeuronBandwidth",
  is(o: any): o is NeuronBandwidth {
    return o && (o.$typeUrl === NeuronBandwidth.typeUrl || typeof o.neuron === "string" && typeof o.remained_value === "bigint" && typeof o.last_updated_block === "bigint" && typeof o.max_value === "bigint");
  },
  isSDK(o: any): o is NeuronBandwidthSDKType {
    return o && (o.$typeUrl === NeuronBandwidth.typeUrl || typeof o.neuron === "string" && typeof o.remained_value === "bigint" && typeof o.last_updated_block === "bigint" && typeof o.max_value === "bigint");
  },
  isAmino(o: any): o is NeuronBandwidthAmino {
    return o && (o.$typeUrl === NeuronBandwidth.typeUrl || typeof o.neuron === "string" && typeof o.remained_value === "bigint" && typeof o.last_updated_block === "bigint" && typeof o.max_value === "bigint");
  },
  encode(message: NeuronBandwidth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.neuron !== "") {
      writer.uint32(10).string(message.neuron);
    }
    if (message.remained_value !== BigInt(0)) {
      writer.uint32(16).uint64(message.remained_value);
    }
    if (message.last_updated_block !== BigInt(0)) {
      writer.uint32(24).uint64(message.last_updated_block);
    }
    if (message.max_value !== BigInt(0)) {
      writer.uint32(32).uint64(message.max_value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NeuronBandwidth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNeuronBandwidth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.neuron = reader.string();
          break;
        case 2:
          message.remained_value = reader.uint64();
          break;
        case 3:
          message.last_updated_block = reader.uint64();
          break;
        case 4:
          message.max_value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NeuronBandwidth {
    return {
      neuron: isSet(object.neuron) ? String(object.neuron) : "",
      remained_value: isSet(object.remained_value) ? BigInt(object.remained_value.toString()) : BigInt(0),
      last_updated_block: isSet(object.last_updated_block) ? BigInt(object.last_updated_block.toString()) : BigInt(0),
      max_value: isSet(object.max_value) ? BigInt(object.max_value.toString()) : BigInt(0)
    };
  },
  toJSON(message: NeuronBandwidth): JsonSafe<NeuronBandwidth> {
    const obj: any = {};
    message.neuron !== undefined && (obj.neuron = message.neuron);
    message.remained_value !== undefined && (obj.remained_value = (message.remained_value || BigInt(0)).toString());
    message.last_updated_block !== undefined && (obj.last_updated_block = (message.last_updated_block || BigInt(0)).toString());
    message.max_value !== undefined && (obj.max_value = (message.max_value || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<NeuronBandwidth>): NeuronBandwidth {
    const message = createBaseNeuronBandwidth();
    message.neuron = object.neuron ?? "";
    message.remained_value = object.remained_value !== undefined && object.remained_value !== null ? BigInt(object.remained_value.toString()) : BigInt(0);
    message.last_updated_block = object.last_updated_block !== undefined && object.last_updated_block !== null ? BigInt(object.last_updated_block.toString()) : BigInt(0);
    message.max_value = object.max_value !== undefined && object.max_value !== null ? BigInt(object.max_value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NeuronBandwidthAmino): NeuronBandwidth {
    const message = createBaseNeuronBandwidth();
    if (object.neuron !== undefined && object.neuron !== null) {
      message.neuron = object.neuron;
    }
    if (object.remained_value !== undefined && object.remained_value !== null) {
      message.remained_value = BigInt(object.remained_value);
    }
    if (object.last_updated_block !== undefined && object.last_updated_block !== null) {
      message.last_updated_block = BigInt(object.last_updated_block);
    }
    if (object.max_value !== undefined && object.max_value !== null) {
      message.max_value = BigInt(object.max_value);
    }
    return message;
  },
  toAmino(message: NeuronBandwidth): NeuronBandwidthAmino {
    const obj: any = {};
    obj.neuron = message.neuron === "" ? undefined : message.neuron;
    obj.remained_value = message.remained_value !== BigInt(0) ? message.remained_value.toString() : undefined;
    obj.last_updated_block = message.last_updated_block !== BigInt(0) ? message.last_updated_block.toString() : undefined;
    obj.max_value = message.max_value !== BigInt(0) ? message.max_value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NeuronBandwidthAminoMsg): NeuronBandwidth {
    return NeuronBandwidth.fromAmino(object.value);
  },
  fromProtoMsg(message: NeuronBandwidthProtoMsg): NeuronBandwidth {
    return NeuronBandwidth.decode(message.value);
  },
  toProto(message: NeuronBandwidth): Uint8Array {
    return NeuronBandwidth.encode(message).finish();
  },
  toProtoMsg(message: NeuronBandwidth): NeuronBandwidthProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.NeuronBandwidth",
      value: NeuronBandwidth.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NeuronBandwidth.typeUrl, NeuronBandwidth);
function createBasePrice(): Price {
  return {
    price: ""
  };
}
export const Price = {
  typeUrl: "/cyber.bandwidth.v1beta1.Price",
  is(o: any): o is Price {
    return o && (o.$typeUrl === Price.typeUrl || typeof o.price === "string");
  },
  isSDK(o: any): o is PriceSDKType {
    return o && (o.$typeUrl === Price.typeUrl || typeof o.price === "string");
  },
  isAmino(o: any): o is PriceAmino {
    return o && (o.$typeUrl === Price.typeUrl || typeof o.price === "string");
  },
  encode(message: Price, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Price {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Price {
    return {
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  toJSON(message: Price): JsonSafe<Price> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
  fromPartial(object: DeepPartial<Price>): Price {
    const message = createBasePrice();
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: PriceAmino): Price {
    const message = createBasePrice();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: Price): PriceAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: PriceAminoMsg): Price {
    return Price.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceProtoMsg): Price {
    return Price.decode(message.value);
  },
  toProto(message: Price): Uint8Array {
    return Price.encode(message).finish();
  },
  toProtoMsg(message: Price): PriceProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.Price",
      value: Price.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Price.typeUrl, Price);