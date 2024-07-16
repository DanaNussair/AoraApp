import { TouchableOpacity, Text } from 'react-native'

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
}

const CustomButton = ({ title, handlePress, containerStyle, isLoading, textStyle }: CustomButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary p-3 rounded-xl justify-center items-center ${containerStyle}
      ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <Text className={`text-lg font-psemibold ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton