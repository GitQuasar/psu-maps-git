import { graphData } from '../assets/graphData';
import { NodeId, GraphData } from '../types/graphTypes';

// =====================
// GRAPH IMPLEMENTATION
// =====================

export class Graph {
    // Map<SourceNodeID, Map<TargetNodeID, EdgeWeight>>
    private adjacencyList: Map<NodeId, Map<NodeId, number>>;

    constructor(graph: GraphData) {
        this.adjacencyList = new Map<NodeId, Map<NodeId, number>>();
        // Populate with nodes
        graph.nodes.forEach((node) => this.addNode(node.id));
        // Populate with edges (bidirectional)
        graph.edges.forEach((edge) => {
            this.addEdge(edge.from, edge.to, edge.weight);
        });
    }

    /**
     * Adds a node to the graph with empty connections.
     */
    addNode(id: NodeId) {
        this.adjacencyList.set(id, new Map<NodeId, 0>());
    }

    /**
     * Creates a bidirectional edge between nodes.
     * @param fromId Source node ID
     * @param toId Target node ID
     * @param weight Traversal cost (defaults to 1)
     */
    addEdge(fromId: NodeId, toId: NodeId, weight: number = 1) {
        const fromNode = this.adjacencyList.get(fromId);
        const toNode = this.adjacencyList.get(toId);
        if (fromNode && toNode) {
            fromNode.set(toId, weight);
            toNode.set(fromId, weight);
        }
    }

    /**
     * Retrieves all neighbors of a node.
     */
    getNeighbors(id: NodeId) {
        return this.adjacencyList.get(id);
    }

    // Helper method.
    getAdgacencyList() {
        return this.adjacencyList;
    }

    // Retrieves a node by its ID.
    getNode(id: NodeId) {
        return graphData.nodes.find((node) => node.id === id);
    }
}

export const graph = new Graph(graphData);
