import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListData from '../../utils/fake-data';
import { ListItem } from './components/item';

export interface IListItem {
  id: string | any;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: String;
}
let initialValue = 0
let lastIndexValue = 20

const ListScreen = () => {
  const copyListItems = [...ListData]
  const [listItems, setListItems] = useState<any>([...copyListItems.slice(0, 20)]);
  
  const handlePagination = useCallback(() => {
    if (listItems?.length < ListData.length) {
      initialValue = lastIndexValue
      lastIndexValue = lastIndexValue + 20
      setListItems([...listItems, ...copyListItems.slice(initialValue, lastIndexValue)])
    }
  }, [listItems])

  const renderItemComponent = () => {

    return <>
      <FlatList data={listItems}
        onEndReachedThreshold={1}
        onEndReached={handlePagination}
        renderItem={({ item }) => (
          <ListItem key={item?.id} item={item} />
        )} />
    </>
  }


  return (
    <SafeAreaView edges={['bottom']}>
      {renderItemComponent()}
    </SafeAreaView>
  );
};

export default ListScreen;
