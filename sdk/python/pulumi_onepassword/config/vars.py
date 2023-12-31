# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Callable, Mapping, Optional, Sequence, Union, overload
from .. import _utilities

import types

__config__ = pulumi.Config('onepassword')


class _ExportableConfig(types.ModuleType):
    @property
    def token(self) -> Optional[str]:
        """
        A valid token for your 1Password Connect API. Can also be sourced from OP_CONNECT_TOKEN.
        """
        return __config__.get('token')

    @property
    def url(self) -> Optional[str]:
        """
        The HTTP(S) URL where your 1Password Connect API can be found. Must be provided through the the OP_CONNECT_HOST
        environment variable if this attribute is not set.
        """
        return __config__.get('url')

