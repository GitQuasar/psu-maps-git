// Import graph data containing nodes and edges

// ======================
// INTERFACE DEFINITIONS
// ======================

export interface NodeData {
    id: string;
    bio: string;
    cx: number;
    cy: number;
    b_id: number;
    r_id: string;
    floor: number;
}

export interface EdgeData {
    id: string;
    from: string;
    to: string;
    weight: number;
}

export interface GraphData {
    nodes: NodeData[];
    edges: EdgeData[];
}

// Alias for node identifiers.
export type NodeId = string;
