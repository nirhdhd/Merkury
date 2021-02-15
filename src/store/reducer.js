let profile_3 = "images/profilesImages/profile_3.png";
let profile_4 = "images/profilesImages/profile_4.png";
let profile_5 = "images/profilesImages/profile_5.png";
let profile_6 = "images/profilesImages/profile_6.png";

const initialState = {
  isSidebarOpen: true,
  tasksData: [
    {
      letter: "N",
      header: "New website for Symu.co",
      time: "5 days delays",
    },
    {
      letter: "F",
      header: "Free business PSD Template",
      time: "2 days delays",
    },
    {
      letter: "N",
      header: "New logo for JCD.pl",
      time: "10 days left",
    },
    {
      letter: "F",
      header: "Free Icons Set vol. 3",
      time: "10 days left",
    },
  ],
  MessagesData: [
    {
      pic: profile_3,
      name: "Nina Jones",
      time: "5 minutes ago",
      text: "Hey You! It’s me again :-) I attached new (...)",
      notRead: true,
    },
    {
      pic: profile_3,
      name: "Nina Jones",
      time: "About 20 hours ago",
      text: "Hey! I attached some new PSD files for (...)",
      notRead: true,
    },
    {
      pic: profile_6,
      name: "James Smith",
      time: "2 days ago",
      text: "Good morning, you are fired!",
      notRead: false,
    },
    {
      pic: profile_3,
      name: "Nina Jones",
      time: "About 2 weeks ago",
      text: "Hello! Could You bring me coffee please?",
      notRead: false,
    },
  ],
  activityData: [
    {
      name: "Nina Jones",
      action: "added a new project",
      task: " Free UI Kit",
      pic: profile_3,
      time: "Just now",
    },
    {
      name: "James Smith",
      action: "commented project",
      task: "Free PSD Template",
      pic: profile_6,
      time: "40 minutes ago",
    },
    {
      name: "Alex Clooney",
      action: "completed task",
      task: "Symu Website",
      pic: profile_5,
      time: "1 hour ago",
    },
    {
      name: "Alexandra Spears",
      action: "added a new project",
      task: " Free PSD",
      pic: profile_4,
      time: "3 hours ago",
    },
  ],
};

const reducer = (state = initialState, action) => {
  if (action.type == "TOGGLE-SIDEBAR") {
    return {
      ...state,
      isSidebarOpen: !state.isSidebarOpen,
    };
  }

  return state;
};

export default reducer;
