import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {sendGet} from 'src/network/request';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    const getDataFilms = () => {
        sendGet('/films/data')
            .then(res => {
                // console.log(res);
            })
            .catch(function (error) {});
    };

    useEffect(() => {
        getDataFilms();
    }, []);

    return (
        <View>
            <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={() => {}}>
                Login with Facebook
            </Icon.Button>
        </View>
    );
};

export default Home;
