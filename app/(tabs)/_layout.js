
import { Tabs } from 'expo-router';
import BottomNavigation from '../../src/components/BottomNavigation';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
            tabBar={() => <BottomNavigation />}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name="calendar" />
            <Tabs.Screen name="courses" />
            <Tabs.Screen name="profile" />
        </Tabs>
    );
}
