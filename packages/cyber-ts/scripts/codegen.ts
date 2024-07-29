import { TelescopeInput } from '@cosmology/telescope';
import telescope from '@cosmology/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';

import { AMINO_MAP } from './aminos';

const protoDirs: string[] = [join(__dirname, '/../proto')];
const outPath: string = join(__dirname, '../src');
rimraf(outPath);

export const options: TelescopeInput = {
  protoDirs,
  outPath,
  options: {
    bundle: {
      enabled: true
    },
    reactQuery: {
      enabled: true
    },
    interfaces: {
      enabled: true,
      useUnionTypes: true,
      useGlobalDecoderRegistry: true
    },
    prototypes: {
      enabled: true,
      addTypeUrlToDecoders: true,
      addTypeUrlToObjects: true,
      addAminoTypeToObjects: true,
      parser: {
        keepCase: true
      },
      excluded: {
        packages: [
          'cosmos.app.**',
          'cosmos.autocli.**',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.circuit.**',
          'cosmos.consensus.**',
          'cosmos.crisis.**',
          'cosmos.evidence.**',
          'cosmos.feegrant.**',
          'cosmos.genutil.**',
          'cosmos.group.**',
          'cosmos.msg.**',
          'cosmos.nft.**',
          'cosmos.capability.**',
          'cosmos.orm.**',
          'cosmos.reflection.**',
          'cosmos.store.**',
          'cosmos.slashing.**',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1',
          'ibc.applications.fee.**',
        ]
      },
      methods: {
        fromJSON: true,
        toJSON: true,
        encode: true,
        decode: true,
        fromPartial: true,
        toAmino: true,
        fromAmino: true,
        fromProto: true,
        toProto: true
      },
      typingsFormat: {
        customTypes: {
          useCosmosSDKDec: true
        },
        num64: 'bigint',
        useDeepPartial: true,
        useExact: false,
        timestamp: 'date',
        duration: 'duration',
        autoFixUndefinedEnumDefault: true
      }
    },
    aminoEncoding: {
      enabled: true,
      omitEmptyTags: ['omitempty', 'dont_omitempty'],
      customTypes: {
        useCosmosSDKDec: false
      },
      exceptions: {
        ...AMINO_MAP
      },
    },
    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true,
      //addGetTxRpc: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      // type: 'grpc-gateway',
      enabled: true,
      camelCase: true,
      useConnectComet: true
    },
  }
};


telescope(options)
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
