
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Lucide from "@react-native-vector-icons/lucide";
import * as Font from "expo-font";
const navigationItems = [
    { id: 1, title: 'Beranda', icon: 'house', active: true },
    { id: 2, title: 'Kalender', icon: 'calendar-days', active: false },
    { id: 3, title: 'Mata Kuliah', icon: 'graduation-cap', active: false },
    { id: 4, title: 'Profil', icon: 'user-round', active: false },
];

export default function BottomNavigation() {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                paddingVertical: 12,
                borderTopWidth: 1,
                borderTopColor: '#F0F0F0',
            }}
        >
            {navigationItems.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.7}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5,
                    }}
                >
                    <Lucide
                        name={item.icon}
                        size={22}
                        color={item.active ? '#5B4BDB' : '#A0A0A0'}
                    />

                    <Text
                        style={{
                            fontSize: 11,
                            fontWeight: item.active ? '600' : '400',
                            color: item.active ? '#5B4BDB' : '#A0A0A0',
                        }}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
