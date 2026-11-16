import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import Lucide from '@react-native-vector-icons/lucide';
import Header from '../components/Header';

const profile = {
    name: 'Sahreno',
    nim: '240040032',
    photo: null,
};

const academicInfo = [
    {
        id: 1,
        icon: 'graduation-cap',
        label: 'Program Studi',
        value: 'Teknologi Informasi',
    },
    {
        id: 2,
        icon: 'building-2',
        label: 'Fakultas',
        value: 'Infokom',
    },
    {
        id: 3,
        icon: 'calendar-days',
        label: 'Semester Aktif',
        value: 'Semester 4',
    },
];

function Card({ children }) {
    return (
        <View
            style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#E9ECF1',
            }}
        >
            {children}
        </View>
    );
}

function SectionLabel({ title }) {
    return (
        <Text
            style={{
                fontFamily: 'PlusJakartaSans-Bold',
                fontSize: 9,
                letterSpacing: 0.5,
                color: '#454B57',
                marginTop: 16,
                marginBottom: 6,
                marginLeft: 2,
            }}
        >
            {title}
        </Text>
    );
}

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#F8F9FB' }}>
            <Header />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 12,
                    paddingTop: 20,
                    paddingBottom: 20,
                }}
            >
                {/* Profile summary */}
                <View style={{ alignItems: 'center' }}>
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            backgroundColor: '#E4ECFA',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            marginBottom: 10,
                        }}
                    >
                        {profile.photo ? (
                            <Image
                                source={profile.photo}
                                style={{ width: 80, height: 80 }}
                                resizeMode="cover"
                            />
                        ) : (
                            <Lucide name="user" size={36} color="#082D78" />
                        )}
                    </View>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 16,
                            color: '#202B40',
                        }}
                    >
                        {profile.name}
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Medium',
                            fontSize: 10,
                            color: '#68758A',
                            marginTop: 2,
                            marginBottom: 12,
                        }}
                    >
                        NIM: {profile.nim}
                    </Text>

                    <View style={{ flexDirection: 'row', gap: 8 }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{
                                minWidth: 80,
                                alignItems: 'center',
                                backgroundColor: '#082D78',
                                borderWidth: 1,
                                borderColor: '#082D78',
                                borderRadius: 4,
                                paddingHorizontal: 14,
                                paddingVertical: 6,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Bold',
                                    fontSize: 10,
                                    color: '#FFFFFF',
                                }}
                            >
                                Edit Profil
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{
                                minWidth: 80,
                                alignItems: 'center',
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderColor: '#082D78',
                                borderRadius: 4,
                                paddingHorizontal: 14,
                                paddingVertical: 6,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Bold',
                                    fontSize: 10,
                                    color: '#082D78',
                                }}
                            >
                                Bagikan
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Academic information */}
                <SectionLabel title="INFORMASI AKADEMIK" />

                <Card>
                    {academicInfo.map((item, index) => (
                        <View
                            key={item.id}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 12,
                                paddingVertical: 12,
                                borderBottomWidth:
                                    index === academicInfo.length - 1 ? 0 : 1,
                                borderBottomColor: '#EDF0F4',
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 8,
                                }}
                            >
                                <Lucide
                                    name={item.icon}
                                    size={14}
                                    color="#68758A"
                                />

                                <Text
                                    style={{
                                        fontFamily: 'PlusJakartaSans-Medium',
                                        fontSize: 10.5,
                                        color: '#263247',
                                    }}
                                >
                                    {item.label}
                                </Text>
                            </View>

                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Bold',
                                    fontSize: 10,
                                    color: '#202B40',
                                }}
                            >
                                {item.value}
                            </Text>
                        </View>
                    ))}
                </Card>

                {/* Settings */}
                <SectionLabel title="PENGATURAN" />

                <Card>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 12,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 8,
                            }}
                        >
                            <Lucide
                                name="key-round"
                                size={14}
                                color="#68758A"
                            />

                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Medium',
                                    fontSize: 10.5,
                                    color: '#263247',
                                }}
                            >
                                Ganti Kata Sandi
                            </Text>
                        </View>

                        <Lucide
                            name="chevron-right"
                            size={14}
                            color="#9299A6"
                        />
                    </TouchableOpacity>
                </Card>

                {/* Logout */}
                <View style={{ marginTop: 16 }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => router.replace('/login')}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 6,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: '#E9ECF1',
                            paddingVertical: 12,
                        }}
                    >
                        <Lucide name="log-out" size={13} color="#263247" />

                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Medium',
                                fontSize: 10.5,
                                color: '#263247',
                            }}
                        >
                            Keluar
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}