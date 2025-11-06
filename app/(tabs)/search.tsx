import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import { updateSearchCount } from '@/services/appwrite'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Search = () => {
  const [query, setQuery] = useState('');
  
  const {data: movies, loading, error, refetch:loadMovies,reset} = useFetch(() => fetchMovies({query: query}), false);
useEffect(() => {
  const timeOutId = setTimeout(async () => {
  if (query.trim()) {
    await loadMovies();
      const safeMovies = movies ?? [];

  if (safeMovies.length > 0) {
       updateSearchCount(query, safeMovies[0]);
    }
   
  }else{
    reset();
  }
}, 500);

return () => clearTimeout(timeOutId);
}, [query]);
  
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='w-full absolute flex-1 z-0' resizeMode='cover' />
      <FlatList data={movies} renderItem={({item}) => <MovieCard  {...item}/>} keyExtractor={(item => item.id.toString())} className='px-5' numColumns={3} columnWrapperStyle={{justifyContent: 'center', gap: 16, marginVertical: 10}} contentContainerStyle={{paddingBottom: 100}} ListHeaderComponent={
        <>
        <View className='flex flex-row justify-center mt-20 items-center'>
        <Image source={icons.logo} className='w-12 h-10' />
        </View>
        <View className='my-5'>
          <SearchBar value={query} onChangeText={(text: string) => setQuery(text)} placeholder="Search for a movie..." />
        </View>
        {loading && (
          <ActivityIndicator size="large" color="#0000ff" className="my-3" />
        )}
        {error && (
          <Text className="text-red-500 px-5 my-3">{error?.message}</Text>
        )}
        {!loading && !error && query.trim() && (movies?.length ?? 0) > 0  && (
          <Text className='text-xl text-white font-bold'>Search Results for {" "}
          <Text className='text-accent'>{query}</Text>
          </Text>
        )}
        </>
      }
      ListEmptyComponent={
        !loading && !error ? (
          <View className='mt-10 px-5'>
     <Text className='text-gray-500 text-center'>{query.trim() ? 'No results found' : 'Search for a movie...'}</Text>
          </View>
        ): null
      }
      />
    </View>
  )
}

export default Search