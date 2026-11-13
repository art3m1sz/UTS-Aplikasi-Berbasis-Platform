
import { View, Text } from 'react-native';
import Header from '../../src/components/Header';

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#F8F9FB' }}>
            <Header />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    fontFamily: 'PlusJakartaSans-SemiBold',
                    color: '#002448',
                    fontSize: 15,
                }}>
                    Profil
                </Text>
            </View>
        </View>
    );
}
