
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'PlusJakartaSans-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
        'PlusJakartaSans-Medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
        'PlusJakartaSans-SemiBold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        'PlusJakartaSans-Bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
        'Corinthia-Regular': require('../assets/fonts/Corinthia-Regular.ttf'),
        'Corinthia-Bold': require('../assets/fonts/Corinthia-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}
