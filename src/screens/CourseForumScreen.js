import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Lucide from '@react-native-vector-icons/lucide';
import CourseDetailLayout from '../components/CourseDetailLayout';

const topics = [
    {
        id: 1,
        author: 'Diddy',
        time: '2 jam yang lalu',
        tag: 'TANYA',
        title: 'Tanya soal Logika Proposisional - Tabel Kebenaran',
        excerpt:
            'Teman-teman, ada yang bisa bantu jelaskan cara cepat membuat tabel kebenaran untuk soal dengan banyak variabel?',
        replies: 12,
        views: 142,
    },
    {
        id: 2,
        author: 'Epstein',
        time: '3 jam yang lalu',
        tag: 'MATERI',
        title: 'Sharing: Catatan Rangkuman Induksi Matematika',
        excerpt:
            'Halo semua, saya baru saja merapikan catatan pertemuan kemarin tentang induksi. Silakan dipakai untuk belajar bersama.',
        replies: 32,
        views: 420,
    },
    {
        id: 3,
        author: 'Wowoteddy',
        time: '5 jam yang lalu',
        tag: 'MATERI',
        title: 'Sharing: Catatan Rangkuman Induksi Matematika',
        excerpt:
            'Halo semua, saya baru saja merapikan catatan pertemuan kemarin tentang induksi. Silakan dipakai untuk belajar bersama.',
        replies: 32,
        views: 420,
    },
];

const tagStyles = {
    TANYA: {
        backgroundColor: '#FFF1EC',
        borderColor: '#F6C7B6',
        color: '#E0592A',
    },
    MATERI: {
        backgroundColor: '#EAF0FB',
        borderColor: '#BFD0F0',
        color: '#082D78',
    },
};

function TopicCard({ topic }) {
    const tagStyle = tagStyles[topic.tag];

    return (
        <View
            style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                padding: 13,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: '#E9ECF1',
            }}
        >
            {/* Author and tag */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 8,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 7,
                    }}
                >
                    <View
                        style={{
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                            backgroundColor: '#E8EDF4',
                            borderWidth: 1,
                            borderColor: '#D5DDE8',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Lucide
                            name="user-round"
                            size={14}
                            color="#002448"
                        />
                    </View>

                    <View>
                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Bold',
                                fontSize: 9,
                                color: '#202B40',
                            }}
                        >
                            {topic.author}
                        </Text>

                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Regular',
                                fontSize: 8,
                                color: '#858B98',
                            }}
                        >
                            {topic.time}
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: tagStyle.backgroundColor,
                        borderWidth: 1,
                        borderColor: tagStyle.borderColor,
                        borderRadius: 5,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 8,
                            letterSpacing: 0.3,
                            color: tagStyle.color,
                        }}
                    >
                        {topic.tag}
                    </Text>
                </View>
            </View>

            {/* Topic content */}
            <Text
                style={{
                    fontFamily: 'PlusJakartaSans-Bold',
                    fontSize: 13,
                    lineHeight: 19,
                    color: '#102E52',
                }}
            >
                {topic.title}
            </Text>

            <Text
                numberOfLines={2}
                style={{
                    fontFamily: 'PlusJakartaSans-Regular',
                    fontSize: 10,
                    lineHeight: 15,
                    color: '#68758A',
                    marginTop: 6,
                }}
            >
                {topic.excerpt}
            </Text>

            {/* Topic statistics */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 14,
                    marginTop: 12,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                    }}
                >
                    <Lucide
                        name="message-square"
                        size={11}
                        color="#858B98"
                    />

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Medium',
                            fontSize: 9,
                            color: '#858B98',
                        }}
                    >
                        {topic.replies} Balasan
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                    }}
                >
                    <Lucide name="eye" size={11} color="#858B98" />

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Medium',
                            fontSize: 9,
                            color: '#858B98',
                        }}
                    >
                        {topic.views} Dilihat
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default function CourseForumScreen() {
    const { courseId } = useLocalSearchParams();

    return (
        <CourseDetailLayout
            courseId={courseId}
            courseTitle="Matematika Diskrit"
            lecturer="BA244"
            activeTab="FORUM"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingTop: 14,
                    paddingBottom: 20,
                }}
            >
                {/* Forum heading */}
                <Text
                    style={{
                        fontFamily: 'PlusJakartaSans-Bold',
                        fontSize: 14,
                        color: '#002F87',
                        marginBottom: 10,
                        paddingHorizontal: 2,
                    }}
                >
                    Topik Populer
                </Text>

                {/* Topic cards */}
                {topics.map((topic) => (
                    <TopicCard key={topic.id} topic={topic} />
                ))}
            </ScrollView>
        </CourseDetailLayout>
    );
}