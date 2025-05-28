import React from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';
import ImageDemo from '../organisms/pngViewer';
import { AStar } from '../../utils/aStar';
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';
import { graph } from '../../utils/graph';

const dimensions = {
    width: 350,
    height: 350 / (8500 / 5740),
};

type RoutePageParams = {
    startId: string;
    endId: string;
};

type RoutePageProps = {
    route: RouteProp<RootStackParamList, 'Route'>; // Используем RootStackParamList
};

const RoutePage = (props: RoutePageProps) => {
    const { startId, endId } = props.route.params;
    const aStar = new AStar();
    const path = aStar.findPath(startId, endId);
    let floorsPaths: string[][] | undefined = undefined;
    if (path === null) {
        return <Text>"Пути не найдено!"</Text>;
    }
    if (path.length === 0) {
        return <Text>"Уже на месте!"</Text>;
    }
    floorsPaths = aStar.splitByFloorChanges(path);
    return (
        <View style={styles.container}>
            {floorsPaths ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={floorsPaths}
                    renderItem={({ item }) => (
                        <>
                            <View style={styles.textContainer}>
                                <Text style={[styles.walkText]}>
                                    {floorsPaths &&
                                    floorsPaths.indexOf(item) === floorsPaths.length - 1
                                        ? `Этаж №${graph.getNode(item[0])?.floor}`
                                        : `Перейдите с этажа №${
                                              graph.getNode(item[0])?.floor
                                          } на этаж №${
                                              graph.getNode(
                                                  floorsPaths[floorsPaths.indexOf(item) + 1][0]
                                              )?.floor
                                          } через ${
                                              item.some((node) => node.includes('elevator'))
                                                  ? 'лифт'
                                                  : 'лестницу'
                                          }`}
                                </Text>
                            </View>
                            <View style={styles.image}>
                                <ImageDemo dimensions={dimensions} nodeIdArray={item} />
                            </View>
                        </>
                    )}
                />
            ) : (
                <Text style={{ color: 'white' }}>"Не найдено("</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#932D30',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 5,
    },
    image: {
        width: dimensions.width,
        height: dimensions.height,
        alignSelf: 'center',
        marginVertical: 5,
        backgroundColor: '#5f1e1e',
        borderColor: '#5f1e1e',
        borderRadius: 5,
        borderWidth: 2,
        padding: 4,
    },
    walkText: {
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        borderWidth: 4,
        borderColor: '#5f1e1e',
    },
});

export default RoutePage;
