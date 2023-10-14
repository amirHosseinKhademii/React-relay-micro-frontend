import { ReturnTypeFunc } from "@nestjs/graphql";
import { MetadataStorage } from "../meta/metadata-storage";
import { InputArgOptions } from "../types/relay.types";

export function InputArg(
  typeFunc: ReturnTypeFunc,
  options?: InputArgOptions
): (target: Object, key: string | symbol, paramIndex: number) => void {
  return (target: Object, key: string | symbol, paramIndex: number) => {
    MetadataStorage.addMethodMetadata({
      ...options,
      typeFunc,
      target,
      key,
      paramIndex,
    });
  };
}
