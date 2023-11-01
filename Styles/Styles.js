import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        
        alignItems: 'center',
    },
    button: {
        marginHorizontal: '5%',
        width: '90%',
        backgroundColor: '#5782F1',
        borderRadius: 25,
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
        height: 52,
        marginVertical:'3%'
    },
    selectedButton: {
        backgroundColor: 'blue',
    },
    buttonText: {
        fontFamily: 'Pretendard-Bold',
        color: '#ffffff',
        fontSize: 18,
    },
    notice: {
        margin: '3%',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    shadowBox: {
        borderRadius: 2,
        width: 177,
        height: 68,
        backgroundColor: 'white',
        shadowColor: "#F8F4FF",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        borderWidth: 0.1,
        borderColor: '#D3D3D3',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // Android에서도 동작하게 하기 위한 속성
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
    },
    navtext:{
        fontFamily: 'Pretendard-Regular',
        fontSize: 12,
    },
    matchingcard: {
      borderRadius:20,
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 4, // Android에서도 동작하게 하기 위한 속성
        
    },
    gradient: {
        width:307, 
        height:320, 
        borderRadius:20,
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
    },
    chatbutton:{
        width:281, 
        height:38, 
        elevation:2,
        backgroundColor:'white',
        borderRadius:20, 
        justifyContent:'center', 
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:20, 
        marginTop:14,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
});

export default styles;