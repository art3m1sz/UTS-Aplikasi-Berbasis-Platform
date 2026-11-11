import Lucide from "@react-native-vector-icons/lucide";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { router } from 'expo-router';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView,
} from "react-native";

export default function LoginScreen() {
    useEffect(() => {
        const fonts = [
            "PlusJakartaSans-Regular",
            "PlusJakartaSans-Medium",
            "PlusJakartaSans-SemiBold",
            "PlusJakartaSans-Bold",
        ];

        console.log("========== FONT STATUS ==========");

        fonts.forEach((font) => {
            const loaded = Font.isLoaded(font);

            console.log(`${font}: ${loaded ? "LOADED" : "NOT LOADED"}`);
        });

        console.log("=================================");
    }, []);

    const [nimFocused, setNimFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <View style={{ width: "100%", flex: 1, backgroundColor: "#E8ECF8" }}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 30,
                    paddingHorizontal: 20,
                }}
                keyboardShouldPersistTaps="handled">
                <View
                    style={{
                        width: "100%",
                        maxWidth: 400,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 10,
                        paddingHorizontal: 18,
                        paddingVertical: 30,
                        shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.18,
                        shadowRadius: 3,
                        elevation: 5,
                    }}>
                    {/* Logo */}
                    <View
                        style={{
                            alignItems: "center",
                            marginBottom: 12,
                        }}>
                        <Image
                            source={require("../../assets/stikom-logo.png")}
                            style={{
                                width: 105,
                                height: 105,
                            }}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Header */}
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: "700",
                            color: "#06264A",
                            textAlign: "center",
                        }}>
                        Sign In
                    </Text>

                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: "Corinthia-Bold",
                            color: "#999999",
                            textAlign: "center",
                            marginTop: 5,
                            marginBottom: 30,
                        }}>
                        Always The First
                    </Text>

                    {/* NIM */}
                    <View style={{ marginBottom: 14 }}>
                        <Text
                            style={{
                                fontSize: 10,
                                fontWeight: "500",
                                color: "#202020",
                                marginBottom: 5,
                            }}>
                            Nomor Induk Mahasiswa
                        </Text>

                        <View
                            style={{
                                height: 43,
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#F3F3F7",
                                borderColor: nimFocused ? "#000000" : "#E9E9EF",
                                borderWidth: 1,
                                borderColor: "#E9E9EF",
                                borderRadius: 9,
                            }}>
                            <TextInput
                                style={{
                                    flex: 1,
                                    height: "100%",
                                    fontSize: 13,
                                    color: "#202020",
                                    paddingVertical: 0,
                                }}
                                onFocus={() => setNimFocused(true)}
                                onBlur={() => setNimFocused(false)}
                                placeholder=""
                                placeholderTextColor="#A0A0A0"
                            />

                            <Lucide
                                name="user"
                                size={16}
                                color="#A0A0A0"
                                style={{ marginRight: 10 }}
                            />
                        </View>
                    </View>

                    {/* Password */}
                    <View style={{ marginBottom: 14 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                            <Text
                                style={{
                                    fontSize: 10,
                                    fontWeight: "500",
                                    color: "#202020",
                                    marginBottom: 5,
                                }}>
                                Password
                            </Text>

                            <TouchableOpacity>
                                <Text
                                    style={{
                                        fontSize: 10,
                                        fontWeight: "600",
                                        color: "#06264A",
                                        textDecorationLine: "underline",
                                        marginBottom: 5,
                                    }}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                height: 43,
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#F3F3F7",
                                borderWidth: 1,
                                borderColor: "#E9E9EF",
                                borderRadius: 9,
                            }}>
                            <TextInput
                                style={{
                                    flex: 1,
                                    height: "100%",
                                    fontSize: 13,
                                    color: "#202020",
                                    paddingVertical: 0,
                                }}
                                secureTextEntry
                                placeholder=""
                                placeholderTextColor="#A0A0A0"
                            />
                            <Lucide
                                name="lock"
                                size={16}
                                color="#A0A0A0"
                                style={{ marginRight: 10 }}
                            />
                        </View>
                    </View>

                    {/* Button Sign in */}
                    <TouchableOpacity
                        onPress={() => router.replace('/(tabs)')}
                        activeOpacity={0.8}
                        style={{
                            height: 43,
                            backgroundColor: "#002448",
                            borderRadius: 8,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 1,
                            shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.2,
                            shadowRadius: 4,
                            elevation: 4,
                        }}>
                        <Text
                            style={{
                                color: "#FFFFFF",
                                fontSize: 12,
                                fontWeight: "500",
                            }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>

                    {/* Contact Support */}
                    <View
                        style={{
                            alignItems: "center",
                            marginTop: 16,
                        }}>
                        <Text
                            style={{
                                fontSize: 11,
                                color: "#999999",
                                marginBottom: 4,
                            }}>
                            Perlu Bantuan?
                        </Text>

                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: "#222222",
                                    textDecorationLine: "underline",
                                    fontWeight: "500",
                                }}>
                                Contact IT Support
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
