import React from 'react';

import BaseButton from '../atoms/baseButton';

const FloorsButton = () => {
    return (
        <BaseButton
            iconSrc={require('../images/floors_icon.png')}
            style={{ backgroundColor: '#6C0503' }}
        />
    );
};

export default FloorsButton;
