import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Lucide from "@react-native-vector-icons/lucide";
import Header from "../components/Header";
import { router } from 'expo-router';

const initialCourses = [
    {
        id: "1",
        title: "Matematika Diskrit",
        lecturer: "Dr. Moreno",
        credits: 4,
        semester: 3,
        progress: 75,
        status: "Aktif",
        favorite: true,
    },
    {
        id: "2",
        title: "Basis Data",
        lecturer: "Dr.eng Komang Multo",
        credits: 4,
        semester: 3,
        progress: 40,
        status: "Aktif",
        favorite: false,
    },
    {
        id: "3",
        title: "Sistem Operasi",
        lecturer: "Agus Setiawan, S.T., M.T.",
        credits: 3,
        semester: 3,
        progress: 25,
        status: "Aktif",
        favorite: false,
    },
    {
        id: "4",
        title: "Pemrograman Mobile",
        lecturer: "I Made Suryawan, S.Kom.",
        credits: 3,
        semester: 3,
        progress: 100,
        status: "Selesai",
        favorite: true,
    },
];

const filters = ["Aktif", "Selesai", "Favorit"];

export default function CoursesScreen() {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("Aktif");

    const filteredCourses = initialCourses.filter((course) => {
        const matchesSearch =
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.lecturer.toLowerCase().includes(search.toLowerCase());

        const matchesFilter =
            activeFilter === "Favorit"
                ? course.favorite
                : course.status === activeFilter;

        return matchesSearch && matchesFilter;
    });

    return (
        <View style={{ flex: 1, backgroundColor: "#F8F9FB" }}>
            <Header />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingTop: 10,
                    paddingBottom: 20,
                }}>
                {/* Search Input */}
                <View
                    style={{
                        height: 31,
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        borderWidth: 1,
                        borderColor: "#E7E9ED",
                        borderRadius: 9,
                        paddingHorizontal: 10,
                        marginBottom: 10,
                    }}>
                    <Lucide name="search" size={14} color="#68758A" />

                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder="Cari mata kuliah..."
                        placeholderTextColor="#8A91A0"
                        style={{
                            flex: 1,
                            height: "100%",
                            marginLeft: 8,
                            paddingVertical: 0,
                            fontFamily: "PlusJakartaSans-Regular",
                            fontSize: 10,
                            color: "#252B35",
                            outlineStyle: "none",
                        }}
                    />

                    {search.length > 0 && (
                        <TouchableOpacity onPress={() => setSearch("")}>
                            <Lucide name="x" size={14} color="#68758A" />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Filter Tabs */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 15,
                    }}>
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;

                        return (
                            <TouchableOpacity
                                key={filter}
                                onPress={() => setActiveFilter(filter)}
                                activeOpacity={0.8}
                                style={{
                                    height: 25,
                                    minWidth: filter === "Favorit" ? 61 : 51,
                                    paddingHorizontal: 13,
                                    borderRadius: 20,
                                    backgroundColor: isActive
                                        ? "#002F87"
                                        : "#FFFFFF",
                                    borderWidth: isActive ? 0 : 1,
                                    borderColor: "#E5E7EB",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Text
                                    style={{
                                        fontFamily: isActive
                                            ? "PlusJakartaSans-SemiBold"
                                            : "PlusJakartaSans-Medium",
                                        fontSize: 9,
                                        color: isActive ? "#FFFFFF" : "#555D69",
                                    }}>
                                    {filter}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Course List */}
                <View style={{ gap: 10 }}>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <TouchableOpacity
                                key={course.id}
                                onPress={() => router.push(`/courses/${course.id}`)}
                                activeOpacity={0.9}
                                style={{
                                    minHeight: 130,
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: 11,
                                    borderWidth: 1,
                                    borderColor: "#E7E9ED",
                                    paddingHorizontal: 15,
                                    paddingVertical: 13,
                                    justifyContent: "center",
                                    shadowColor: "#000000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.025,
                                    shadowRadius: 2,
                                    elevation: 1,
                                }}>
                                {/* Course Title */}
                                <Text
                                    style={{
                                        fontFamily: "PlusJakartaSans-Bold",
                                        fontSize: 12,
                                        color: "#25282D",
                                        marginBottom: 3,
                                    }}>
                                    {course.title}
                                </Text>

                                {/* Lecturer */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 4,
                                        marginBottom: 6,
                                    }}>
                                    <Lucide
                                        name="user-round"
                                        size={10}
                                        color="#68758A"
                                    />

                                    <Text
                                        style={{
                                            fontFamily:
                                                "PlusJakartaSans-Regular",
                                            fontSize: 9,
                                            color: "#68758A",
                                        }}>
                                        {course.lecturer}
                                    </Text>
                                </View>

                                {/* Credits and Semester */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 12,
                                        marginBottom: 9,
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: 4,
                                        }}>
                                        <Lucide
                                            name="book-open"
                                            size={9}
                                            color="#68758A"
                                        />

                                        <Text
                                            style={{
                                                fontFamily:
                                                    "PlusJakartaSans-Regular",
                                                fontSize: 8,
                                                color: "#68758A",
                                            }}>
                                            {course.credits} SKS
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: 4,
                                        }}>
                                        <Lucide
                                            name="graduation-cap"
                                            size={10}
                                            color="#68758A"
                                        />

                                        <Text
                                            style={{
                                                fontFamily:
                                                    "PlusJakartaSans-Regular",
                                                fontSize: 8,
                                                color: "#68758A",
                                            }}>
                                            Semester {course.semester}
                                        </Text>
                                    </View>
                                </View>

                                {/* Progress Header */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: 5,
                                    }}>
                                    <Text
                                        style={{
                                            fontFamily:
                                                "PlusJakartaSans-Regular",
                                            fontSize: 8,
                                            color: "#343A46",
                                        }}>
                                        Progress Belajar
                                    </Text>

                                    <Text
                                        style={{
                                            fontFamily: "PlusJakartaSans-Bold",
                                            fontSize: 8,
                                            color: "#002F87",
                                        }}>
                                        {course.progress}%
                                    </Text>
                                </View>

                                {/* Progress Bar */}
                                <View
                                    style={{
                                        height: 5,
                                        backgroundColor: "#ECEDEF",
                                        borderRadius: 10,
                                        overflow: "hidden",
                                    }}>
                                    <View
                                        style={{
                                            height: "100%",
                                            width: `${course.progress}%`,
                                            backgroundColor: "#002F87",
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <View
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: 11,
                                borderWidth: 1,
                                borderColor: "#E7E9ED",
                                padding: 25,
                                alignItems: "center",
                            }}>
                            <Lucide
                                name="book-open"
                                size={25}
                                color="#A0A8B5"
                            />

                            <Text
                                style={{
                                    fontFamily: "PlusJakartaSans-SemiBold",
                                    fontSize: 11,
                                    color: "#68758A",
                                    marginTop: 9,
                                }}>
                                Mata kuliah tidak ditemukan
                            </Text>

                            <Text
                                style={{
                                    fontFamily: "PlusJakartaSans-Regular",
                                    fontSize: 9,
                                    color: "#A0A8B5",
                                    marginTop: 3,
                                }}>
                                Coba kata kunci atau filter lainnya.
                            </Text>
                        </View>
                    )}
                </View>

                {/* Global Announcements */}
                <View style={{ marginTop: 22 }}>
                    <Text
                        style={{
                            fontFamily: "PlusJakartaSans-Bold",
                            fontSize: 18,
                            color: "#002F87",
                            marginBottom: 15,
                        }}>
                        Pengumuman Global
                    </Text>

                    {[
                        {
                            title: "Jadwal Ujian Tengah Semester (UTS)",
                            description:
                                "Jadwal lengkap UTS Gasal 2025/2026 sudah dapat diunduh di portal akademik.",
                            date: "20 Okt",
                            year: "2025",
                        },
                        {
                            title: "Libur Nasional - Maulid Nabi",
                            description:
                                "Perkuliahan ditiadakan pada hari Kamis, 20 September 2025.",
                            date: "20 Sep",
                            year: "2025",
                        },
                    ].map((announcement, index) => (
                        <View
                            key={index}
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: 12,
                                borderWidth: 1,
                                borderColor: "#E1E4E9",
                                padding: 20,
                                marginBottom: 12,
                                shadowColor: "#000000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.04,
                                shadowRadius: 2,
                                elevation: 1,
                            }}>
                            {/* Title and Date */}
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    gap: 10,
                                    marginBottom: 10,
                                }}>
                                <Text
                                    style={{
                                        flex: 1,
                                        fontFamily: "PlusJakartaSans-Bold",
                                        fontSize: 13,
                                        lineHeight: 19,
                                        color: "#002F87",
                                    }}>
                                    {announcement.title}
                                </Text>

                                <View
                                    style={{
                                        backgroundColor: "#ECEDEF",
                                        borderRadius: 5,
                                        paddingHorizontal: 8,
                                        paddingVertical: 4,
                                        alignItems: "center",
                                        minWidth: 51,
                                    }}>
                                    <Text
                                        style={{
                                            fontFamily:
                                                "PlusJakartaSans-Medium",
                                            fontSize: 10,
                                            color: "#596273",
                                        }}>
                                        {announcement.date}
                                    </Text>

                                    <Text
                                        style={{
                                            fontFamily:
                                                "PlusJakartaSans-Medium",
                                            fontSize: 10,
                                            color: "#596273",
                                        }}>
                                        {announcement.year}
                                    </Text>
                                </View>
                            </View>

                            {/* Description */}
                            <Text
                                style={{
                                    fontFamily: "PlusJakartaSans-Regular",
                                    fontSize: 12,
                                    lineHeight: 19,
                                    color: "#454B57",
                                }}>
                                {announcement.description}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
