// @generated by protoc-gen-connect-es v0.8.4 with parameter "target=ts"
// @generated from file snapshots_service.proto (package qdrant, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateFullSnapshotRequest, CreateSnapshotRequest, CreateSnapshotResponse, DeleteFullSnapshotRequest, DeleteSnapshotRequest, DeleteSnapshotResponse, ListFullSnapshotsRequest, ListSnapshotsRequest, ListSnapshotsResponse } from "./snapshots_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service qdrant.Snapshots
 */
export const Snapshots = {
  typeName: "qdrant.Snapshots",
  methods: {
    /**
     *
     * Create collection snapshot
     *
     * @generated from rpc qdrant.Snapshots.Create
     */
    create: {
      name: "Create",
      I: CreateSnapshotRequest,
      O: CreateSnapshotResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * List collection snapshots
     *
     * @generated from rpc qdrant.Snapshots.List
     */
    list: {
      name: "List",
      I: ListSnapshotsRequest,
      O: ListSnapshotsResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * Delete collection snapshots
     *
     * @generated from rpc qdrant.Snapshots.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteSnapshotRequest,
      O: DeleteSnapshotResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * Create full storage snapshot
     *
     * @generated from rpc qdrant.Snapshots.CreateFull
     */
    createFull: {
      name: "CreateFull",
      I: CreateFullSnapshotRequest,
      O: CreateSnapshotResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * List full storage snapshots
     *
     * @generated from rpc qdrant.Snapshots.ListFull
     */
    listFull: {
      name: "ListFull",
      I: ListFullSnapshotsRequest,
      O: ListSnapshotsResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * List full storage snapshots
     *
     * @generated from rpc qdrant.Snapshots.DeleteFull
     */
    deleteFull: {
      name: "DeleteFull",
      I: DeleteFullSnapshotRequest,
      O: DeleteSnapshotResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

