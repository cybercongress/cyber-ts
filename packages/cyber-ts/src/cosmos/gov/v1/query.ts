import { ProposalStatus, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType, Deposit, DepositAmino, DepositSDKType, TallyResult, TallyResultAmino, TallyResultSDKType, proposalStatusFromJSON, proposalStatusToJSON } from "./gov";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: bigint;
}
export interface QueryProposalRequestProtoMsg {
  type_url: "/cosmos.gov.v1.QueryProposalRequest";
  value: Uint8Array;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestSDKType {
  proposal_id: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
  proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
  type_url: "/cosmos.gov.v1.QueryProposalResponse";
  value: Uint8Array;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseAmino {
  proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseSDKType {
  proposal?: ProposalSDKType;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
  /** proposal_status defines the status of the proposals. */
  proposal_status: ProposalStatus;
  /** voter defines the voter address for the proposals. */
  voter: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryProposalsRequestProtoMsg {
  type_url: "/cosmos.gov.v1.QueryProposalsRequest";
  value: Uint8Array;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestAmino {
  /** proposal_status defines the status of the proposals. */
  proposal_status?: ProposalStatus;
  /** voter defines the voter address for the proposals. */
  voter?: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryProposalsRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryProposalsRequest";
  value: QueryProposalsRequestAmino;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestSDKType {
  proposal_status: ProposalStatus;
  voter: string;
  depositor: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryProposalsResponseProtoMsg {
  type_url: "/cosmos.gov.v1.QueryProposalsResponse";
  value: Uint8Array;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseAmino {
  proposals?: ProposalAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryProposalsResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryProposalsResponse";
  value: QueryProposalsResponseAmino;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseSDKType {
  proposals: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: bigint;
  /** voter defines the oter address for the proposals. */
  voter: string;
}
export interface QueryVoteRequestProtoMsg {
  type_url: "/cosmos.gov.v1.QueryVoteRequest";
  value: Uint8Array;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
  /** voter defines the oter address for the proposals. */
  voter?: string;
}
export interface QueryVoteRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryVoteRequest";
  value: QueryVoteRequestAmino;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestSDKType {
  proposal_id: bigint;
  voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
  /** vote defined the queried vote. */
  vote?: Vote;
}
export interface QueryVoteResponseProtoMsg {
  type_url: "/cosmos.gov.v1.QueryVoteResponse";
  value: Uint8Array;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseAmino {
  /** vote defined the queried vote. */
  vote?: VoteAmino;
}
export interface QueryVoteResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryVoteResponse";
  value: QueryVoteResponseAmino;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseSDKType {
  vote?: VoteSDKType;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesRequestProtoMsg {
  type_url: "/cosmos.gov.v1.QueryVotesRequest";
  value: Uint8Array;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryVotesRequest";
  value: QueryVotesRequestAmino;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
  /** votes defined the queried votes. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesResponseProtoMsg {
  type_url: "/cosmos.gov.v1.QueryVotesResponse";
  value: Uint8Array;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseAmino {
  /** votes defined the queried votes. */
  votes?: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryVotesResponse";
  value: QueryVotesResponseAmino;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  params_type: string;
}
export interface QueryParamsRequestProtoMsg {
  type_url: "/cosmos.gov.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  params_type?: string;
}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
  params_type: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** voting_params defines the parameters related to voting. */
  voting_params?: VotingParams;
  /** deposit_params defines the parameters related to deposit. */
  deposit_params?: DepositParams;
  /** tally_params defines the parameters related to tally. */
  tally_params?: TallyParams;
}
export interface QueryParamsResponseProtoMsg {
  type_url: "/cosmos.gov.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** voting_params defines the parameters related to voting. */
  voting_params?: VotingParamsAmino;
  /** deposit_params defines the parameters related to deposit. */
  deposit_params?: DepositParamsAmino;
  /** tally_params defines the parameters related to tally. */
  tally_params?: TallyParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  voting_params?: VotingParamsSDKType;
  deposit_params?: DepositParamsSDKType;
  tally_params?: TallyParamsSDKType;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
}
export interface QueryDepositRequestProtoMsg {
  type_url: "/cosmos.gov.v1.QueryDepositRequest";
  value: Uint8Array;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor?: string;
}
export interface QueryDepositRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryDepositRequest";
  value: QueryDepositRequestAmino;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestSDKType {
  proposal_id: bigint;
  depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
  /** deposit defines the requested deposit. */
  deposit?: Deposit;
}
export interface QueryDepositResponseProtoMsg {
  type_url: "/cosmos.gov.v1.QueryDepositResponse";
  value: Uint8Array;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseAmino {
  /** deposit defines the requested deposit. */
  deposit?: DepositAmino;
}
export interface QueryDepositResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryDepositResponse";
  value: QueryDepositResponseAmino;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseSDKType {
  deposit?: DepositSDKType;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
  type_url: "/cosmos.gov.v1.QueryDepositsRequest";
  value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryDepositsRequest";
  value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  deposits: Deposit[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
  type_url: "/cosmos.gov.v1.QueryDepositsResponse";
  value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
  deposits?: DepositAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: bigint;
}
export interface QueryTallyResultRequestProtoMsg {
  type_url: "/cosmos.gov.v1.QueryTallyResultRequest";
  value: Uint8Array;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
}
export interface QueryTallyResultRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryTallyResultRequest";
  value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestSDKType {
  proposal_id: bigint;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally?: TallyResult;
}
export interface QueryTallyResultResponseProtoMsg {
  type_url: "/cosmos.gov.v1.QueryTallyResultResponse";
  value: Uint8Array;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseAmino {
  /** tally defines the requested tally. */
  tally?: TallyResultAmino;
}
export interface QueryTallyResultResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryTallyResultResponse";
  value: QueryTallyResultResponseAmino;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseSDKType {
  tally?: TallyResultSDKType;
}
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposal_id: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
  aminoType: "cosmos-sdk/v1/QueryProposalRequest",
  is(o: any): o is QueryProposalRequest {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isSDK(o: any): o is QueryProposalRequestSDKType {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryProposalRequestAmino {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryProposalRequest): JsonSafe<QueryProposalRequest> {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryProposalRequest): QueryProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id !== BigInt(0) ? message.proposal_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalRequest): QueryProposalRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalRequest",
      value: QueryProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalRequest.typeUrl, QueryProposalRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalRequest.aminoType, QueryProposalRequest.typeUrl);
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}
export const QueryProposalResponse = {
  typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
  aminoType: "cosmos-sdk/v1/QueryProposalResponse",
  is(o: any): o is QueryProposalResponse {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  isSDK(o: any): o is QueryProposalResponseSDKType {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  isAmino(o: any): o is QueryProposalResponseAmino {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: QueryProposalResponse): JsonSafe<QueryProposalResponse> {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: QueryProposalResponse): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalResponse): QueryProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalResponse",
      value: QueryProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalResponse.typeUrl, QueryProposalResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalResponse.aminoType, QueryProposalResponse.typeUrl);
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    proposal_status: 0,
    voter: "",
    depositor: "",
    pagination: undefined
  };
}
export const QueryProposalsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
  aminoType: "cosmos-sdk/v1/QueryProposalsRequest",
  is(o: any): o is QueryProposalsRequest {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || isSet(o.proposal_status) && typeof o.voter === "string" && typeof o.depositor === "string");
  },
  isSDK(o: any): o is QueryProposalsRequestSDKType {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || isSet(o.proposal_status) && typeof o.voter === "string" && typeof o.depositor === "string");
  },
  isAmino(o: any): o is QueryProposalsRequestAmino {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || isSet(o.proposal_status) && typeof o.voter === "string" && typeof o.depositor === "string");
  },
  encode(message: QueryProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_status !== 0) {
      writer.uint32(8).int32(message.proposal_status);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_status = reader.int32() as any;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsRequest {
    return {
      proposal_status: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : -1,
      voter: isSet(object.voter) ? String(object.voter) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsRequest): JsonSafe<QueryProposalsRequest> {
    const obj: any = {};
    message.proposal_status !== undefined && (obj.proposal_status = proposalStatusToJSON(message.proposal_status));
    message.voter !== undefined && (obj.voter = message.voter);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposal_status = object.proposal_status ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    if (object.proposal_status !== undefined && object.proposal_status !== null) {
      message.proposal_status = object.proposal_status;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino {
    const obj: any = {};
    obj.proposal_status = message.proposal_status === 0 ? undefined : message.proposal_status;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsRequest): QueryProposalsRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalsRequest",
      value: QueryProposalsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.decode(message.value);
  },
  toProto(message: QueryProposalsRequest): Uint8Array {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalsRequest.typeUrl, QueryProposalsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalsRequest.aminoType, QueryProposalsRequest.typeUrl);
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
  aminoType: "cosmos-sdk/v1/QueryProposalsResponse",
  is(o: any): o is QueryProposalsResponse {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])));
  },
  isSDK(o: any): o is QueryProposalsResponseSDKType {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])));
  },
  isAmino(o: any): o is QueryProposalsResponseAmino {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])));
  },
  encode(message: QueryProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsResponse): JsonSafe<QueryProposalsResponse> {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsResponse): QueryProposalsResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalsResponse",
      value: QueryProposalsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.decode(message.value);
  },
  toProto(message: QueryProposalsResponse): Uint8Array {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalsResponse.typeUrl, QueryProposalsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalsResponse.aminoType, QueryProposalsResponse.typeUrl);
