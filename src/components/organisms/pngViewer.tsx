import { Canvas, Image, useImage, Circle, Group } from '@shopify/react-native-skia';
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
                points.push({ x: node.cx * p.dimensions.width, y: node.cy * p.dimensions.height });
            }
        });
    }
    let image = getFloor(floorId);

    // Calculate bounding box of points
    // const xValues = points.map((point) => point.x);
    // const yValues = points.map((point) => point.y);
    // const minX = Math.min(...xValues);
    // const maxX = Math.max(...xValues);
    // const minY = Math.min(...yValues);
    // const maxY = Math.max(...yValues);

    // Calculate required scale to fit the points' width into the canvas width
    // Handle single-point case (avoid division by zero)
    // const minWidth = 5; // Minimum width to prevent extreme zoom
    // const minHeight = 5; // Minimum height to prevent extreme zoom
    // const pointsWidth = Math.max(maxX - minX, minWidth);
    // const pointsHeight = Math.max(maxY - minY, minHeight);
    // console.log(pointsWidth, pointsHeight);

    // const scaleX = p.dimensions.width / pointsWidth;
    // const scaleY = p.dimensions.height / pointsHeight;
    // const scale = Math.min(scaleX, scaleY); // Use the smaller scale to ensure everything fits

    // const finalScale = p.nodeIdArray.length === 1 ? 2 : scale;

    // console.log(scale, points);

    // Center the points (or single point)
    // const centerX = (minX + maxX) / 2;
    // const centerY = (minY + maxY) / 2;
    // const offsetX = p.dimensions.width / 2 - centerX * finalScale;
    // const offsetY = p.dimensions.height / 2 - centerY * finalScale;

    // most left value of X values of points
    // Math.min(...points.map((point) => point.x))
    // most right value of X values of points
    // Math.max(...points.map((point) => point.y))
    // const startX = 0;
    // const startY = 0;
    // const imageWidth = p.dimensions.width;
    // const imageHeight = p.dimensions.height;
    return (
        <Canvas style={{ flex: 1 }}>
            <Group
            // transform={[
            //     { scale: finalScale },
            //     { translateX: offsetX },
            //     { translateY: offsetY },
            // ]}
            >
                <Image
                    image={image}
                    fit="contain"
                    x={0}
                    y={0}
                    width={p.dimensions.width}
                    height={p.dimensions.height}
                />
                {points.map((point, index) => (
                    <Circle key={index} r={3} cx={point.x} cy={point.y} color="red" />
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
    } else {
        image = useImage(require(`../../assets/floors/f1.png`));
    }
    return image;
}
