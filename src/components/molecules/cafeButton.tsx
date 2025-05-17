import React from 'react';

import BaseButton from '../atoms/baseButton';

interface CafeButtonProps {
    onPress?: () => void;
}

const CafeButton = (props: CafeButtonProps) => {
    return <BaseButton iconSrc={require('../images/cafe_icon.png')} onPress={props.onPress} />;
};

export default CafeButton;
