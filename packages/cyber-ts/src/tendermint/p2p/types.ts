import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface ProtocolVersion {
  p2p: bigint;
  block: bigint;
  app: bigint;
}
export interface ProtocolVersionProtoMsg {
  type_url: "/tendermint.p2p.ProtocolVersion";
  value: Uint8Array;
}
export interface ProtocolVersionAmino {
  p2p?: string;
  block?: string;
  app?: string;
}
export interface ProtocolVersionAminoMsg {
  type: "/tendermint.p2p.ProtocolVersion";
  value: ProtocolVersionAmino;
}
export interface ProtocolVersionSDKType {
  p2p: bigint;
  block: bigint;
  app: bigint;
}
export interface NodeInfo {
  protocol_version: ProtocolVersion;
  node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: NodeInfoOther;
}
export interface NodeInfoProtoMsg {
  type_url: "/tendermint.p2p.NodeInfo";
  value: Uint8Array;
}
export interface NodeInfoAmino {
  protocol_version?: ProtocolVersionAmino;
  node_id?: string;
  listen_addr?: string;
  network?: string;
  version?: string;
  channels?: string;
  moniker?: string;
  other?: NodeInfoOtherAmino;
}
export interface NodeInfoAminoMsg {
  type: "/tendermint.p2p.NodeInfo";
  value: NodeInfoAmino;
}
export interface NodeInfoSDKType {
  protocol_version: ProtocolVersionSDKType;
  node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
  tx_index: string;
  rpc_address: string;
}
export interface NodeInfoOtherProtoMsg {
  type_url: "/tendermint.p2p.NodeInfoOther";
  value: Uint8Array;
}
export interface NodeInfoOtherAmino {
  tx_index?: string;
  rpc_address?: string;
}
export interface NodeInfoOtherAminoMsg {
  type: "/tendermint.p2p.NodeInfoOther";
  value: NodeInfoOtherAmino;
}
export interface NodeInfoOtherSDKType {
  tx_index: string;
  rpc_address: string;
}
export interface PeerInfo {
  id: string;
  address_info: PeerAddressInfo[];
  last_connected?: Date;
}
export interface PeerInfoProtoMsg {
  type_url: "/tendermint.p2p.PeerInfo";
  value: Uint8Array;
}
export interface PeerInfoAmino {
  id?: string;
  address_info?: PeerAddressInfoAmino[];
  last_connected?: string;
}
export interface PeerInfoAminoMsg {
  type: "/tendermint.p2p.PeerInfo";
  value: PeerInfoAmino;
}
export interface PeerInfoSDKType {
  id: string;
  address_info: PeerAddressInfoSDKType[];
  last_connected?: Date;
}
export interface PeerAddressInfo {
  address: string;
  last_dial_success?: Date;
  last_dial_failure?: Date;
  dial_failures: number;
}
export interface PeerAddressInfoProtoMsg {
  type_url: "/tendermint.p2p.PeerAddressInfo";
  value: Uint8Array;
}
export interface PeerAddressInfoAmino {
  address?: string;
  last_dial_success?: string;
  last_dial_failure?: string;
  dial_failures?: number;
}
export interface PeerAddressInfoAminoMsg {
  type: "/tendermint.p2p.PeerAddressInfo";
  value: PeerAddressInfoAmino;
}
export interface PeerAddressInfoSDKType {
  address: string;
  last_dial_success?: Date;
  last_dial_failure?: Date;
  dial_failures: number;
}
function createBaseProtocolVersion(): ProtocolVersion {
  return {
    p2p: BigInt(0),
    block: BigInt(0),
    app: BigInt(0)
  };
}
export const ProtocolVersion = {
  typeUrl: "/tendermint.p2p.ProtocolVersion",
  is(o: any): o is ProtocolVersion {
    return o && (o.$typeUrl === ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
  },
  isSDK(o: any): o is ProtocolVersionSDKType {
    return o && (o.$typeUrl === ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
  },
  isAmino(o: any): o is ProtocolVersionAmino {
    return o && (o.$typeUrl === ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
  },
  encode(message: ProtocolVersion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.p2p !== BigInt(0)) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProtocolVersion {
    return {
      p2p: isSet(object.p2p) ? BigInt(object.p2p.toString()) : BigInt(0),
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt(0)
    };
  },
  toJSON(message: ProtocolVersion): JsonSafe<ProtocolVersion> {
    const obj: any = {};
    message.p2p !== undefined && (obj.p2p = (message.p2p || BigInt(0)).toString());
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.app !== undefined && (obj.app = (message.app || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion {
    const message = createBaseProtocolVersion();
    message.p2p = object.p2p !== undefined && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProtocolVersionAmino): ProtocolVersion {
    const message = createBaseProtocolVersion();
    if (object.p2p !== undefined && object.p2p !== null) {
      message.p2p = BigInt(object.p2p);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = BigInt(object.app);
    }
    return message;
  },
  toAmino(message: ProtocolVersion): ProtocolVersionAmino {
    const obj: any = {};
    obj.p2p = message.p2p !== BigInt(0) ? message.p2p.toString() : undefined;
    obj.block = message.block !== BigInt(0) ? message.block.toString() : undefined;
    obj.app = message.app !== BigInt(0) ? message.app.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProtocolVersionAminoMsg): ProtocolVersion {
    return ProtocolVersion.fromAmino(object.value);
  },
  fromProtoMsg(message: ProtocolVersionProtoMsg): ProtocolVersion {
    return ProtocolVersion.decode(message.value);
  },
  toProto(message: ProtocolVersion): Uint8Array {
    return ProtocolVersion.encode(message).finish();
  },
  toProtoMsg(message: ProtocolVersion): ProtocolVersionProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.ProtocolVersion",
      value: ProtocolVersion.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProtocolVersion.typeUrl, ProtocolVersion);
function createBaseNodeInfo(): NodeInfo {
  return {
    protocol_version: ProtocolVersion.fromPartial({}),
    node_id: "",
    listen_addr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: NodeInfoOther.fromPartial({})
  };
}
export const NodeInfo = {
  typeUrl: "/tendermint.p2p.NodeInfo",
  is(o: any): o is NodeInfo {
    return o && (o.$typeUrl === NodeInfo.typeUrl || ProtocolVersion.is(o.protocol_version) && typeof o.node_id === "string" && typeof o.listen_addr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && NodeInfoOther.is(o.other));
  },
  isSDK(o: any): o is NodeInfoSDKType {
    return o && (o.$typeUrl === NodeInfo.typeUrl || ProtocolVersion.isSDK(o.protocol_version) && typeof o.node_id === "string" && typeof o.listen_addr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && NodeInfoOther.isSDK(o.other));
  },
  isAmino(o: any): o is NodeInfoAmino {
    return o && (o.$typeUrl === NodeInfo.typeUrl || ProtocolVersion.isAmino(o.protocol_version) && typeof o.node_id === "string" && typeof o.listen_addr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && NodeInfoOther.isAmino(o.other));
  },
  encode(message: NodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protocol_version !== undefined) {
      ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
    }
    if (message.node_id !== "") {
      writer.uint32(18).string(message.node_id);
    }
    if (message.listen_addr !== "") {
      writer.uint32(26).string(message.listen_addr);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol_version = ProtocolVersion.decode(reader, reader.uint32());
          break;
        case 2:
          message.node_id = reader.string();
          break;
        case 3:
          message.listen_addr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = NodeInfoOther.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NodeInfo {
    return {
      protocol_version: isSet(object.protocol_version) ? ProtocolVersion.fromJSON(object.protocol_version) : undefined,
      node_id: isSet(object.node_id) ? String(object.node_id) : "",
      listen_addr: isSet(object.listen_addr) ? String(object.listen_addr) : "",
      network: isSet(object.network) ? String(object.network) : "",
      version: isSet(object.version) ? String(object.version) : "",
      channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      other: isSet(object.other) ? NodeInfoOther.fromJSON(object.other) : undefined
    };
  },
  toJSON(message: NodeInfo): JsonSafe<NodeInfo> {
    const obj: any = {};
    message.protocol_version !== undefined && (obj.protocol_version = message.protocol_version ? ProtocolVersion.toJSON(message.protocol_version) : undefined);
    message.node_id !== undefined && (obj.node_id = message.node_id);
    message.listen_addr !== undefined && (obj.listen_addr = message.listen_addr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined && (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined && (obj.other = message.other ? NodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<NodeInfo>): NodeInfo {
    const message = createBaseNodeInfo();
    message.protocol_version = object.protocol_version !== undefined && object.protocol_version !== null ? ProtocolVersion.fromPartial(object.protocol_version) : undefined;
    message.node_id = object.node_id ?? "";
    message.listen_addr = object.listen_addr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? "";
    message.other = object.other !== undefined && object.other !== null ? NodeInfoOther.fromPartial(object.other) : undefined;
    return message;
  },
  fromAmino(object: NodeInfoAmino): NodeInfo {
    const message = createBaseNodeInfo();
    if (object.protocol_version !== undefined && object.protocol_version !== null) {
      message.protocol_version = ProtocolVersion.fromAmino(object.protocol_version);
    }
    if (object.node_id !== undefined && object.node_id !== null) {
      message.node_id = object.node_id;
    }
    if (object.listen_addr !== undefined && object.listen_addr !== null) {
      message.listen_addr = object.listen_addr;
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.channels !== undefined && object.channels !== null) {
      message.channels = bytesFromBase64(object.channels);
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.other !== undefined && object.other !== null) {
      message.other = NodeInfoOther.fromAmino(object.other);
    }
    return message;
  },
  toAmino(message: NodeInfo): NodeInfoAmino {
    const obj: any = {};
    obj.protocol_version = message.protocol_version ? ProtocolVersion.toAmino(message.protocol_version) : undefined;
    obj.node_id = message.node_id === "" ? undefined : message.node_id;
    obj.listen_addr = message.listen_addr === "" ? undefined : message.listen_addr;
    obj.network = message.network === "" ? undefined : message.network;
    obj.version = message.version === "" ? undefined : message.version;
    obj.channels = message.channels ? base64FromBytes(message.channels) : undefined;
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.other = message.other ? NodeInfoOther.toAmino(message.other) : undefined;
    return obj;
  },
  fromAminoMsg(object: NodeInfoAminoMsg): NodeInfo {
    return NodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeInfoProtoMsg): NodeInfo {
    return NodeInfo.decode(message.value);
  },
  toProto(message: NodeInfo): Uint8Array {
    return NodeInfo.encode(message).finish();
  },
  toProtoMsg(message: NodeInfo): NodeInfoProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.NodeInfo",
      value: NodeInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NodeInfo.typeUrl, NodeInfo);
function createBaseNodeInfoOther(): NodeInfoOther {
  return {
    tx_index: "",
    rpc_address: ""
  };
}
export const NodeInfoOther = {
  typeUrl: "/tendermint.p2p.NodeInfoOther",
  is(o: any): o is NodeInfoOther {
    return o && (o.$typeUrl === NodeInfoOther.typeUrl || typeof o.tx_index === "string" && typeof o.rpc_address === "string");
  },
  isSDK(o: any): o is NodeInfoOtherSDKType {
    return o && (o.$typeUrl === NodeInfoOther.typeUrl || typeof o.tx_index === "string" && typeof o.rpc_address === "string");
  },
  isAmino(o: any): o is NodeInfoOtherAmino {
    return o && (o.$typeUrl === NodeInfoOther.typeUrl || typeof o.tx_index === "string" && typeof o.rpc_address === "string");
  },
  encode(message: NodeInfoOther, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx_index !== "") {
      writer.uint32(10).string(message.tx_index);
    }
    if (message.rpc_address !== "") {
      writer.uint32(18).string(message.rpc_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NodeInfoOther {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfoOther();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_index = reader.string();
          break;
        case 2:
          message.rpc_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NodeInfoOther {
    return {
      tx_index: isSet(object.tx_index) ? String(object.tx_index) : "",
      rpc_address: isSet(object.rpc_address) ? String(object.rpc_address) : ""
    };
  },
  toJSON(message: NodeInfoOther): JsonSafe<NodeInfoOther> {
    const obj: any = {};
    message.tx_index !== undefined && (obj.tx_index = message.tx_index);
    message.rpc_address !== undefined && (obj.rpc_address = message.rpc_address);
    return obj;
  },
  fromPartial(object: DeepPartial<NodeInfoOther>): NodeInfoOther {
    const message = createBaseNodeInfoOther();
    message.tx_index = object.tx_index ?? "";
    message.rpc_address = object.rpc_address ?? "";
    return message;
  },
  fromAmino(object: NodeInfoOtherAmino): NodeInfoOther {
    const message = createBaseNodeInfoOther();
    if (object.tx_index !== undefined && object.tx_index !== null) {
      message.tx_index = object.tx_index;
    }
    if (object.rpc_address !== undefined && object.rpc_address !== null) {
      message.rpc_address = object.rpc_address;
    }
    return message;
  },
  toAmino(message: NodeInfoOther): NodeInfoOtherAmino {
    const obj: any = {};
    obj.tx_index = message.tx_index === "" ? undefined : message.tx_index;
    obj.rpc_address = message.rpc_address === "" ? undefined : message.rpc_address;
    return obj;
  },
  fromAminoMsg(object: NodeInfoOtherAminoMsg): NodeInfoOther {
    return NodeInfoOther.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeInfoOtherProtoMsg): NodeInfoOther {
    return NodeInfoOther.decode(message.value);
  },
  toProto(message: NodeInfoOther): Uint8Array {
    return NodeInfoOther.encode(message).finish();
  },
  toProtoMsg(message: NodeInfoOther): NodeInfoOtherProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.NodeInfoOther",
      value: NodeInfoOther.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NodeInfoOther.typeUrl, NodeInfoOther);
function createBasePeerInfo(): PeerInfo {
  return {
    id: "",
    address_info: [],
    last_connected: undefined
  };
}
export const PeerInfo = {
  typeUrl: "/tendermint.p2p.PeerInfo",
  is(o: any): o is PeerInfo {
    return o && (o.$typeUrl === PeerInfo.typeUrl || typeof o.id === "string" && Array.isArray(o.address_info) && (!o.address_info.length || PeerAddressInfo.is(o.address_info[0])));
  },
  isSDK(o: any): o is PeerInfoSDKType {
    return o && (o.$typeUrl === PeerInfo.typeUrl || typeof o.id === "string" && Array.isArray(o.address_info) && (!o.address_info.length || PeerAddressInfo.isSDK(o.address_info[0])));
  },
  isAmino(o: any): o is PeerInfoAmino {
    return o && (o.$typeUrl === PeerInfo.typeUrl || typeof o.id === "string" && Array.isArray(o.address_info) && (!o.address_info.length || PeerAddressInfo.isAmino(o.address_info[0])));
  },
  encode(message: PeerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.address_info) {
      PeerAddressInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.last_connected !== undefined) {
      Timestamp.encode(toTimestamp(message.last_connected), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.address_info.push(PeerAddressInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.last_connected = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeerInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      address_info: Array.isArray(object?.address_info) ? object.address_info.map((e: any) => PeerAddressInfo.fromJSON(e)) : [],
      last_connected: isSet(object.last_connected) ? fromJsonTimestamp(object.last_connected) : undefined
    };
  },
  toJSON(message: PeerInfo): JsonSafe<PeerInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.address_info) {
      obj.address_info = message.address_info.map(e => e ? PeerAddressInfo.toJSON(e) : undefined);
    } else {
      obj.address_info = [];
    }
    message.last_connected !== undefined && (obj.last_connected = message.last_connected.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<PeerInfo>): PeerInfo {
    const message = createBasePeerInfo();
    message.id = object.id ?? "";
    message.address_info = object.address_info?.map(e => PeerAddressInfo.fromPartial(e)) || [];
    message.last_connected = object.last_connected ?? undefined;
    return message;
  },
  fromAmino(object: PeerInfoAmino): PeerInfo {
    const message = createBasePeerInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    message.address_info = object.address_info?.map(e => PeerAddressInfo.fromAmino(e)) || [];
    if (object.last_connected !== undefined && object.last_connected !== null) {
      message.last_connected = fromTimestamp(Timestamp.fromAmino(object.last_connected));
    }
    return message;
  },
  toAmino(message: PeerInfo): PeerInfoAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    if (message.address_info) {
      obj.address_info = message.address_info.map(e => e ? PeerAddressInfo.toAmino(e) : undefined);
    } else {
      obj.address_info = message.address_info;
    }
    obj.last_connected = message.last_connected ? Timestamp.toAmino(toTimestamp(message.last_connected)) : undefined;
    return obj;
  },
  fromAminoMsg(object: PeerInfoAminoMsg): PeerInfo {
    return PeerInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PeerInfoProtoMsg): PeerInfo {
    return PeerInfo.decode(message.value);
  },
  toProto(message: PeerInfo): Uint8Array {
    return PeerInfo.encode(message).finish();
  },
  toProtoMsg(message: PeerInfo): PeerInfoProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.PeerInfo",
      value: PeerInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PeerInfo.typeUrl, PeerInfo);
function createBasePeerAddressInfo(): PeerAddressInfo {
  return {
    address: "",
    last_dial_success: undefined,
    last_dial_failure: undefined,
    dial_failures: 0
  };
}
export const PeerAddressInfo = {
  typeUrl: "/tendermint.p2p.PeerAddressInfo",
  is(o: any): o is PeerAddressInfo {
    return o && (o.$typeUrl === PeerAddressInfo.typeUrl || typeof o.address === "string" && typeof o.dial_failures === "number");
  },
  isSDK(o: any): o is PeerAddressInfoSDKType {
    return o && (o.$typeUrl === PeerAddressInfo.typeUrl || typeof o.address === "string" && typeof o.dial_failures === "number");
  },
  isAmino(o: any): o is PeerAddressInfoAmino {
    return o && (o.$typeUrl === PeerAddressInfo.typeUrl || typeof o.address === "string" && typeof o.dial_failures === "number");
  },
  encode(message: PeerAddressInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.last_dial_success !== undefined) {
      Timestamp.encode(toTimestamp(message.last_dial_success), writer.uint32(18).fork()).ldelim();
    }
    if (message.last_dial_failure !== undefined) {
      Timestamp.encode(toTimestamp(message.last_dial_failure), writer.uint32(26).fork()).ldelim();
    }
    if (message.dial_failures !== 0) {
      writer.uint32(32).uint32(message.dial_failures);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeerAddressInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerAddressInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.last_dial_success = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.last_dial_failure = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.dial_failures = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeerAddressInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      last_dial_success: isSet(object.last_dial_success) ? fromJsonTimestamp(object.last_dial_success) : undefined,
      last_dial_failure: isSet(object.last_dial_failure) ? fromJsonTimestamp(object.last_dial_failure) : undefined,
      dial_failures: isSet(object.dial_failures) ? Number(object.dial_failures) : 0
    };
  },
  toJSON(message: PeerAddressInfo): JsonSafe<PeerAddressInfo> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.last_dial_success !== undefined && (obj.last_dial_success = message.last_dial_success.toISOString());
    message.last_dial_failure !== undefined && (obj.last_dial_failure = message.last_dial_failure.toISOString());
    message.dial_failures !== undefined && (obj.dial_failures = Math.round(message.dial_failures));
    return obj;
  },
  fromPartial(object: DeepPartial<PeerAddressInfo>): PeerAddressInfo {
    const message = createBasePeerAddressInfo();
    message.address = object.address ?? "";
    message.last_dial_success = object.last_dial_success ?? undefined;
    message.last_dial_failure = object.last_dial_failure ?? undefined;
    message.dial_failures = object.dial_failures ?? 0;
    return message;
  },
  fromAmino(object: PeerAddressInfoAmino): PeerAddressInfo {
    const message = createBasePeerAddressInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.last_dial_success !== undefined && object.last_dial_success !== null) {
      message.last_dial_success = fromTimestamp(Timestamp.fromAmino(object.last_dial_success));
    }
    if (object.last_dial_failure !== undefined && object.last_dial_failure !== null) {
      message.last_dial_failure = fromTimestamp(Timestamp.fromAmino(object.last_dial_failure));
    }
    if (object.dial_failures !== undefined && object.dial_failures !== null) {
      message.dial_failures = object.dial_failures;
    }
    return message;
  },
  toAmino(message: PeerAddressInfo): PeerAddressInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.last_dial_success = message.last_dial_success ? Timestamp.toAmino(toTimestamp(message.last_dial_success)) : undefined;
    obj.last_dial_failure = message.last_dial_failure ? Timestamp.toAmino(toTimestamp(message.last_dial_failure)) : undefined;
    obj.dial_failures = message.dial_failures === 0 ? undefined : message.dial_failures;
    return obj;
  },
  fromAminoMsg(object: PeerAddressInfoAminoMsg): PeerAddressInfo {
    return PeerAddressInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PeerAddressInfoProtoMsg): PeerAddressInfo {
    return PeerAddressInfo.decode(message.value);
  },
  toProto(message: PeerAddressInfo): Uint8Array {
    return PeerAddressInfo.encode(message).finish();
  },
  toProtoMsg(message: PeerAddressInfo): PeerAddressInfoProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.PeerAddressInfo",
      value: PeerAddressInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PeerAddressInfo.typeUrl, PeerAddressInfo);