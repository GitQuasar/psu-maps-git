import React from 'react';

import BaseButton from '../atoms/baseButton';

interface closeButtonProps {
    onPress?: () => void;
}

const CloseButton = (props: closeButtonProps) => {
    return (
        <BaseButton iconSrc={require('../../assets/png/close_icon.png')} onPress={props.onPress} />
    );
};

export default CloseButton;
