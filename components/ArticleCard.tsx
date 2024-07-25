import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { getFormattedAuthorName, timeAgo } from '@/constants/functions'; 
import { Article } from '@/constants/types';


const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <View key={article.url} style={styles.cardContent}>
            
                <Image source={{ uri: article.urlToImage }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{article.title}</Text>
                    <View style={styles.authorDateContainer}>
                    <Text style={styles.author}>{getFormattedAuthorName(article.author)}</Text>
                    <Text style={styles.date}>{timeAgo(article.publishedAt)}</Text>
                    </View>
                </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    cardContent: {

        width : '100%',
        flexDirection: 'row',
        gap: 10,
        height: 140,
        padding: 10,
        backgroundColor: '#faf1e5',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
      
    },
    image: {
        width: 130,
        height: '100%',
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,    
        paddingRight: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    authorDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    author: {
        fontSize: 14,
        color: 'gray',
    },
    date: {
        fontSize: 12,
        color: 'gray',
    },
});

export default ArticleCard;