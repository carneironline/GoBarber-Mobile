import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => {
  const formRef = React.useRef<FormHandles>(null)
  const emailInputRef = React.useRef<TextInput>(null)
  const passwordInputRef = React.useRef<TextInput>(null)
  const navigation = useNavigation()

  return (
      <>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? "padding" : undefined}
          enabled
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flex: 1}}
          >
            <Container>
              <Image source={logoImg} />

              <View>
                <Title>Crie sua conta</Title>
              </View>

              <Form ref={formRef} onSubmit={(data) => {
                console.log(data)
              }}>
                <Input 
                  name="name" 
                  icon="user" 
                  placeholder="Nome" 
                  autoCapitalize='words' 
                  returnKeyType='next'
                  onSubmitEditing={() => {
                    emailInputRef.current?.focus()
                  }}
                />

                <Input 
                  ref={emailInputRef}
                  name="email" 
                  icon="mail" 
                  placeholder="E-mail" 
                  keyboardType='email-address' 
                  autoCorrect={false} 
                  autoCapitalize='none' 
                  returnKeyType='next'
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus()
                  }}
                />

                <Input 
                  ref={passwordInputRef}
                  name="password"
                  icon="lock" 
                  placeholder="Senha" 
                  secureTextEntry 
                  textContentType='newPassword'
                  onSubmitEditing={() => {
                    formRef.current?.submitForm()
                  }}
                  />

                <Button onPress={() => {
                  formRef.current?.submitForm()
                }}>Cadastrar</Button> 
              </Form>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>

        <BackToSignIn activeOpacity={1} onPress={() => navigation.goBack()}>
            <Icon name="log-in" size={20} color="#ff9000" />
            <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignIn>
      </>
  );
}

export default SignUp;