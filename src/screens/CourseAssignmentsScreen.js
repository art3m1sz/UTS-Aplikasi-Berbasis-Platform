
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Lucide from '@react-native-vector-icons/lucide';
import CourseDetailLayout from '../components/CourseDetailLayout';

const assignments = [
    {
        id: 1,
        weight: 15,
        deadline: '24 Jun, 23:59',
        title: 'Tugas 1: Analisis Kompleksitas Algoritma',
        status: 'pending',
    },
    {
        id: 2,
        weight: 25,
        deadline: '14 Jun, 23:59',
        title: 'Tugas 2: Implementasi Sorting & Searching',
        status: 'pending',
    },
    {
        id: 3,
        weight: 40,
        deadline: '1 Jun, 23:59',
        title: 'Proyek Akhir: Implementasi A*',
        status: 'graded',
        score: 95,
    },
];

function AssignmentCard({ assignment }) {
    const isGraded = assignment.status === 'graded';

    return (
        <View
            style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 12,
                padding: 13,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: '#E9ECF1',
            }}
        >
            {/* Assignment information */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 8,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'PlusJakartaSans-Medium',
                        fontSize: 10,
                        color: '#858B98',
                    }}
                >
                    Bobot: {assignment.weight}%
                </Text>

                <Text
                    style={{
                        fontFamily: 'PlusJakartaSans-Medium',
                        fontSize: 10,
                        color: '#858B98',
                    }}
                >
                    {assignment.deadline}
                </Text>
            </View>

            <Text
                style={{
                    fontFamily: 'PlusJakartaSans-Bold',
                    fontSize: 12,
                    lineHeight: 18,
                    color: '#202B40',
                    marginBottom: 10,
                }}
            >
                {assignment.title}
            </Text>

            <View
                style={{
                    height: 1,
                    backgroundColor: '#EDF0F4',
                    marginBottom: 9,
                }}
            />

            {/* Submission status */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                    }}
                >
                    <Lucide
                        name={isGraded ? 'circle-check' : 'clock-3'}
                        size={12}
                        color={isGraded ? '#16B981' : '#9299A6'}
                    />

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Medium',
                            fontSize: 10,
                            color: isGraded ? '#16B981' : '#9299A6',
                        }}
                    >
                        {isGraded
                            ? `Sudah Dinilai: ${assignment.score}/100`
                            : 'Belum Dikumpulkan'}
                    </Text>
                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: isGraded ? 'transparent' : '#082D78',
                        paddingHorizontal: isGraded ? 0 : 12,
                        paddingVertical: 6,
                        borderRadius: 6,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 10,
                            color: isGraded ? '#082D78' : '#FFFFFF',
                        }}
                    >
                        {isGraded ? 'Lihat Feedback' : 'Kumpulkan'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function CourseAssignmentsScreen() {
    const { courseId } = useLocalSearchParams();

    return (
        <CourseDetailLayout
            courseId={courseId}
            courseTitle="Matematika Diskrit"
            lecturer="BA244"
            activeTab="TUGAS"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingTop: 12,
                    paddingBottom: 20,
                }}
            >
                {/* Assignment heading */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 12,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 12,
                            color: '#263247',
                        }}
                    >
                        Daftar Tugas
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Medium',
                            fontSize: 10,
                            color: '#9299A6',
                        }}
                    >
                        3 Tugas Aktif
                    </Text>
                </View>

                {/* Assignment cards */}
                {assignments.map((assignment) => (
                    <AssignmentCard
                        key={assignment.id}
                        assignment={assignment}
                    />
                ))}

                {/* Assignment statistics */}
                <View
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 12,
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#E9ECF1',
                        marginTop: 2,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 11,
                            color: '#263247',
                            marginBottom: 10,
                        }}
                    >
                        Statistik Tugas
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 8,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: '#F3F4F6',
                                borderRadius: 8,
                                paddingVertical: 10,
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Bold',
                                    fontSize: 19,
                                    color: '#082D78',
                                }}
                            >
                                1/3
                            </Text>

                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Medium',
                                    fontSize: 9,
                                    color: '#858B98',
                                }}
                            >
                                Selesai
                            </Text>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                backgroundColor: '#F3F4F6',
                                borderRadius: 8,
                                paddingVertical: 10,
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Bold',
                                    fontSize: 19,
                                    color: '#16B84E',
                                }}
                            >
                                88.5
                            </Text>

                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Medium',
                                    fontSize: 9,
                                    color: '#858B98',
                                }}
                            >
                                Rata-rata
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </CourseDetailLayout>
    );
}
