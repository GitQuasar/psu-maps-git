import React from 'react';

import BaseButton from '../atoms/baseButton';

interface RouteButtonProps {
    onPress: () => void;
}

const RouteButton = (props: RouteButtonProps) => {
    return (
        <BaseButton iconSrc={require('../../assets/png/route_icon.png')} onPress={props.onPress} />
    );
};

export default RouteButton;
