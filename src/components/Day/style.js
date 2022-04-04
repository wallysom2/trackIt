import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 
  ${
    (props) => 
      props.dayContent !== '' &&
        props.dayContent.selectedDateHabits.length > 3 ? 
          "initial" 
        : 
          "110%"
  };

  padding-bottom: 120px;

  display: flex;
  justify-content: center;

  background-color: #F2F2F2;
`;

const Content = styled.div`
  width: 90%;
`;

const DateTitle = styled.h2`
  padding-top: 100px;

  font-size: 22.976px;
  line-height: 29px;

  color: #126BA5;
`;

const DateSubtitle = styled.p`
  font-size: 17.976px;
  line-height: 22px;

  margin-bottom: 28px;

  color: 
  ${
    (props) => 
      props.selectedDayHistoric !== '' &&
        props.selectedDayHistoric.selectedDateHabits.length > 0 ?
          props.habitsPercentage < 100 ?
            "#E65666"
          :
            "#8FC549" 
        : 
          "#BABABA"
  };
`;

const ListedHabitContainer = styled.div`
  width: 100%;
  height: 94px;
  
  padding: 15px;
  margin-bottom: 10px;

  background-color: #FFFFFF;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HabitTitle = styled.h2`
  font-size: 19.976px;
  line-height: 25px;

  width: 100%;

  word-break: break-all;

  margin-bottom: 7px;

  color: #666666;  
`;

const HabitDetaisContainer = styled.div`
  width: 75%;
`;

const HabitCheckMarkContainer = styled.div`
  width: 69px;
  height: 69px;

  background-color: ${(props) => props.listedHabitDone ? "#8FC549" : "#E65666"};

  border: 1px solid #E7E7E7;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoCheck = styled.p`
  color: #FFFFFF;

  font-size: 40px;
`

const components = {
  Container, 
  Content,
  DateTitle, 
  DateSubtitle,
  ListedHabitContainer,
  HabitDetaisContainer,
  HabitTitle,
  HabitCheckMarkContainer,
  NoCheck
};

export default components;