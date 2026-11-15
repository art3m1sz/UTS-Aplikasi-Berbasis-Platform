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

const courses = {
    '1': {
        title: 'Matematika Diskrit',
        lecturer: 'BA244',
        semester: 'Semester Ganjil 2025',
    },
    '2': {
        title: 'Basis Data',
        lecturer: 'Dr.eng Komang Multo',
        semester: 'Semester Ganjil 2025',
    },
    '3': {
        title: 'Sistem Operasi',
        lecturer: 'Agus Setiawan, S.T., M.T.',
        semester: 'Semester Ganjil 2025',
    },
};

const materials = [
    {
        id: '1',
        title: '01. Logika Proposisional',
        description: 'Pengantar proposisi, tabel kebenaran, dan hukum logika.',
        format: 'PDF',
        size: '2.4 MB',
    },
    {
        id: '2',
        title: '02. Teori Himpunan',
        description: 'Operasi himpunan, diagram Venn, dan kardinalitas.',
        format: 'PPTX',
        size: '5.1 MB',
    },
];

export default function CourseMaterialsScreen() {
    const { courseId } = useLocalSearchParams();

    const course = courses[String(courseId)] || {
        title: 'Mata Kuliah',
        lecturer: 'Dosen Pengampu',
        semester: 'Semester Ganjil 2025',
    };

    return (
        <CourseDetailLayout
            courseId={courseId}
            courseTitle={course.title}
            lecturer={course.lecturer}
            activeTab="MATERI"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 11,
                    paddingTop: 14,
                    paddingBottom: 20,
                    gap: 10,
                }}
            >
                {materials.map((material) => (
                    <TouchableOpacity
                        key={material.id}
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderWidth: 1,
                            borderColor: '#DDE1E8',
                            borderRadius: 6,
                            padding: 12,
                        }}
                    >
                        {/* Material Icon */}
                        <View
                            style={{
                                width: 25,
                                height: 30,
                                borderRadius: 3,
                                backgroundColor: '#DFE4FF',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 9,
                            }}
                        >
                            <Lucide
                                name="file-text"
                                size={15}
                                color="#002F87"
                            />
                        </View>

                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-SemiBold',
                                fontSize: 12,
                                color: '#25282D',
                            }}
                        >
                            {material.title}
                        </Text>

                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Regular',
                                fontSize: 9,
                                color: '#68758A',
                                lineHeight: 14,
                                marginTop: 2,
                            }}
                        >
                            {material.description}
                        </Text>

                        {/* Download */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderTopWidth: 1,
                                borderTopColor: '#E5E7EB',
                                marginTop: 9,
                                paddingTop: 8,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Regular',
                                    fontSize: 8,
                                    color: '#68758A',
                                }}
                            >
                                {material.format} • {material.size}
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 3,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'PlusJakartaSans-SemiBold',
                                        fontSize: 8,
                                        color: '#002F87',
                                    }}
                                >
                                    Unduh
                                </Text>

                                <Lucide
                                    name="download"
                                    size={10}
                                    color="#002F87"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </CourseDetailLayout>
    );
}
