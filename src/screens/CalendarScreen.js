
import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Lucide from '@react-native-vector-icons/lucide';
import Header from '../components/Header';

const months = [
    'Januari', 'Februari', 'Maret', 'April',
    'Mei', 'Juni', 'Juli', 'Agustus',
    'September', 'Oktober', 'November', 'Desember',
];

const weekdays = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

const blueEventDates = [2, 6, 10, 14, 18, 24, 30];
const redEventDates = [10, 14];

const schedules = {
    '2025-5-14': [
        {
            time: '08:00',
            endTime: '10:30',
            type: 'Kuliah',
            title: 'Struktur Data & Algoritma',
            location: 'Ruang Lab Mobile',
            color: '#002F87',
            icon: 'graduation-cap',
        },
        {
            time: '23:59',
            endTime: 'Malam ini',
            type: 'Tugas',
            title: 'Tugas Akhir: Implementasi Tree',
            location: 'Ms Teams',
            color: '#E52B35',
            icon: 'graduation-cap',
        },
    ],
    '2025-5-10': [
        {
            time: '08:00',
            endTime: '10:30',
            type: 'Kuliah',
            title: 'Aplikasi Berbasis Platform',
            location: 'Ruang Lab Business Intelligence',
            color: '#002F87',
            icon: 'graduation-cap',
        },
        {
            time: '23:59',
            endTime: 'Malam ini',
            type: 'Tugas',
            title: 'UTS',
            location: 'E-Learning',
            color: '#E52B35',
            icon: 'graduation-cap',
        },
    ],
};

