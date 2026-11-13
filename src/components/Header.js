
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Lucide from '@react-native-vector-icons/lucide';

export default function Header({
    title = 'ITB STIKOM Bali',
    onBack,
}) {
    const handleBack = () => {
        if (onBack) {
            onBack();
            return;
        }

        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace('/');
        }
    };

    return (
        <View
            style={{
                height: 54,
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#EAEAEA',
                elevation: 3,
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 3,
            }}
        >
            <TouchableOpacity
                onPress={handleBack}
                activeOpacity={0.7}
                style={{
                    width: 32,
                    height: 40,
                    justifyContent: 'center',
                }}
            >
                <Lucide name="chevron-left" size={23} color="#002448" />
            </TouchableOpacity>

            <Text
                style={{
                    flex: 1,
                    fontFamily: 'PlusJakartaSans-SemiBold',
                    fontSize: 13,
                    color: '#002448',
                    marginLeft: 2,
                }}
            >
                {title}
            </Text>

            <View
                style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: '#E8EDF4',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#D5DDE8',
                }}
            >
                <Lucide name="user-round" size={17} color="#002448" />
            </View>
        </View>
    );
}
