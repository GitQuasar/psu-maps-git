import React from 'react';

import BaseButton from '../atoms/baseButton';

const RouteButton = () => {
    return <BaseButton iconSrc={require('../images/route_icon.png')} />;
};

// const styles = StyleSheet.create({
//     routeButton: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 44,
//         height: 44,
//         backgroundColor: '#D9D9D9',
//         borderTopLeftRadius: 25,
//         borderTopRightRadius: 25,
//         borderBottomLeftRadius: 25,
//         borderBottomRightRadius: 25,
//         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//     },
//     imageContainer: {
//         height: 30,
//         width: 30,
//         resizeMode: 'contain',
//     },
// });

export default RouteButton;
