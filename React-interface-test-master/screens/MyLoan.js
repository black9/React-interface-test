import { TabNavigator } from "react-navigation";

//import your tabs js file
import Screen1 from "./MyLoanTab/screen1";
import Screen2 from "./MyLoanTab/screen2";
import Screen3 from "./MyLoanTab/screen3";

var MyLoan = TabNavigator(
  {
    // here you will define your screen-tabs
    대출현황 : { screen: Screen1 },
    대출신청 : { screen: Screen2 },
    대출포기 : { screen: Screen3 }
  },
  {
    tabBarPosition: "Top",
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "red"
    }
  }
);

export default MyLoan;
