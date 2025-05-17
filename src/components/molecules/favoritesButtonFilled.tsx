import React from 'react';

import BaseButton from '../atoms/baseButton';

interface FavoriteButtonProps {
    onPress: () => void;
}

const FavoritesButtonFilled = (props: FavoriteButtonProps) => {
    return (
        <BaseButton
            iconSrc={require('../images/favorites_icon_filled.png')}
            onPress={props.onPress}
        />
    );
};

export default FavoritesButtonFilled;
