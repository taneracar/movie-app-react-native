import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = ({ focused, icon, text }: any) => {
  if(focused) {
     return (   <ImageBackground
    source={images.highlight}
    className="flex flex-row flex-1 items-center justify-center min-w-[112px] min-h-16 mt-4 rounded-full overflow-hidden"
    >
     <Image source={icon}  resizeMode="contain" className='size-5' tintColor="#151312"/>
     <Text className='text-secondary font-semibold ml-2 text-base'>{text}</Text>
    </ImageBackground>)
  }
  return (
    <View
    className="flex size-full items-center justify-center mt-4 rounded-full"
    >
     <Image source={icon}   className='size-5' tintColor="#a8b5db"/>
    </View>
  )
}

const _layout = () => {
  return (
<Tabs screenOptions={{
  tabBarShowLabel:false,
  tabBarItemStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarStyle:{
    backgroundColor: '#0f0d23',
    borderRadius : 50,
    marginHorizontal: 20,
    marginBottom: 36,
    height: 52,
    position: 'absolute',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#0f0d23',


  }

}}>
  <Tabs.Screen name="index" options={{title: 'Home', headerShown: false, tabBarIcon: ({focused}) => TabIcon({focused, icon: icons.home, text: 'Home'}) }} />
  <Tabs.Screen name="search" options={{ title: 'Search', headerShown: false, tabBarIcon: ({focused}) => TabIcon({focused, icon: icons.search, text: 'Search'}) }} />
  <Tabs.Screen name="saved" options={{ title: 'Saved', headerShown: false, tabBarIcon: ({focused}) => TabIcon({focused, icon: icons.save, text: 'Saved'}) }} />
  <Tabs.Screen name="profile" options={{ title: 'Profile', headerShown: false, tabBarIcon: ({focused}) => TabIcon({focused, icon: icons.person, text: 'Profile'}) }} />
</Tabs>
  )
}

export default _layout