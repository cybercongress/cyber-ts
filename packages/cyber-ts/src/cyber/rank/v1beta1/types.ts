import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Params {
  calculation_period: bigint;
  damping_factor: string;
  tolerance: string;
}
export interface ParamsProtoMsg {
  type_url: "/cyber.rank.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  calculation_period?: string;
  damping_factor?: string;
  tolerance?: string;
}
export interface ParamsAminoMsg {
  type: "/cyber.rank.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  calculation_period: bigint;
  damping_factor: string;
  tolerance: string;
}
export interface RankedParticle {
  particle: string;
  rank: bigint;
}
export interface RankedParticleProtoMsg {
  type_url: "/cyber.rank.v1beta1.RankedParticle";
  value: Uint8Array;
}
export interface RankedParticleAmino {
  particle?: string;
  rank?: string;
}
export interface RankedParticleAminoMsg {
  type: "/cyber.rank.v1beta1.RankedParticle";
  value: RankedParticleAmino;
}
export interface RankedParticleSDKType {
  particle: string;
  rank: bigint;
}
function createBaseParams(): Params {
  return {
    calculation_period: BigInt(0),
    damping_factor: "",
    tolerance: ""
  };
}
export const Params = {
  typeUrl: "/cyber.rank.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.calculation_period === "bigint" && typeof o.damping_factor === "string" && typeof o.tolerance === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.calculation_period === "bigint" && typeof o.damping_factor === "string" && typeof o.tolerance === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.calculation_period === "bigint" && typeof o.damping_factor === "string" && typeof o.tolerance === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.calculation_period !== BigInt(0)) {
      writer.uint32(8).int64(message.calculation_period);
    }
    if (message.damping_factor !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.damping_factor, 18).atomics);
    }
    if (message.tolerance !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.tolerance, 18).atomics);
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
          message.calculation_period = reader.int64();
          break;
        case 2:
          message.damping_factor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.tolerance = Decimal.fromAtomics(reader.string(), 18).toString();
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
      calculation_period: isSet(object.calculation_period) ? BigInt(object.calculation_period.toString()) : BigInt(0),
      damping_factor: isSet(object.damping_factor) ? String(object.damping_factor) : "",
      tolerance: isSet(object.tolerance) ? String(object.tolerance) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.calculation_period !== undefined && (obj.calculation_period = (message.calculation_period || BigInt(0)).toString());
    message.damping_factor !== undefined && (obj.damping_factor = message.damping_factor);
    message.tolerance !== undefined && (obj.tolerance = message.tolerance);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.calculation_period = object.calculation_period !== undefined && object.calculation_period !== null ? BigInt(object.calculation_period.toString()) : BigInt(0);
    message.damping_factor = object.damping_factor ?? "";
    message.tolerance = object.tolerance ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.calculation_period !== undefined && object.calculation_period !== null) {
      message.calculation_period = BigInt(object.calculation_period);
    }
    if (object.damping_factor !== undefined && object.damping_factor !== null) {
      message.damping_factor = object.damping_factor;
    }
    if (object.tolerance !== undefined && object.tolerance !== null) {
      message.tolerance = object.tolerance;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.calculation_period = message.calculation_period !== BigInt(0) ? message.calculation_period.toString() : undefined;
    obj.damping_factor = message.damping_factor === "" ? undefined : message.damping_factor;
    obj.tolerance = message.tolerance === "" ? undefined : message.tolerance;
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
      typeUrl: "/cyber.rank.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseRankedParticle(): RankedParticle {
  return {
    particle: "",
    rank: BigInt(0)
  };
}
export const RankedParticle = {
  typeUrl: "/cyber.rank.v1beta1.RankedParticle",
  is(o: any): o is RankedParticle {
    return o && (o.$typeUrl === RankedParticle.typeUrl || typeof o.particle === "string" && typeof o.rank === "bigint");
  },
  isSDK(o: any): o is RankedParticleSDKType {
    return o && (o.$typeUrl === RankedParticle.typeUrl || typeof o.particle === "string" && typeof o.rank === "bigint");
  },
  isAmino(o: any): o is RankedParticleAmino {
    return o && (o.$typeUrl === RankedParticle.typeUrl || typeof o.particle === "string" && typeof o.rank === "bigint");
  },
  encode(message: RankedParticle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.particle !== "") {
      writer.uint32(10).string(message.particle);
    }
    if (message.rank !== BigInt(0)) {
      writer.uint32(16).uint64(message.rank);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RankedParticle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRankedParticle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.particle = reader.string();
          break;
        case 2:
          message.rank = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RankedParticle {
    return {
      particle: isSet(object.particle) ? String(object.particle) : "",
      rank: isSet(object.rank) ? BigInt(object.rank.toString()) : BigInt(0)
    };
  },
  toJSON(message: RankedParticle): JsonSafe<RankedParticle> {
    const obj: any = {};
    message.particle !== undefined && (obj.particle = message.particle);
    message.rank !== undefined && (obj.rank = (message.rank || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<RankedParticle>): RankedParticle {
    const message = createBaseRankedParticle();
    message.particle = object.particle ?? "";
    message.rank = object.rank !== undefined && object.rank !== null ? BigInt(object.rank.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RankedParticleAmino): RankedParticle {
    const message = createBaseRankedParticle();
    if (object.particle !== undefined && object.particle !== null) {
      message.particle = object.particle;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = BigInt(object.rank);
    }
    return message;
  },
  toAmino(message: RankedParticle): RankedParticleAmino {
    const obj: any = {};
    obj.particle = message.particle === "" ? undefined : message.particle;
    obj.rank = message.rank !== BigInt(0) ? message.rank.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RankedParticleAminoMsg): RankedParticle {
    return RankedParticle.fromAmino(object.value);
  },
  fromProtoMsg(message: RankedParticleProtoMsg): RankedParticle {
    return RankedParticle.decode(message.value);
  },
  toProto(message: RankedParticle): Uint8Array {
    return RankedParticle.encode(message).finish();
  },
  toProtoMsg(message: RankedParticle): RankedParticleProtoMsg {
    return {
      typeUrl: "/cyber.rank.v1beta1.RankedParticle",
      value: RankedParticle.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RankedParticle.typeUrl, RankedParticle);