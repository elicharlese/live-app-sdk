import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export interface PolkadotTransaction extends TransactionCommon {
  family: FAMILIES.POLKADOT;
  mode: string;
  fee?: BigNumber;
  era?: number;
}

export interface RawPolkadotTransaction extends RawTransactionCommon {
  family: FAMILIES.POLKADOT;
  mode: string;
  fee?: string;
  era?: number;
}
