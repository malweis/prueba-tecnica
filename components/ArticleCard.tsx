import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

import { getFormattedAuthorName, timeAgo } from '@/constants/functions'; 
import { Article } from '@/constants/types';
import { router } from 'expo-router';
import { styled } from 'nativewind';
import { stripSymbols } from '@/constants/functions';
import { Divider } from 'react-native-paper';

const StyledView = styled(View);
const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledImage = styled(Image);



const ArticleCard = ({ article }: { article: Article }) => {
    const navigateToArticle = () => {
        const strippedTitle = stripSymbols(article.title);
        router.navigate(`/details/${strippedTitle}`);
    };
    return (
        <StyledPressable key={article.url} className='w-full max-h-52 mb-4 rounded-xl p-4 flex-row shadow-xl border-b  gap-x-2' onPress={navigateToArticle} >
            
                <StyledView  className='w-[130px] h-[100%] p-2 rounded-lg'>
                    <StyledImage source={{ uri: article.urlToImage }} className='w-full h-full rounded-lg' />
                </StyledView>
                <StyledView className='flex-1 flex-col justify-center ' >
                    <StyledText className='font-bold text-base mb-4' >{article.title}</StyledText>
                    <StyledView className='flex-row justify-between' >
                    <StyledText >{getFormattedAuthorName(article.author)}</StyledText>
                    <StyledText >{timeAgo(article.publishedAt)}</StyledText>
                    </StyledView>
                   
                </StyledView>
                <Divider/>
        </StyledPressable>
    );
};

const styles = StyleSheet.create({
 
});

export default ArticleCard;