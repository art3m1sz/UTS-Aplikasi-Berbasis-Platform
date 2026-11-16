import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Lucide from '@react-native-vector-icons/lucide';
import Header from '../components/Header';
import {router, useLocalSearchParams } from 'expo-router';



const assignment = {
    title: 'Implementasi Sorting & Searching',
    lecturer: 'Dr. Moreno',
    courseCode: 'BA244',
    remaining: 'Sisa 12 Jam',
    description:
        'Rancang dan implementasikan program untuk memanipulasi, mengurutkan, dan melakukan pencarian data pada dataset simulasi berskala besar.',
    requirements: [
        'Source code (.cpp atau .java)',
        'Laporan (.pdf)',
        'Max file size: 50MB',
    ],
    fileNameFormat: 'NIM_Nama_BA244',
};

const attachments = [
    {
        id: 1,
        name: '240040032_Sahreno_BA244.pdf',
        size: '1.2 MB',
    },
];

function Card({ children }) {
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
            {children}
        </View>
    );
}

export default function AssignmentSubmissionScreen() {
    const { courseId } = useLocalSearchParams();
    const [comment, setComment] = useState('');
    const [agreed, setAgreed] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#F8F9FB' }}>
            <Header />

            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingTop: 12,
                    paddingBottom: 20,
                }}
            >
                {/* Assignment information */}
                <Card>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 10,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#FDEDED',
                                borderWidth: 1,
                                borderColor: '#F5B5B5',
                                borderRadius: 6,
                                paddingHorizontal: 8,
                                paddingVertical: 3,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Bold',
                                    fontSize: 9,
                                    color: '#D92D2D',
                                }}
                            >
                                {assignment.remaining}
                            </Text>
                        </View>

                        <View
                            style={{
                                backgroundColor: '#EEF0F4',
                                borderRadius: 6,
                                paddingHorizontal: 8,
                                paddingVertical: 3,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Medium',
                                    fontSize: 9,
                                    color: '#68758A',
                                }}
                            >
                                {assignment.courseCode}
                            </Text>
                        </View>
                    </View>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 16,
                            color: '#202B40',
                        }}
                    >
                        {assignment.title}
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Regular',
                            fontSize: 10,
                            color: '#68758A',
                            marginTop: 2,
                            marginBottom: 12,
                        }}
                    >
                        {assignment.lecturer}
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 11,
                            color: '#263247',
                            marginBottom: 4,
                        }}
                    >
                        Instruksi Tugas:
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Regular',
                            fontSize: 10,
                            lineHeight: 16,
                            color: '#454B57',
                            marginBottom: 6,
                        }}
                    >
                        {assignment.description}
                    </Text>

                    {assignment.requirements.map((item) => (
                        <View
                            key={item}
                            style={{
                                flexDirection: 'row',
                                gap: 6,
                                marginBottom: 2,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Regular',
                                    fontSize: 10,
                                    color: '#454B57',
                                }}
                            >
                                •
                            </Text>

                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Regular',
                                    fontSize: 10,
                                    lineHeight: 16,
                                    color: '#454B57',
                                }}
                            >
                                {item}
                            </Text>
                        </View>
                    ))}
                </Card>

                {/* Attached documents */}
                <Card>
                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 11,
                            color: '#263247',
                            marginBottom: 10,
                        }}
                    >
                        Dokumen Terlampir
                    </Text>

                    {attachments.map((file) => (
                        <View
                            key={file.id}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: '#E9ECF1',
                                borderRadius: 10,
                                padding: 10,
                                gap: 10,
                            }}
                        >
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 8,
                                    backgroundColor: '#FDEDED',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Lucide
                                    name="file-text"
                                    size={16}
                                    color="#D92D2D"
                                />
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        fontFamily: 'PlusJakartaSans-Bold',
                                        fontSize: 10,
                                        color: '#202B40',
                                    }}
                                >
                                    {file.name}
                                </Text>

                                <Text
                                    style={{
                                        fontFamily: 'PlusJakartaSans-Medium',
                                        fontSize: 9,
                                        color: '#858B98',
                                        marginTop: 1,
                                    }}
                                >
                                    {file.size}
                                </Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.7}>
                                <Lucide
                                    name="download"
                                    size={16}
                                    color="#68758A"
                                />
                            </TouchableOpacity>
                        </View>
                    ))}
                </Card>

                {/* Submission portal */}
                <Card>
                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 13,
                            color: '#202B40',
                            marginBottom: 4,
                        }}
                    >
                        Portal Pengumpulan
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Regular',
                            fontSize: 10,
                            color: '#68758A',
                            marginBottom: 6,
                        }}
                    >
                        Pastikan nama file tugas yang disetor sesuai dengan:
                    </Text>

                    <View
                        style={{
                            alignSelf: 'flex-start',
                            backgroundColor: '#EEF0F4',
                            borderRadius: 6,
                            paddingHorizontal: 8,
                            paddingVertical: 3,
                            marginBottom: 12,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Medium',
                                fontSize: 9,
                                color: '#454B57',
                            }}
                        >
                            {assignment.fileNameFormat}
                        </Text>
                    </View>

                    {/* Dropzone */}
                    <View
                        style={{
                            borderWidth: 1.5,
                            borderStyle: 'dashed',
                            borderColor: '#C5CFE3',
                            backgroundColor: '#F7F9FC',
                            borderRadius: 10,
                            paddingVertical: 20,
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                backgroundColor: '#E4ECFA',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 8,
                            }}
                        >
                            <Lucide
                                name="cloud-upload"
                                size={20}
                                color="#082D78"
                            />
                        </View>

                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Bold',
                                fontSize: 11,
                                color: '#202B40',
                            }}
                        >
                            Drag & Drop files here
                        </Text>

                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Regular',
                                fontSize: 9,
                                color: '#858B98',
                                marginTop: 2,
                                marginBottom: 10,
                            }}
                        >
                            or click to browse from your device
                        </Text>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{
                                backgroundColor: '#EDF0F4',
                                borderRadius: 6,
                                paddingHorizontal: 12,
                                paddingVertical: 6,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Bold',
                                    fontSize: 10,
                                    color: '#263247',
                                }}
                            >
                                Select Files
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Additional comments */}
                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 10,
                            color: '#263247',
                            marginTop: 12,
                            marginBottom: 6,
                        }}
                    >
                        Additional Comments (Optional)
                    </Text>

                    <TextInput
                        value={comment}
                        onChangeText={setComment}
                        placeholder="Tambahkan komentar untuk pengajar..."
                        placeholderTextColor="#9299A6"
                        multiline
                        textAlignVertical="top"
                        style={{
                            minHeight: 64,
                            borderWidth: 1,
                            borderColor: '#E1E5EC',
                            borderRadius: 8,
                            padding: 10,
                            fontFamily: 'PlusJakartaSans-Regular',
                            fontSize: 10,
                            color: '#202B40',
                            backgroundColor: '#FFFFFF',
                        }}
                    />

                    {/* Academic integrity confirmation */}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setAgreed((prev) => !prev)}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            gap: 8,
                            marginTop: 12,
                        }}
                    >
                        <View
                            style={{
                                width: 16,
                                height: 16,
                                borderRadius: 4,
                                borderWidth: 1.5,
                                borderColor: agreed ? '#082D78' : '#C5CFE3',
                                backgroundColor: agreed
                                    ? '#082D78'
                                    : '#FFFFFF',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {agreed && (
                                <Lucide
                                    name="check"
                                    size={11}
                                    color="#FFFFFF"
                                />
                            )}
                        </View>

                        <Text
                            style={{
                                flex: 1,
                                fontFamily: 'PlusJakartaSans-Regular',
                                fontSize: 9,
                                lineHeight: 14,
                                color: '#68758A',
                            }}
                        >
                            I confirm that this submission is my own original
                            work and complies with the Academic Integrity
                            Policy.
                        </Text>
                    </TouchableOpacity>

                    {/* Submit button */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => router.replace(`/courses/${courseId}/assignments/success`)}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 6,
                            backgroundColor: '#082D78',
                            borderRadius: 8,
                            paddingVertical: 12,
                            marginTop: 14,
                        }}
                    >
                        <Lucide name="upload" size={13} color="#FFFFFF" />

                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Bold',
                                fontSize: 11,
                                color: '#FFFFFF',
                            }}
                        >
                            Unggah Tugas
                        </Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>
        </View>
    );
}       