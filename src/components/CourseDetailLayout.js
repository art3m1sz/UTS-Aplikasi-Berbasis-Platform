
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { router, usePathname } from 'expo-router';
import Header from './Header';

const tabs = [
    { title: 'MATERI', route: '' },
    { title: 'TUGAS', route: '/assignments' },
    { title: 'FORUM', route: '/forum' },
];

export default function CourseDetailLayout({
    courseId,
    courseTitle,
    lecturer,
    activeTab,
    children,
}) {
    const pathname = usePathname();

    const baseRoute = `/courses/${courseId}`;

    return (
        <View style={{ flex: 1, backgroundColor: '#F8F9FB' }}>
            <Header />

            {/* Course Information */}
            <View style={{ paddingHorizontal: 12, paddingTop: 10 }}>
                <Text
                    style={{
                        fontFamily: 'PlusJakartaSans-Bold',
                        fontSize: 16,
                        color: '#002F87',
                    }}
                >
                    {courseTitle}
                </Text>

                <Text
                    style={{
                        fontFamily: 'PlusJakartaSans-Regular',
                        fontSize: 10,
                        color: '#68758A',
                        marginTop: 2,
                    }}
                >
                    {lecturer} • Semester Ganjil 2025
                </Text>
            </View>

            {/* Course Tabs */}
            <View
                style={{
                    height: 42,
                    flexDirection: 'row',
                    marginTop: 4,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D9DDE4',
                    paddingHorizontal: 12,
                }}
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.title;

                    return (
                        <TouchableOpacity
                            key={tab.title}
                            onPress={() => {
                                const targetRoute = `${baseRoute}${tab.route}`;

                                if (pathname !== targetRoute) {
                                    router.replace(targetRoute);
                                }
                            }}
                            activeOpacity={0.7}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: isActive ? 2 : 0,
                                borderBottomColor: '#002F87',
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: isActive
                                        ? 'PlusJakartaSans-Bold'
                                        : 'PlusJakartaSans-Medium',
                                    fontSize: 9,
                                    color: isActive ? '#002F87' : '#454B57',
                                }}
                            >
                                {tab.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Tab Content */}
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </View>
    );
}
