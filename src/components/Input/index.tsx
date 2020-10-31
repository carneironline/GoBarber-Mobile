import React from 'react';
import { TextInputProps } from 'react-native'
import { useField } from '@unform/core'

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, icon, ...rest}, ref) => {
  const inputElementRef = React.useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = React.useRef<InputValueReference>({value: defaultValue})

  React.useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus()
    },
  }))

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      }
    })
  }, [fieldName, registerField])


  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput 
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360" 
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value
        }}
        {...rest}  
        />
    </Container>
  );
}

export default React.forwardRef(Input);