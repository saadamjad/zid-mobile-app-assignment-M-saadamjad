import React, {useLayoutEffect, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from '@emotion/native';

import { faker } from '@faker-js/faker';
import { RootStackParamList } from './stack';
import { getImage } from './utils/image';
import { Container } from './components/container';
import { Typography } from './components/typography';
import { DetailsLine } from './components/details-line';
import { DetailsTitle } from './components/details-title';
import { Cart } from './components/cart';
import { IListItem } from './screens/list';

const SPEC_1: string = faker.color.human();
const SPEC_2: string = faker.vehicle.vin();
const SPEC_3: string = faker.commerce.product();
const SPEC_4: number = faker.datatype.float({ min: 0.1, max: 10, precision: 0.1 });


const renderImage = ({ id }: any) => {
  return <Container>
    <ItemImage
      source={{ uri: getImage(900, id) }}
      size={Dimensions.get('screen').width * 0.9}
    />
  </Container>
}

const renderItemPrice = ({ price, salePrice, name, description, brand }: IListItem) => {
  return <>
    <Container>
      <Typography fontSize={18} weight="semiBold">
        {name}
      </Typography>

      {salePrice ? (
        <Typography fontSize={18} color="red">
          <ItemDiscountedPrice>SAR {price}</ItemDiscountedPrice>
          {'  '}
          SAR {price}
        </Typography>
      ) : (
        <Typography fontSize={18}>SAR {price}</Typography>
      )}
    </Container>
    <Container>
      <Typography>{description}</Typography>
    </Container>

    <Container>
      <DetailsTitle>Details</DetailsTitle>
      <DetailsLine label="Brand">{brand}</DetailsLine>
      <DetailsLine label="Color">{SPEC_1}</DetailsLine>
      <DetailsLine label="SKU">{SPEC_2}</DetailsLine>

      <Typography weight="medium" />
      <Typography weight="medium">Specifications</Typography>
      <DetailsLine label="Type">{SPEC_3}</DetailsLine>
      <DetailsLine label="Weight">
        {SPEC_4} kg
      </DetailsLine>
    </Container>
  </>
}

const renderCartControls = (quantity: number, setQuantity: any) => {
  return <Cart quantity={quantity} update={setQuantity} />
}

export const Item = () => {
  const nav =
  useNavigation<
    NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
  >();
  
  useLayoutEffect(() => {
    nav.setOptions({
      title: params?.name,
    });
  }, []);
 

  const { params } = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

  const [quantity, setQuantity] = useState<number>(1);

  if (!params) {
    return <Typography>Loading ...</Typography>;
  }

 



  return (
    <React.Fragment>
      <ScrollView>

        {renderImage(params)}
        {renderItemPrice(params)}

      </ScrollView>

      {renderCartControls(quantity, setQuantity)}
    </React.Fragment>
  );
};


const ItemImage = styled.Image<{ size: number }>(props => ({
  width: props.size,
  height: props.size,
  marginVertical: 16,
  paddingHorizontal: '5%',
  borderRadius: 9,
}));

const ItemDiscountedPrice = styled(Typography)({
  textDecorationLine: 'line-through',
});

ItemDiscountedPrice.defaultProps = {
  fontSize: 18,
  color: 'black',
};
