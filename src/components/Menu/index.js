import { Fragment, useContext } from "react";
import PercentageContext from "../../contexts/PercentageContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Style from "./style";

export default function Menu({ pathname }) {
  const {
    Footer,
    Container,
    Hypertext,
    HypertextProgressbar,
    ContentProgressbar,
    ContainerCircularProgressbar
  } = Style;
  const { percentage } = useContext(PercentageContext);

  return(
    <Fragment>
      <Footer pathname={pathname}>
        <Container>
          <Hypertext to="/habits">Hábitos</Hypertext>

          <ContentProgressbar>
            <ContainerCircularProgressbar>
              <HypertextProgressbar to="/today">
                <CircularProgressbar
                  value={percentage}
                  text={"Hoje"}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                  })}
                />
              </HypertextProgressbar>
            </ContainerCircularProgressbar>
          </ContentProgressbar>

          <Hypertext to="/historic">Histórico</Hypertext>
        </Container>
      </Footer>
    </Fragment>
  );
}