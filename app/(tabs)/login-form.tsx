import React, {useState} from 'react';
import {
    Button,
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

type ErrorsType = {
    username?: string,
    password?: string
}

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState<ErrorsType>({})

    const validateForm = () => {
        const errors = {} as ErrorsType

        if (!username) {
            errors.username = 'Username is required'
        }

        if (!password) {
            errors.password = 'Password is required'
        }

        setErrors(errors)

        return Object.keys(errors).length === 0
    }

    const handleSubmit = () => {
        if (validateForm()) {
            setUsername('')
            setPassword('')
            setErrors({})
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <KeyboardAvoidingView
                style={styles.container}
                behavior={'padding'}
                keyboardVerticalOffset={100}
            >
                <View style={styles.form}>
                    <Image
                        source={require('../../assets/images/adaptive-icon.png')}
                        style={styles.image}
                    />
                    <Text style={styles.label}>Username: </Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholder={'Enter your username'}
                    />

                    {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

                    <Text style={styles.label}>Password: </Text>
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder={'Enter your password'}
                    />

                    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                    <Button
                        title={'Login'}
                        onPress={handleSubmit}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    form: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 24
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 24,
        alignSelf: 'center'
    }
})