function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposal_id: BigInt(0),
    voter: ""
  };
}
export const QueryVoteRequest = {
  typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
  aminoType: "cosmos-sdk/v1/QueryVoteRequest",
  is(o: any): o is QueryVoteRequest {
    return o && (o.$typeUrl === QueryVoteRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  isSDK(o: any): o is QueryVoteRequestSDKType {
    return o && (o.$typeUrl === QueryVoteRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  isAmino(o: any): o is QueryVoteRequestAmino {
    return o && (o.$typeUrl === QueryVoteRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  encode(message: QueryVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  toJSON(message: QueryVoteRequest): JsonSafe<QueryVoteRequest> {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryVoteRequest): QueryVoteRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id !== BigInt(0) ? message.proposal_id.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest {
    return QueryVoteRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteRequest): QueryVoteRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVoteRequest",
      value: QueryVoteRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest {
    return QueryVoteRequest.decode(message.value);
  },
  toProto(message: QueryVoteRequest): Uint8Array {
    return QueryVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
      value: QueryVoteRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteRequest.typeUrl, QueryVoteRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVoteRequest.aminoType, QueryVoteRequest.typeUrl);
function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    vote: undefined
  };
}
export const QueryVoteResponse = {
  typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
  aminoType: "cosmos-sdk/v1/QueryVoteResponse",
  is(o: any): o is QueryVoteResponse {
    return o && o.$typeUrl === QueryVoteResponse.typeUrl;
  },
  isSDK(o: any): o is QueryVoteResponseSDKType {
    return o && o.$typeUrl === QueryVoteResponse.typeUrl;
  },
  isAmino(o: any): o is QueryVoteResponseAmino {
    return o && o.$typeUrl === QueryVoteResponse.typeUrl;
  },
  encode(message: QueryVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON(message: QueryVoteResponse): JsonSafe<QueryVoteResponse> {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: QueryVoteResponse): QueryVoteResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse {
    return QueryVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteResponse): QueryVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVoteResponse",
      value: QueryVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse {
    return QueryVoteResponse.decode(message.value);
  },
  toProto(message: QueryVoteResponse): Uint8Array {
    return QueryVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
      value: QueryVoteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteResponse.typeUrl, QueryVoteResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVoteResponse.aminoType, QueryVoteResponse.typeUrl);
function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposal_id: BigInt(0),
    pagination: undefined
  };
}
export const QueryVotesRequest = {
  typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
  aminoType: "cosmos-sdk/v1/QueryVotesRequest",
  is(o: any): o is QueryVotesRequest {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isSDK(o: any): o is QueryVotesRequestSDKType {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryVotesRequestAmino {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesRequest): JsonSafe<QueryVotesRequest> {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesRequest): QueryVotesRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id !== BigInt(0) ? message.proposal_id.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest {
    return QueryVotesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesRequest): QueryVotesRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVotesRequest",
      value: QueryVotesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest {
    return QueryVotesRequest.decode(message.value);
  },
  toProto(message: QueryVotesRequest): Uint8Array {
    return QueryVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
      value: QueryVotesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesRequest.typeUrl, QueryVotesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesRequest.aminoType, QueryVotesRequest.typeUrl);
function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesResponse = {
  typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
  aminoType: "cosmos-sdk/v1/QueryVotesResponse",
  is(o: any): o is QueryVotesResponse {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
  },
  isSDK(o: any): o is QueryVotesResponseSDKType {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is QueryVotesResponseAmino {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
  },
  encode(message: QueryVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesResponse): JsonSafe<QueryVotesResponse> {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesResponse): QueryVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse {
    return QueryVotesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesResponse): QueryVotesResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVotesResponse",
      value: QueryVotesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse {
    return QueryVotesResponse.decode(message.value);
  },
  toProto(message: QueryVotesResponse): Uint8Array {
    return QueryVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
      value: QueryVotesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesResponse.typeUrl, QueryVotesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesResponse.aminoType, QueryVotesResponse.typeUrl);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    params_type: ""
  };
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
  aminoType: "cosmos-sdk/v1/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.params_type === "string");
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.params_type === "string");
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.params_type === "string");
  },
  encode(message: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params_type !== "") {
      writer.uint32(10).string(message.params_type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params_type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsRequest {
    return {
      params_type: isSet(object.params_type) ? String(object.params_type) : ""
    };
  },
  toJSON(message: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    message.params_type !== undefined && (obj.params_type = message.params_type);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.params_type = object.params_type ?? "";
    return message;
  },
  fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    if (object.params_type !== undefined && object.params_type !== null) {
      message.params_type = object.params_type;
    }
    return message;
  },
  toAmino(message: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    obj.params_type = message.params_type === "" ? undefined : message.params_type;
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    voting_params: undefined,
    deposit_params: undefined,
    tally_params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
  aminoType: "cosmos-sdk/v1/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voting_params !== undefined) {
      VotingParams.encode(message.voting_params, writer.uint32(10).fork()).ldelim();
    }
    if (message.deposit_params !== undefined) {
      DepositParams.encode(message.deposit_params, writer.uint32(18).fork()).ldelim();
    }
    if (message.tally_params !== undefined) {
      TallyParams.encode(message.tally_params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voting_params = VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.deposit_params = DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tally_params = TallyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      voting_params: isSet(object.voting_params) ? VotingParams.fromJSON(object.voting_params) : undefined,
      deposit_params: isSet(object.deposit_params) ? DepositParams.fromJSON(object.deposit_params) : undefined,
      tally_params: isSet(object.tally_params) ? TallyParams.fromJSON(object.tally_params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.voting_params !== undefined && (obj.voting_params = message.voting_params ? VotingParams.toJSON(message.voting_params) : undefined);
    message.deposit_params !== undefined && (obj.deposit_params = message.deposit_params ? DepositParams.toJSON(message.deposit_params) : undefined);
    message.tally_params !== undefined && (obj.tally_params = message.tally_params ? TallyParams.toJSON(message.tally_params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? VotingParams.fromPartial(object.voting_params) : undefined;
    message.deposit_params = object.deposit_params !== undefined && object.deposit_params !== null ? DepositParams.fromPartial(object.deposit_params) : undefined;
    message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? TallyParams.fromPartial(object.tally_params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.voting_params !== undefined && object.voting_params !== null) {
      message.voting_params = VotingParams.fromAmino(object.voting_params);
    }
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.deposit_params = DepositParams.fromAmino(object.deposit_params);
    }
    if (object.tally_params !== undefined && object.tally_params !== null) {
      message.tally_params = TallyParams.fromAmino(object.tally_params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.voting_params = message.voting_params ? VotingParams.toAmino(message.voting_params) : undefined;
    obj.deposit_params = message.deposit_params ? DepositParams.toAmino(message.deposit_params) : undefined;
    obj.tally_params = message.tally_params ? TallyParams.toAmino(message.tally_params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    proposal_id: BigInt(0),
    depositor: ""
  };
}
export const QueryDepositRequest = {
  typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
  aminoType: "cosmos-sdk/v1/QueryDepositRequest",
  is(o: any): o is QueryDepositRequest {
    return o && (o.$typeUrl === QueryDepositRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string");
  },
  isSDK(o: any): o is QueryDepositRequestSDKType {
    return o && (o.$typeUrl === QueryDepositRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string");
  },
  isAmino(o: any): o is QueryDepositRequestAmino {
    return o && (o.$typeUrl === QueryDepositRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string");
  },
  encode(message: QueryDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  toJSON(message: QueryDepositRequest): JsonSafe<QueryDepositRequest> {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: QueryDepositRequest): QueryDepositRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id !== BigInt(0) ? message.proposal_id.toString() : undefined;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    return obj;
  },
  fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest {
    return QueryDepositRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositRequest): QueryDepositRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositRequest",
      value: QueryDepositRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest {
    return QueryDepositRequest.decode(message.value);
  },
  toProto(message: QueryDepositRequest): Uint8Array {
    return QueryDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
      value: QueryDepositRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDepositRequest.typeUrl, QueryDepositRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDepositRequest.aminoType, QueryDepositRequest.typeUrl);
function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: undefined
  };
}
export const QueryDepositResponse = {
  typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
  aminoType: "cosmos-sdk/v1/QueryDepositResponse",
  is(o: any): o is QueryDepositResponse {
    return o && o.$typeUrl === QueryDepositResponse.typeUrl;
  },
  isSDK(o: any): o is QueryDepositResponseSDKType {
    return o && o.$typeUrl === QueryDepositResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDepositResponseAmino {
    return o && o.$typeUrl === QueryDepositResponse.typeUrl;
  },
  encode(message: QueryDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositResponse {
    return {
      deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined
    };
  },
  toJSON(message: QueryDepositResponse): JsonSafe<QueryDepositResponse> {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: QueryDepositResponse): QueryDepositResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse {
    return QueryDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositResponse): QueryDepositResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositResponse",
      value: QueryDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message: QueryDepositResponse): Uint8Array {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDepositResponse.typeUrl, QueryDepositResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDepositResponse.aminoType, QueryDepositResponse.typeUrl);
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    proposal_id: BigInt(0),
    pagination: undefined
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
  aminoType: "cosmos-sdk/v1/QueryDepositsRequest",
  is(o: any): o is QueryDepositsRequest {
    return o && (o.$typeUrl === QueryDepositsRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isSDK(o: any): o is QueryDepositsRequestSDKType {
    return o && (o.$typeUrl === QueryDepositsRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryDepositsRequestAmino {
    return o && (o.$typeUrl === QueryDepositsRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositsRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDepositsRequest): JsonSafe<QueryDepositsRequest> {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id !== BigInt(0) ? message.proposal_id.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositsRequest): QueryDepositsRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositsRequest",
      value: QueryDepositsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDepositsRequest.typeUrl, QueryDepositsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDepositsRequest.aminoType, QueryDepositsRequest.typeUrl);
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
  aminoType: "cosmos-sdk/v1/QueryDepositsResponse",
  is(o: any): o is QueryDepositsResponse {
    return o && (o.$typeUrl === QueryDepositsResponse.typeUrl || Array.isArray(o.deposits) && (!o.deposits.length || Deposit.is(o.deposits[0])));
  },
  isSDK(o: any): o is QueryDepositsResponseSDKType {
    return o && (o.$typeUrl === QueryDepositsResponse.typeUrl || Array.isArray(o.deposits) && (!o.deposits.length || Deposit.isSDK(o.deposits[0])));
  },
  isAmino(o: any): o is QueryDepositsResponseAmino {
    return o && (o.$typeUrl === QueryDepositsResponse.typeUrl || Array.isArray(o.deposits) && (!o.deposits.length || Deposit.isAmino(o.deposits[0])));
  },
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDepositsResponse): JsonSafe<QueryDepositsResponse> {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositsResponse): QueryDepositsResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositsResponse",
      value: QueryDepositsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDepositsResponse.typeUrl, QueryDepositsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDepositsResponse.aminoType, QueryDepositsResponse.typeUrl);
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposal_id: BigInt(0)
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
  aminoType: "cosmos-sdk/v1/QueryTallyResultRequest",
  is(o: any): o is QueryTallyResultRequest {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isSDK(o: any): o is QueryTallyResultRequestSDKType {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryTallyResultRequestAmino {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryTallyResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultRequest {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryTallyResultRequest): JsonSafe<QueryTallyResultRequest> {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id !== BigInt(0) ? message.proposal_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryTallyResultRequest",
      value: QueryTallyResultRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.decode(message.value);
  },
  toProto(message: QueryTallyResultRequest): Uint8Array {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTallyResultRequest.typeUrl, QueryTallyResultRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTallyResultRequest.aminoType, QueryTallyResultRequest.typeUrl);
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: undefined
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
  aminoType: "cosmos-sdk/v1/QueryTallyResultResponse",
  is(o: any): o is QueryTallyResultResponse {
    return o && o.$typeUrl === QueryTallyResultResponse.typeUrl;
  },
  isSDK(o: any): o is QueryTallyResultResponseSDKType {
    return o && o.$typeUrl === QueryTallyResultResponse.typeUrl;
  },
  isAmino(o: any): o is QueryTallyResultResponseAmino {
    return o && o.$typeUrl === QueryTallyResultResponse.typeUrl;
  },
  encode(message: QueryTallyResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultResponse {
    return {
      tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : undefined
    };
  },
  toJSON(message: QueryTallyResultResponse): JsonSafe<QueryTallyResultResponse> {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  },
  fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino {
    const obj: any = {};
    obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryTallyResultResponse",
      value: QueryTallyResultResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.decode(message.value);
  },
  toProto(message: QueryTallyResultResponse): Uint8Array {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTallyResultResponse.typeUrl, QueryTallyResultResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTallyResultResponse.aminoType, QueryTallyResultResponse.typeUrl);