import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full justify-center items-center px-4'>
          <Image 
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image 
            source={images.cards}
            className='max-w-[380] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='mt-5'>
            <Text className='text-3xl text-white text-center font-bold relative'>
              Discover endless possibilies with {' '}
              <Text className='text-secondary-200'>
                Aora
              </Text>
            </Text>
            <Image 
              source={images.path}
              resizeMode='contain'
              className='w-[136px] h-[15px] absolute -bottom-2 right-24'
            />
          </View>
          <Text className='text-center text-sm font-pregular mt-7 text-green-100'>
            Embark on a new journey of limitless capabilities
          </Text>
          <CustomButton 
            title='Continue with email' 
            handlePress={() => { router.push('/sign-in') }}
            containerStyle="w-full mt-7"
          />
        </View>
        <StatusBar backgroundColor='#161622' style='light' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;