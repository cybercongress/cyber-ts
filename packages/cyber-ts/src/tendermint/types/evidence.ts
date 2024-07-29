import { Vote, VoteAmino, VoteSDKType, LightBlock, LightBlockAmino, LightBlockSDKType } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface Evidence {
  duplicate_vote_evidence?: DuplicateVoteEvidence;
  light_client_attack_evidence?: LightClientAttackEvidence;
}
export interface EvidenceProtoMsg {
  type_url: "/tendermint.types.Evidence";
  value: Uint8Array;
}
export interface EvidenceAmino {
  duplicate_vote_evidence?: DuplicateVoteEvidenceAmino;
  light_client_attack_evidence?: LightClientAttackEvidenceAmino;
}
export interface EvidenceAminoMsg {
  type: "/tendermint.types.Evidence";
  value: EvidenceAmino;
}
export interface EvidenceSDKType {
  duplicate_vote_evidence?: DuplicateVoteEvidenceSDKType;
  light_client_attack_evidence?: LightClientAttackEvidenceSDKType;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
  vote_a?: Vote;
  vote_b?: Vote;
  total_voting_power: bigint;
  validator_power: bigint;
  timestamp: Date;
}
export interface DuplicateVoteEvidenceProtoMsg {
  type_url: "/tendermint.types.DuplicateVoteEvidence";
  value: Uint8Array;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceAmino {
  vote_a?: VoteAmino;
  vote_b?: VoteAmino;
  total_voting_power?: string;
  validator_power?: string;
  timestamp?: string;
}
export interface DuplicateVoteEvidenceAminoMsg {
  type: "/tendermint.types.DuplicateVoteEvidence";
  value: DuplicateVoteEvidenceAmino;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceSDKType {
  vote_a?: VoteSDKType;
  vote_b?: VoteSDKType;
  total_voting_power: bigint;
  validator_power: bigint;
  timestamp: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
  conflicting_block?: LightBlock;
  common_height: bigint;
  byzantine_validators: Validator[];
  total_voting_power: bigint;
  timestamp: Date;
}
export interface LightClientAttackEvidenceProtoMsg {
  type_url: "/tendermint.types.LightClientAttackEvidence";
  value: Uint8Array;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceAmino {
  conflicting_block?: LightBlockAmino;
  common_height?: string;
  byzantine_validators?: ValidatorAmino[];
  total_voting_power?: string;
  timestamp?: string;
}
export interface LightClientAttackEvidenceAminoMsg {
  type: "/tendermint.types.LightClientAttackEvidence";
  value: LightClientAttackEvidenceAmino;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceSDKType {
  conflicting_block?: LightBlockSDKType;
  common_height: bigint;
  byzantine_validators: ValidatorSDKType[];
  total_voting_power: bigint;
  timestamp: Date;
}
export interface EvidenceList {
  evidence: Evidence[];
}
export interface EvidenceListProtoMsg {
  type_url: "/tendermint.types.EvidenceList";
  value: Uint8Array;
}
export interface EvidenceListAmino {
  evidence?: EvidenceAmino[];
}
export interface EvidenceListAminoMsg {
  type: "/tendermint.types.EvidenceList";
  value: EvidenceListAmino;
}
export interface EvidenceListSDKType {
  evidence: EvidenceSDKType[];
}
function createBaseEvidence(): Evidence {
  return {
    duplicate_vote_evidence: undefined,
    light_client_attack_evidence: undefined
  };
}
export const Evidence = {
  typeUrl: "/tendermint.types.Evidence",
  is(o: any): o is Evidence {
    return o && o.$typeUrl === Evidence.typeUrl;
  },
  isSDK(o: any): o is EvidenceSDKType {
    return o && o.$typeUrl === Evidence.typeUrl;
  },
  isAmino(o: any): o is EvidenceAmino {
    return o && o.$typeUrl === Evidence.typeUrl;
  },
  encode(message: Evidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.duplicate_vote_evidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.light_client_attack_evidence !== undefined) {
      LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicate_vote_evidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.light_client_attack_evidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Evidence {
    return {
      duplicate_vote_evidence: isSet(object.duplicate_vote_evidence) ? DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence) : undefined,
      light_client_attack_evidence: isSet(object.light_client_attack_evidence) ? LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence) : undefined
    };
  },
  toJSON(message: Evidence): JsonSafe<Evidence> {
    const obj: any = {};
    message.duplicate_vote_evidence !== undefined && (obj.duplicate_vote_evidence = message.duplicate_vote_evidence ? DuplicateVoteEvidence.toJSON(message.duplicate_vote_evidence) : undefined);
    message.light_client_attack_evidence !== undefined && (obj.light_client_attack_evidence = message.light_client_attack_evidence ? LightClientAttackEvidence.toJSON(message.light_client_attack_evidence) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.duplicate_vote_evidence = object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence) : undefined;
    message.light_client_attack_evidence = object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null ? LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence) : undefined;
    return message;
  },
  fromAmino(object: EvidenceAmino): Evidence {
    const message = createBaseEvidence();
    if (object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null) {
      message.duplicate_vote_evidence = DuplicateVoteEvidence.fromAmino(object.duplicate_vote_evidence);
    }
    if (object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null) {
      message.light_client_attack_evidence = LightClientAttackEvidence.fromAmino(object.light_client_attack_evidence);
    }
    return message;
  },
  toAmino(message: Evidence): EvidenceAmino {
    const obj: any = {};
    obj.duplicate_vote_evidence = message.duplicate_vote_evidence ? DuplicateVoteEvidence.toAmino(message.duplicate_vote_evidence) : undefined;
    obj.light_client_attack_evidence = message.light_client_attack_evidence ? LightClientAttackEvidence.toAmino(message.light_client_attack_evidence) : undefined;
    return obj;
  },
  fromAminoMsg(object: EvidenceAminoMsg): Evidence {
    return Evidence.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceProtoMsg): Evidence {
    return Evidence.decode(message.value);
  },
  toProto(message: Evidence): Uint8Array {
    return Evidence.encode(message).finish();
  },
  toProtoMsg(message: Evidence): EvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.Evidence",
      value: Evidence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Evidence.typeUrl, Evidence);
function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    vote_a: undefined,
    vote_b: undefined,
    total_voting_power: BigInt(0),
    validator_power: BigInt(0),
    timestamp: new Date()
  };
}
export const DuplicateVoteEvidence = {
  typeUrl: "/tendermint.types.DuplicateVoteEvidence",
  is(o: any): o is DuplicateVoteEvidence {
    return o && (o.$typeUrl === DuplicateVoteEvidence.typeUrl || typeof o.total_voting_power === "bigint" && typeof o.validator_power === "bigint" && Timestamp.is(o.timestamp));
  },
  isSDK(o: any): o is DuplicateVoteEvidenceSDKType {
    return o && (o.$typeUrl === DuplicateVoteEvidence.typeUrl || typeof o.total_voting_power === "bigint" && typeof o.validator_power === "bigint" && Timestamp.isSDK(o.timestamp));
  },
  isAmino(o: any): o is DuplicateVoteEvidenceAmino {
    return o && (o.$typeUrl === DuplicateVoteEvidence.typeUrl || typeof o.total_voting_power === "bigint" && typeof o.validator_power === "bigint" && Timestamp.isAmino(o.timestamp));
  },
  encode(message: DuplicateVoteEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote_a !== undefined) {
      Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
    }
    if (message.vote_b !== undefined) {
      Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
    }
    if (message.total_voting_power !== BigInt(0)) {
      writer.uint32(24).int64(message.total_voting_power);
    }
    if (message.validator_power !== BigInt(0)) {
      writer.uint32(32).int64(message.validator_power);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DuplicateVoteEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote_a = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.vote_b = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.total_voting_power = reader.int64();
          break;
        case 4:
          message.validator_power = reader.int64();
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DuplicateVoteEvidence {
    return {
      vote_a: isSet(object.vote_a) ? Vote.fromJSON(object.vote_a) : undefined,
      vote_b: isSet(object.vote_b) ? Vote.fromJSON(object.vote_b) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? BigInt(object.total_voting_power.toString()) : BigInt(0),
      validator_power: isSet(object.validator_power) ? BigInt(object.validator_power.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: DuplicateVoteEvidence): JsonSafe<DuplicateVoteEvidence> {
    const obj: any = {};
    message.vote_a !== undefined && (obj.vote_a = message.vote_a ? Vote.toJSON(message.vote_a) : undefined);
    message.vote_b !== undefined && (obj.vote_b = message.vote_b ? Vote.toJSON(message.vote_b) : undefined);
    message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || BigInt(0)).toString());
    message.validator_power !== undefined && (obj.validator_power = (message.validator_power || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    message.vote_a = object.vote_a !== undefined && object.vote_a !== null ? Vote.fromPartial(object.vote_a) : undefined;
    message.vote_b = object.vote_b !== undefined && object.vote_b !== null ? Vote.fromPartial(object.vote_b) : undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
    message.validator_power = object.validator_power !== undefined && object.validator_power !== null ? BigInt(object.validator_power.toString()) : BigInt(0);
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: DuplicateVoteEvidenceAmino): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    if (object.vote_a !== undefined && object.vote_a !== null) {
      message.vote_a = Vote.fromAmino(object.vote_a);
    }
    if (object.vote_b !== undefined && object.vote_b !== null) {
      message.vote_b = Vote.fromAmino(object.vote_b);
    }
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.total_voting_power = BigInt(object.total_voting_power);
    }
    if (object.validator_power !== undefined && object.validator_power !== null) {
      message.validator_power = BigInt(object.validator_power);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: DuplicateVoteEvidence): DuplicateVoteEvidenceAmino {
    const obj: any = {};
    obj.vote_a = message.vote_a ? Vote.toAmino(message.vote_a) : undefined;
    obj.vote_b = message.vote_b ? Vote.toAmino(message.vote_b) : undefined;
    obj.total_voting_power = message.total_voting_power !== BigInt(0) ? message.total_voting_power.toString() : undefined;
    obj.validator_power = message.validator_power !== BigInt(0) ? message.validator_power.toString() : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: DuplicateVoteEvidenceAminoMsg): DuplicateVoteEvidence {
    return DuplicateVoteEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: DuplicateVoteEvidenceProtoMsg): DuplicateVoteEvidence {
    return DuplicateVoteEvidence.decode(message.value);
  },
  toProto(message: DuplicateVoteEvidence): Uint8Array {
    return DuplicateVoteEvidence.encode(message).finish();
  },
  toProtoMsg(message: DuplicateVoteEvidence): DuplicateVoteEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.DuplicateVoteEvidence",
      value: DuplicateVoteEvidence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DuplicateVoteEvidence.typeUrl, DuplicateVoteEvidence);
function createBaseLightClientAttackEvidence(): LightClientAttackEvidence {
  return {
    conflicting_block: undefined,
    common_height: BigInt(0),
    byzantine_validators: [],
    total_voting_power: BigInt(0),
    timestamp: new Date()
  };
}
export const LightClientAttackEvidence = {
  typeUrl: "/tendermint.types.LightClientAttackEvidence",
  is(o: any): o is LightClientAttackEvidence {
    return o && (o.$typeUrl === LightClientAttackEvidence.typeUrl || typeof o.common_height === "bigint" && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || Validator.is(o.byzantine_validators[0])) && typeof o.total_voting_power === "bigint" && Timestamp.is(o.timestamp));
  },
  isSDK(o: any): o is LightClientAttackEvidenceSDKType {
    return o && (o.$typeUrl === LightClientAttackEvidence.typeUrl || typeof o.common_height === "bigint" && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || Validator.isSDK(o.byzantine_validators[0])) && typeof o.total_voting_power === "bigint" && Timestamp.isSDK(o.timestamp));
  },
  isAmino(o: any): o is LightClientAttackEvidenceAmino {
    return o && (o.$typeUrl === LightClientAttackEvidence.typeUrl || typeof o.common_height === "bigint" && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || Validator.isAmino(o.byzantine_validators[0])) && typeof o.total_voting_power === "bigint" && Timestamp.isAmino(o.timestamp));
  },
  encode(message: LightClientAttackEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.conflicting_block !== undefined) {
      LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
    }
    if (message.common_height !== BigInt(0)) {
      writer.uint32(16).int64(message.common_height);
    }
    for (const v of message.byzantine_validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.total_voting_power !== BigInt(0)) {
      writer.uint32(32).int64(message.total_voting_power);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LightClientAttackEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflicting_block = LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.common_height = reader.int64();
          break;
        case 3:
          message.byzantine_validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.total_voting_power = reader.int64();
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LightClientAttackEvidence {
    return {
      conflicting_block: isSet(object.conflicting_block) ? LightBlock.fromJSON(object.conflicting_block) : undefined,
      common_height: isSet(object.common_height) ? BigInt(object.common_height.toString()) : BigInt(0),
      byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e: any) => Validator.fromJSON(e)) : [],
      total_voting_power: isSet(object.total_voting_power) ? BigInt(object.total_voting_power.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: LightClientAttackEvidence): JsonSafe<LightClientAttackEvidence> {
    const obj: any = {};
    message.conflicting_block !== undefined && (obj.conflicting_block = message.conflicting_block ? LightBlock.toJSON(message.conflicting_block) : undefined);
    message.common_height !== undefined && (obj.common_height = (message.common_height || BigInt(0)).toString());
    if (message.byzantine_validators) {
      obj.byzantine_validators = message.byzantine_validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.byzantine_validators = [];
    }
    message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    message.conflicting_block = object.conflicting_block !== undefined && object.conflicting_block !== null ? LightBlock.fromPartial(object.conflicting_block) : undefined;
    message.common_height = object.common_height !== undefined && object.common_height !== null ? BigInt(object.common_height.toString()) : BigInt(0);
    message.byzantine_validators = object.byzantine_validators?.map(e => Validator.fromPartial(e)) || [];
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: LightClientAttackEvidenceAmino): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    if (object.conflicting_block !== undefined && object.conflicting_block !== null) {
      message.conflicting_block = LightBlock.fromAmino(object.conflicting_block);
    }
    if (object.common_height !== undefined && object.common_height !== null) {
      message.common_height = BigInt(object.common_height);
    }
    message.byzantine_validators = object.byzantine_validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.total_voting_power = BigInt(object.total_voting_power);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: LightClientAttackEvidence): LightClientAttackEvidenceAmino {
    const obj: any = {};
    obj.conflicting_block = message.conflicting_block ? LightBlock.toAmino(message.conflicting_block) : undefined;
    obj.common_height = message.common_height !== BigInt(0) ? message.common_height.toString() : undefined;
    if (message.byzantine_validators) {
      obj.byzantine_validators = message.byzantine_validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.byzantine_validators = message.byzantine_validators;
    }
    obj.total_voting_power = message.total_voting_power !== BigInt(0) ? message.total_voting_power.toString() : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: LightClientAttackEvidenceAminoMsg): LightClientAttackEvidence {
    return LightClientAttackEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: LightClientAttackEvidenceProtoMsg): LightClientAttackEvidence {
    return LightClientAttackEvidence.decode(message.value);
  },
  toProto(message: LightClientAttackEvidence): Uint8Array {
    return LightClientAttackEvidence.encode(message).finish();
  },
  toProtoMsg(message: LightClientAttackEvidence): LightClientAttackEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.LightClientAttackEvidence",
      value: LightClientAttackEvidence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LightClientAttackEvidence.typeUrl, LightClientAttackEvidence);
