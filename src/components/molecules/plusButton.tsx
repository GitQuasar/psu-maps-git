import React from 'react';

import BaseButton from '../atoms/baseButton';

const PlusButton = () => {
    return (
        <BaseButton
            iconSrc={require('../../assets/png/plus_icon.png')}
            style={{ backgroundColor: '#6C0503' }}
        />
    );
};

export default PlusButton;
