//네이게이터 관리 페이지
import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import EditScreen from "./screens/EditScreen";
import ListScreen from "./screens/ListScreen";
import PrivateScreen from "./screens/PrivateScreen";

//TabNavigator라는 이름의 하단 탭 네비게이션 생성
const TabNavigator = createBottomTabNavigator({
    //네비게이션에 쓰일 페이지 등록
    ListScreen: {
        screen: ListScreen,
    },
    EditScreen: {
        screen: EditScreen,
    },
    PrivateScreen: {
        screen: PrivateScreen,
    },
})

//App.js에서 네비게이션을 이용하려면 createAppContainer을 이용해 최상위 네비게이션을 처리해줘야함
export default createAppContainer(TabNavigator);