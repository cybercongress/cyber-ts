import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { SignMode, signModeFromJSON, signModeToJSON } from "../signing/v1beta1/signing";
import { CompactBitArray, CompactBitArrayAmino, CompactBitArraySDKType } from "../../crypto/multisig/v1beta1/multisig";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** Tx is the standard type used for broadcasting transactions. */
export interface Tx {
  /** body is the processable content of the transaction */
  body?: TxBody;
  /**
   * auth_info is the authorization related content of the transaction,
   * specifically signers, signer modes and fee
   */
  auth_info?: AuthInfo;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures: Uint8Array[];
}
export interface TxProtoMsg {
  type_url: "/cosmos.tx.v1beta1.Tx";
  value: Uint8Array;
}
/** Tx is the standard type used for broadcasting transactions. */
export interface TxAmino {
  /** body is the processable content of the transaction */
  body?: TxBodyAmino;
  /**
   * auth_info is the authorization related content of the transaction,
   * specifically signers, signer modes and fee
   */
  auth_info?: AuthInfoAmino;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures?: string[];
}
export interface TxAminoMsg {
  type: "cosmos-sdk/Tx";
  value: TxAmino;
}
/** Tx is the standard type used for broadcasting transactions. */
export interface TxSDKType {
  body?: TxBodySDKType;
  auth_info?: AuthInfoSDKType;
  signatures: Uint8Array[];
}
/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */
export interface TxRaw {
  /**
   * body_bytes is a protobuf serialization of a TxBody that matches the
   * representation in SignDoc.
   */
  body_bytes: Uint8Array;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in SignDoc.
   */
  auth_info_bytes: Uint8Array;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures: Uint8Array[];
}
export interface TxRawProtoMsg {
  type_url: "/cosmos.tx.v1beta1.TxRaw";
  value: Uint8Array;
}
/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */
export interface TxRawAmino {
  /**
   * body_bytes is a protobuf serialization of a TxBody that matches the
   * representation in SignDoc.
   */
  body_bytes?: string;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in SignDoc.
   */
  auth_info_bytes?: string;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures?: string[];
}
export interface TxRawAminoMsg {
  type: "cosmos-sdk/TxRaw";
  value: TxRawAmino;
}
/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */
export interface TxRawSDKType {
  body_bytes: Uint8Array;
  auth_info_bytes: Uint8Array;
  signatures: Uint8Array[];
}
/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */
export interface SignDoc {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  body_bytes: Uint8Array;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in TxRaw.
   */
  auth_info_bytes: Uint8Array;
  /**
   * chain_id is the unique identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker
   */
  chain_id: string;
  /** account_number is the account number of the account in state */
  account_number: bigint;
}
export interface SignDocProtoMsg {
  type_url: "/cosmos.tx.v1beta1.SignDoc";
  value: Uint8Array;
}
/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */
export interface SignDocAmino {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  body_bytes?: string;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in TxRaw.
   */
  auth_info_bytes?: string;
  /**
   * chain_id is the unique identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker
   */
  chain_id?: string;
  /** account_number is the account number of the account in state */
  account_number?: string;
}
export interface SignDocAminoMsg {
  type: "cosmos-sdk/SignDoc";
  value: SignDocAmino;
}
/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */
export interface SignDocSDKType {
  body_bytes: Uint8Array;
  auth_info_bytes: Uint8Array;
  chain_id: string;
  account_number: bigint;
}
/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SignDocDirectAux {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  body_bytes: Uint8Array;
  /** public_key is the public key of the signing account. */
  public_key?: Any;
  /**
   * chain_id is the identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker.
   */
  chain_id: string;
  /** account_number is the account number of the account in state. */
  account_number: bigint;
  /** sequence is the sequence number of the signing account. */
  sequence: bigint;
  /**
   * Tip is the optional tip used for meta-transactions. It should be left
   * empty if the signer is not the tipper for this transaction.
   */
  tip?: Tip;
}
export interface SignDocDirectAuxProtoMsg {
  type_url: "/cosmos.tx.v1beta1.SignDocDirectAux";
  value: Uint8Array;
}
/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SignDocDirectAuxAmino {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  body_bytes?: string;
  /** public_key is the public key of the signing account. */
  public_key?: AnyAmino;
  /**
   * chain_id is the identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker.
   */
  chain_id?: string;
  /** account_number is the account number of the account in state. */
  account_number?: string;
  /** sequence is the sequence number of the signing account. */
  sequence?: string;
  /**
   * Tip is the optional tip used for meta-transactions. It should be left
   * empty if the signer is not the tipper for this transaction.
   */
  tip?: TipAmino;
}
export interface SignDocDirectAuxAminoMsg {
  type: "cosmos-sdk/SignDocDirectAux";
  value: SignDocDirectAuxAmino;
}
/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SignDocDirectAuxSDKType {
  body_bytes: Uint8Array;
  public_key?: AnySDKType;
  chain_id: string;
  account_number: bigint;
  sequence: bigint;
  tip?: TipSDKType;
}
/** TxBody is the body of a transaction that all signers sign over. */
export interface TxBody {
  /**
   * messages is a list of messages to be executed. The required signers of
   * those messages define the number and order of elements in AuthInfo's
   * signer_infos and Tx's signatures. Each required signer address is added to
   * the list only the first time it occurs.
   * By convention, the first required signer (usually from the first message)
   * is referred to as the primary signer and pays the fee for the whole
   * transaction.
   */
  messages: Any[];
  /**
   * memo is any arbitrary note/comment to be added to the transaction.
   * WARNING: in clients, any publicly exposed text should not be called memo,
   * but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).
   */
  memo: string;
  /**
   * timeout is the block height after which this transaction will not
   * be processed by the chain
   */
  timeout_height: bigint;
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   */
  extension_options: Any[];
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  non_critical_extension_options: Any[];
}
export interface TxBodyProtoMsg {
  type_url: "/cosmos.tx.v1beta1.TxBody";
  value: Uint8Array;
}
/** TxBody is the body of a transaction that all signers sign over. */
export interface TxBodyAmino {
  /**
   * messages is a list of messages to be executed. The required signers of
   * those messages define the number and order of elements in AuthInfo's
   * signer_infos and Tx's signatures. Each required signer address is added to
   * the list only the first time it occurs.
   * By convention, the first required signer (usually from the first message)
   * is referred to as the primary signer and pays the fee for the whole
   * transaction.
   */
  messages?: AnyAmino[];
  /**
   * memo is any arbitrary note/comment to be added to the transaction.
   * WARNING: in clients, any publicly exposed text should not be called memo,
   * but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).
   */
  memo?: string;
  /**
   * timeout is the block height after which this transaction will not
   * be processed by the chain
   */
  timeout_height?: string;
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   */
  extension_options?: AnyAmino[];
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  non_critical_extension_options?: AnyAmino[];
}
export interface TxBodyAminoMsg {
  type: "cosmos-sdk/TxBody";
  value: TxBodyAmino;
}
/** TxBody is the body of a transaction that all signers sign over. */
export interface TxBodySDKType {
  messages: AnySDKType[];
  memo: string;
  timeout_height: bigint;
  extension_options: AnySDKType[];
  non_critical_extension_options: AnySDKType[];
}
/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */
export interface AuthInfo {
  /**
   * signer_infos defines the signing modes for the required signers. The number
   * and order of elements must match the required signers from TxBody's
   * messages. The first element is the primary signer and the one which pays
   * the fee.
   */
  signer_infos: SignerInfo[];
  /**
   * Fee is the fee and gas limit for the transaction. The first signer is the
   * primary signer and the one which pays the fee. The fee can be calculated
   * based on the cost of evaluating the body and doing signature verification
   * of the signers. This can be estimated via simulation.
   */
  fee?: Fee;
  /**
   * Tip is the optional tip used for meta-transactions.
   * 
   * Since: cosmos-sdk 0.46
   */
  tip?: Tip;
}
export interface AuthInfoProtoMsg {
  type_url: "/cosmos.tx.v1beta1.AuthInfo";
  value: Uint8Array;
}
/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */
export interface AuthInfoAmino {
  /**
   * signer_infos defines the signing modes for the required signers. The number
   * and order of elements must match the required signers from TxBody's
   * messages. The first element is the primary signer and the one which pays
   * the fee.
   */
  signer_infos?: SignerInfoAmino[];
  /**
   * Fee is the fee and gas limit for the transaction. The first signer is the
   * primary signer and the one which pays the fee. The fee can be calculated
   * based on the cost of evaluating the body and doing signature verification
   * of the signers. This can be estimated via simulation.
   */
  fee?: FeeAmino;
  /**
   * Tip is the optional tip used for meta-transactions.
   * 
   * Since: cosmos-sdk 0.46
   */
  tip?: TipAmino;
}
export interface AuthInfoAminoMsg {
  type: "cosmos-sdk/AuthInfo";
  value: AuthInfoAmino;
}
/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */
export interface AuthInfoSDKType {
  signer_infos: SignerInfoSDKType[];
  fee?: FeeSDKType;
  tip?: TipSDKType;
}
/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */
export interface SignerInfo {
  /**
   * public_key is the public key of the signer. It is optional for accounts
   * that already exist in state. If unset, the verifier can use the required \
   * signer address for this position and lookup the public key.
   */
  public_key?: Any;
  /**
   * mode_info describes the signing mode of the signer and is a nested
   * structure to support nested multisig pubkey's
   */
  mode_info?: ModeInfo;
  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to
   * prevent replay attacks.
   */
  sequence: bigint;
}
export interface SignerInfoProtoMsg {
  type_url: "/cosmos.tx.v1beta1.SignerInfo";
  value: Uint8Array;
}
/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */
export interface SignerInfoAmino {
  /**
   * public_key is the public key of the signer. It is optional for accounts
   * that already exist in state. If unset, the verifier can use the required \
   * signer address for this position and lookup the public key.
   */
  public_key?: AnyAmino;
  /**
   * mode_info describes the signing mode of the signer and is a nested
   * structure to support nested multisig pubkey's
   */
  mode_info?: ModeInfoAmino;
  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to
   * prevent replay attacks.
   */
  sequence?: string;
}
export interface SignerInfoAminoMsg {
  type: "cosmos-sdk/SignerInfo";
  value: SignerInfoAmino;
}
/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */
export interface SignerInfoSDKType {
  public_key?: AnySDKType;
  mode_info?: ModeInfoSDKType;
  sequence: bigint;
}
/** ModeInfo describes the signing mode of a single or nested multisig signer. */
export interface ModeInfo {
  /** single represents a single signer */
  single?: ModeInfo_Single;
  /** multi represents a nested multisig signer */
  multi?: ModeInfo_Multi;
}
export interface ModeInfoProtoMsg {
  type_url: "/cosmos.tx.v1beta1.ModeInfo";
  value: Uint8Array;
}
/** ModeInfo describes the signing mode of a single or nested multisig signer. */
export interface ModeInfoAmino {
  /** single represents a single signer */
  single?: ModeInfo_SingleAmino;
  /** multi represents a nested multisig signer */
  multi?: ModeInfo_MultiAmino;
}
export interface ModeInfoAminoMsg {
  type: "cosmos-sdk/ModeInfo";
  value: ModeInfoAmino;
}
/** ModeInfo describes the signing mode of a single or nested multisig signer. */
export interface ModeInfoSDKType {
  single?: ModeInfo_SingleSDKType;
  multi?: ModeInfo_MultiSDKType;
}
/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */
export interface ModeInfo_Single {
  /** mode is the signing mode of the single signer */
  mode: SignMode;
}
export interface ModeInfo_SingleProtoMsg {
  type_url: "/cosmos.tx.v1beta1.Single";
  value: Uint8Array;
}
/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */
export interface ModeInfo_SingleAmino {
  /** mode is the signing mode of the single signer */
  mode?: SignMode;
}
export interface ModeInfo_SingleAminoMsg {
  type: "cosmos-sdk/Single";
  value: ModeInfo_SingleAmino;
}
/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */
export interface ModeInfo_SingleSDKType {
  mode: SignMode;
}
/** Multi is the mode info for a multisig public key */
export interface ModeInfo_Multi {
  /** bitarray specifies which keys within the multisig are signing */
  bitarray?: CompactBitArray;
  /**
   * mode_infos is the corresponding modes of the signers of the multisig
   * which could include nested multisig public keys
   */
  mode_infos: ModeInfo[];
}
export interface ModeInfo_MultiProtoMsg {
  type_url: "/cosmos.tx.v1beta1.Multi";
  value: Uint8Array;
}
/** Multi is the mode info for a multisig public key */
export interface ModeInfo_MultiAmino {
  /** bitarray specifies which keys within the multisig are signing */
  bitarray?: CompactBitArrayAmino;
  /**
   * mode_infos is the corresponding modes of the signers of the multisig
   * which could include nested multisig public keys
   */
  mode_infos?: ModeInfoAmino[];
}
export interface ModeInfo_MultiAminoMsg {
  type: "cosmos-sdk/Multi";
  value: ModeInfo_MultiAmino;
}
/** Multi is the mode info for a multisig public key */
export interface ModeInfo_MultiSDKType {
  bitarray?: CompactBitArraySDKType;
  mode_infos: ModeInfoSDKType[];
}
/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */
export interface Fee {
  /** amount is the amount of coins to be paid as a fee */
  amount: Coin[];
  /**
   * gas_limit is the maximum gas that can be used in transaction processing
   * before an out of gas error occurs
   */
  gas_limit: bigint;
  /**
   * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
   * the payer must be a tx signer (and thus have signed this field in AuthInfo).
   * setting this field does *not* change the ordering of required signers for the transaction.
   */
  payer: string;
  /**
   * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
   * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
   * not support fee grants, this will fail
   */
  granter: string;
}
export interface FeeProtoMsg {
  type_url: "/cosmos.tx.v1beta1.Fee";
  value: Uint8Array;
}
/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */
export interface FeeAmino {
  /** amount is the amount of coins to be paid as a fee */
  amount?: CoinAmino[];
  /**
   * gas_limit is the maximum gas that can be used in transaction processing
   * before an out of gas error occurs
   */
  gas_limit?: string;
  /**
   * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
   * the payer must be a tx signer (and thus have signed this field in AuthInfo).
   * setting this field does *not* change the ordering of required signers for the transaction.
   */
  payer?: string;
  /**
   * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
   * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
   * not support fee grants, this will fail
   */
  granter?: string;
}
export interface FeeAminoMsg {
  type: "cosmos-sdk/Fee";
  value: FeeAmino;
}
/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */
export interface FeeSDKType {
  amount: CoinSDKType[];
  gas_limit: bigint;
  payer: string;
  granter: string;
}
/**
 * Tip is the tip used for meta-transactions.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface Tip {
  /** amount is the amount of the tip */
  amount: Coin[];
  /** tipper is the address of the account paying for the tip */
  tipper: string;
}
export interface TipProtoMsg {
  type_url: "/cosmos.tx.v1beta1.Tip";
  value: Uint8Array;
}
/**
 * Tip is the tip used for meta-transactions.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface TipAmino {
  /** amount is the amount of the tip */
  amount?: CoinAmino[];
  /** tipper is the address of the account paying for the tip */
  tipper?: string;
}
export interface TipAminoMsg {
  type: "cosmos-sdk/Tip";
  value: TipAmino;
}
/**
 * Tip is the tip used for meta-transactions.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface TipSDKType {
  amount: CoinSDKType[];
  tipper: string;
}
/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface AuxSignerData {
  /**
   * address is the bech32-encoded address of the auxiliary signer. If using
   * AuxSignerData across different chains, the bech32 prefix of the target
   * chain (where the final transaction is broadcasted) should be used.
   */
  address: string;
  /**
   * sign_doc is the SIGN_MOD_DIRECT_AUX sign doc that the auxiliary signer
   * signs. Note: we use the same sign doc even if we're signing with
   * LEGACY_AMINO_JSON.
   */
  sign_doc?: SignDocDirectAux;
  /** mode is the signing mode of the single signer */
  mode: SignMode;
  /** sig is the signature of the sign doc. */
  sig: Uint8Array;
}
export interface AuxSignerDataProtoMsg {
  type_url: "/cosmos.tx.v1beta1.AuxSignerData";
  value: Uint8Array;
}
/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface AuxSignerDataAmino {
  /**
   * address is the bech32-encoded address of the auxiliary signer. If using
   * AuxSignerData across different chains, the bech32 prefix of the target
   * chain (where the final transaction is broadcasted) should be used.
   */
  address?: string;
  /**
   * sign_doc is the SIGN_MOD_DIRECT_AUX sign doc that the auxiliary signer
   * signs. Note: we use the same sign doc even if we're signing with
   * LEGACY_AMINO_JSON.
   */
  sign_doc?: SignDocDirectAuxAmino;
  /** mode is the signing mode of the single signer */
  mode?: SignMode;
  /** sig is the signature of the sign doc. */
  sig?: string;
}
export interface AuxSignerDataAminoMsg {
  type: "cosmos-sdk/AuxSignerData";
  value: AuxSignerDataAmino;
}
/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface AuxSignerDataSDKType {
  address: string;
  sign_doc?: SignDocDirectAuxSDKType;
  mode: SignMode;
  sig: Uint8Array;
}
function createBaseTx(): Tx {
  return {
    body: undefined,
    auth_info: undefined,
    signatures: []
  };
}
export const Tx = {
  typeUrl: "/cosmos.tx.v1beta1.Tx",
  aminoType: "cosmos-sdk/Tx",
  is(o: any): o is Tx {
    return o && (o.$typeUrl === Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  isSDK(o: any): o is TxSDKType {
    return o && (o.$typeUrl === Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  isAmino(o: any): o is TxAmino {
    return o && (o.$typeUrl === Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  encode(message: Tx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.body !== undefined) {
      TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.auth_info !== undefined) {
      AuthInfo.encode(message.auth_info, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = TxBody.decode(reader, reader.uint32());
          break;
        case 2:
          message.auth_info = AuthInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Tx {
    return {
      body: isSet(object.body) ? TxBody.fromJSON(object.body) : undefined,
      auth_info: isSet(object.auth_info) ? AuthInfo.fromJSON(object.auth_info) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: Tx): JsonSafe<Tx> {
    const obj: any = {};
    message.body !== undefined && (obj.body = message.body ? TxBody.toJSON(message.body) : undefined);
    message.auth_info !== undefined && (obj.auth_info = message.auth_info ? AuthInfo.toJSON(message.auth_info) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Tx>): Tx {
    const message = createBaseTx();
    message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
    message.auth_info = object.auth_info !== undefined && object.auth_info !== null ? AuthInfo.fromPartial(object.auth_info) : undefined;
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TxAmino): Tx {
    const message = createBaseTx();
    if (object.body !== undefined && object.body !== null) {
      message.body = TxBody.fromAmino(object.body);
    }
    if (object.auth_info !== undefined && object.auth_info !== null) {
      message.auth_info = AuthInfo.fromAmino(object.auth_info);
    }
    message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: Tx): TxAmino {
    const obj: any = {};
    obj.body = message.body ? TxBody.toAmino(message.body) : undefined;
    obj.auth_info = message.auth_info ? AuthInfo.toAmino(message.auth_info) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e));
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object: TxAminoMsg): Tx {
    return Tx.fromAmino(object.value);
  },
  toAminoMsg(message: Tx): TxAminoMsg {
    return {
      type: "cosmos-sdk/Tx",
      value: Tx.toAmino(message)
    };
  },
  fromProtoMsg(message: TxProtoMsg): Tx {
    return Tx.decode(message.value);
  },
  toProto(message: Tx): Uint8Array {
    return Tx.encode(message).finish();
  },
  toProtoMsg(message: Tx): TxProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Tx",
      value: Tx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Tx.typeUrl, Tx);
GlobalDecoderRegistry.registerAminoProtoMapping(Tx.aminoType, Tx.typeUrl);
function createBaseTxRaw(): TxRaw {
  return {
    body_bytes: new Uint8Array(),
    auth_info_bytes: new Uint8Array(),
    signatures: []
  };
}
export const TxRaw = {
  typeUrl: "/cosmos.tx.v1beta1.TxRaw",
  aminoType: "cosmos-sdk/TxRaw",
  is(o: any): o is TxRaw {
    return o && (o.$typeUrl === TxRaw.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  isSDK(o: any): o is TxRawSDKType {
    return o && (o.$typeUrl === TxRaw.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  isAmino(o: any): o is TxRawAmino {
    return o && (o.$typeUrl === TxRaw.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  encode(message: TxRaw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      writer.uint32(18).bytes(message.auth_info_bytes);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxRaw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body_bytes = reader.bytes();
          break;
        case 2:
          message.auth_info_bytes = reader.bytes();
          break;
        case 3:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxRaw {
    return {
      body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
      auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(),
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: TxRaw): JsonSafe<TxRaw> {
    const obj: any = {};
    message.body_bytes !== undefined && (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
    message.auth_info_bytes !== undefined && (obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes !== undefined ? message.auth_info_bytes : new Uint8Array()));
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TxRaw>): TxRaw {
    const message = createBaseTxRaw();
    message.body_bytes = object.body_bytes ?? new Uint8Array();
    message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array();
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TxRawAmino): TxRaw {
    const message = createBaseTxRaw();
    if (object.body_bytes !== undefined && object.body_bytes !== null) {
      message.body_bytes = bytesFromBase64(object.body_bytes);
    }
    if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
      message.auth_info_bytes = bytesFromBase64(object.auth_info_bytes);
    }
    message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: TxRaw): TxRawAmino {
    const obj: any = {};
    obj.body_bytes = message.body_bytes ? base64FromBytes(message.body_bytes) : undefined;
    obj.auth_info_bytes = message.auth_info_bytes ? base64FromBytes(message.auth_info_bytes) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e));
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object: TxRawAminoMsg): TxRaw {
    return TxRaw.fromAmino(object.value);
  },
  toAminoMsg(message: TxRaw): TxRawAminoMsg {
    return {
      type: "cosmos-sdk/TxRaw",
      value: TxRaw.toAmino(message)
    };
  },
  fromProtoMsg(message: TxRawProtoMsg): TxRaw {
    return TxRaw.decode(message.value);
  },
  toProto(message: TxRaw): Uint8Array {
    return TxRaw.encode(message).finish();
  },
  toProtoMsg(message: TxRaw): TxRawProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxRaw",
      value: TxRaw.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxRaw.typeUrl, TxRaw);
GlobalDecoderRegistry.registerAminoProtoMapping(TxRaw.aminoType, TxRaw.typeUrl);
function createBaseSignDoc(): SignDoc {
  return {
    body_bytes: new Uint8Array(),
    auth_info_bytes: new Uint8Array(),
    chain_id: "",
    account_number: BigInt(0)
  };
}
export const SignDoc = {
  typeUrl: "/cosmos.tx.v1beta1.SignDoc",
  aminoType: "cosmos-sdk/SignDoc",
  is(o: any): o is SignDoc {
    return o && (o.$typeUrl === SignDoc.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint");
  },
  isSDK(o: any): o is SignDocSDKType {
    return o && (o.$typeUrl === SignDoc.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint");
  },
  isAmino(o: any): o is SignDocAmino {
    return o && (o.$typeUrl === SignDoc.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint");
  },
  encode(message: SignDoc, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      writer.uint32(18).bytes(message.auth_info_bytes);
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (message.account_number !== BigInt(0)) {
      writer.uint32(32).uint64(message.account_number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignDoc {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body_bytes = reader.bytes();
          break;
        case 2:
          message.auth_info_bytes = reader.bytes();
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.account_number = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignDoc {
    return {
      body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
      auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(),
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      account_number: isSet(object.account_number) ? BigInt(object.account_number.toString()) : BigInt(0)
    };
  },
  toJSON(message: SignDoc): JsonSafe<SignDoc> {
    const obj: any = {};
    message.body_bytes !== undefined && (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
    message.auth_info_bytes !== undefined && (obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes !== undefined ? message.auth_info_bytes : new Uint8Array()));
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.account_number !== undefined && (obj.account_number = (message.account_number || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<SignDoc>): SignDoc {
    const message = createBaseSignDoc();
    message.body_bytes = object.body_bytes ?? new Uint8Array();
    message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array();
    message.chain_id = object.chain_id ?? "";
    message.account_number = object.account_number !== undefined && object.account_number !== null ? BigInt(object.account_number.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SignDocAmino): SignDoc {
    const message = createBaseSignDoc();
    if (object.body_bytes !== undefined && object.body_bytes !== null) {
      message.body_bytes = bytesFromBase64(object.body_bytes);
    }
    if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
      message.auth_info_bytes = bytesFromBase64(object.auth_info_bytes);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.account_number = BigInt(object.account_number);
    }
    return message;
  },
  toAmino(message: SignDoc): SignDocAmino {
    const obj: any = {};
    obj.body_bytes = message.body_bytes ? base64FromBytes(message.body_bytes) : undefined;
    obj.auth_info_bytes = message.auth_info_bytes ? base64FromBytes(message.auth_info_bytes) : undefined;
    obj.chain_id = message.chain_id === "" ? undefined : message.chain_id;
    obj.account_number = message.account_number !== BigInt(0) ? message.account_number.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SignDocAminoMsg): SignDoc {
    return SignDoc.fromAmino(object.value);
  },
  toAminoMsg(message: SignDoc): SignDocAminoMsg {
    return {
      type: "cosmos-sdk/SignDoc",
      value: SignDoc.toAmino(message)
    };
  },
  fromProtoMsg(message: SignDocProtoMsg): SignDoc {
    return SignDoc.decode(message.value);
  },
  toProto(message: SignDoc): Uint8Array {
    return SignDoc.encode(message).finish();
  },
  toProtoMsg(message: SignDoc): SignDocProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SignDoc",
      value: SignDoc.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SignDoc.typeUrl, SignDoc);
GlobalDecoderRegistry.registerAminoProtoMapping(SignDoc.aminoType, SignDoc.typeUrl);
function createBaseSignDocDirectAux(): SignDocDirectAux {
  return {
    body_bytes: new Uint8Array(),
    public_key: undefined,
    chain_id: "",
    account_number: BigInt(0),
    sequence: BigInt(0),
    tip: undefined
  };
}
export const SignDocDirectAux = {
  typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
  aminoType: "cosmos-sdk/SignDocDirectAux",
  is(o: any): o is SignDocDirectAux {
    return o && (o.$typeUrl === SignDocDirectAux.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
  },
  isSDK(o: any): o is SignDocDirectAuxSDKType {
    return o && (o.$typeUrl === SignDocDirectAux.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is SignDocDirectAuxAmino {
    return o && (o.$typeUrl === SignDocDirectAux.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
  },
  encode(message: SignDocDirectAux, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.public_key !== undefined) {
      Any.encode(message.public_key, writer.uint32(18).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (message.account_number !== BigInt(0)) {
      writer.uint32(32).uint64(message.account_number);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(40).uint64(message.sequence);
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignDocDirectAux {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDocDirectAux();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body_bytes = reader.bytes();
          break;
        case 2:
          message.public_key = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.account_number = reader.uint64();
          break;
        case 5:
          message.sequence = reader.uint64();
          break;
        case 6:
          message.tip = Tip.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignDocDirectAux {
    return {
      body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
      public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      account_number: isSet(object.account_number) ? BigInt(object.account_number.toString()) : BigInt(0),
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : undefined
    };
  },
  toJSON(message: SignDocDirectAux): JsonSafe<SignDocDirectAux> {
    const obj: any = {};
    message.body_bytes !== undefined && (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
    message.public_key !== undefined && (obj.public_key = message.public_key ? Any.toJSON(message.public_key) : undefined);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.account_number !== undefined && (obj.account_number = (message.account_number || BigInt(0)).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.tip !== undefined && (obj.tip = message.tip ? Tip.toJSON(message.tip) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SignDocDirectAux>): SignDocDirectAux {
    const message = createBaseSignDocDirectAux();
    message.body_bytes = object.body_bytes ?? new Uint8Array();
    message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
    message.chain_id = object.chain_id ?? "";
    message.account_number = object.account_number !== undefined && object.account_number !== null ? BigInt(object.account_number.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  },
  fromAmino(object: SignDocDirectAuxAmino): SignDocDirectAux {
    const message = createBaseSignDocDirectAux();
    if (object.body_bytes !== undefined && object.body_bytes !== null) {
      message.body_bytes = bytesFromBase64(object.body_bytes);
    }
    if (object.public_key !== undefined && object.public_key !== null) {
      message.public_key = Any.fromAmino(object.public_key);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.account_number = BigInt(object.account_number);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.tip !== undefined && object.tip !== null) {
      message.tip = Tip.fromAmino(object.tip);
    }
    return message;
  },
  toAmino(message: SignDocDirectAux): SignDocDirectAuxAmino {
    const obj: any = {};
    obj.body_bytes = message.body_bytes ? base64FromBytes(message.body_bytes) : undefined;
    obj.public_key = message.public_key ? Any.toAmino(message.public_key) : undefined;
    obj.chain_id = message.chain_id === "" ? undefined : message.chain_id;
    obj.account_number = message.account_number !== BigInt(0) ? message.account_number.toString() : undefined;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
    obj.tip = message.tip ? Tip.toAmino(message.tip) : undefined;
    return obj;
  },
  fromAminoMsg(object: SignDocDirectAuxAminoMsg): SignDocDirectAux {
    return SignDocDirectAux.fromAmino(object.value);
  },
  toAminoMsg(message: SignDocDirectAux): SignDocDirectAuxAminoMsg {
    return {
      type: "cosmos-sdk/SignDocDirectAux",
      value: SignDocDirectAux.toAmino(message)
    };
  },
  fromProtoMsg(message: SignDocDirectAuxProtoMsg): SignDocDirectAux {
    return SignDocDirectAux.decode(message.value);
  },
  toProto(message: SignDocDirectAux): Uint8Array {
    return SignDocDirectAux.encode(message).finish();
  },
  toProtoMsg(message: SignDocDirectAux): SignDocDirectAuxProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
      value: SignDocDirectAux.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SignDocDirectAux.typeUrl, SignDocDirectAux);
GlobalDecoderRegistry.registerAminoProtoMapping(SignDocDirectAux.aminoType, SignDocDirectAux.typeUrl);
function createBaseTxBody(): TxBody {
  return {
    messages: [],
    memo: "",
    timeout_height: BigInt(0),
    extension_options: [],
    non_critical_extension_options: []
  };
}
export const TxBody = {
  typeUrl: "/cosmos.tx.v1beta1.TxBody",
  aminoType: "cosmos-sdk/TxBody",
  is(o: any): o is TxBody {
    return o && (o.$typeUrl === TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])) && typeof o.memo === "string" && typeof o.timeout_height === "bigint" && Array.isArray(o.extension_options) && (!o.extension_options.length || Any.is(o.extension_options[0])) && Array.isArray(o.non_critical_extension_options) && (!o.non_critical_extension_options.length || Any.is(o.non_critical_extension_options[0])));
  },
  isSDK(o: any): o is TxBodySDKType {
    return o && (o.$typeUrl === TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])) && typeof o.memo === "string" && typeof o.timeout_height === "bigint" && Array.isArray(o.extension_options) && (!o.extension_options.length || Any.isSDK(o.extension_options[0])) && Array.isArray(o.non_critical_extension_options) && (!o.non_critical_extension_options.length || Any.isSDK(o.non_critical_extension_options[0])));
  },
  isAmino(o: any): o is TxBodyAmino {
    return o && (o.$typeUrl === TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])) && typeof o.memo === "string" && typeof o.timeout_height === "bigint" && Array.isArray(o.extension_options) && (!o.extension_options.length || Any.isAmino(o.extension_options[0])) && Array.isArray(o.non_critical_extension_options) && (!o.non_critical_extension_options.length || Any.isAmino(o.non_critical_extension_options[0])));
  },
  encode(message: TxBody, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    if (message.timeout_height !== BigInt(0)) {
      writer.uint32(24).uint64(message.timeout_height);
    }
    for (const v of message.extension_options) {
      Any.encode(v!, writer.uint32(8186).fork()).ldelim();
    }
    for (const v of message.non_critical_extension_options) {
      Any.encode(v!, writer.uint32(16378).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxBody {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.memo = reader.string();
          break;
        case 3:
          message.timeout_height = reader.uint64();
          break;
        case 1023:
          message.extension_options.push(Any.decode(reader, reader.uint32()));
          break;
        case 2047:
          message.non_critical_extension_options.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxBody {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      memo: isSet(object.memo) ? String(object.memo) : "",
      timeout_height: isSet(object.timeout_height) ? BigInt(object.timeout_height.toString()) : BigInt(0),
      extension_options: Array.isArray(object?.extension_options) ? object.extension_options.map((e: any) => Any.fromJSON(e)) : [],
      non_critical_extension_options: Array.isArray(object?.non_critical_extension_options) ? object.non_critical_extension_options.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message: TxBody): JsonSafe<TxBody> {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.memo !== undefined && (obj.memo = message.memo);
    message.timeout_height !== undefined && (obj.timeout_height = (message.timeout_height || BigInt(0)).toString());
    if (message.extension_options) {
      obj.extension_options = message.extension_options.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.extension_options = [];
    }
    if (message.non_critical_extension_options) {
      obj.non_critical_extension_options = message.non_critical_extension_options.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.non_critical_extension_options = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TxBody>): TxBody {
    const message = createBaseTxBody();
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.memo = object.memo ?? "";
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? BigInt(object.timeout_height.toString()) : BigInt(0);
    message.extension_options = object.extension_options?.map(e => Any.fromPartial(e)) || [];
    message.non_critical_extension_options = object.non_critical_extension_options?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TxBodyAmino): TxBody {
    const message = createBaseTxBody();
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    if (object.timeout_height !== undefined && object.timeout_height !== null) {
      message.timeout_height = BigInt(object.timeout_height);
    }
    message.extension_options = object.extension_options?.map(e => Any.fromAmino(e)) || [];
    message.non_critical_extension_options = object.non_critical_extension_options?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TxBody): TxBodyAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.memo = message.memo === "" ? undefined : message.memo;
    obj.timeout_height = message.timeout_height !== BigInt(0) ? message.timeout_height.toString() : undefined;
    if (message.extension_options) {
      obj.extension_options = message.extension_options.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.extension_options = message.extension_options;
    }
    if (message.non_critical_extension_options) {
      obj.non_critical_extension_options = message.non_critical_extension_options.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.non_critical_extension_options = message.non_critical_extension_options;
    }
    return obj;
  },
  fromAminoMsg(object: TxBodyAminoMsg): TxBody {
    return TxBody.fromAmino(object.value);
  },
  toAminoMsg(message: TxBody): TxBodyAminoMsg {
    return {
      type: "cosmos-sdk/TxBody",
      value: TxBody.toAmino(message)
    };
  },
  fromProtoMsg(message: TxBodyProtoMsg): TxBody {
    return TxBody.decode(message.value);
  },
  toProto(message: TxBody): Uint8Array {
    return TxBody.encode(message).finish();
  },
  toProtoMsg(message: TxBody): TxBodyProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: TxBody.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxBody.typeUrl, TxBody);
GlobalDecoderRegistry.registerAminoProtoMapping(TxBody.aminoType, TxBody.typeUrl);
function createBaseAuthInfo(): AuthInfo {
  return {
    signer_infos: [],
    fee: undefined,
    tip: undefined
  };
}
export const AuthInfo = {
  typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
  aminoType: "cosmos-sdk/AuthInfo",
  is(o: any): o is AuthInfo {
    return o && (o.$typeUrl === AuthInfo.typeUrl || Array.isArray(o.signer_infos) && (!o.signer_infos.length || SignerInfo.is(o.signer_infos[0])));
  },
  isSDK(o: any): o is AuthInfoSDKType {
    return o && (o.$typeUrl === AuthInfo.typeUrl || Array.isArray(o.signer_infos) && (!o.signer_infos.length || SignerInfo.isSDK(o.signer_infos[0])));
  },
  isAmino(o: any): o is AuthInfoAmino {
    return o && (o.$typeUrl === AuthInfo.typeUrl || Array.isArray(o.signer_infos) && (!o.signer_infos.length || SignerInfo.isAmino(o.signer_infos[0])));
  },
  encode(message: AuthInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signer_infos) {
      SignerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer_infos.push(SignerInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 3:
          message.tip = Tip.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthInfo {
    return {
      signer_infos: Array.isArray(object?.signer_infos) ? object.signer_infos.map((e: any) => SignerInfo.fromJSON(e)) : [],
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : undefined
    };
  },
  toJSON(message: AuthInfo): JsonSafe<AuthInfo> {
    const obj: any = {};
    if (message.signer_infos) {
      obj.signer_infos = message.signer_infos.map(e => e ? SignerInfo.toJSON(e) : undefined);
    } else {
      obj.signer_infos = [];
    }
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.tip !== undefined && (obj.tip = message.tip ? Tip.toJSON(message.tip) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AuthInfo>): AuthInfo {
    const message = createBaseAuthInfo();
    message.signer_infos = object.signer_infos?.map(e => SignerInfo.fromPartial(e)) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  },
  fromAmino(object: AuthInfoAmino): AuthInfo {
    const message = createBaseAuthInfo();
    message.signer_infos = object.signer_infos?.map(e => SignerInfo.fromAmino(e)) || [];
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    if (object.tip !== undefined && object.tip !== null) {
      message.tip = Tip.fromAmino(object.tip);
    }
    return message;
  },
  toAmino(message: AuthInfo): AuthInfoAmino {
    const obj: any = {};
    if (message.signer_infos) {
      obj.signer_infos = message.signer_infos.map(e => e ? SignerInfo.toAmino(e) : undefined);
    } else {
      obj.signer_infos = message.signer_infos;
    }
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    obj.tip = message.tip ? Tip.toAmino(message.tip) : undefined;
    return obj;
  },
  fromAminoMsg(object: AuthInfoAminoMsg): AuthInfo {
    return AuthInfo.fromAmino(object.value);
  },
  toAminoMsg(message: AuthInfo): AuthInfoAminoMsg {
    return {
      type: "cosmos-sdk/AuthInfo",
      value: AuthInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: AuthInfoProtoMsg): AuthInfo {
    return AuthInfo.decode(message.value);
  },
  toProto(message: AuthInfo): Uint8Array {
    return AuthInfo.encode(message).finish();
  },
  toProtoMsg(message: AuthInfo): AuthInfoProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
      value: AuthInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AuthInfo.typeUrl, AuthInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(AuthInfo.aminoType, AuthInfo.typeUrl);
function createBaseSignerInfo(): SignerInfo {
  return {
    public_key: undefined,
    mode_info: undefined,
    sequence: BigInt(0)
  };
}
export const SignerInfo = {
  typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
  aminoType: "cosmos-sdk/SignerInfo",
  is(o: any): o is SignerInfo {
    return o && (o.$typeUrl === SignerInfo.typeUrl || typeof o.sequence === "bigint");
  },
  isSDK(o: any): o is SignerInfoSDKType {
    return o && (o.$typeUrl === SignerInfo.typeUrl || typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is SignerInfoAmino {
    return o && (o.$typeUrl === SignerInfo.typeUrl || typeof o.sequence === "bigint");
  },
  encode(message: SignerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.public_key !== undefined) {
      Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.mode_info !== undefined) {
      ModeInfo.encode(message.mode_info, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.public_key = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.mode_info = ModeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignerInfo {
    return {
      public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
      mode_info: isSet(object.mode_info) ? ModeInfo.fromJSON(object.mode_info) : undefined,
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: SignerInfo): JsonSafe<SignerInfo> {
    const obj: any = {};
    message.public_key !== undefined && (obj.public_key = message.public_key ? Any.toJSON(message.public_key) : undefined);
    message.mode_info !== undefined && (obj.mode_info = message.mode_info ? ModeInfo.toJSON(message.mode_info) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<SignerInfo>): SignerInfo {
    const message = createBaseSignerInfo();
    message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
    message.mode_info = object.mode_info !== undefined && object.mode_info !== null ? ModeInfo.fromPartial(object.mode_info) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SignerInfoAmino): SignerInfo {
    const message = createBaseSignerInfo();
    if (object.public_key !== undefined && object.public_key !== null) {
      message.public_key = Any.fromAmino(object.public_key);
    }
    if (object.mode_info !== undefined && object.mode_info !== null) {
      message.mode_info = ModeInfo.fromAmino(object.mode_info);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: SignerInfo): SignerInfoAmino {
    const obj: any = {};
    obj.public_key = message.public_key ? Any.toAmino(message.public_key) : undefined;
    obj.mode_info = message.mode_info ? ModeInfo.toAmino(message.mode_info) : undefined;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SignerInfoAminoMsg): SignerInfo {
    return SignerInfo.fromAmino(object.value);
  },
  toAminoMsg(message: SignerInfo): SignerInfoAminoMsg {
    return {
      type: "cosmos-sdk/SignerInfo",
      value: SignerInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: SignerInfoProtoMsg): SignerInfo {
    return SignerInfo.decode(message.value);
  },
  toProto(message: SignerInfo): Uint8Array {
    return SignerInfo.encode(message).finish();
  },
  toProtoMsg(message: SignerInfo): SignerInfoProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
      value: SignerInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SignerInfo.typeUrl, SignerInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(SignerInfo.aminoType, SignerInfo.typeUrl);
function createBaseModeInfo(): ModeInfo {
  return {
    single: undefined,
    multi: undefined
  };
}
export const ModeInfo = {
  typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
  aminoType: "cosmos-sdk/ModeInfo",
  is(o: any): o is ModeInfo {
    return o && o.$typeUrl === ModeInfo.typeUrl;
  },
  isSDK(o: any): o is ModeInfoSDKType {
    return o && o.$typeUrl === ModeInfo.typeUrl;
  },
  isAmino(o: any): o is ModeInfoAmino {
    return o && o.$typeUrl === ModeInfo.typeUrl;
  },
  encode(message: ModeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModeInfo {
    return {
      single: isSet(object.single) ? ModeInfo_Single.fromJSON(object.single) : undefined,
      multi: isSet(object.multi) ? ModeInfo_Multi.fromJSON(object.multi) : undefined
    };
  },
  toJSON(message: ModeInfo): JsonSafe<ModeInfo> {
    const obj: any = {};
    message.single !== undefined && (obj.single = message.single ? ModeInfo_Single.toJSON(message.single) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? ModeInfo_Multi.toJSON(message.multi) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ModeInfo>): ModeInfo {
    const message = createBaseModeInfo();
    message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
    return message;
  },
  fromAmino(object: ModeInfoAmino): ModeInfo {
    const message = createBaseModeInfo();
    if (object.single !== undefined && object.single !== null) {
      message.single = ModeInfo_Single.fromAmino(object.single);
    }
    if (object.multi !== undefined && object.multi !== null) {
      message.multi = ModeInfo_Multi.fromAmino(object.multi);
    }
    return message;
  },
  toAmino(message: ModeInfo): ModeInfoAmino {
    const obj: any = {};
    obj.single = message.single ? ModeInfo_Single.toAmino(message.single) : undefined;
    obj.multi = message.multi ? ModeInfo_Multi.toAmino(message.multi) : undefined;
    return obj;
  },
  fromAminoMsg(object: ModeInfoAminoMsg): ModeInfo {
    return ModeInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ModeInfo): ModeInfoAminoMsg {
    return {
      type: "cosmos-sdk/ModeInfo",
      value: ModeInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ModeInfoProtoMsg): ModeInfo {
    return ModeInfo.decode(message.value);
  },
  toProto(message: ModeInfo): Uint8Array {
    return ModeInfo.encode(message).finish();
  },
  toProtoMsg(message: ModeInfo): ModeInfoProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
      value: ModeInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModeInfo.typeUrl, ModeInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(ModeInfo.aminoType, ModeInfo.typeUrl);
function createBaseModeInfo_Single(): ModeInfo_Single {
  return {
    mode: 0
  };
}
export const ModeInfo_Single = {
  typeUrl: "/cosmos.tx.v1beta1.Single",
  aminoType: "cosmos-sdk/Single",
  is(o: any): o is ModeInfo_Single {
    return o && (o.$typeUrl === ModeInfo_Single.typeUrl || isSet(o.mode));
  },
  isSDK(o: any): o is ModeInfo_SingleSDKType {
    return o && (o.$typeUrl === ModeInfo_Single.typeUrl || isSet(o.mode));
  },
  isAmino(o: any): o is ModeInfo_SingleAmino {
    return o && (o.$typeUrl === ModeInfo_Single.typeUrl || isSet(o.mode));
  },
  encode(message: ModeInfo_Single, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModeInfo_Single {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModeInfo_Single {
    return {
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1
    };
  },
  toJSON(message: ModeInfo_Single): JsonSafe<ModeInfo_Single> {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    return obj;
  },
  fromPartial(object: DeepPartial<ModeInfo_Single>): ModeInfo_Single {
    const message = createBaseModeInfo_Single();
    message.mode = object.mode ?? 0;
    return message;
  },
  fromAmino(object: ModeInfo_SingleAmino): ModeInfo_Single {
    const message = createBaseModeInfo_Single();
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    }
    return message;
  },
  toAmino(message: ModeInfo_Single): ModeInfo_SingleAmino {
    const obj: any = {};
    obj.mode = message.mode === 0 ? undefined : message.mode;
    return obj;
  },
  fromAminoMsg(object: ModeInfo_SingleAminoMsg): ModeInfo_Single {
    return ModeInfo_Single.fromAmino(object.value);
  },
  toAminoMsg(message: ModeInfo_Single): ModeInfo_SingleAminoMsg {
    return {
      type: "cosmos-sdk/Single",
      value: ModeInfo_Single.toAmino(message)
    };
  },
  fromProtoMsg(message: ModeInfo_SingleProtoMsg): ModeInfo_Single {
    return ModeInfo_Single.decode(message.value);
  },
  toProto(message: ModeInfo_Single): Uint8Array {
    return ModeInfo_Single.encode(message).finish();
  },
  toProtoMsg(message: ModeInfo_Single): ModeInfo_SingleProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Single",
      value: ModeInfo_Single.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModeInfo_Single.typeUrl, ModeInfo_Single);
GlobalDecoderRegistry.registerAminoProtoMapping(ModeInfo_Single.aminoType, ModeInfo_Single.typeUrl);
function createBaseModeInfo_Multi(): ModeInfo_Multi {
  return {
    bitarray: undefined,
    mode_infos: []
  };
}
export const ModeInfo_Multi = {
  typeUrl: "/cosmos.tx.v1beta1.Multi",
  aminoType: "cosmos-sdk/Multi",
  is(o: any): o is ModeInfo_Multi {
    return o && (o.$typeUrl === ModeInfo_Multi.typeUrl || Array.isArray(o.mode_infos) && (!o.mode_infos.length || ModeInfo.is(o.mode_infos[0])));
  },
  isSDK(o: any): o is ModeInfo_MultiSDKType {
    return o && (o.$typeUrl === ModeInfo_Multi.typeUrl || Array.isArray(o.mode_infos) && (!o.mode_infos.length || ModeInfo.isSDK(o.mode_infos[0])));
  },
  isAmino(o: any): o is ModeInfo_MultiAmino {
    return o && (o.$typeUrl === ModeInfo_Multi.typeUrl || Array.isArray(o.mode_infos) && (!o.mode_infos.length || ModeInfo.isAmino(o.mode_infos[0])));
  },
  encode(message: ModeInfo_Multi, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mode_infos) {
      ModeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModeInfo_Multi {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.mode_infos.push(ModeInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModeInfo_Multi {
    return {
      bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
      mode_infos: Array.isArray(object?.mode_infos) ? object.mode_infos.map((e: any) => ModeInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: ModeInfo_Multi): JsonSafe<ModeInfo_Multi> {
    const obj: any = {};
    message.bitarray !== undefined && (obj.bitarray = message.bitarray ? CompactBitArray.toJSON(message.bitarray) : undefined);
    if (message.mode_infos) {
      obj.mode_infos = message.mode_infos.map(e => e ? ModeInfo.toJSON(e) : undefined);
    } else {
      obj.mode_infos = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ModeInfo_Multi>): ModeInfo_Multi {
    const message = createBaseModeInfo_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.mode_infos = object.mode_infos?.map(e => ModeInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ModeInfo_MultiAmino): ModeInfo_Multi {
    const message = createBaseModeInfo_Multi();
    if (object.bitarray !== undefined && object.bitarray !== null) {
      message.bitarray = CompactBitArray.fromAmino(object.bitarray);
    }
    message.mode_infos = object.mode_infos?.map(e => ModeInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ModeInfo_Multi): ModeInfo_MultiAmino {
    const obj: any = {};
    obj.bitarray = message.bitarray ? CompactBitArray.toAmino(message.bitarray) : undefined;
    if (message.mode_infos) {
      obj.mode_infos = message.mode_infos.map(e => e ? ModeInfo.toAmino(e) : undefined);
    } else {
      obj.mode_infos = message.mode_infos;
    }
    return obj;
  },
  fromAminoMsg(object: ModeInfo_MultiAminoMsg): ModeInfo_Multi {
    return ModeInfo_Multi.fromAmino(object.value);
  },
  toAminoMsg(message: ModeInfo_Multi): ModeInfo_MultiAminoMsg {
    return {
      type: "cosmos-sdk/Multi",
      value: ModeInfo_Multi.toAmino(message)
    };
  },
  fromProtoMsg(message: ModeInfo_MultiProtoMsg): ModeInfo_Multi {
    return ModeInfo_Multi.decode(message.value);
  },
  toProto(message: ModeInfo_Multi): Uint8Array {
    return ModeInfo_Multi.encode(message).finish();
  },
  toProtoMsg(message: ModeInfo_Multi): ModeInfo_MultiProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Multi",
      value: ModeInfo_Multi.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModeInfo_Multi.typeUrl, ModeInfo_Multi);
GlobalDecoderRegistry.registerAminoProtoMapping(ModeInfo_Multi.aminoType, ModeInfo_Multi.typeUrl);
function createBaseFee(): Fee {
  return {
    amount: [],
    gas_limit: BigInt(0),
    payer: "",
    granter: ""
  };
}
export const Fee = {
  typeUrl: "/cosmos.tx.v1beta1.Fee",
  aminoType: "cosmos-sdk/Fee",
  is(o: any): o is Fee {
    return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.gas_limit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
  },
  isSDK(o: any): o is FeeSDKType {
    return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.gas_limit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
  },
  isAmino(o: any): o is FeeAmino {
    return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.gas_limit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
  },
  encode(message: Fee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.gas_limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.gas_limit);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Fee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.gas_limit = reader.uint64();
          break;
        case 3:
          message.payer = reader.string();
          break;
        case 4:
          message.granter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Fee {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      gas_limit: isSet(object.gas_limit) ? BigInt(object.gas_limit.toString()) : BigInt(0),
      payer: isSet(object.payer) ? String(object.payer) : "",
      granter: isSet(object.granter) ? String(object.granter) : ""
    };
  },
  toJSON(message: Fee): JsonSafe<Fee> {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.gas_limit !== undefined && (obj.gas_limit = (message.gas_limit || BigInt(0)).toString());
    message.payer !== undefined && (obj.payer = message.payer);
    message.granter !== undefined && (obj.granter = message.granter);
    return obj;
  },
  fromPartial(object: DeepPartial<Fee>): Fee {
    const message = createBaseFee();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.gas_limit = object.gas_limit !== undefined && object.gas_limit !== null ? BigInt(object.gas_limit.toString()) : BigInt(0);
    message.payer = object.payer ?? "";
    message.granter = object.granter ?? "";
    return message;
  },
  fromAmino(object: FeeAmino): Fee {
    const message = createBaseFee();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gas_limit = BigInt(object.gas_limit);
    }
    if (object.payer !== undefined && object.payer !== null) {
      message.payer = object.payer;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    return message;
  },
  toAmino(message: Fee): FeeAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.gas_limit = message.gas_limit !== BigInt(0) ? message.gas_limit.toString() : undefined;
    obj.payer = message.payer === "" ? undefined : message.payer;
    obj.granter = message.granter === "" ? undefined : message.granter;
    return obj;
  },
  fromAminoMsg(object: FeeAminoMsg): Fee {
    return Fee.fromAmino(object.value);
  },
  toAminoMsg(message: Fee): FeeAminoMsg {
    return {
      type: "cosmos-sdk/Fee",
      value: Fee.toAmino(message)
    };
  },
  fromProtoMsg(message: FeeProtoMsg): Fee {
    return Fee.decode(message.value);
  },
  toProto(message: Fee): Uint8Array {
    return Fee.encode(message).finish();
  },
  toProtoMsg(message: Fee): FeeProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Fee",
      value: Fee.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Fee.typeUrl, Fee);
GlobalDecoderRegistry.registerAminoProtoMapping(Fee.aminoType, Fee.typeUrl);
function createBaseTip(): Tip {
  return {
    amount: [],
    tipper: ""
  };
}
export const Tip = {
  typeUrl: "/cosmos.tx.v1beta1.Tip",
  aminoType: "cosmos-sdk/Tip",
  is(o: any): o is Tip {
    return o && (o.$typeUrl === Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.tipper === "string");
  },
  isSDK(o: any): o is TipSDKType {
    return o && (o.$typeUrl === Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.tipper === "string");
  },
  isAmino(o: any): o is TipAmino {
    return o && (o.$typeUrl === Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.tipper === "string");
  },
  encode(message: Tip, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tipper !== "") {
      writer.uint32(18).string(message.tipper);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tip {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tipper = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Tip {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      tipper: isSet(object.tipper) ? String(object.tipper) : ""
    };
  },
  toJSON(message: Tip): JsonSafe<Tip> {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.tipper !== undefined && (obj.tipper = message.tipper);
    return obj;
  },
  fromPartial(object: DeepPartial<Tip>): Tip {
    const message = createBaseTip();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.tipper = object.tipper ?? "";
    return message;
  },
  fromAmino(object: TipAmino): Tip {
    const message = createBaseTip();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.tipper !== undefined && object.tipper !== null) {
      message.tipper = object.tipper;
    }
    return message;
  },
  toAmino(message: Tip): TipAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.tipper = message.tipper === "" ? undefined : message.tipper;
    return obj;
  },
  fromAminoMsg(object: TipAminoMsg): Tip {
    return Tip.fromAmino(object.value);
  },
  toAminoMsg(message: Tip): TipAminoMsg {
    return {
      type: "cosmos-sdk/Tip",
      value: Tip.toAmino(message)
    };
  },
  fromProtoMsg(message: TipProtoMsg): Tip {
    return Tip.decode(message.value);
  },
  toProto(message: Tip): Uint8Array {
    return Tip.encode(message).finish();
  },
  toProtoMsg(message: Tip): TipProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Tip",
      value: Tip.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Tip.typeUrl, Tip);
GlobalDecoderRegistry.registerAminoProtoMapping(Tip.aminoType, Tip.typeUrl);
function createBaseAuxSignerData(): AuxSignerData {
  return {
    address: "",
    sign_doc: undefined,
    mode: 0,
    sig: new Uint8Array()
  };
}
export const AuxSignerData = {
  typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
  aminoType: "cosmos-sdk/AuxSignerData",
  is(o: any): o is AuxSignerData {
    return o && (o.$typeUrl === AuxSignerData.typeUrl || typeof o.address === "string" && isSet(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
  },
  isSDK(o: any): o is AuxSignerDataSDKType {
    return o && (o.$typeUrl === AuxSignerData.typeUrl || typeof o.address === "string" && isSet(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
  },
  isAmino(o: any): o is AuxSignerDataAmino {
    return o && (o.$typeUrl === AuxSignerData.typeUrl || typeof o.address === "string" && isSet(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
  },
  encode(message: AuxSignerData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.sign_doc !== undefined) {
      SignDocDirectAux.encode(message.sign_doc, writer.uint32(18).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(24).int32(message.mode);
    }
    if (message.sig.length !== 0) {
      writer.uint32(34).bytes(message.sig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuxSignerData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxSignerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.sign_doc = SignDocDirectAux.decode(reader, reader.uint32());
          break;
        case 3:
          message.mode = reader.int32() as any;
          break;
        case 4:
          message.sig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuxSignerData {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      sign_doc: isSet(object.sign_doc) ? SignDocDirectAux.fromJSON(object.sign_doc) : undefined,
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
    };
  },
  toJSON(message: AuxSignerData): JsonSafe<AuxSignerData> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.sign_doc !== undefined && (obj.sign_doc = message.sign_doc ? SignDocDirectAux.toJSON(message.sign_doc) : undefined);
    message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<AuxSignerData>): AuxSignerData {
    const message = createBaseAuxSignerData();
    message.address = object.address ?? "";
    message.sign_doc = object.sign_doc !== undefined && object.sign_doc !== null ? SignDocDirectAux.fromPartial(object.sign_doc) : undefined;
    message.mode = object.mode ?? 0;
    message.sig = object.sig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AuxSignerDataAmino): AuxSignerData {
    const message = createBaseAuxSignerData();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.sign_doc !== undefined && object.sign_doc !== null) {
      message.sign_doc = SignDocDirectAux.fromAmino(object.sign_doc);
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    }
    if (object.sig !== undefined && object.sig !== null) {
      message.sig = bytesFromBase64(object.sig);
    }
    return message;
  },
  toAmino(message: AuxSignerData): AuxSignerDataAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.sign_doc = message.sign_doc ? SignDocDirectAux.toAmino(message.sign_doc) : undefined;
    obj.mode = message.mode === 0 ? undefined : message.mode;
    obj.sig = message.sig ? base64FromBytes(message.sig) : undefined;
    return obj;
  },
  fromAminoMsg(object: AuxSignerDataAminoMsg): AuxSignerData {
    return AuxSignerData.fromAmino(object.value);
  },
  toAminoMsg(message: AuxSignerData): AuxSignerDataAminoMsg {
    return {
      type: "cosmos-sdk/AuxSignerData",
      value: AuxSignerData.toAmino(message)
    };
  },
  fromProtoMsg(message: AuxSignerDataProtoMsg): AuxSignerData {
    return AuxSignerData.decode(message.value);
  },
  toProto(message: AuxSignerData): Uint8Array {
    return AuxSignerData.encode(message).finish();
  },
  toProtoMsg(message: AuxSignerData): AuxSignerDataProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
      value: AuxSignerData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AuxSignerData.typeUrl, AuxSignerData);
GlobalDecoderRegistry.registerAminoProtoMapping(AuxSignerData.aminoType, AuxSignerData.typeUrl);