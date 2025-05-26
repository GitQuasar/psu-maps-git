import React from 'react';

import BaseButton from '../atoms/baseButton';

const MinusButton = () => {
    return (
        <BaseButton
            iconSrc={require('../../assets/png/minus_icon.png')}
            style={{ backgroundColor: '#6C0503' }}
        />
    );
};

export default MinusButton;
