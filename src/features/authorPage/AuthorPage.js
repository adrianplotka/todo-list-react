import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledStrong, StyledText } from "./styled";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Adrian Płotka"
            body={
                <StyledText> <StyledStrong>Cześć wszystkim</StyledStrong> 😎<br />
                    Życie poprowadziło mnie tutaj krętymi drogami, ale to, że tu jestem nie jest
                    przypadkowe. Zawsze, kręciła mnie praca na komputerze i zawsze lubiłem
                    spędzać czas przy nim. Już w wieku gimnazjamnym zastanawiałem się czy nie
                    pójść do technikum uczyć się programowania. To wtedy właśnie po raz pierwszy
                    odrzuciłem tą myśl i poszedłem do liceum o profilu matematycznym. Tam szło
                    mi całkiem nieźle i dlatego złożyłem papiery na politechnikę na kierunku
                    Budownictwo. Na szczęście, albo na nieszczęście nie dostałem się. Moim kołem
                    zapasowym był kierunek Kryminologia. I taki to właśnie kierunek skończyłem i
                    obroniłem magistra. Przez chwilę nawet myślałem, że pójdę pracować jako policjant,
                    ale w momencie, gdy nie zdałem testów prsychologicznych uświadomiłem sobie, że
                    nie pasuję do policji. Znajomi mówi, że jestem za miły 😂. Od tego czasu wiedziałem,
                    że chciałbym zacząc uczyć się programowania. Czekałem jedynie na moment w, którym
                    ustatkuję się w życiu i będę mieć więcej czasu. I oto jestem 😎 Rok po ślubie,
                    a za miesiąc będę ojcem, więc stwierdziłem, że jest to dobry moment, aby zacząć
                    się uczyć. Bardzo chciałbym mieć więcej czasu da swojej rodziny i też troche
                    lepiej zarabiać, aby nie martwić się co będzię w przyszłośći <br />
                    To jak cieszę się ucząc uświadamia, że jest to dobry kierunek w życiu i bardzo
                    mocny motywator, aby się nie poddawać.💪
                </StyledText>
            }
        />
    </Container>
);