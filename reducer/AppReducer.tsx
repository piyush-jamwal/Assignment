const InitialState = {
  openShifts: [
    {
      HospitalName: "General Hospital",
      Timing: { from: "3:00 pm", to: "11:00 pm", Date: "10/10/2018, Thu" },
      place: "Chicago, IL 60637",
      department: "Surgery Department",
      dateOfPost: "MON,OCT 8,2018",
      isApplied: false,
    },
    {
      HospitalName: "Joshi Hospital",
      Timing: { from: "3:00 pm", to: "11:00 pm", Date: "10/10/2018, Thu" },
      place: "Chicago, IL 60637",
      department: "Surgery Department",
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
    default:
      return { ...state };
  }
};
