import React from 'react';

import BaseButton from '../atoms/baseButton';

const SettingsButton = () => {
    return (
        <BaseButton
            iconSrc={require('../images/settings_icon.png')}
            style={{ backgroundColor: '#6C0503' }}
        />
    );
};

export default SettingsButton;
