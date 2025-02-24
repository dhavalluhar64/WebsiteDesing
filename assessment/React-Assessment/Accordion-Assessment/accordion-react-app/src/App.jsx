import "./App.css";
import AccordionData from "./Component/AccordionData";

function App() {
  let Accord = [
    {
      title: "List One",
      content: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              explicabo laboriosam facilis nam earum aliquid corrupti, optio
              incidunt quis at beatae excepturi! Dolor, veritatis modi alias
              ullam itaque error ad dicta laudantium voluptatibus. Voluptatum
              dignissimos quas, culpa asperiores, laborum eveniet nam
              consectetur deleniti illo veniam exercitationem quidem quo, eius
              iure.`,
    },
    {
      title: "List two",
      content: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              explicabo laboriosam facilis nam earum aliquid corrupti, optio
              incidunt quis at beatae excepturi! Dolor, veritatis modi alias
              ullam itaque error ad dicta laudantium voluptatibus. Voluptatum
              dignissimos quas, culpa asperiores, laborum eveniet nam
              consectetur deleniti illo veniam exercitationem quidem quo, eius
              iure.`,
    },
    {
      title: "List Three",
      content: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              explicabo laboriosam facilis nam earum aliquid corrupti, optio
              incidunt quis at beatae excepturi! Dolor, veritatis modi alias
              ullam itaque error ad dicta laudantium voluptatibus. Voluptatum
              dignissimos quas, culpa asperiores, laborum eveniet nam
              consectetur deleniti illo veniam exercitationem quidem quo, eius
              iure.`,
    },
    {
      title: "List Four",
      content: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              explicabo laboriosam facilis nam earum aliquid corrupti, optio
              incidunt quis at beatae excepturi! Dolor, veritatis modi alias
              ullam itaque error ad dicta laudantium voluptatibus. Voluptatum
              dignissimos quas, culpa asperiores, laborum eveniet nam
              consectetur deleniti illo veniam exercitationem quidem quo, eius
              iure.`,
    },
  ];

  return (
    <div className="accordio">
      {Accord.length > 0 ? (
        Accord.map((title, idx) => {
          return (
            <AccordionData
              key={idx}
              titling={title.title}
              contentData={title.content}
            />
          );
        })
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
}

export default App;
