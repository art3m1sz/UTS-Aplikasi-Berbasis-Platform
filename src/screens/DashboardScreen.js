import React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import Lucide from "@react-native-vector-icons/lucide";
import * as Font from "expo-font";
import { router } from 'expo-router';

// Dummy Data
const tasks = [
    {
        id: 1,
        title: "Matematika Diskrit",
        description: "Implementasi Sorting & Searching",
        remaining: "Sisa 12 Jam",
    },
];

const courses = [
    {
        id: 1,
        title: "Matematika Diskrit",
        lecturer: "Dr. Moreno",
        sks: 4,
        semester: 3,
        progress: 75,
    },
    {
        id: 2,
        title: "Basis Data",
        lecturer: "Dr. Eng Komang Multo",
        sks: 4,
        semester: 3,
        progress: 40,
    },
];

export default function DashboardScreen() {
    return (
        <View
            style={{
                width: "100%",
                flex: 1,
                backgroundColor: "#F7F8FA",
            }}>
            {/* HEADER */}
            <View
                style={{
                    height: 58,
                    backgroundColor: "#FFFFFF",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    elevation: 3,
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 9,
                    }}>
                    {/* Avatar */}
                    <View
                        style={{
                            width: 35,
                            height: 35,
                            borderRadius: 20,
                            backgroundColor: "#DCE5F3",
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "#D1D9E6",
                        }}>
                        <Lucide name="user-round" size={21} color="#183B64" />
                    </View>

                    <View>
                        <Text
                            style={{
                                fontSize: 10,
                                color: "#555555",
                            }}>
                            Welcome back,
                        </Text>

                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: "700",
                                color: "#092D54",
                            }}>
                            Sahreno
                        </Text>
                    </View>
                </View>

                <Lucide name="headset" size={19} color="#34465B" />
            </View>

            {/* MAIN CONTENT */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingTop: 12,
                    paddingBottom: 20,
                }}>
                {/* TASK SECTION */}
                <View
                    style={{
                        marginBottom: 12,
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 9,
                            paddingHorizontal: 2,
                        }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: "700",
                                color: "#102E52",
                            }}>
                            Tugas Anda
                        </Text>

                        <Text
                            style={{
                                fontSize: 10,
                                color: "#183B64",
                                textDecorationLine: "underline",
                            }}>
                            Lihat semua
                        </Text>
                    </View>

                    {tasks.map((task) => (
                        <View
                            key={task.id}
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: 11,
                                padding: 10,
                                borderWidth: 1,
                                borderColor: "#E5E5E5",
                                elevation: 2,
                                shadowColor: "#000000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.08,
                                shadowRadius: 3,
                            }}>
                            {/* Task Header */}
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: 7,
                                }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 5,
                                    }}>
                                    <Lucide
                                        name="alert-triangle"
                                        size={13}
                                        color="#DC2626"
                                    />

                                    <Text
                                        style={{
                                            fontSize: 9,
                                            fontWeight: "700",
                                            color: "#C62828",
                                        }}>
                                        TUGAS HARI INI
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        backgroundColor: "#B91C1C",
                                        paddingHorizontal: 9,
                                        paddingVertical: 4,
                                        borderRadius: 20,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 8,
                                            color: "#FFFFFF",
                                            fontWeight: "600",
                                        }}>
                                        {task.remaining}
                                    </Text>
                                </View>
                            </View>

                            {/* Task Information */}
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: "700",
                                    color: "#102E52",
                                    marginBottom: 3,
                                }}>
                                {task.title}
                            </Text>

                            <Text
                                style={{
                                    fontSize: 10,
                                    color: "#777777",
                                    marginBottom: 10,
                                }}>
                                {task.description}
                            </Text>

                            {/* Task Button */}
                            <View
                                style={{
                                    alignSelf: "flex-start",
                                    backgroundColor: "#082D54",
                                    paddingHorizontal: 13,
                                    paddingVertical: 7,
                                    borderRadius: 7,
                                }}>
                                <Text
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: 9,
                                        fontWeight: "600",
                                    }}>
                                    Kerjakan Sekarang
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* COURSE PROGRESS SECTION */}
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 9,
                            paddingHorizontal: 2,
                        }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: "700",
                                color: "#102E52",
                            }}>
                            Progress Mata Kuliah
                        </Text>

                        <Text
                            style={{
                                fontSize: 10,
                                color: "#183B64",
                                textDecorationLine: "underline",
                            }}>
                            Lihat semua
                        </Text>
                    </View>

                    {/* Course Cards */}
                    <View style={{ gap: 10 }}>
                        {courses.map((course) => (
                            <TouchableOpacity
                                onPress={() =>
                                    router.push(`/courses/${course.id}`)
                                }
                                key={course.id}
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: 11,
                                    padding: 14,
                                    borderWidth: 1,
                                    borderColor: "#E5E5E5",
                                }}>
                                {/* Course Name */}
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontWeight: "700",
                                        color: "#262626",
                                        marginBottom: 5,
                                    }}>
                                    {course.title}
                                </Text>

                                {/* Lecturer */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 5,
                                        marginBottom: 7,
                                    }}>
                                    <Lucide
                                        name="user-round"
                                        size={21}
                                        color="#183B64"
                                    />

                                    <Text
                                        style={{
                                            fontSize: 9,
                                            color: "#7B8493",
                                        }}>
                                        {course.lecturer}
                                    </Text>
                                </View>

                                {/* Course Details */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 12,
                                        marginBottom: 13,
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: 4,
                                        }}>
                                        <Lucide
                                            name="book-open"
                                            size={10}
                                            color="#778397"
                                        />

                                        <Text
                                            style={{
                                                fontSize: 9,
                                                color: "#7B8493",
                                            }}>
                                            {course.sks} SKS
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
                                            size={11}
                                            color="#778397"
                                        />

                                        <Text
                                            style={{
                                                fontSize: 9,
                                                color: "#7B8493",
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
                                            fontSize: 9,
                                            color: "#333333",
                                        }}>
                                        Progress Belajar
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: 9,
                                            fontWeight: "700",
                                            color: "#092D54",
                                        }}>
                                        {course.progress}%
                                    </Text>
                                </View>

                                {/* Progress Bar */}
                                <View
                                    style={{
                                        height: 5,
                                        width: "100%",
                                        backgroundColor: "#E9E9E9",
                                        borderRadius: 10,
                                        overflow: "hidden",
                                    }}>
                                    <View
                                        style={{
                                            height: "100%",
                                            width: `${course.progress}%`,
                                            backgroundColor: "#092D78",
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
