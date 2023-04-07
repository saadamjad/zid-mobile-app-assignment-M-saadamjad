import styled from '@emotion/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container } from './container';
import { CartQuantity } from './cart-quantity';
import { Typography } from './typography';
import { Alert } from 'react-native';
import { useCallback } from 'react';


const colorWhite = 'white';

const buyNowButton = () => {
  Alert.alert('', 'WiP button')
}


export const Cart: React.FC<any> = ({ quantity, update }) => {
  const insets = useSafeAreaInsets();

  const renderBuyButton = useCallback(() => {
    return <BuyButton
      onPress={buyNowButton}
      underlayColor={colorWhite}>
      <Typography color={colorWhite}>Buy Now</Typography>
    </BuyButton>
  }, [buyNowButton])

  const renderQuantity = useCallback(() => {
    return <CartQuantity quantity={quantity} update={update} />

  }, [quantity, update])

  return (
    <CartContainer style={{ paddingBottom: Math.max(insets.bottom, 20) }}>
      {renderBuyButton()}
      {renderQuantity()}
    </CartContainer>
  );
};

const CartContainer = styled(Container)({
  backgroundColor: 'white',
  flexDirection: 'row-reverse',
  borderTopLeftRadius: 16,
  paddingTop: 16,
  borderTopRightRadius: 16,
});

const BuyButton = styled.TouchableHighlight({
  backgroundColor: '#73548F',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 1000,
  maxHeight: 51,
  flex: 2,
  alignItems: 'center',
});
