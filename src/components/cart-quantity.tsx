import React, { Dispatch, SetStateAction, useCallback } from 'react';
import styled from '@emotion/native';

import { Typography } from './typography';


const underlayColorBlack = '#EDEBF2'
const purpleColor = '#522973'

export const CartQuantity: React.FC<{
  quantity: any;
  update: Dispatch<SetStateAction<number>>;
}> = ({ quantity, update }) => {

  const updateQuantity = useCallback(() => {   // useCallback used to prevent re-initiallization of the function
    update(quantity + 1);
  }, [quantity])

  const decreaseQuantity = useCallback(() => {
    quantity > 1 && update(quantity - 1);
  }, [quantity])

  return (
    <QuantityContainer>
      <React.Fragment>
        <QuantityButton
          onPress={updateQuantity}
          underlayColor={underlayColorBlack}>
          <Typography color={purpleColor}>+</Typography>
        </QuantityButton>

        <Typography style={{ textAlign: 'center', flex: 1 }}>
          {quantity}
        </Typography>

        <QuantityButton onPress={decreaseQuantity} underlayColor={underlayColorBlack}>
          <Typography color={purpleColor}>-</Typography>
        </QuantityButton>
      </React.Fragment>
    </QuantityContainer>
  );
};



const QuantityButton = styled.TouchableHighlight({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  width: 40,
  height: 40,
});

const QuantityContainer = styled.TouchableHighlight({
  borderWidth: 1,
  borderColor: '#EDEBF2',
  marginRight: 10,
  flex: 4,
  paddingVertical: 0,
  paddingHorizontal: 5,
  borderRadius: 1000,
  maxHeight: 51,
  alignItems: 'center',
  flexDirection: 'row',
});
