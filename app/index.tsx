import React from 'react';
import { ScrollView, StyleSheet,StatusBar, Platform } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator } from 'react-native-paper';
import fetchTopHeadlines from '@/apis/news';
import { Article } from '@/constants/types';
import ArticleCard from '@/components/ArticleCard';
import { styled } from 'nativewind';

const StyledScrollView = styled(ScrollView);

export default function HomeScreen() {
  const { data, isLoading } = useQuery({ queryKey: ['top-headlines'], queryFn: fetchTopHeadlines });

  return (
      <StyledScrollView className='bg-white p-4 ' >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          data?.articles?.map((article: Article) => (
            article.urlToImage && 
            <ArticleCard article={article}  key={article.url} />
          ))
          
        )}
      </StyledScrollView>
 
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
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