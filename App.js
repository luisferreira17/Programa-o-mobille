import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

export default function App() {
  const listaDeInformacoes = [
    {
      id: '1',
      titulo: 'Informação 1',
      descricao: 'Esta é a descrição da primeira informação.',
      imagens: [require('./assets/imagem1.png')],
    },
    {
      id: '2',
      titulo: 'Informação 2',
      descricao: 'Detalhes sobre a segunda informação.',
      imagens: [require('./assets/imagem2.png')],
    },
    {
      id: '3',
      titulo: 'Informação 3',
      descricao: 'Mais detalhes sobre este item.',
      imagens: [require('./assets/imagem3.png'), require('./assets/imagem3_extra.png')], // Exemplo com duas imagens
    },
    {
      id: '4',
      titulo: 'Informação 4',
      descricao: 'A quarta informação da lista.',
      imagens: [require('assets/images/fiat-argo-drive-2021-prata-visto-de-frente.webp')],
    },
    {
      id: '5',
      titulo: 'Informação 5',
      descricao: 'A última informação obrigatória.',
      imagens: [require('assets/images/volkswagen_gol_5-door_95.jpg')],
    },
    // Você pode adicionar mais itens se desejar
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitulo}>{item.titulo}</Text>
      <ScrollView horizontal style={styles.imagensContainer}>
        {item.imagens.map((imagem, index) => (
          <Image key={index} source={imagem} style={styles.itemImagem} />
        ))}
      </ScrollView>
      <Text style={styles.itemDescricao}>{item.descricao}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloPrincipal}>Lista de Informações</Text>
      <FlatList
        data={listaDeInformacoes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Adapte a sua temática
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    // Estilize a fonte conforme sua temática
  },
  itemContainer: {
    backgroundColor: '#fff', // Adapte a sua temática
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd', // Adapte a sua temática
  },
  itemTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    // Estilize a fonte conforme sua temática
  },
  imagensContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemImagem: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 4,
    marginRight: 10,
  },
  itemDescricao: {
    fontSize: 16,
    color: '#555', // Adapte a sua temática
    // Estilize a fonte conforme sua temática
  },
});