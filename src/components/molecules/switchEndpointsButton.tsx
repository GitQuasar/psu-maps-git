import React from 'react';

import BaseButton from '../atoms/baseButton';

interface SwitchEndpointsButtonProps {
    onPress: () => void;
}

const SwitchEndpointsButton = (props: SwitchEndpointsButtonProps) => {
    return (
        <BaseButton
            iconSrc={require('../../assets/png/switch_endpoints_icon.png')}
            onPress={props.onPress}
        />
    );
};

export default SwitchEndpointsButton;
