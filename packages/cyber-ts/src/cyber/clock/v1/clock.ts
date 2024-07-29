import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface ClockContract {
  /** The address of the contract. */
  contract_address: string;
  /** The jail status of the contract. */
  is_jailed: boolean;
}
export interface ClockContractProtoMsg {
  type_url: "/cyber.clock.v1.ClockContract";
  value: Uint8Array;
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface ClockContractAmino {
  /** The address of the contract. */
  contract_address?: string;
  /** The jail status of the contract. */
  is_jailed?: boolean;
}
export interface ClockContractAminoMsg {
  type: "/cyber.clock.v1.ClockContract";
  value: ClockContractAmino;
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface ClockContractSDKType {
  contract_address: string;
  is_jailed: boolean;
}
function createBaseClockContract(): ClockContract {
  return {
    contract_address: "",
    is_jailed: false
  };
}
export const ClockContract = {
  typeUrl: "/cyber.clock.v1.ClockContract",
  is(o: any): o is ClockContract {
    return o && (o.$typeUrl === ClockContract.typeUrl || typeof o.contract_address === "string" && typeof o.is_jailed === "boolean");
  },
  isSDK(o: any): o is ClockContractSDKType {
    return o && (o.$typeUrl === ClockContract.typeUrl || typeof o.contract_address === "string" && typeof o.is_jailed === "boolean");
  },
  isAmino(o: any): o is ClockContractAmino {
    return o && (o.$typeUrl === ClockContract.typeUrl || typeof o.contract_address === "string" && typeof o.is_jailed === "boolean");
  },
  encode(message: ClockContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
    }
    if (message.is_jailed === true) {
      writer.uint32(16).bool(message.is_jailed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClockContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClockContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract_address = reader.string();
          break;
        case 2:
          message.is_jailed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClockContract {
    return {
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : "",
      is_jailed: isSet(object.is_jailed) ? Boolean(object.is_jailed) : false
    };
  },
  toJSON(message: ClockContract): JsonSafe<ClockContract> {
    const obj: any = {};
    message.contract_address !== undefined && (obj.contract_address = message.contract_address);
    message.is_jailed !== undefined && (obj.is_jailed = message.is_jailed);
    return obj;
  },
  fromPartial(object: DeepPartial<ClockContract>): ClockContract {
    const message = createBaseClockContract();
    message.contract_address = object.contract_address ?? "";
    message.is_jailed = object.is_jailed ?? false;
    return message;
  },
  fromAmino(object: ClockContractAmino): ClockContract {
    const message = createBaseClockContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contract_address = object.contract_address;
    }
    if (object.is_jailed !== undefined && object.is_jailed !== null) {
      message.is_jailed = object.is_jailed;
    }
    return message;
  },
  toAmino(message: ClockContract): ClockContractAmino {
    const obj: any = {};
    obj.contract_address = message.contract_address === "" ? undefined : message.contract_address;
    obj.is_jailed = message.is_jailed === false ? undefined : message.is_jailed;
    return obj;
  },
  fromAminoMsg(object: ClockContractAminoMsg): ClockContract {
    return ClockContract.fromAmino(object.value);
  },
  fromProtoMsg(message: ClockContractProtoMsg): ClockContract {
    return ClockContract.decode(message.value);
  },
  toProto(message: ClockContract): Uint8Array {
    return ClockContract.encode(message).finish();
  },
  toProtoMsg(message: ClockContract): ClockContractProtoMsg {
    return {
      typeUrl: "/cyber.clock.v1.ClockContract",
      value: ClockContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClockContract.typeUrl, ClockContract);