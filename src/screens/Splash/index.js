import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUser} from 'src/redux/slice/user';
import {sendPost} from 'src/network/request';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
    const dispatch = useDispatch();

    const initApp = async () => {
        const userId = await AsyncStorage.getItem('id');

        const token = await AsyncStorage.getItem('token');

        if (userId && token) {
            setTimeout(async () => {
                const res = await sendPost('/users/getdata', {userId: userId});

                if (res.status === 200) {
                    dispatch(setUser(res.data));

                    navigation.replace('HomeStack');
                } else {
                    navigation.replace('Login');
                }
            }, 1000);
        } else {
            navigation.replace('Login');
        }
    };

    useEffect(() => {
        initApp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
export default Splash;
