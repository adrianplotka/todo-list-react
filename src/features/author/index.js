import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import AuthorText from "./AuthorText";


function AuthorPage ()  {
    return(
        <Container>
        <Header title="O autorze" />
        <Section
            title="Cześć wszystkim 😎"
            body={<AuthorText/>}
        />
    </Container>
    )
}

export default AuthorPage;