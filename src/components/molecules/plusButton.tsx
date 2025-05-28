import React from 'react';

import BaseButton from '../atoms/baseButton';

interface PlusButtonProps {
    onPress?: () => void;
}

const PlusButton = (props: PlusButtonProps) => {
    return (
        <BaseButton
            iconSrc={require('../../assets/png/plus_icon.png')}
            style={{ backgroundColor: '#6C0503' }}
            onPress={props.onPress}
        />
    );
};

export default PlusButton;
