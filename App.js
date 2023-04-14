import React from 'react';
import { StyleSheet, View } from 'react-native';
import GameCard from './GameCard';

const items = [
  {
    id: 1,
    name: 'Cimitarra de Ferro',
    description: 'Poder de ataque +15, defesa +5',
    image: require('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.runescape.wiki%2Fw%2FCimitarra_de_ferro&psig=AOvVaw116YTBbyI6t7n-h2gSN41P&ust=1681566253793000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCIih6NvAqf4CFQAAAAAdAAAAABAD'),
  },
  {
    id: 2,
    name: 'Capacete de Madeira',
    description: 'Poder de defesa +20',
    image: require('https://www.google.com/url?sa=i&url=https%3A%2F%2Fmateriaincognita.com.br%2Fa-incrivel-moto-de-madeira-no-estilo-rat-bike-que-funciona%2F&psig=AOvVaw21o6TNEfTg6kKTInKNF6P5&ust=1681566283297000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJDrze7Aqf4CFQAAAAAdAAAAABAV'),
  },
  {
    id: 3,
    name: 'Machadinha de Ouro',
    description: 'Poder de defesa +10, resistência a fogo +5%',
    image: require('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.dreamstime.com%2Ffotografia-de-stock-machado-do-ouro-cont%25C3%25ADnuo-image308352&psig=AOvVaw3tOB97IzyhKzH2ilhyJFDu&ust=1681566313480000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJi_ofjAqf4CFQAAAAAdAAAAABAD'),
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <GameCard key={item.id} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
});

export default App;