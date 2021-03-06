import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
    height: 60px;
    background: #ff9000;
    border-radius: 10px;

    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const ButtonText = styled.Text`
    font-family: 'Roboto-Medium';
    color: #312e38;
    font-size: 18px;
` 