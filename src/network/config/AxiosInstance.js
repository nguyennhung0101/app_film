import axios from 'axios';
import {BASE_URL} from 'src/constants/const';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = async () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
    instance.interceptors.request.use(
        async config => {
            const token = await AsyncStorage.getItem('token');

            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
                // console.log('token', token);
            }

            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );

    return instance;
};
export default AxiosInstance;