export default function CalendarScreen() {
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5, 1));
    const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 14));

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDayOffset = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = Math.ceil((firstDayOffset + daysInMonth) / 7) * 7;

    const calendarDates = Array.from({ length: totalCells }, (_, index) => {
        return new Date(year, month, index - firstDayOffset + 1);
    });

    const selectedKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
    const selectedSchedules = schedules[selectedKey] || [];

    const changeMonth = (direction) => {
        const nextMonth = new Date(year, month + direction, 1);
        setCurrentMonth(nextMonth);
        setSelectedDate(nextMonth);
    };

    const isSameDate = (date1, date2) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    const formatDateKey = (date) => {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    };

    const getDateIndicator = (date) => {
        if (date.getMonth() !== month) return null;

        const isBlueEvent = blueEventDates.includes(date.getDate());
        const isRedEvent = redEventDates.includes(date.getDate());

        if (!isBlueEvent && !isRedEvent) return null;

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                    marginTop: 2,
                }}
            >
                {isBlueEvent && (
                    <View
                        style={{
                            width: 4,
                            height: 4,
                            borderRadius: 2,
                            backgroundColor: '#002F87',
                        }}
                    />
                )}

                {isRedEvent && (
                    <View
                        style={{
                            width: 4,
                            height: 4,
                            borderRadius: 2,
                            backgroundColor: '#E52B35',
                        }}
                    />
                )}
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#F8F9FB' }}>
            <Header />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 14,
                    paddingBottom: 24,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'PlusJakartaSans-SemiBold',
                        fontSize: 15,
                        color: '#002448',
                        marginBottom: 9,
                    }}
                >
                    Kalender Akademik
                </Text>

                {/* Calendar Container */}
                <View
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: '#E6E8EC',
                        overflow: 'hidden',
                    }}
                >
                    {/* Month Navigation */}
                    <View
                        style={{
                            height: 43,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => changeMonth(-1)}
                            activeOpacity={0.7}
                            style={{ padding: 3 }}
                        >
                            <Lucide name="chevron-left" size={17} color="#4B5563" />
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Bold',
                                fontSize: 12,
                                color: '#002448',
                            }}
                        >
                            {months[month]} {year}
                        </Text>

                        <TouchableOpacity
                            onPress={() => changeMonth(1)}
                            activeOpacity={0.7}
                            style={{ padding: 3 }}
                        >
                            <Lucide name="chevron-right" size={17} color="#4B5563" />
                        </TouchableOpacity>
                    </View>

                    {/* Weekday Labels */}
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 5,
                            marginBottom: 4,
                        }}
                    >
                        {weekdays.map((day, index) => (
                            <View
                                key={day}
                                style={{
                                    width: `${100 / 7}%`,
                                    alignItems: 'center',
                                    paddingVertical: 5,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'PlusJakartaSans-Medium',
                                        fontSize: 8,
                                        color: index === 6 ? '#E52B35' : '#737B88',
                                    }}
                                >
                                    {day}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Calendar Dates */}
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            paddingHorizontal: 5,
                            paddingBottom: 7,
                        }}
                    >
                        {calendarDates.map((date, index) => {
                            const isCurrentMonth = date.getMonth() === month;
                            const isSelected = isSameDate(date, selectedDate);
                            const isSunday = date.getDay() === 0;

                            return (
                                <TouchableOpacity
                                    key={formatDateKey(date)}
                                    activeOpacity={0.7}
                                    onPress={() => setSelectedDate(date)}
                                    style={{
                                        width: `${100 / 7}%`,
                                        height: 35,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 27,
                                            height: 27,
                                            borderRadius: 14,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: isSelected ? '#002F87' : 'transparent',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: isSelected
                                                    ? 'PlusJakartaSans-Bold'
                                                    : 'PlusJakartaSans-Regular',
                                                fontSize: 9,
                                                color: isSelected
                                                    ? '#FFFFFF'
                                                    : !isCurrentMonth
                                                        ? '#C5CAD2'
                                                        : isSunday
                                                            ? '#E52B35'
                                                            : '#252B35',
                                            }}
                                        >
                                            {date.getDate()}
                                        </Text>
                                    </View>

                                    {getDateIndicator(date)}
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    {/* Calendar Legend */}
                    <View
                        style={{
                            height: 30,
                            borderTopWidth: 1,
                            borderTopColor: '#ECEEF1',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 14,
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <View
                                style={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: 3,
                                    backgroundColor: '#002F87',
                                }}
                            />
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Regular',
                                    fontSize: 8,
                                    color: '#4B5563',
                                }}
                            >
                                Jadwal Kuliah
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <View
                                style={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: 3,
                                    backgroundColor: '#E52B35',
                                }}
                            />
                            <Text
                                style={{
                                    fontFamily: 'PlusJakartaSans-Regular',
                                    fontSize: 8,
                                    color: '#4B5563',
                                }}
                            >
                                Tenggat Tugas
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Daily Schedule Heading */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 11,
                        marginBottom: 9,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Bold',
                            fontSize: 12,
                            color: '#002448',
                        }}
                    >
                        Jadwal Hari Ini
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'PlusJakartaSans-Medium',
                            fontSize: 9,
                            color: '#002F87',
                        }}
                    >
                        {selectedDate.getDate()} {months[selectedDate.getMonth()]}
                    </Text>
                </View>

                {/* Schedule Cards */}
                {selectedSchedules.length > 0 ? (
                    <View style={{ gap: 8 }}>
                        {selectedSchedules.map((item, index) => (
                            <View
                                key={`${item.title}-${index}`}
                                style={{
                                    minHeight: 59,
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 8,
                                    borderWidth: 1,
                                    borderColor: item.color === '#E52B35' ? '#F9DCDD' : '#E2E8F0',
                                    borderLeftWidth: 3,
                                    borderLeftColor: item.color,
                                    flexDirection: 'row',
                                    paddingVertical: 8,
                                    paddingHorizontal: 9,
                                }}
                            >
                                {/* Time */}
                                <View
                                    style={{
                                        width: 43,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRightWidth: 1,
                                        borderRightColor: '#ECEEF1',
                                        marginRight: 9,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: 'PlusJakartaSans-SemiBold',
                                            fontSize: 8,
                                            color: '#202936',
                                        }}
                                    >
                                        {item.time}
                                    </Text>

                                    <Text
                                        style={{
                                            fontFamily: 'PlusJakartaSans-Regular',
                                            fontSize: 7,
                                            color: item.color === '#E52B35' ? '#E52B35' : '#596273',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.endTime}
                                    </Text>
                                </View>

                                {/* Schedule Details */}
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: 3,
                                            marginBottom: 2,
                                        }}
                                    >
                                        <Lucide name={item.icon} size={9} color={item.color} />

                                        <Text
                                            style={{
                                                fontFamily: 'PlusJakartaSans-SemiBold',
                                                fontSize: 8,
                                                color: item.color,
                                            }}
                                        >
                                            {item.type}
                                        </Text>
                                    </View>

                                    <Text
                                        style={{
                                            fontFamily: 'PlusJakartaSans-SemiBold',
                                            fontSize: 10,
                                            color: '#002448',
                                        }}
                                    >
                                        {item.title}
                                    </Text>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: 3,
                                            marginTop: 3,
                                        }}
                                    >
                                        <Lucide
                                            name="map-pin"
                                            size={9}
                                            color="#68758A"
                                        />

                                        <Text
                                            style={{
                                                fontFamily: 'PlusJakartaSans-Regular',
                                                fontSize: 7,
                                                color: '#68758A',
                                            }}
                                        >
                                            {item.location}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                ) : (
                    <View
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: '#E6E8EC',
                            padding: 18,
                            alignItems: 'center',
                        }}
                    >
                        <Lucide name="calendar-days" size={22} color="#A0A8B5" />
                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-Medium',
                                fontSize: 10,
                                color: '#68758A',
                                marginTop: 7,
                            }}
                        >
                            Tidak ada jadwal pada tanggal ini
                        </Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}
