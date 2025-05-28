import { graphData } from '../assets/graphData';
import { NodeId, NodeData } from '../types/graphTypes';
import { Graph, graph } from './graph';

/** Extended node structure for A* algorithm. */

export interface Node {
    id: NodeId;
    cx: number;
    cy: number;
    floor: number;

    // A* specific properties
    gCost: number; // Accumulated cost from start node (sum of edges)
    hCost: number; // Heuristic estimate to goal from current node.
    fCost: number; // Total: f(n) = gCost + hCost. We use this to prioritize nodes in the priority queue.
}

// =============================
// A* PATHFINDER IMPLEMENTATION
// =============================

// Optimization opportunities:
// - Replace openSet array with a priority queue (better than sorting every iteration)
// - Consider hashing for faster closedSet checks in very large graphs

export class AStar {
    private graph: Graph; // Processed graph structure
    private nodeMap: Map<NodeId, NodeData>;

    constructor() {
        this.graph = graph;
        this.nodeMap = new Map(graphData.nodes.map((node) => [node.id, node]));
    }

    /**
     * HEURISTIC FUNCTION: Euclidean distance between source and target nodes
     * (with floor penalty)
     * @param n1 Source node
     * @param n2 Target node
     * @param penalty Added traversal cost (defaults to 0)
     * @returns Estimated cost combining:
     *          - 2D Euclidean distance (XY plane)
     *          - Absolute floor difference (Z axis)
     */
    heuristicEuclidean(n1: Node, n2: Node, penalty: number = 0): number {
        return (
            Math.sqrt(Math.pow(n1.cx - n2.cx, 2) + Math.pow(n1.cy - n2.cy, 2)) +
            Math.abs(n1.floor - n2.floor) +
            penalty
        );
    }

    /**
     * Finds the shortest path between two nodes using A*-algorithm.
     * @param fromId Source node ID
     * @param toId Target node ID
     * @returns Array of node IDs representing the path, or null if no path exists
     */
    findPath(fromId: NodeId, toId: NodeId) {
        // Open set: Nodes to be evaluated (sorted by fCost)
        const openSet: Node[] = [];
        // Closed set: Already evaluated nodes
        const closedSet: Set<NodeId> = new Set();
        // Path reconstruction map
        const cameFrom: Map<NodeId, NodeId> = new Map();

        const from = this.nodeMap.get(fromId);
        const to = this.nodeMap.get(toId);

        // Early exit for invalid or same inputs
        if (!from || !to) {
            return null;
        }
        if (from === to) {
            return [];
        }

        const startNode: Node = {
            id: from.id,
            cx: from.cx,
            cy: from.cy,
            floor: from.floor,
            gCost: 0, // Cost from start to itself is 0
            hCost: this.heuristicEuclidean(
                { ...from, gCost: 0, hCost: 0, fCost: 0 },
                { ...to, gCost: 0, hCost: 0, fCost: 0 }
            ),
            // fCost= gCost + hCost
            fCost: this.heuristicEuclidean(
                { ...from, gCost: 0, hCost: 0, fCost: 0 },
                { ...to, gCost: 0, hCost: 0, fCost: 0 }
            ),
        };

        const goalNode: Node = {
            id: to.id,
            cx: to.cx,
            cy: to.cy,
            floor: to.floor,
            gCost: 0,
            hCost: 0,
            fCost: 0,
        };

        openSet.push(startNode);

        // Main A* loop
        while (openSet.length > 0) {
            // Sort open set by fCost (priority queue would be more efficient)
            openSet.sort((a, b) => a.fCost - b.fCost);
            // Get node with lowest fCost
            const current = openSet.shift()!;

            // Path found - reconstruct and return
            if (current.id === goalNode.id) {
                const path: NodeId[] = [];
                let currentId: NodeId = current.id;
                // Backtrack from goal to start
                while (currentId !== startNode.id) {
                    path.unshift(currentId);
                    currentId = cameFrom.get(currentId)!;
                }
                path.unshift(startNode.id);
                return path;
            }
            // Mark current node as evaluated
            closedSet.add(current.id);

            // Process all neighbors
            const neighbors = this.graph.getNeighbors(current.id);
            if (neighbors) {
                for (const [neighborId, weight] of neighbors) {
                    if (closedSet.has(neighborId)) {
                        continue;
                    }

                    const neighborData = this.nodeMap.get(neighborId)!;
                    const neighborNode: Node = {
                        id: neighborId,
                        cx: neighborData.cx, // Actual node coordinates from nodeMap
                        cy: neighborData.cy, // Actual node coordinates from nodeMap
                        floor: neighborData.floor,
                        gCost: 0,
                        hCost: 0,
                        fCost: 0,
                    };

                    // Tentative cost from start to current neighbor
                    const tentativeGCost = current.gCost + weight;

                    // Check if this path to neighbor is better than previous ones
                    if (
                        !openSet.some((node) => node.id === neighborId) || // New discovery
                        tentativeGCost < neighborNode.gCost // Better path
                    ) {
                        // Update path tracking
                        cameFrom.set(neighborId, current.id);

                        // Update costs
                        neighborNode.gCost = tentativeGCost;
                        neighborNode.hCost = this.heuristicEuclidean(neighborNode, goalNode);
                        neighborNode.fCost = neighborNode.gCost + neighborNode.hCost;

                        // Add to open set if not already present
                        if (!openSet.some((node) => node.id === neighborId)) {
                            openSet.push(neighborNode);
                        }
                    }
                }
            }
        }

        // No path found
        return null;
    }

    splitByFloorChanges(nodeIds: string[]): NodeId[][] {
        if (nodeIds.length === 0) return [];

        const result: string[][] = [];
        let currentGroup: string[] = [nodeIds[0]];
        let currentFloor = graph.getNode(nodeIds[0])?.floor;

        for (let i = 1; i < nodeIds.length; i++) {
            const nodeId = nodeIds[i];
            const node = graph.getNode(nodeId);

            if (node && node.floor === currentFloor) {
                // Same floor - add to current group
                currentGroup.push(nodeId);
            } else {
                // Floor changed - start new group
                result.push(currentGroup);
                currentGroup = [nodeId];
                currentFloor = node?.floor;
            }
        }
        // Add the last group
        if (currentGroup.length > 0) {
            result.push(currentGroup);
        }

        return result;
    }
}
