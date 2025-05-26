import React from 'react';

import BaseButton from '../atoms/baseButton';

interface SettingsButtonProps {
    onPress?: () => void;
}

const SettingsButton = (props: SettingsButtonProps) => {
    return (
        <BaseButton
            iconSrc={require('../../assets/png/settings_icon.png')}
            style={{ backgroundColor: '#6C0503' }}
            onPress={props.onPress}
        />
    );
};

export default SettingsButton;
