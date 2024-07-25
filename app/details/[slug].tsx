import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { formatReadableDate, timeAgo } from '@/constants/functions';
import { useSelector } from 'react-redux';
import { useLocalSearchParams } from 'expo-router';
import { styled } from 'nativewind';
import { Divider } from 'react-native-paper';
import { stripSymbols } from '@/constants/functions';


const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function NewsDetailsScreen() {
  const { slug } = useLocalSearchParams();
  const articles = useSelector((state: { articles: { articles: any[] } }) => state.articles.articles); // Adjusted selector path to access `articles` array
  
  // Find the article with the given slug in its URL
  const article = articles.find(article => stripSymbols(article.title) === slug);

  if (!article) {
    return (
      <ThemedView>
        <ThemedText>Article not found</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
     headerImage={ <Image source={{ uri: article.urlToImage }} style={styles.image} />}>
        <StyledText className='font-bold text-base mb-4 dark:text-white' >{article.title}</StyledText>
        <StyledText  className='dark:text-white font-medium' > Autor : {article.author}</StyledText>
        <Divider/>
        <StyledText className='dark:text-white'  >{article.content}</StyledText>
  
        <StyledText className='dark:text-white'>{formatReadableDate(article.publishedAt)}</StyledText>
        
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
 
    
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});