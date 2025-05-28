import React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';
import ImageDemo from '../organisms/pngViewer';
import { AStar } from '../../utils/aStar';
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';

const dimensions = {
    width: 350,
    height: 350 / (8192 / 5532),
};

type RoutePageParams = {
    startId: string;
    endId: string;
};

type RoutePageProps = {
    route: RouteProp<RootStackParamList, 'Route'>; // Используем RootStackParamList
};

const routePage = (props: RoutePageProps) => {
    const { startId, endId } = props.route.params;

    const aStar = new AStar();
    const path = aStar.findPath(startId, endId);
    let floorsPaths: string[][] | undefined = undefined;
    if (path) {
        floorsPaths = aStar.splitByFloorChanges(path);
        console.log(floorsPaths);
    }
    console.log(path);
    return (
        <View style={styles.container}>
            {floorsPaths && (
                <FlatList
                    data={floorsPaths}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <ImageDemo dimensions={dimensions} nodeIdArray={item} />
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    item: {
        width: dimensions.width,
        height: dimensions.height,
        marginVertical: 10,
        backgroundColor: 'green',
    },
});

export default routePage;
