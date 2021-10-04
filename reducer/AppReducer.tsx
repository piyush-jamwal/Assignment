const InitialState = {
  openShifts: [
    {
      id: 1,
      HospitalName: "General Hospital",
      Timing: { from: "3:00 pm", to: "11:00 pm", Date: "10/10/2018, Thu" },
      place: "Chicago, IL 60637",
      department: "Surgery Department",
      dateOfPost: "MON,OCT 8,2018",
      isApplied: false,
    },
    {
      id: 2,
      HospitalName: "Joshi Hospital",
      Timing: { from: "10:00 pm", to: "11:00 pm", Date: "10/10/2018, Thu" },
      place: "CHILE, IL 60637",
      department: "NEUROLOGY Department",
      dateOfPost: "TUE,OCT 9,2018",
      isApplied: false,
    },
    {
      id: 3,
      HospitalName: "JJ Hospital",
      Timing: { from: "2:00 pm", to: "11:00 pm", Date: "10/10/2018, Thu" },
      place: "HILE, IL 60637",
      department: "BIOCHEMISTRY Department",
      dateOfPost: "MON,OCT 8,2018",
      isApplied: false,
    },
  ],
  userData: {},
  isSignedIn: false,
};
// const InitialState = { abc: "Name" };

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, userData: action.payload };
    case "isApplied":
      const obj = [...state.openShifts];
      obj[action.payload[0]] = {
        ...state.openShifts[action.payload[0]],
        isApplied: action.payload[2],
      };
      // console.log("object check++++++++", obj);
      return { ...state, openShifts: obj };
    case "userData":
      // console.log("userData check", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case "isSignedIn":
      console.log("reducer chj check", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};
