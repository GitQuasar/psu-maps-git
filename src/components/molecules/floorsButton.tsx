import React from 'react';

import BaseButton from '../atoms/baseButton';

interface FloorsButtonProps {
    onPress?: () => void;
}

const FloorsButton = (props: FloorsButtonProps) => {
    return (
        <BaseButton
            iconSrc={require('../../assets/png/floors_icon.png')}
            style={{ backgroundColor: '#6C0503' }}
            onPress={props.onPress}
        />
    );
};

export default FloorsButton;
