import React from 'react';

import BaseButton from '../atoms/baseButton';

interface FavoriteButtonProps {
    onPress: () => void;
}

const FavoritesButton = (props: FavoriteButtonProps) => {
    return <BaseButton iconSrc={require('../images/favorites_icon.png')} onPress={props.onPress} />;
};

export default FavoritesButton;
