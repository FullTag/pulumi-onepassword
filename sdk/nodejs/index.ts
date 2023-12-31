// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { GetOnepasswordItemArgs, GetOnepasswordItemResult, GetOnepasswordItemOutputArgs } from "./getOnepasswordItem";
export const getOnepasswordItem: typeof import("./getOnepasswordItem").getOnepasswordItem = null as any;
export const getOnepasswordItemOutput: typeof import("./getOnepasswordItem").getOnepasswordItemOutput = null as any;
utilities.lazyLoad(exports, ["getOnepasswordItem","getOnepasswordItemOutput"], () => require("./getOnepasswordItem"));

export { GetOnepasswordVaultArgs, GetOnepasswordVaultResult, GetOnepasswordVaultOutputArgs } from "./getOnepasswordVault";
export const getOnepasswordVault: typeof import("./getOnepasswordVault").getOnepasswordVault = null as any;
export const getOnepasswordVaultOutput: typeof import("./getOnepasswordVault").getOnepasswordVaultOutput = null as any;
utilities.lazyLoad(exports, ["getOnepasswordVault","getOnepasswordVaultOutput"], () => require("./getOnepasswordVault"));

export { OnepasswordItemArgs, OnepasswordItemState } from "./onepasswordItem";
export type OnepasswordItem = import("./onepasswordItem").OnepasswordItem;
export const OnepasswordItem: typeof import("./onepasswordItem").OnepasswordItem = null as any;
utilities.lazyLoad(exports, ["OnepasswordItem"], () => require("./onepasswordItem"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "onepassword:index/onepasswordItem:OnepasswordItem":
                return new OnepasswordItem(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("onepassword", "index/onepasswordItem", _module)
pulumi.runtime.registerResourcePackage("onepassword", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:onepassword") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
