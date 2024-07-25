import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, Card, Button, Text } from 'react-native-paper';
import fetchTopHeadlines from '@/apis/news';
import { Article } from '@/constants/types';
import { timeAgo } from '@/constants/functions';

export default function HomeScreen() {
  const { data, isLoading } = useQuery({ queryKey: ['top-headlines'], queryFn: fetchTopHeadlines });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          data?.articles?.map((article: Article) => (
            article.urlToImage && 
            <Card key={article.url} style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Image source={{ uri: article.urlToImage }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{article.title}</Text>
                  <View style={styles.authorDateContainer}>
                    <Text style={styles.author}>{article.author}</Text>
                    <Text style={styles.date}>{timeAgo(article.publishedAt)}</Text>
                  </View>
               
                </View>
                
              </Card.Content>
              
            </Card>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    height: 200,
    gap: 20,
  },
  image: {
    width: 150,
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  authorDateContainer: {
    flexDirection: 'row',
  },
  author: {
    fontSize: 14,
  },
  date: {
    fontSize: 14,
  },
});