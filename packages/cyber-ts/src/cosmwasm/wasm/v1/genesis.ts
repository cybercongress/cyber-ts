import { Params, ParamsAmino, ParamsSDKType, CodeInfo, CodeInfoAmino, CodeInfoSDKType, ContractInfo, ContractInfoAmino, ContractInfoSDKType, Model, ModelAmino, ModelSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntryAmino, ContractCodeHistoryEntrySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
}
export interface GenesisStateProtoMsg {
  type_url: "/cosmwasm.wasm.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  codes?: CodeAmino[];
  contracts?: ContractAmino[];
  sequences?: SequenceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "wasm/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  codes: CodeSDKType[];
  contracts: ContractSDKType[];
  sequences: SequenceSDKType[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  code_id: bigint;
  code_info: CodeInfo;
  code_bytes: Uint8Array;
  /** Pinned to wasmvm cache */
  pinned: boolean;
}
export interface CodeProtoMsg {
  type_url: "/cosmwasm.wasm.v1.Code";
  value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeAmino {
  code_id?: string;
  code_info?: CodeInfoAmino;
  code_bytes?: string;
  /** Pinned to wasmvm cache */
  pinned?: boolean;
}
export interface CodeAminoMsg {
  type: "wasm/Code";
  value: CodeAmino;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
  code_id: bigint;
  code_info: CodeInfoSDKType;
  code_bytes: Uint8Array;
  pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contract_address: string;
  contract_info: ContractInfo;
  contract_state: Model[];
  contract_code_history: ContractCodeHistoryEntry[];
}
export interface ContractProtoMsg {
  type_url: "/cosmwasm.wasm.v1.Contract";
  value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractAmino {
  contract_address?: string;
  contract_info?: ContractInfoAmino;
  contract_state?: ModelAmino[];
  contract_code_history?: ContractCodeHistoryEntryAmino[];
}
export interface ContractAminoMsg {
  type: "wasm/Contract";
  value: ContractAmino;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
  contract_address: string;
  contract_info: ContractInfoSDKType;
  contract_state: ModelSDKType[];
  contract_code_history: ContractCodeHistoryEntrySDKType[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
  id_key: Uint8Array;
  value: bigint;
}
export interface SequenceProtoMsg {
  type_url: "/cosmwasm.wasm.v1.Sequence";
  value: Uint8Array;
}
/** Sequence key and value of an id generation counter */
export interface SequenceAmino {
  id_key?: string;
  value?: string;
}
export interface SequenceAminoMsg {
  type: "wasm/Sequence";
  value: SequenceAmino;
}
/** Sequence key and value of an id generation counter */
export interface SequenceSDKType {
  id_key: Uint8Array;
  value: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    codes: [],
    contracts: [],
    sequences: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState",
  aminoType: "wasm/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.is(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.is(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.is(o.sequences[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.isSDK(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.isSDK(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.isSDK(o.sequences[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.isAmino(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.isAmino(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.isAmino(o.sequences[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toJSON(e) : undefined);
    } else {
      obj.codes = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.codes = object.codes?.map(e => Code.fromAmino(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromAmino(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toAmino(e) : undefined);
    } else {
      obj.codes = message.codes;
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toAmino(e) : undefined);
    } else {
      obj.contracts = message.contracts;
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toAmino(e) : undefined);
    } else {
      obj.sequences = message.sequences;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "wasm/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseCode(): Code {
  return {
    code_id: BigInt(0),
    code_info: CodeInfo.fromPartial({}),
    code_bytes: new Uint8Array(),
    pinned: false
  };
}
export const Code = {
  typeUrl: "/cosmwasm.wasm.v1.Code",
  aminoType: "wasm/Code",
  is(o: any): o is Code {
    return o && (o.$typeUrl === Code.typeUrl || typeof o.code_id === "bigint" && CodeInfo.is(o.code_info) && (o.code_bytes instanceof Uint8Array || typeof o.code_bytes === "string") && typeof o.pinned === "boolean");
  },
  isSDK(o: any): o is CodeSDKType {
    return o && (o.$typeUrl === Code.typeUrl || typeof o.code_id === "bigint" && CodeInfo.isSDK(o.code_info) && (o.code_bytes instanceof Uint8Array || typeof o.code_bytes === "string") && typeof o.pinned === "boolean");
  },
  isAmino(o: any): o is CodeAmino {
    return o && (o.$typeUrl === Code.typeUrl || typeof o.code_id === "bigint" && CodeInfo.isAmino(o.code_info) && (o.code_bytes instanceof Uint8Array || typeof o.code_bytes === "string") && typeof o.pinned === "boolean");
  },
  encode(message: Code, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.code_info !== undefined) {
      CodeInfo.encode(message.code_info, writer.uint32(18).fork()).ldelim();
    }
    if (message.code_bytes.length !== 0) {
      writer.uint32(26).bytes(message.code_bytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Code {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.code_info = CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.code_bytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Code {
    return {
      code_id: isSet(object.code_id) ? BigInt(object.code_id.toString()) : BigInt(0),
      code_info: isSet(object.code_info) ? CodeInfo.fromJSON(object.code_info) : undefined,
      code_bytes: isSet(object.code_bytes) ? bytesFromBase64(object.code_bytes) : new Uint8Array(),
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false
    };
  },
  toJSON(message: Code): JsonSafe<Code> {
    const obj: any = {};
    message.code_id !== undefined && (obj.code_id = (message.code_id || BigInt(0)).toString());
    message.code_info !== undefined && (obj.code_info = message.code_info ? CodeInfo.toJSON(message.code_info) : undefined);
    message.code_bytes !== undefined && (obj.code_bytes = base64FromBytes(message.code_bytes !== undefined ? message.code_bytes : new Uint8Array()));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },
  fromPartial(object: DeepPartial<Code>): Code {
    const message = createBaseCode();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? BigInt(object.code_id.toString()) : BigInt(0);
    message.code_info = object.code_info !== undefined && object.code_info !== null ? CodeInfo.fromPartial(object.code_info) : undefined;
    message.code_bytes = object.code_bytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },
  fromAmino(object: CodeAmino): Code {
    const message = createBaseCode();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.code_id = BigInt(object.code_id);
    }
    if (object.code_info !== undefined && object.code_info !== null) {
      message.code_info = CodeInfo.fromAmino(object.code_info);
    }
    if (object.code_bytes !== undefined && object.code_bytes !== null) {
      message.code_bytes = bytesFromBase64(object.code_bytes);
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = object.pinned;
    }
    return message;
  },
  toAmino(message: Code): CodeAmino {
    const obj: any = {};
    obj.code_id = message.code_id !== BigInt(0) ? message.code_id.toString() : undefined;
    obj.code_info = message.code_info ? CodeInfo.toAmino(message.code_info) : undefined;
    obj.code_bytes = message.code_bytes ? base64FromBytes(message.code_bytes) : undefined;
    obj.pinned = message.pinned === false ? undefined : message.pinned;
    return obj;
  },
  fromAminoMsg(object: CodeAminoMsg): Code {
    return Code.fromAmino(object.value);
  },
  toAminoMsg(message: Code): CodeAminoMsg {
    return {
      type: "wasm/Code",
      value: Code.toAmino(message)
    };
  },
  fromProtoMsg(message: CodeProtoMsg): Code {
    return Code.decode(message.value);
  },
  toProto(message: Code): Uint8Array {
    return Code.encode(message).finish();
  },
  toProtoMsg(message: Code): CodeProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Code",
      value: Code.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Code.typeUrl, Code);
GlobalDecoderRegistry.registerAminoProtoMapping(Code.aminoType, Code.typeUrl);
function createBaseContract(): Contract {
  return {
    contract_address: "",
    contract_info: ContractInfo.fromPartial({}),
    contract_state: [],
    contract_code_history: []
  };
}
export const Contract = {
  typeUrl: "/cosmwasm.wasm.v1.Contract",
  aminoType: "wasm/Contract",
  is(o: any): o is Contract {
    return o && (o.$typeUrl === Contract.typeUrl || typeof o.contract_address === "string" && ContractInfo.is(o.contract_info) && Array.isArray(o.contract_state) && (!o.contract_state.length || Model.is(o.contract_state[0])) && Array.isArray(o.contract_code_history) && (!o.contract_code_history.length || ContractCodeHistoryEntry.is(o.contract_code_history[0])));
  },
  isSDK(o: any): o is ContractSDKType {
    return o && (o.$typeUrl === Contract.typeUrl || typeof o.contract_address === "string" && ContractInfo.isSDK(o.contract_info) && Array.isArray(o.contract_state) && (!o.contract_state.length || Model.isSDK(o.contract_state[0])) && Array.isArray(o.contract_code_history) && (!o.contract_code_history.length || ContractCodeHistoryEntry.isSDK(o.contract_code_history[0])));
  },
  isAmino(o: any): o is ContractAmino {
    return o && (o.$typeUrl === Contract.typeUrl || typeof o.contract_address === "string" && ContractInfo.isAmino(o.contract_info) && Array.isArray(o.contract_state) && (!o.contract_state.length || Model.isAmino(o.contract_state[0])) && Array.isArray(o.contract_code_history) && (!o.contract_code_history.length || ContractCodeHistoryEntry.isAmino(o.contract_code_history[0])));
  },
  encode(message: Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
    }
    if (message.contract_info !== undefined) {
      ContractInfo.encode(message.contract_info, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contract_state) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.contract_code_history) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Contract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract_address = reader.string();
          break;
        case 2:
          message.contract_info = ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contract_state.push(Model.decode(reader, reader.uint32()));
          break;
        case 4:
          message.contract_code_history.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Contract {
    return {
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : "",
      contract_info: isSet(object.contract_info) ? ContractInfo.fromJSON(object.contract_info) : undefined,
      contract_state: Array.isArray(object?.contract_state) ? object.contract_state.map((e: any) => Model.fromJSON(e)) : [],
      contract_code_history: Array.isArray(object?.contract_code_history) ? object.contract_code_history.map((e: any) => ContractCodeHistoryEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: Contract): JsonSafe<Contract> {
    const obj: any = {};
    message.contract_address !== undefined && (obj.contract_address = message.contract_address);
    message.contract_info !== undefined && (obj.contract_info = message.contract_info ? ContractInfo.toJSON(message.contract_info) : undefined);
    if (message.contract_state) {
      obj.contract_state = message.contract_state.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.contract_state = [];
    }
    if (message.contract_code_history) {
      obj.contract_code_history = message.contract_code_history.map(e => e ? ContractCodeHistoryEntry.toJSON(e) : undefined);
    } else {
      obj.contract_code_history = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.contract_address = object.contract_address ?? "";
    message.contract_info = object.contract_info !== undefined && object.contract_info !== null ? ContractInfo.fromPartial(object.contract_info) : undefined;
    message.contract_state = object.contract_state?.map(e => Model.fromPartial(e)) || [];
    message.contract_code_history = object.contract_code_history?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractAmino): Contract {
    const message = createBaseContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contract_address = object.contract_address;
    }
    if (object.contract_info !== undefined && object.contract_info !== null) {
      message.contract_info = ContractInfo.fromAmino(object.contract_info);
    }
    message.contract_state = object.contract_state?.map(e => Model.fromAmino(e)) || [];
    message.contract_code_history = object.contract_code_history?.map(e => ContractCodeHistoryEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Contract): ContractAmino {
    const obj: any = {};
    obj.contract_address = message.contract_address === "" ? undefined : message.contract_address;
    obj.contract_info = message.contract_info ? ContractInfo.toAmino(message.contract_info) : undefined;
    if (message.contract_state) {
      obj.contract_state = message.contract_state.map(e => e ? Model.toAmino(e) : undefined);
    } else {
      obj.contract_state = message.contract_state;
    }
    if (message.contract_code_history) {
      obj.contract_code_history = message.contract_code_history.map(e => e ? ContractCodeHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.contract_code_history = message.contract_code_history;
    }
    return obj;
  },
  fromAminoMsg(object: ContractAminoMsg): Contract {
    return Contract.fromAmino(object.value);
  },
  toAminoMsg(message: Contract): ContractAminoMsg {
    return {
      type: "wasm/Contract",
      value: Contract.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractProtoMsg): Contract {
    return Contract.decode(message.value);
  },
  toProto(message: Contract): Uint8Array {
    return Contract.encode(message).finish();
  },
  toProtoMsg(message: Contract): ContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Contract",
      value: Contract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Contract.typeUrl, Contract);
GlobalDecoderRegistry.registerAminoProtoMapping(Contract.aminoType, Contract.typeUrl);
function createBaseSequence(): Sequence {
  return {
    id_key: new Uint8Array(),
    value: BigInt(0)
  };
}
export const Sequence = {
  typeUrl: "/cosmwasm.wasm.v1.Sequence",
  aminoType: "wasm/Sequence",
  is(o: any): o is Sequence {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
  },
  isSDK(o: any): o is SequenceSDKType {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
  },
  isAmino(o: any): o is SequenceAmino {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
  },
  encode(message: Sequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id_key.length !== 0) {
      writer.uint32(10).bytes(message.id_key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id_key = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Sequence {
    return {
      id_key: isSet(object.id_key) ? bytesFromBase64(object.id_key) : new Uint8Array(),
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  toJSON(message: Sequence): JsonSafe<Sequence> {
    const obj: any = {};
    message.id_key !== undefined && (obj.id_key = base64FromBytes(message.id_key !== undefined ? message.id_key : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.id_key = object.id_key ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SequenceAmino): Sequence {
    const message = createBaseSequence();
    if (object.id_key !== undefined && object.id_key !== null) {
      message.id_key = bytesFromBase64(object.id_key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: Sequence): SequenceAmino {
    const obj: any = {};
    obj.id_key = message.id_key ? base64FromBytes(message.id_key) : undefined;
    obj.value = message.value !== BigInt(0) ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SequenceAminoMsg): Sequence {
    return Sequence.fromAmino(object.value);
  },
  toAminoMsg(message: Sequence): SequenceAminoMsg {
    return {
      type: "wasm/Sequence",
      value: Sequence.toAmino(message)
    };
  },
  fromProtoMsg(message: SequenceProtoMsg): Sequence {
    return Sequence.decode(message.value);
  },
  toProto(message: Sequence): Uint8Array {
    return Sequence.encode(message).finish();
  },
  toProtoMsg(message: Sequence): SequenceProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Sequence",
      value: Sequence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Sequence.typeUrl, Sequence);
GlobalDecoderRegistry.registerAminoProtoMapping(Sequence.aminoType, Sequence.typeUrl);