function createBaseEvidenceList(): EvidenceList {
  return {
    evidence: []
  };
}
export const EvidenceList = {
  typeUrl: "/tendermint.types.EvidenceList",
  is(o: any): o is EvidenceList {
    return o && (o.$typeUrl === EvidenceList.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || Evidence.is(o.evidence[0])));
  },
  isSDK(o: any): o is EvidenceListSDKType {
    return o && (o.$typeUrl === EvidenceList.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || Evidence.isSDK(o.evidence[0])));
  },
  isAmino(o: any): o is EvidenceListAmino {
    return o && (o.$typeUrl === EvidenceList.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || Evidence.isAmino(o.evidence[0])));
  },
  encode(message: EvidenceList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvidenceList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvidenceList {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromJSON(e)) : []
    };
  },
  toJSON(message: EvidenceList): JsonSafe<EvidenceList> {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toJSON(e) : undefined);
    } else {
      obj.evidence = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EvidenceList>): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EvidenceListAmino): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map(e => Evidence.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EvidenceList): EvidenceListAmino {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toAmino(e) : undefined);
    } else {
      obj.evidence = message.evidence;
    }
    return obj;
  },
  fromAminoMsg(object: EvidenceListAminoMsg): EvidenceList {
    return EvidenceList.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceListProtoMsg): EvidenceList {
    return EvidenceList.decode(message.value);
  },
  toProto(message: EvidenceList): Uint8Array {
    return EvidenceList.encode(message).finish();
  },
  toProtoMsg(message: EvidenceList): EvidenceListProtoMsg {
    return {
      typeUrl: "/tendermint.types.EvidenceList",
      value: EvidenceList.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EvidenceList.typeUrl, EvidenceList);