// const Main = () => {
//     return (
//         <main>
//             <center>
//             <h2>Envíanos tu trabajo, nosotros lo corregimos</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                 Sed a felis non sem elementum tempor in at urna. 
//                 Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis.  
//             </p>
//             </center>
//         </main>
//     );
// }



// export default Main;

import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'APRENDIZAJE INTEGRAL',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'EXPERTOS EN LA MATERIA',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'PUBLICACIONES INMEDIATAS',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    textAlign:'center',
  },
});

export default App;