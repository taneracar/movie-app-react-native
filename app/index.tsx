import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-dark-200">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="text-lg font-semibold text-primary bg-red-500">Go to Onboarding</Link>
      <Link href="/movie/avangers" className="text-lg font-semibold text-primary bg-red-500">Go to Avangers</Link>
    </View>
  );
}