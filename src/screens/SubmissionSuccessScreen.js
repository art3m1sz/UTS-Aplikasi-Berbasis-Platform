import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { router } from 'expo-router';
import Lucide from '@react-native-vector-icons/lucide';
import Header from '../components/Header';

const receipt = {
    fileName: '240040032_Sahreno_BA244.PDF',
    details: [
        { id: 1, label: 'Mata Kuliah', value: 'Matematika Diskrit', bold: true },
        { id: 2, label: 'Waktu Pengiriman', value: '14 Jun 2025, 14:25 WIB' },
        { id: 3, label: 'ID_Pengumpulan', value: 'RCPT-8829-X12', mono: true },
    ],
    file: {
        name: '240040032_Sahreno_BA244.pdf',
        size: '4.2 MB',
        status: 'Terenkripsi',
    },
};

const SCREEN_BG = '#F8F9FB';

export default function SubmissionSuccessScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: SCREEN_BG }}>
            <Header />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 12,
                    paddingTop: 24,
                    paddingBottom: 20,
                }}
            >
                {/* Success message */}
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <View
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: 14,
                            backgroundColor: '#E3F6EC',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 14,
                        }}
                    >
                        <View
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: 16,
                                backgroundColor: '#16B981',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Lucide name="check" size={18} color="#FFFFFF" />
                        </View>
                    </View>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 17,
                            color: '#082D78',
                            textAlign: 'center',
                        }}
                    >
                        Tugas Berhasil Dikumpulkan!
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Regular',
                            fontSize: 11,
                            lineHeight: 17,
                            color: '#68758A',
                            textAlign: 'center',
                            marginTop: 6,
                            paddingHorizontal: 24,
                        }}
                    >
                        Pekerjaan Anda telah terverifikasi dan disimpan di
                        server kampus.
                    </Text>
                </View>

                {/* Digital receipt */}
                <View
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#E9ECF1',
                    }}
                >
                    <View
                        style={{
                            height: 4,
                            backgroundColor: '#082D78',
                            borderTopLeftRadius: 9,
                            borderTopRightRadius: 9,
                        }}
                    />

                    {/* Receipt heading */}
                    <View style={{ padding: 16, paddingBottom: 6 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Bold',
                                    fontSize: 9,
                                    letterSpacing: 0.5,
                                    color: '#082D78',
                                }}
                            >
                                TANDA TERIMA DIGITAL
                            </Text>

                            <Lucide
                                name="file-text"
                                size={14}
                                color="#9AB0DA"
                            />
                        </View>

                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Bold',
                                fontSize: 16,
                                lineHeight: 22,
                                color: '#202B40',
                                marginTop: 6,
                                marginBottom: 8,
                            }}
                        >
                            {receipt.fileName}
                        </Text>
                    </View>

                    {/* Receipt details */}
                    <View style={{ paddingHorizontal: 16 }}>
                        {receipt.details.map((item, index) => (
                            <View
                                key={item.id}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingVertical: 12,
                                    borderBottomWidth:
                                        index === receipt.details.length - 1
                                            ? 0
                                            : 1,
                                    borderBottomColor: '#EDF0F4',
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'PlusJakartaSans-Medium',
                                        fontSize: 10,
                                        color: '#68758A',
                                    }}
                                >
                                    {item.label}
                                </Text>

                                <Text
                                    style={
                                        item.mono
                                            ? {
                                                  fontFamily: Platform.select({
                                                      ios: 'Courier',
                                                      android: 'monospace',
                                                  }),
                                                  fontWeight: '700',
                                                  fontSize: 10.5,
                                                  color: '#082D78',
                                              }
                                            : {
                                                  fontFamily: item.bold
                                                      ? 'PlusJakartaSans-Bold'
                                                      : 'PlusJakartaSans-Medium',
                                                  fontSize: item.bold ? 12 : 10,
                                                  color: item.bold
                                                      ? '#202B40'
                                                      : '#454B57',
                                              }
                                    }
                                >
                                    {item.value}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Ticket divider with notches */}
                    <View style={{ height: 16, justifyContent: 'center' }}>
                        <View
                            style={{
                                marginHorizontal: 16,
                                height: 1,
                                overflow: 'hidden',
                            }}
                        >
                            <View
                                style={{
                                    height: 2,
                                    borderWidth: 1,
                                    borderStyle: 'dashed',
                                    borderColor: '#D5DBE6',
                                    borderRadius: 1,
                                }}
                            />
                        </View>

                        <View
                            style={{
                                position: 'absolute',
                                left: -9,
                                width: 16,
                                height: 16,
                                borderRadius: 8,
                                backgroundColor: SCREEN_BG,
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                right: -9,
                                width: 16,
                                height: 16,
                                borderRadius: 8,
                                backgroundColor: SCREEN_BG,
                            }}
                        />
                    </View>

                    {/* Uploaded file */}
                    <View style={{ padding: 16, paddingTop: 8 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#F3F4F6',
                                borderRadius: 8,
                                padding: 10,
                                gap: 10,
                            }}
                        >
                            <View
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 6,
                                    backgroundColor: '#FDEDED',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Lucide
                                    name="file-text"
                                    size={15}
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
                                    {receipt.file.name}
                                </Text>

                                <Text
                                    style={{
                                        fontFamily: 'PlusJakartaSans-Medium',
                                        fontSize: 9,
                                        color: '#858B98',
                                        marginTop: 1,
                                    }}
                                >
                                    {receipt.file.size} •{' '}
                                    {receipt.file.status}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Actions */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        backgroundColor: '#082D78',
                        borderRadius: 6,
                        paddingVertical: 12,
                        marginTop: 14,
                    }}
                >
                    <Lucide name="download" size={13} color="#FFFFFF" />

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 11,
                            color: '#FFFFFF',
                        }}
                    >
                        Unduh Bukti (PDF)
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => router.replace('/(tabs)')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderColor: '#082D78',
                        borderRadius: 6,
                        paddingVertical: 12,
                        marginTop: 8,
                    }}
                >
                    <Lucide
                        name="layout-dashboard"
                        size={13}
                        color="#082D78"
                    />

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 11,
                            color: '#082D78',
                        }}
                    >
                        Kembali ke Dashboard
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}