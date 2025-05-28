import { Canvas, Image, useImage, Circle, Group, Line } from '@shopify/react-native-skia';
import { NodeId } from '../../types/graphTypes';
import { graph } from '../../utils/graph';

interface ImageProps {
    dimensions: {
        width: number;
        height: number;
    };
    nodeIdArray: NodeId[];
}

const ImageDemo = (p: ImageProps) => {
    const points: { x: number; y: number }[] = [];
    const floorId: number = graph.getNode(p.nodeIdArray[0])!.floor;

    if (p.nodeIdArray) {
        p.nodeIdArray.forEach((nodeId) => {
            const node = graph.getNode(nodeId);
            if (node) {
                points.push({
                    x: node.cx * p.dimensions.width,
                    y: node.cy * p.dimensions.height,
                });
            }
        });
    }

    let image = getFloor(floorId);

    // Calculate bounding box of points
    const xValues = points.map((point) => point.x);
    const yValues = points.map((point) => point.y);

    const minX = Math.min(...xValues) - 1.25;
    const minY = Math.min(...yValues) - 1.25;
    const maxX = Math.max(...xValues) + 1.25;
    const maxY = Math.max(...yValues) + 1.25;

    // Handle single point case
    const bboxWidth = maxX - minX || p.dimensions.width * 0.1; // Default to 10% of width if 0
    const bboxHeight = maxY - minY || p.dimensions.height * 0.1; // Default to 10% of height if 0

    // Calculate scale factors with minimum limits
    const minScale = 0.1; // Minimum zoom level (10%)
    const scaleX = bboxWidth ? p.dimensions.width / bboxWidth : minScale;
    const scaleY = bboxHeight ? p.dimensions.height / bboxHeight : minScale;

    // Use the smaller scale to ensure everything fits, with minimum limit
    const scale = Math.max(Math.min(scaleX, scaleY) * 0.9, minScale);

    // Calculate the center of the bounding box, or use center of canvas for single point
    const centerX = points.length > 1 ? (minX + maxX) / 2 : points[0].x;
    const centerY = points.length > 1 ? (minY + maxY) / 2 : points[0].y;

    // Calculate the offset needed to center the bounding box
    const offsetX = p.dimensions.width / 2 - centerX * scale;
    const offsetY = p.dimensions.height / 2 - centerY * scale;

    return (
        <Canvas style={{ flex: 1 }}>
            <Group transform={[{ translateX: offsetX }, { translateY: offsetY }, { scale }]}>
                <Image
                    image={image}
                    x={0}
                    y={0}
                    width={p.dimensions.width}
                    height={p.dimensions.height}
                />

                {/* draw lines between connected points too */}
                {points.map((point, index) => {
                    if (index < points.length - 1) {
                        return (
                            <Line
                                key={index}
                                p1={point}
                                p2={points[index + 1]}
                                strokeWidth={2 / scale}
                                color="blue"
                            />
                        );
                    }
                    return null;
                })}
                {points.map((point, index) => (
                    <Circle key={index} r={4 / scale} cx={point.x} cy={point.y} color="green" />
                ))}
            </Group>
        </Canvas>
    );
};

export default ImageDemo;

function getFloor(floorId: number) {
    let image;
    if (floorId === 1) {
        image = useImage(require(`../../assets/floors/f1.png`));
    } else if (floorId === 2) {
        image = useImage(require(`../../assets/floors/f2.png`));
    } else if (floorId === 3) {
        image = useImage(require(`../../assets/floors/f3.png`));
    } else if (floorId === 4) {
        image = useImage(require(`../../assets/floors/f4.png`));
    } else if (floorId === 5) {
        image = useImage(require(`../../assets/floors/f5.png`));
    } else if (floorId === 6) {
        image = useImage(require(`../../assets/floors/f6.png`));
    } else if (floorId === 7) {
        image = useImage(require(`../../assets/floors/f7.png`));
    } else {
        image = useImage(require(`../../assets/floors/f8.png`));
    }
    return image;
}
