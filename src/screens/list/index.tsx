import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ListData from '../../utils/fake-data';
import { ListItem } from './components/item';

//
//

export interface IListItem {
  id: any;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: String;
}

const ListScreen = () => {
  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: 0 }}>
        {ListData.map((item: IListItem) => <ListItem key={item.id} item={item} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;
