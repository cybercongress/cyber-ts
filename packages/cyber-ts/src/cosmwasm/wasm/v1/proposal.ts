import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { fromBase64, toBase64, toUtf8, fromUtf8 } from "@cosmjs/encoding";
import { GlobalDecoderRegistry } from "../../../registry";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiate_permission?: AccessConfig;
  /** UnpinCode code on upload, optional */
  unpin_code: boolean;
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  code_hash: Uint8Array;
}
export interface StoreCodeProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.StoreCodeProposal";
  value: Uint8Array;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as?: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code?: string;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiate_permission?: AccessConfigAmino;
  /** UnpinCode code on upload, optional */
  unpin_code?: boolean;
  /** Source is the URL where the code is hosted */
  source?: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder?: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  code_hash?: string;
}
export interface StoreCodeProposalAminoMsg {
  type: "wasm/StoreCodeProposal";
  value: StoreCodeProposalAmino;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  source: string;
  builder: string;
  code_hash: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  code_id: bigint;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
export interface InstantiateContractProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.InstantiateContractProposal";
  value: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as?: string;
  /** Admin is an optional address that can execute migrations */
  admin?: string;
  /** CodeID is the reference to the stored WASM code */
  code_id?: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label?: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg?: any;
  /** Funds coins that are transferred to the contract on instantiation */
  funds?: CoinAmino[];
}
export interface InstantiateContractProposalAminoMsg {
  type: "wasm/InstantiateContractProposal";
  value: InstantiateContractProposalAmino;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */
export interface InstantiateContract2Proposal {
  $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's enviroment as sender */
  run_as: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  code_id: bigint;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encode message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fix_msg: boolean;
}
export interface InstantiateContract2ProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
  value: Uint8Array;
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */
export interface InstantiateContract2ProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** RunAs is the address that is passed to the contract's enviroment as sender */
  run_as?: string;
  /** Admin is an optional address that can execute migrations */
  admin?: string;
  /** CodeID is the reference to the stored WASM code */
  code_id?: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label?: string;
  /** Msg json encode message to be passed to the contract on instantiation */
  msg?: any;
  /** Funds coins that are transferred to the contract on instantiation */
  funds?: CoinAmino[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt?: string;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fix_msg?: boolean;
}
export interface InstantiateContract2ProposalAminoMsg {
  type: "wasm/InstantiateContract2Proposal";
  value: InstantiateContract2ProposalAmino;
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */
export interface InstantiateContract2ProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  salt: Uint8Array;
  fix_msg: boolean;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  code_id: bigint;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
export interface MigrateContractProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.MigrateContractProposal";
  value: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
  /** CodeID references the new WASM code */
  code_id?: string;
  /** Msg json encoded message to be passed to the contract on migration */
  msg?: any;
}
export interface MigrateContractProposalAminoMsg {
  type: "wasm/MigrateContractProposal";
  value: MigrateContractProposalAmino;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
  title: string;
  description: string;
  contract: string;
  code_id: bigint;
  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}
export interface SudoContractProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.SudoContractProposal";
  value: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg?: any;
}
export interface SudoContractProposalAminoMsg {
  type: "wasm/SudoContractProposal";
  value: SudoContractProposalAmino;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
  title: string;
  description: string;
  contract: string;
  msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
export interface ExecuteContractProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.ExecuteContractProposal";
  value: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
  /** Msg json encoded message to be passed to the contract as execute */
  msg?: any;
  /** Funds coins that are transferred to the contract on instantiation */
  funds?: CoinAmino[];
}
export interface ExecuteContractProposalAminoMsg {
  type: "wasm/ExecuteContractProposal";
  value: ExecuteContractProposalAmino;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
  title: string;
  description: string;
  run_as: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** NewAdmin address to be set */
  new_admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface UpdateAdminProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.UpdateAdminProposal";
  value: Uint8Array;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** NewAdmin address to be set */
  new_admin?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
}
export interface UpdateAdminProposalAminoMsg {
  type: "wasm/UpdateAdminProposal";
  value: UpdateAdminProposalAmino;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
  title: string;
  description: string;
  new_admin: string;
  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface ClearAdminProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.ClearAdminProposal";
  value: Uint8Array;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
}
export interface ClearAdminProposalAminoMsg {
  type: "wasm/ClearAdminProposal";
  value: ClearAdminProposalAmino;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
  title: string;
  description: string;
  contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the new WASM codes */
  code_ids: bigint[];
}
export interface PinCodesProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.PinCodesProposal";
  value: Uint8Array;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** CodeIDs references the new WASM codes */
  code_ids?: string[];
}
export interface PinCodesProposalAminoMsg {
  type: "wasm/PinCodesProposal";
  value: PinCodesProposalAmino;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
  title: string;
  description: string;
  code_ids: bigint[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the WASM codes */
  code_ids: bigint[];
}
export interface UnpinCodesProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.UnpinCodesProposal";
  value: Uint8Array;
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** CodeIDs references the WASM codes */
  code_ids?: string[];
}
export interface UnpinCodesProposalAminoMsg {
  type: "wasm/UnpinCodesProposal";
  value: UnpinCodesProposalAmino;
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
  title: string;
  description: string;
  code_ids: bigint[];
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
  /** CodeID is the reference to the stored WASM code to be updated */
  code_id: bigint;
  /** InstantiatePermission to apply to the set of code ids */
  instantiate_permission: AccessConfig;
}
export interface AccessConfigUpdateProtoMsg {
  type_url: "/cosmwasm.wasm.v1.AccessConfigUpdate";
  value: Uint8Array;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdateAmino {
  /** CodeID is the reference to the stored WASM code to be updated */
  code_id?: string;
  /** InstantiatePermission to apply to the set of code ids */
  instantiate_permission?: AccessConfigAmino;
}
export interface AccessConfigUpdateAminoMsg {
  type: "wasm/AccessConfigUpdate";
  value: AccessConfigUpdateAmino;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdateSDKType {
  code_id: bigint;
  instantiate_permission: AccessConfigSDKType;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   */
  access_config_updates: AccessConfigUpdate[];
}
export interface UpdateInstantiateConfigProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
  value: Uint8Array;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   */
  access_config_updates?: AccessConfigUpdateAmino[];
}
export interface UpdateInstantiateConfigProposalAminoMsg {
  type: "wasm/UpdateInstantiateConfigProposal";
  value: UpdateInstantiateConfigProposalAmino;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
  title: string;
  description: string;
  access_config_updates: AccessConfigUpdateSDKType[];
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */
export interface StoreAndInstantiateContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiate_permission?: AccessConfig;
  /** UnpinCode code on upload, optional */
  unpin_code: boolean;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  code_hash: Uint8Array;
}
export interface StoreAndInstantiateContractProposalProtoMsg {
  type_url: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
  value: Uint8Array;
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */
export interface StoreAndInstantiateContractProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as?: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code?: string;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiate_permission?: AccessConfigAmino;
  /** UnpinCode code on upload, optional */
  unpin_code?: boolean;
  /** Admin is an optional address that can execute migrations */
  admin?: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label?: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg?: any;
  /** Funds coins that are transferred to the contract on instantiation */
  funds?: CoinAmino[];
  /** Source is the URL where the code is hosted */
  source?: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder?: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  code_hash?: string;
}
export interface StoreAndInstantiateContractProposalAminoMsg {
  type: "wasm/StoreAndInstantiateContractProposal";
  value: StoreAndInstantiateContractProposalAmino;
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */
export interface StoreAndInstantiateContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  admin: string;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  source: string;
  builder: string;
  code_hash: Uint8Array;
}
function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
    title: "",
    description: "",
    run_as: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: undefined,
    unpin_code: false,
    source: "",
    builder: "",
    code_hash: new Uint8Array()
  };
}
export const StoreCodeProposal = {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
  aminoType: "wasm/StoreCodeProposal",
  is(o: any): o is StoreCodeProposal {
    return o && (o.$typeUrl === StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
  },
  isSDK(o: any): o is StoreCodeProposalSDKType {
    return o && (o.$typeUrl === StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
  },
  isAmino(o: any): o is StoreCodeProposalAmino {
    return o && (o.$typeUrl === StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
  },
  encode(message: StoreCodeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(34).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(58).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(64).bool(message.unpin_code);
    }
    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(82).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(90).bytes(message.code_hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreCodeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.wasm_byte_code = reader.bytes();
          break;
        case 7:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 8:
          message.unpin_code = reader.bool();
          break;
        case 9:
          message.source = reader.string();
          break;
        case 10:
          message.builder = reader.string();
          break;
        case 11:
          message.code_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreCodeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      wasm_byte_code: isSet(object.wasm_byte_code) ? bytesFromBase64(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromJSON(object.instantiate_permission) : undefined,
      unpin_code: isSet(object.unpin_code) ? Boolean(object.unpin_code) : false,
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      code_hash: isSet(object.code_hash) ? bytesFromBase64(object.code_hash) : new Uint8Array()
    };
  },
  toJSON(message: StoreCodeProposal): JsonSafe<StoreCodeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.run_as !== undefined && (obj.run_as = message.run_as);
    message.wasm_byte_code !== undefined && (obj.wasm_byte_code = base64FromBytes(message.wasm_byte_code !== undefined ? message.wasm_byte_code : new Uint8Array()));
    message.instantiate_permission !== undefined && (obj.instantiate_permission = message.instantiate_permission ? AccessConfig.toJSON(message.instantiate_permission) : undefined);
    message.unpin_code !== undefined && (obj.unpin_code = message.unpin_code);
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    message.code_hash !== undefined && (obj.code_hash = base64FromBytes(message.code_hash !== undefined ? message.code_hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<StoreCodeProposal>): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.wasm_byte_code = object.wasm_byte_code ?? new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.unpin_code = object.unpin_code ?? false;
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.code_hash = object.code_hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StoreCodeProposalAmino): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== undefined && object.run_as !== null) {
      message.run_as = object.run_as;
    }
    if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
      message.wasm_byte_code = fromBase64(object.wasm_byte_code);
    }
    if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
      message.instantiate_permission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    if (object.unpin_code !== undefined && object.unpin_code !== null) {
      message.unpin_code = object.unpin_code;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.builder !== undefined && object.builder !== null) {
      message.builder = object.builder;
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.code_hash = bytesFromBase64(object.code_hash);
    }
    return message;
  },
  toAmino(message: StoreCodeProposal): StoreCodeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.run_as = message.run_as === "" ? undefined : message.run_as;
    obj.wasm_byte_code = message.wasm_byte_code ? toBase64(message.wasm_byte_code) : undefined;
    obj.instantiate_permission = message.instantiate_permission ? AccessConfig.toAmino(message.instantiate_permission) : undefined;
    obj.unpin_code = message.unpin_code === false ? undefined : message.unpin_code;
    obj.source = message.source === "" ? undefined : message.source;
    obj.builder = message.builder === "" ? undefined : message.builder;
    obj.code_hash = message.code_hash ? base64FromBytes(message.code_hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: StoreCodeProposalAminoMsg): StoreCodeProposal {
    return StoreCodeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: StoreCodeProposal): StoreCodeProposalAminoMsg {
    return {
      type: "wasm/StoreCodeProposal",
      value: StoreCodeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreCodeProposalProtoMsg): StoreCodeProposal {
    return StoreCodeProposal.decode(message.value);
  },
  toProto(message: StoreCodeProposal): Uint8Array {
    return StoreCodeProposal.encode(message).finish();
  },
  toProtoMsg(message: StoreCodeProposal): StoreCodeProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
      value: StoreCodeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreCodeProposal.typeUrl, StoreCodeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreCodeProposal.aminoType, StoreCodeProposal.typeUrl);
function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
    title: "",
    description: "",
    run_as: "",
    admin: "",
    code_id: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const InstantiateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
  aminoType: "wasm/InstantiateContractProposal",
  is(o: any): o is InstantiateContractProposal {
    return o && (o.$typeUrl === InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
  },
  isSDK(o: any): o is InstantiateContractProposalSDKType {
    return o && (o.$typeUrl === InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
  },
  isAmino(o: any): o is InstantiateContractProposalAmino {
    return o && (o.$typeUrl === InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isAmino(o.funds[0])));
  },
  encode(message: InstantiateContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.code_id !== BigInt(0)) {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InstantiateContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.code_id = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      code_id: isSet(object.code_id) ? BigInt(object.code_id.toString()) : BigInt(0),
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: InstantiateContractProposal): JsonSafe<InstantiateContractProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.run_as !== undefined && (obj.run_as = message.run_as);
    message.admin !== undefined && (obj.admin = message.admin);
    message.code_id !== undefined && (obj.code_id = (message.code_id || BigInt(0)).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<InstantiateContractProposal>): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.admin = object.admin ?? "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? BigInt(object.code_id.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: InstantiateContractProposalAmino): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== undefined && object.run_as !== null) {
      message.run_as = object.run_as;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.code_id = BigInt(object.code_id);
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: InstantiateContractProposal): InstantiateContractProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.run_as = message.run_as === "" ? undefined : message.run_as;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.code_id = message.code_id !== BigInt(0) ? message.code_id.toString() : undefined;
    obj.label = message.label === "" ? undefined : message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = message.funds;
    }
    return obj;
  },
  fromAminoMsg(object: InstantiateContractProposalAminoMsg): InstantiateContractProposal {
    return InstantiateContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message: InstantiateContractProposal): InstantiateContractProposalAminoMsg {
    return {
      type: "wasm/InstantiateContractProposal",
      value: InstantiateContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: InstantiateContractProposalProtoMsg): InstantiateContractProposal {
    return InstantiateContractProposal.decode(message.value);
  },
  toProto(message: InstantiateContractProposal): Uint8Array {
    return InstantiateContractProposal.encode(message).finish();
  },
  toProtoMsg(message: InstantiateContractProposal): InstantiateContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
      value: InstantiateContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InstantiateContractProposal.typeUrl, InstantiateContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(InstantiateContractProposal.aminoType, InstantiateContractProposal.typeUrl);
function createBaseInstantiateContract2Proposal(): InstantiateContract2Proposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
    title: "",
    description: "",
    run_as: "",
    admin: "",
    code_id: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fix_msg: false
  };
}
export const InstantiateContract2Proposal = {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
  aminoType: "wasm/InstantiateContract2Proposal",
  is(o: any): o is InstantiateContract2Proposal {
    return o && (o.$typeUrl === InstantiateContract2Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fix_msg === "boolean");
  },
  isSDK(o: any): o is InstantiateContract2ProposalSDKType {
    return o && (o.$typeUrl === InstantiateContract2Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fix_msg === "boolean");
  },
  isAmino(o: any): o is InstantiateContract2ProposalAmino {
    return o && (o.$typeUrl === InstantiateContract2Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isAmino(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fix_msg === "boolean");
  },
  encode(message: InstantiateContract2Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.code_id !== BigInt(0)) {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(74).bytes(message.salt);
    }
    if (message.fix_msg === true) {
      writer.uint32(80).bool(message.fix_msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InstantiateContract2Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContract2Proposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.code_id = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.salt = reader.bytes();
          break;
        case 10:
          message.fix_msg = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InstantiateContract2Proposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      code_id: isSet(object.code_id) ? BigInt(object.code_id.toString()) : BigInt(0),
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      fix_msg: isSet(object.fix_msg) ? Boolean(object.fix_msg) : false
    };
  },
  toJSON(message: InstantiateContract2Proposal): JsonSafe<InstantiateContract2Proposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.run_as !== undefined && (obj.run_as = message.run_as);
    message.admin !== undefined && (obj.admin = message.admin);
    message.code_id !== undefined && (obj.code_id = (message.code_id || BigInt(0)).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.fix_msg !== undefined && (obj.fix_msg = message.fix_msg);
    return obj;
  },
  fromPartial(object: DeepPartial<InstantiateContract2Proposal>): InstantiateContract2Proposal {
    const message = createBaseInstantiateContract2Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.admin = object.admin ?? "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? BigInt(object.code_id.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    message.fix_msg = object.fix_msg ?? false;
    return message;
  },
  fromAmino(object: InstantiateContract2ProposalAmino): InstantiateContract2Proposal {
    const message = createBaseInstantiateContract2Proposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== undefined && object.run_as !== null) {
      message.run_as = object.run_as;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.code_id = BigInt(object.code_id);
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    if (object.fix_msg !== undefined && object.fix_msg !== null) {
      message.fix_msg = object.fix_msg;
    }
    return message;
  },
  toAmino(message: InstantiateContract2Proposal): InstantiateContract2ProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.run_as = message.run_as === "" ? undefined : message.run_as;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.code_id = message.code_id !== BigInt(0) ? message.code_id.toString() : undefined;
    obj.label = message.label === "" ? undefined : message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = message.funds;
    }
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    obj.fix_msg = message.fix_msg === false ? undefined : message.fix_msg;
    return obj;
  },
  fromAminoMsg(object: InstantiateContract2ProposalAminoMsg): InstantiateContract2Proposal {
    return InstantiateContract2Proposal.fromAmino(object.value);
  },
  toAminoMsg(message: InstantiateContract2Proposal): InstantiateContract2ProposalAminoMsg {
    return {
      type: "wasm/InstantiateContract2Proposal",
      value: InstantiateContract2Proposal.toAmino(message)
    };
  },
  fromProtoMsg(message: InstantiateContract2ProposalProtoMsg): InstantiateContract2Proposal {
    return InstantiateContract2Proposal.decode(message.value);
  },
  toProto(message: InstantiateContract2Proposal): Uint8Array {
    return InstantiateContract2Proposal.encode(message).finish();
  },
  toProtoMsg(message: InstantiateContract2Proposal): InstantiateContract2ProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
      value: InstantiateContract2Proposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InstantiateContract2Proposal.typeUrl, InstantiateContract2Proposal);
