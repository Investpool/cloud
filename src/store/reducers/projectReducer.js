const initState = {
  projects: [
    {
      id: "1",
      title: "we struggling to build an app",
      content: "blah blah blah",
    },
    {
      id: "2",
      title: "God be on our side",
      content: "blah blah blah",
    },
    {
      id: "3",
      title: "its done, Amen",
      content: "blah blah blah",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  
  return state;
  case 'CREATE_PROJECT_ERROR': 
  console.log("created project error", action.err)
  return state;
  default:
}
return state
}


export default projectReducer;
