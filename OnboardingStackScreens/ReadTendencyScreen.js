import React, { useState } from 'react';
import { SafeAreaView, View, Image, Modal, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import BasicModal from '../Styles/BasicModal';
import BasicButton from '../Styles/BasicButton';

const ReadTendencyScreen = ({navigation}) => {
    const handleNextPagePress = () => {
        navigation.navigate('StartScreen');
    }
    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    const [modalVisible, setModalVisible] = useState(false);  // 모달의 보이기/숨기기 상태

    return(
        <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <BasicModal
                animationType="fade"
                transparent={true}
                title={'‘글로밋’에서 보내는 정보 및\n알림(push)를 받아보시겠습니까?'}
                visible={modalVisible}
                isVisible={modalVisible}
                onClose={() => {
                    navigation.navigate('StartScreen');
                    setModalVisible(false);}}
                confirmButtonText = "수락"
                cancelButtonText = "거절"
                height={227}
                content={'수신 동의 시 챌린지 및 매칭 완료 등\n정보에 대한 알림을 받아보실 수 있습니다.'}
                textStyle={{textAlign:'center'}}
                onConfirm={() => {
                    navigation.navigate('StartScreen');
                    setModalVisible(false);
                }}
            >
            </BasicModal>
                
            <View style={{alignItems: 'center'}}>
                <Image source={require('../images/3.png')} style={{width: 337, height:2.4, marginTop: 10, marginBottom: 70}} />
            </View>
            
            <View style={{alignItems: 'center', marginBottom: 20, width: 327, marginLeft: 32}}>
                <Text style={{fontSize: 24, fontFamily:'Pretendard-SemiBold',marginBottom: 30, textAlign: 'center', color:'#000', lineHeight: 32}}>
                    당신의 {'\n'}성향은 무엇인가요?
                </Text>
                <Text style={{fontSize: 16, fontFamily:'Pretendard-Regular', textAlign: 'center', color:'#000', lineHeight: 24}}>
                    Choose one option for now. You can explore others later.
                </Text>
            </View>

            <View style={{height: 395, alignItems: 'center', justifyContent:'center', }}>
                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '내향적' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('내향적')}
                >
                    <Text style={[ {fontFamily: 'Pretendard-SemiBold',fontSize: 16, color: selectedButton === '내향적' ? 'white' : '#868686'}]}>내향적</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '외향적' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('외향적')}
                >
                    <Text style={[{fontFamily: 'Pretendard-SemiBold',fontSize: 16, color: selectedButton === '외향적' ? 'white' : '#868686'}]}>외향적</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                <BasicButton
                title='다음으로 넘어가기'
                onPress={() => {
                    if (selectedButton) {
                        setModalVisible(true);
                    } else {
                        alert('버튼을 하나 선택해주세요.');
                    }
                }}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      width: 240,
    },
    button: {
        marginHorizontal: '5%',
        width: 327,
        backgroundColor: '#5782F1',
        borderRadius: 25,
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
        height: 52,
        marginVertical:'3%'
    },
    selectedButton: {
        backgroundColor: '#5782F1',
        borderWidth: 0,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        fontFamily: 'Pretendard-Bold',
        color: '#ffffff',
        fontSize: 18,
    },
  });

export default ReadTendencyScreen;