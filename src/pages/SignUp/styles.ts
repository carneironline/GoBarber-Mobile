import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

 export const Container = styled.View`   
   flex: 1;
   align-items: center;
   justify-content: center;
   padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
 `

 export const Title = styled.Text`  
   font-family: 'Roboto-Medium'; 
   font-size: 24px;
   color: #f4ede8;
   margin: 64px 0 24px;
 `

 export const BackToSignIn = styled.TouchableOpacity`
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   background: #232129;
   justify-content: center;
   align-items: center;
   flex-direction: row; 
   padding: 16px 0 ${16 + getBottomSpace()}px; 
 `;

 export const BackToSignInText = styled.Text`
   color: #ff9000;
   font-size: 18px;
   font-family: 'Roboto-Regular'; 
   margin-left: 16px;
 `;
 

