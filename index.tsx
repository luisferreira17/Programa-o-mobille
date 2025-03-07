import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

interface Carro {
  id: number;
  nome: string;
  preco: string;
  ano: number;
  imagem: string;
}

const carros: Carro[] = [
  {
    id: 1,
    nome: 'Chevrolet Onix',
    preco: 'R$ 45.000',
    ano: 2020,
    imagem: 'MeuApp4/assets/images/onix-plus-624x312.avif', // Exemplo de imagem real
  },
  {
    id: 2,
    nome: 'Volkswagen Gol',
    preco: 'R$ 49.000',
    ano: 2021,
    imagem: 'MeuApp4/assets/images/volkswagen_gol_5-door_95.jpg', // Exemplo de imagem real
  },
  {
    id: 3,
    nome: 'Fiat Argo',
    preco: 'R$ 55.000',
    ano: 2022,
    imagem: 'MeuApp4/assets/images/fiat-argo-drive-2021-prata-visto-de-frente.webp', // Exemplo de imagem real
  },
];

const App: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lista de Carros</Text>
      {carros.map((carro) => (
        <Card key={carro.id} style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={{ uri: carro.imagem }} style={styles.carImage} />
            <View style={styles.carDetails}>
              <Text style={styles.carName}>{carro.nome}</Text>
              <Text style={styles.carPrice}>Preço: {carro.preco}</Text>
              <Text style={styles.carYear}>Ano: {carro.ano}</Text>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    padding: 10,
  },
  cardContent: {
    alignItems: 'center', // Centraliza a imagem e a descrição
    paddingVertical: 15,
  },
  carImage: {
    width: 150, // Tamanho maior para a imagem
    height: 150,
    borderRadius: 10,
    marginBottom: 15, // Espaçamento abaixo da imagem
    resizeMode: 'cover',
  },
  carDetails: {
    alignItems: 'center', // Centraliza o texto
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, // Espaço entre o nome e o preço
  },
  carPrice: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5, // Espaço entre o preço e o ano
  },
  carYear: {
    fontSize: 14,
    color: '#888',
  },
});

export default App;
