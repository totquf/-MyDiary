//마이페이지
import React from "react";
import { Text } from 'react-native';
//장치의 안전 영역 경계 안에서 컨텐츠를 렌더링하도록 하는 컴포넌트
import { SafeAreaView } from "react-navigation";

export default PrivateScreen = () => {
    return(
        <SafeAreaView>
            <Text>PrivateScreen</Text>
        </SafeAreaView>
    )
}