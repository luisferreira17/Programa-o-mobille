import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

export default function App() {
  const listaDeInformacoes = [
    {
      id: '1',
      titulo: 'Gol volkswagen',
      descricao: 'Gol volkswagen 2022',
      imagens: [require('assets/images/volkswagen_gol_5-door_95.jpg')],
    },
    {
      id: '2',
      titulo: 'Fiat Argo',
      descricao: 'Fiat argo vermelho 2023',
      imagens: [require('assets/images/fiat-argo-drive-2021-prata-visto-de-frente.webp')],
    },
    {
      id: '3',
      titulo: 'Onix ',
      descricao: 'Onix 2024',
      imagens: [require('./assets/https://production.autoforce.com/uploads/version/profile_image/9199/model_middle_webp_comprar-1-0-mt-pacote-rgd_9e612847ed.png.webp')], // Exemplo com duas imagens
    },
    {
      id: '4',
      titulo: 'Golf',
      descricao: 'Golf GTI 2024',
      imagens: [require('assets/data:image/jpeg;base64,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')],
    },
    {
      id: '5',
      titulo: 'Polo 2024',
      descricao: 'Polo 2024',
      imagens: [require('assets/data:image/jpeg;base64,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')],
    },
    {
      id: '6',
      titulo: 'Bmw',
      descricao: 'BMW X6 2024',
      imagens: [required('assents/data:image/jpeg;base64,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
      },
  
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
    backgroundColor: '#f0f0f0', 
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
   
  },
  itemContainer: {
    backgroundColor: '#fff', 
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',  
  },
  itemTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    
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
    color: '#555', 
   
  },
});
