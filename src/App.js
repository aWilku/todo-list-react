import Buttons from "./Buttons";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Tasks from "./Tasks";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zjeść obiad", done: false },
  { id: 2, content: "kupic coś", done: true },
];
const hideDoneTask = false;

function App() {
  return (
    <Container>
      <Header
        title="Lista zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form />
        }
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDoneTask={hideDoneTask} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTask={hideDoneTask} />
        }
      />
    </Container>
  );
}
export default App;
