import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'
type Props = {
    onPress?: () => void,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void
}
const SearchBar = ({onPress, placeholder,value,onChangeText}: Props) => {
  return (
    <View className='flex flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='w-5 h-5' resizeMode='contain' tintColor='#ab8bff'/>
      <TextInput onPress={onPress} className='flex-1 ml-2 text-white' value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor='#a8b5db'/>
    </View>
  )
}

export default SearchBar