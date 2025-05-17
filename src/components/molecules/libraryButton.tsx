import React from 'react';

import BaseButton from '../atoms/baseButton';

interface LibraryButtonProps {
    onPress?: () => void;
}

const LibraryButton = (props: LibraryButtonProps) => {
    return <BaseButton iconSrc={require('../images/library_icon.png')} onPress={props.onPress} />;
};

export default LibraryButton;
