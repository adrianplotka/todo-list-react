import Form from "./Form";
import TaskList from "./TaskList";
import Section from '../../../common/Section';
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import ExampleTasksButton from "./ExampleTasksButton";
import Buttons from "./Buttons";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton/>}
        body={<Form/>}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search/>}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={ <Buttons/> }
        body={ <TaskList/> }
      />
    </Container>
  );
};

export default TasksPage;
