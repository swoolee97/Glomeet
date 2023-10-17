import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import BasicButton from '../Styles/BasicButton.js';
import { HeaderBackButton } from '@react-navigation/elements';
const MatchingFilterInterests = ({ navigation }) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [selectedTendency, setSelectedTendency] = useState('');
    const [step, setStep] = useState('interests'); // 'interests' 또는 'tendency'

    const interests = ['사진', '쇼핑', '노래방', '요가', '요리', '테니스', '러닝', '수영', '예술', '여행', '익스트림', '음악', '술', '게임'];
    const tendency = ['외향적', '내향적', '상관없음'];

    const toggleInterest = interest => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const toggleTendency = (tendency) => {
        if (selectedTendency === tendency) {
            setSelectedTendency(''); // 이미 선택된 성향을 다시 클릭하면 해제
        } else {
            setSelectedTendency(tendency); // 아니라면 선택
        }
    };
    useEffect(() => {
        if (step === 'tendency') {
            navigation.setOptions({
                headerBackTitleVisible: false,
                headerLeft: (props) => (
                    <HeaderBackButton {...props} onPress={() => setStep('interests')} />
                )
            });
        } else {
            // 관심분야 선택 화면으로 돌아왔을 때, 기본 동작을 복원
            navigation.setOptions({
                headerLeft: undefined
            });
        }
    }, [step]);
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ backgroundColor: 'white' }}>
                <Text style={styles.AdviceText}>
                    {step === 'interests' ? "원하는 관심분야를\n선택해주세요" : "원하는 성향을\n선택해주세요"}
                </Text>
                {step === 'interests' ? (<View style={styles.pagebar}/>
                ) : (
                <View style={{flexDirection: 'row'}} >
                    <View style={{flex:1}}/>
                    <View style={styles.pagebar}/>
                </View>
                )}
            </View>

            {step === 'interests' ? (
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <FlatList
                    key="interests"
                    style={{marginTop:30}}
                    data={interests}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.button,
                                selectedInterests.includes(item) ? styles.selected : {}
                            ]}
                            onPress={() => toggleInterest(item)}
                        >
                            <Text
                                style={[
                                    styles.selecttext,
                                    selectedInterests.includes(item) ? styles.selectedtext : {}
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                />
                </View>
            ) : (
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <FlatList
                    key="tendency"
                    style={{marginTop:140}}
                    data={tendency}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.buttonTendency,
                                selectedTendency === item ? styles.selected : {}
                            ]}
                            onPress={() => toggleTendency(item)}
                        >
                            <Text
                                style={[
                                    styles.selecttext,
                                    selectedTendency === item ? styles.selectedtext : {}
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                />
                </View>
            )}

            <View style={{ marginBottom: 40, alignItems: 'center' }}>
                <BasicButton
                    style={(step === 'interests' && selectedInterests.length > 0) || (step === 'tendency' && selectedTendency) ? {} : { backgroundColor: '#9FA4B1' }}
                    title="다음으로 넘어가기"
                    onPress={() => {
                        if (step === 'interests') {
                            setStep('tendency');
                        } else if (selectedTendency) {
                            navigation.navigate('NextScreen');
                        }
                    }}
                    disabled={(step === 'interests' && selectedInterests.length === 0) || (step === 'tendency' && !selectedTendency)}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    AdviceText: {
        fontFamily: 'Pretendard-Medium',
        fontSize: 30,
        color: '#000',
        margin: 22,
        marginTop: 75                                                
    },
    pagebar: {
        width: '50%',
        height: 7,
        backgroundColor: '#5782F1'

    },
    button: {
        width: 140,
        height: 45,
        marginVertical: 5,
        marginHorizontal: 7.5,
        backgroundColor: 'white',
        borderColor: '#E8E6EA',
        borderWidth:1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTendency: {
        width: 327,
        height: 56,
        marginVertical: 5,
        backgroundColor: 'white',
        borderColor: '#E8E6EA',
        borderWidth:1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: '#5782F1',
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        borderColor: '#5782F1',
        borderWidth:1,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // Android에서도 동작하게 하기 위한 속성
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
    },
    selecttext:{
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 14,
    },
    selectedtext: {
        color: 'white',
    }
});

export default MatchingFilterInterests;