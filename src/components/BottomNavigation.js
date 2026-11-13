
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { router, usePathname } from 'expo-router';
import Lucide from '@react-native-vector-icons/lucide';

const navigationItems = [
    {
        title: 'Beranda',
        icon: 'house',
        route: '/',
    },
    {
        title: 'Kalender',
        icon: 'calendar-days',
        route: '/calendar',
    },
    {
        title: 'Mata Kuliah',
        icon: 'graduation-cap',
        route: '/courses',
    },
    {
        title: 'Profile',
        icon: 'user-round',
        route: '/profile',
    },
];

export default function BottomNavigation() {
    const pathname = usePathname();

    return (
        <View
            style={{
                height: 62,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderTopWidth: 1,
                borderTopColor: '#E8E8E8',
                paddingHorizontal: 5,
                paddingBottom: 3,
            }}
        >
            {navigationItems.map((item) => {
                const isActive = pathname === item.route;
                const color = isActive ? '#002F87' : '#858B96';

                return (
                    <TouchableOpacity
                        key={item.route}
                        onPress={() => router.navigate(item.route)}
                        activeOpacity={0.7}
                        accessibilityRole="tab"
                        accessibilityState={{ selected: isActive }}
                        style={{
                            flex: 1,
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 3,
                        }}
                    >
                        <Lucide
                            name={item.icon}
                            size={19}
                            color={color}
                        />

                        <Text
                            style={{
                                fontFamily: isActive
                                    ? 'PlusJakartaSans-SemiBold'
                                    : 'PlusJakartaSans-Regular',
                                fontSize: 8,
                                color,
                            }}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
