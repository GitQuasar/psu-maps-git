import React from 'react';

import BaseButton from '../atoms/baseButton';

interface WcButtonProps {
    onPress?: () => void;
}

const WcButton = (props: WcButtonProps) => {
    return <BaseButton iconSrc={require('../images/wc_icon.png')} onPress={props.onPress} />;
};

export default WcButton;