GlobalDecoderRegistry.registerAminoProtoMapping(InstantiateContract2Proposal.aminoType, InstantiateContract2Proposal.typeUrl);
function createBaseMigrateContractProposal(): MigrateContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
    title: "",
    description: "",
    contract: "",
    code_id: BigInt(0),
    msg: new Uint8Array()
  };
}
export const MigrateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
  aminoType: "wasm/MigrateContractProposal",
  is(o: any): o is MigrateContractProposal {
    return o && (o.$typeUrl === MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isSDK(o: any): o is MigrateContractProposalSDKType {
    return o && (o.$typeUrl === MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isAmino(o: any): o is MigrateContractProposalAmino {
    return o && (o.$typeUrl === MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  encode(message: MigrateContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.code_id !== BigInt(0)) {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MigrateContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.code_id = reader.uint64();
          break;
        case 6:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MigrateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      code_id: isSet(object.code_id) ? BigInt(object.code_id.toString()) : BigInt(0),
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toJSON(message: MigrateContractProposal): JsonSafe<MigrateContractProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.code_id !== undefined && (obj.code_id = (message.code_id || BigInt(0)).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MigrateContractProposal>): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? BigInt(object.code_id.toString()) : BigInt(0);
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MigrateContractProposalAmino): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.code_id = BigInt(object.code_id);
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message: MigrateContractProposal): MigrateContractProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.code_id = message.code_id !== BigInt(0) ? message.code_id.toString() : undefined;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MigrateContractProposalAminoMsg): MigrateContractProposal {
    return MigrateContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MigrateContractProposal): MigrateContractProposalAminoMsg {
    return {
      type: "wasm/MigrateContractProposal",
      value: MigrateContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MigrateContractProposalProtoMsg): MigrateContractProposal {
    return MigrateContractProposal.decode(message.value);
  },
  toProto(message: MigrateContractProposal): Uint8Array {
    return MigrateContractProposal.encode(message).finish();
  },
  toProtoMsg(message: MigrateContractProposal): MigrateContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
      value: MigrateContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MigrateContractProposal.typeUrl, MigrateContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MigrateContractProposal.aminoType, MigrateContractProposal.typeUrl);
function createBaseSudoContractProposal(): SudoContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}
export const SudoContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
  aminoType: "wasm/SudoContractProposal",
  is(o: any): o is SudoContractProposal {
    return o && (o.$typeUrl === SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isSDK(o: any): o is SudoContractProposalSDKType {
    return o && (o.$typeUrl === SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isAmino(o: any): o is SudoContractProposalAmino {
    return o && (o.$typeUrl === SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  encode(message: SudoContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SudoContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SudoContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toJSON(message: SudoContractProposal): JsonSafe<SudoContractProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<SudoContractProposal>): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SudoContractProposalAmino): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message: SudoContractProposal): SudoContractProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromAminoMsg(object: SudoContractProposalAminoMsg): SudoContractProposal {
    return SudoContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SudoContractProposal): SudoContractProposalAminoMsg {
    return {
      type: "wasm/SudoContractProposal",
      value: SudoContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SudoContractProposalProtoMsg): SudoContractProposal {
    return SudoContractProposal.decode(message.value);
  },
  toProto(message: SudoContractProposal): Uint8Array {
    return SudoContractProposal.encode(message).finish();
  },
  toProtoMsg(message: SudoContractProposal): SudoContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
      value: SudoContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SudoContractProposal.typeUrl, SudoContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(SudoContractProposal.aminoType, SudoContractProposal.typeUrl);
function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
    title: "",
    description: "",
    run_as: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const ExecuteContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
  aminoType: "wasm/ExecuteContractProposal",
  is(o: any): o is ExecuteContractProposal {
    return o && (o.$typeUrl === ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
  },
  isSDK(o: any): o is ExecuteContractProposalSDKType {
    return o && (o.$typeUrl === ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
  },
  isAmino(o: any): o is ExecuteContractProposalAmino {
    return o && (o.$typeUrl === ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isAmino(o.funds[0])));
  },
  encode(message: ExecuteContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecuteContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: ExecuteContractProposal): JsonSafe<ExecuteContractProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.run_as !== undefined && (obj.run_as = message.run_as);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ExecuteContractProposal>): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExecuteContractProposalAmino): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== undefined && object.run_as !== null) {
      message.run_as = object.run_as;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExecuteContractProposal): ExecuteContractProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.run_as = message.run_as === "" ? undefined : message.run_as;
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = message.funds;
    }
    return obj;
  },
  fromAminoMsg(object: ExecuteContractProposalAminoMsg): ExecuteContractProposal {
    return ExecuteContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ExecuteContractProposal): ExecuteContractProposalAminoMsg {
    return {
      type: "wasm/ExecuteContractProposal",
      value: ExecuteContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ExecuteContractProposalProtoMsg): ExecuteContractProposal {
    return ExecuteContractProposal.decode(message.value);
  },
  toProto(message: ExecuteContractProposal): Uint8Array {
    return ExecuteContractProposal.encode(message).finish();
  },
  toProtoMsg(message: ExecuteContractProposal): ExecuteContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
      value: ExecuteContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteContractProposal.typeUrl, ExecuteContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ExecuteContractProposal.aminoType, ExecuteContractProposal.typeUrl);
function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
    title: "",
    description: "",
    new_admin: "",
    contract: ""
  };
}
export const UpdateAdminProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
  aminoType: "wasm/UpdateAdminProposal",
  is(o: any): o is UpdateAdminProposal {
    return o && (o.$typeUrl === UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is UpdateAdminProposalSDKType {
    return o && (o.$typeUrl === UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
  },
  isAmino(o: any): o is UpdateAdminProposalAmino {
    return o && (o.$typeUrl === UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
  },
  encode(message: UpdateAdminProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.new_admin = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      new_admin: isSet(object.new_admin) ? String(object.new_admin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message: UpdateAdminProposal): JsonSafe<UpdateAdminProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.new_admin !== undefined && (obj.new_admin = message.new_admin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.new_admin = object.new_admin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: UpdateAdminProposalAmino): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.new_admin = object.new_admin;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: UpdateAdminProposal): UpdateAdminProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.new_admin = message.new_admin === "" ? undefined : message.new_admin;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: UpdateAdminProposalAminoMsg): UpdateAdminProposal {
    return UpdateAdminProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdateAdminProposal): UpdateAdminProposalAminoMsg {
    return {
      type: "wasm/UpdateAdminProposal",
      value: UpdateAdminProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdateAdminProposalProtoMsg): UpdateAdminProposal {
    return UpdateAdminProposal.decode(message.value);
  },
  toProto(message: UpdateAdminProposal): Uint8Array {
    return UpdateAdminProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateAdminProposal): UpdateAdminProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
      value: UpdateAdminProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpdateAdminProposal.typeUrl, UpdateAdminProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateAdminProposal.aminoType, UpdateAdminProposal.typeUrl);
function createBaseClearAdminProposal(): ClearAdminProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
    title: "",
    description: "",
    contract: ""
  };
}
export const ClearAdminProposal = {
  typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
  aminoType: "wasm/ClearAdminProposal",
  is(o: any): o is ClearAdminProposal {
    return o && (o.$typeUrl === ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is ClearAdminProposalSDKType {
    return o && (o.$typeUrl === ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  isAmino(o: any): o is ClearAdminProposalAmino {
    return o && (o.$typeUrl === ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  encode(message: ClearAdminProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClearAdminProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClearAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message: ClearAdminProposal): JsonSafe<ClearAdminProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<ClearAdminProposal>): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: ClearAdminProposalAmino): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: ClearAdminProposal): ClearAdminProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: ClearAdminProposalAminoMsg): ClearAdminProposal {
    return ClearAdminProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ClearAdminProposal): ClearAdminProposalAminoMsg {
    return {
      type: "wasm/ClearAdminProposal",
      value: ClearAdminProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ClearAdminProposalProtoMsg): ClearAdminProposal {
    return ClearAdminProposal.decode(message.value);
  },
  toProto(message: ClearAdminProposal): Uint8Array {
    return ClearAdminProposal.encode(message).finish();
  },
  toProtoMsg(message: ClearAdminProposal): ClearAdminProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
      value: ClearAdminProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClearAdminProposal.typeUrl, ClearAdminProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ClearAdminProposal.aminoType, ClearAdminProposal.typeUrl);
function createBasePinCodesProposal(): PinCodesProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
    title: "",
    description: "",
    code_ids: []
  };
}
export const PinCodesProposal = {
  typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
  aminoType: "wasm/PinCodesProposal",
  is(o: any): o is PinCodesProposal {
    return o && (o.$typeUrl === PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  isSDK(o: any): o is PinCodesProposalSDKType {
    return o && (o.$typeUrl === PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  isAmino(o: any): o is PinCodesProposalAmino {
    return o && (o.$typeUrl === PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  encode(message: PinCodesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.code_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PinCodesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.code_ids.push(reader.uint64());
            }
          } else {
            message.code_ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      code_ids: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: PinCodesProposal): JsonSafe<PinCodesProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.code_ids) {
      obj.code_ids = message.code_ids.map(e => (e || BigInt(0)).toString());
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PinCodesProposal>): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.code_ids = object.code_ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: PinCodesProposalAmino): PinCodesProposal {
    const message = createBasePinCodesProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.code_ids = object.code_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: PinCodesProposal): PinCodesProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.code_ids) {
      obj.code_ids = message.code_ids.map(e => e.toString());
    } else {
      obj.code_ids = message.code_ids;
    }
    return obj;
  },
  fromAminoMsg(object: PinCodesProposalAminoMsg): PinCodesProposal {
    return PinCodesProposal.fromAmino(object.value);
  },
  toAminoMsg(message: PinCodesProposal): PinCodesProposalAminoMsg {
    return {
      type: "wasm/PinCodesProposal",
      value: PinCodesProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: PinCodesProposalProtoMsg): PinCodesProposal {
    return PinCodesProposal.decode(message.value);
  },
  toProto(message: PinCodesProposal): Uint8Array {
    return PinCodesProposal.encode(message).finish();
  },
  toProtoMsg(message: PinCodesProposal): PinCodesProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
      value: PinCodesProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PinCodesProposal.typeUrl, PinCodesProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(PinCodesProposal.aminoType, PinCodesProposal.typeUrl);
function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
    title: "",
    description: "",
    code_ids: []
  };
}
export const UnpinCodesProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
  aminoType: "wasm/UnpinCodesProposal",
  is(o: any): o is UnpinCodesProposal {
    return o && (o.$typeUrl === UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  isSDK(o: any): o is UnpinCodesProposalSDKType {
    return o && (o.$typeUrl === UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  isAmino(o: any): o is UnpinCodesProposalAmino {
    return o && (o.$typeUrl === UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  encode(message: UnpinCodesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.code_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnpinCodesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.code_ids.push(reader.uint64());
            }
          } else {
            message.code_ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnpinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      code_ids: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: UnpinCodesProposal): JsonSafe<UnpinCodesProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.code_ids) {
      obj.code_ids = message.code_ids.map(e => (e || BigInt(0)).toString());
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UnpinCodesProposal>): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.code_ids = object.code_ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: UnpinCodesProposalAmino): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.code_ids = object.code_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: UnpinCodesProposal): UnpinCodesProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.code_ids) {
      obj.code_ids = message.code_ids.map(e => e.toString());
    } else {
      obj.code_ids = message.code_ids;
    }
    return obj;
  },
  fromAminoMsg(object: UnpinCodesProposalAminoMsg): UnpinCodesProposal {
    return UnpinCodesProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UnpinCodesProposal): UnpinCodesProposalAminoMsg {
    return {
      type: "wasm/UnpinCodesProposal",
      value: UnpinCodesProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UnpinCodesProposalProtoMsg): UnpinCodesProposal {
    return UnpinCodesProposal.decode(message.value);
  },
  toProto(message: UnpinCodesProposal): Uint8Array {
    return UnpinCodesProposal.encode(message).finish();
  },
  toProtoMsg(message: UnpinCodesProposal): UnpinCodesProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
      value: UnpinCodesProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UnpinCodesProposal.typeUrl, UnpinCodesProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UnpinCodesProposal.aminoType, UnpinCodesProposal.typeUrl);
function createBaseAccessConfigUpdate(): AccessConfigUpdate {
  return {
    code_id: BigInt(0),
    instantiate_permission: AccessConfig.fromPartial({})
  };
}
export const AccessConfigUpdate = {
  typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
  aminoType: "wasm/AccessConfigUpdate",
  is(o: any): o is AccessConfigUpdate {
    return o && (o.$typeUrl === AccessConfigUpdate.typeUrl || typeof o.code_id === "bigint" && AccessConfig.is(o.instantiate_permission));
  },
  isSDK(o: any): o is AccessConfigUpdateSDKType {
    return o && (o.$typeUrl === AccessConfigUpdate.typeUrl || typeof o.code_id === "bigint" && AccessConfig.isSDK(o.instantiate_permission));
  },
  isAmino(o: any): o is AccessConfigUpdateAmino {
    return o && (o.$typeUrl === AccessConfigUpdate.typeUrl || typeof o.code_id === "bigint" && AccessConfig.isAmino(o.instantiate_permission));
  },
  encode(message: AccessConfigUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessConfigUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfigUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessConfigUpdate {
    return {
      code_id: isSet(object.code_id) ? BigInt(object.code_id.toString()) : BigInt(0),
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromJSON(object.instantiate_permission) : undefined
    };
  },
  toJSON(message: AccessConfigUpdate): JsonSafe<AccessConfigUpdate> {
    const obj: any = {};
    message.code_id !== undefined && (obj.code_id = (message.code_id || BigInt(0)).toString());
    message.instantiate_permission !== undefined && (obj.instantiate_permission = message.instantiate_permission ? AccessConfig.toJSON(message.instantiate_permission) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AccessConfigUpdate>): AccessConfigUpdate {
    const message = createBaseAccessConfigUpdate();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? BigInt(object.code_id.toString()) : BigInt(0);
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    return message;
  },
  fromAmino(object: AccessConfigUpdateAmino): AccessConfigUpdate {
    const message = createBaseAccessConfigUpdate();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.code_id = BigInt(object.code_id);
    }
    if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
      message.instantiate_permission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message: AccessConfigUpdate): AccessConfigUpdateAmino {
    const obj: any = {};
    obj.code_id = message.code_id !== BigInt(0) ? message.code_id.toString() : undefined;
    obj.instantiate_permission = message.instantiate_permission ? AccessConfig.toAmino(message.instantiate_permission) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccessConfigUpdateAminoMsg): AccessConfigUpdate {
    return AccessConfigUpdate.fromAmino(object.value);
  },
  toAminoMsg(message: AccessConfigUpdate): AccessConfigUpdateAminoMsg {
    return {
      type: "wasm/AccessConfigUpdate",
      value: AccessConfigUpdate.toAmino(message)
    };
  },
  fromProtoMsg(message: AccessConfigUpdateProtoMsg): AccessConfigUpdate {
    return AccessConfigUpdate.decode(message.value);
  },
  toProto(message: AccessConfigUpdate): Uint8Array {
    return AccessConfigUpdate.encode(message).finish();
  },
  toProtoMsg(message: AccessConfigUpdate): AccessConfigUpdateProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
      value: AccessConfigUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccessConfigUpdate.typeUrl, AccessConfigUpdate);
GlobalDecoderRegistry.registerAminoProtoMapping(AccessConfigUpdate.aminoType, AccessConfigUpdate.typeUrl);
function createBaseUpdateInstantiateConfigProposal(): UpdateInstantiateConfigProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
    title: "",
    description: "",
    access_config_updates: []
  };
}
export const UpdateInstantiateConfigProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
  aminoType: "wasm/UpdateInstantiateConfigProposal",
  is(o: any): o is UpdateInstantiateConfigProposal {
    return o && (o.$typeUrl === UpdateInstantiateConfigProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.access_config_updates) && (!o.access_config_updates.length || AccessConfigUpdate.is(o.access_config_updates[0])));
  },
  isSDK(o: any): o is UpdateInstantiateConfigProposalSDKType {
    return o && (o.$typeUrl === UpdateInstantiateConfigProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.access_config_updates) && (!o.access_config_updates.length || AccessConfigUpdate.isSDK(o.access_config_updates[0])));
  },
  isAmino(o: any): o is UpdateInstantiateConfigProposalAmino {
    return o && (o.$typeUrl === UpdateInstantiateConfigProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.access_config_updates) && (!o.access_config_updates.length || AccessConfigUpdate.isAmino(o.access_config_updates[0])));
  },
  encode(message: UpdateInstantiateConfigProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.access_config_updates) {
      AccessConfigUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateInstantiateConfigProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstantiateConfigProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.access_config_updates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateInstantiateConfigProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      access_config_updates: Array.isArray(object?.access_config_updates) ? object.access_config_updates.map((e: any) => AccessConfigUpdate.fromJSON(e)) : []
    };
  },
  toJSON(message: UpdateInstantiateConfigProposal): JsonSafe<UpdateInstantiateConfigProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.access_config_updates) {
      obj.access_config_updates = message.access_config_updates.map(e => e ? AccessConfigUpdate.toJSON(e) : undefined);
    } else {
      obj.access_config_updates = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal {
    const message = createBaseUpdateInstantiateConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.access_config_updates = object.access_config_updates?.map(e => AccessConfigUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdateInstantiateConfigProposalAmino): UpdateInstantiateConfigProposal {
    const message = createBaseUpdateInstantiateConfigProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.access_config_updates = object.access_config_updates?.map(e => AccessConfigUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UpdateInstantiateConfigProposal): UpdateInstantiateConfigProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.access_config_updates) {
      obj.access_config_updates = message.access_config_updates.map(e => e ? AccessConfigUpdate.toAmino(e) : undefined);
    } else {
      obj.access_config_updates = message.access_config_updates;
    }
    return obj;
  },
  fromAminoMsg(object: UpdateInstantiateConfigProposalAminoMsg): UpdateInstantiateConfigProposal {
    return UpdateInstantiateConfigProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdateInstantiateConfigProposal): UpdateInstantiateConfigProposalAminoMsg {
    return {
      type: "wasm/UpdateInstantiateConfigProposal",
      value: UpdateInstantiateConfigProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdateInstantiateConfigProposalProtoMsg): UpdateInstantiateConfigProposal {
    return UpdateInstantiateConfigProposal.decode(message.value);
  },
  toProto(message: UpdateInstantiateConfigProposal): Uint8Array {
    return UpdateInstantiateConfigProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateInstantiateConfigProposal): UpdateInstantiateConfigProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
      value: UpdateInstantiateConfigProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpdateInstantiateConfigProposal.typeUrl, UpdateInstantiateConfigProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateInstantiateConfigProposal.aminoType, UpdateInstantiateConfigProposal.typeUrl);
function createBaseStoreAndInstantiateContractProposal(): StoreAndInstantiateContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
    title: "",
    description: "",
    run_as: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: undefined,
    unpin_code: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    code_hash: new Uint8Array()
  };
}
export const StoreAndInstantiateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
  aminoType: "wasm/StoreAndInstantiateContractProposal",
  is(o: any): o is StoreAndInstantiateContractProposal {
    return o && (o.$typeUrl === StoreAndInstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.admin === "string" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])) && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
  },
  isSDK(o: any): o is StoreAndInstantiateContractProposalSDKType {
    return o && (o.$typeUrl === StoreAndInstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.admin === "string" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])) && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
  },
  isAmino(o: any): o is StoreAndInstantiateContractProposalAmino {
    return o && (o.$typeUrl === StoreAndInstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.admin === "string" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isAmino(o.funds[0])) && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
  },
  encode(message: StoreAndInstantiateContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(34).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(42).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(48).bool(message.unpin_code);
    }
    if (message.admin !== "") {
      writer.uint32(58).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(66).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(74).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(90).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(98).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(106).bytes(message.code_hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreAndInstantiateContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreAndInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.wasm_byte_code = reader.bytes();
          break;
        case 5:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.unpin_code = reader.bool();
          break;
        case 7:
          message.admin = reader.string();
          break;
        case 8:
          message.label = reader.string();
          break;
        case 9:
          message.msg = reader.bytes();
          break;
        case 10:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.source = reader.string();
          break;
        case 12:
          message.builder = reader.string();
          break;
        case 13:
          message.code_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreAndInstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      wasm_byte_code: isSet(object.wasm_byte_code) ? bytesFromBase64(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromJSON(object.instantiate_permission) : undefined,
      unpin_code: isSet(object.unpin_code) ? Boolean(object.unpin_code) : false,
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      code_hash: isSet(object.code_hash) ? bytesFromBase64(object.code_hash) : new Uint8Array()
    };
  },
  toJSON(message: StoreAndInstantiateContractProposal): JsonSafe<StoreAndInstantiateContractProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.run_as !== undefined && (obj.run_as = message.run_as);
    message.wasm_byte_code !== undefined && (obj.wasm_byte_code = base64FromBytes(message.wasm_byte_code !== undefined ? message.wasm_byte_code : new Uint8Array()));
    message.instantiate_permission !== undefined && (obj.instantiate_permission = message.instantiate_permission ? AccessConfig.toJSON(message.instantiate_permission) : undefined);
    message.unpin_code !== undefined && (obj.unpin_code = message.unpin_code);
    message.admin !== undefined && (obj.admin = message.admin);
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    message.code_hash !== undefined && (obj.code_hash = base64FromBytes(message.code_hash !== undefined ? message.code_hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<StoreAndInstantiateContractProposal>): StoreAndInstantiateContractProposal {
    const message = createBaseStoreAndInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.wasm_byte_code = object.wasm_byte_code ?? new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.unpin_code = object.unpin_code ?? false;
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.code_hash = object.code_hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StoreAndInstantiateContractProposalAmino): StoreAndInstantiateContractProposal {
    const message = createBaseStoreAndInstantiateContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== undefined && object.run_as !== null) {
      message.run_as = object.run_as;
    }
    if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
      message.wasm_byte_code = fromBase64(object.wasm_byte_code);
    }
    if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
      message.instantiate_permission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    if (object.unpin_code !== undefined && object.unpin_code !== null) {
      message.unpin_code = object.unpin_code;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.builder !== undefined && object.builder !== null) {
      message.builder = object.builder;
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.code_hash = bytesFromBase64(object.code_hash);
    }
    return message;
  },
  toAmino(message: StoreAndInstantiateContractProposal): StoreAndInstantiateContractProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.run_as = message.run_as === "" ? undefined : message.run_as;
    obj.wasm_byte_code = message.wasm_byte_code ? toBase64(message.wasm_byte_code) : undefined;
    obj.instantiate_permission = message.instantiate_permission ? AccessConfig.toAmino(message.instantiate_permission) : undefined;
    obj.unpin_code = message.unpin_code === false ? undefined : message.unpin_code;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.label = message.label === "" ? undefined : message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = message.funds;
    }
    obj.source = message.source === "" ? undefined : message.source;
    obj.builder = message.builder === "" ? undefined : message.builder;
    obj.code_hash = message.code_hash ? base64FromBytes(message.code_hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: StoreAndInstantiateContractProposalAminoMsg): StoreAndInstantiateContractProposal {
    return StoreAndInstantiateContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message: StoreAndInstantiateContractProposal): StoreAndInstantiateContractProposalAminoMsg {
    return {
      type: "wasm/StoreAndInstantiateContractProposal",
      value: StoreAndInstantiateContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreAndInstantiateContractProposalProtoMsg): StoreAndInstantiateContractProposal {
    return StoreAndInstantiateContractProposal.decode(message.value);
  },
  toProto(message: StoreAndInstantiateContractProposal): Uint8Array {
    return StoreAndInstantiateContractProposal.encode(message).finish();
  },
  toProtoMsg(message: StoreAndInstantiateContractProposal): StoreAndInstantiateContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
      value: StoreAndInstantiateContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreAndInstantiateContractProposal.typeUrl, StoreAndInstantiateContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreAndInstantiateContractProposal.aminoType, StoreAndInstantiateContractProposal.typeUrl);