import "./App.css";
import Profile from "./components/Profile.jsx";
import Avatar from "./components/Avatar";
function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("Clicked!");
  };
  return (
    <>
      <button onClick={handleClick}>Button</button>
      <div className="container">
        <Avatar
          image="https://images.unsplash.com/photo-1689686611078-a33b28e0a3a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          isNew={true}
        />
        <Profile
          image="https://images.unsplash.com/photo-1689686611078-a33b28e0a3a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          name="Keith Lee"
          title="The Greatest Dad"
        />
        <Profile
          image="https://images.unsplash.com/photo-1690952830321-df84705cb7a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1600&q=60"
          name="Serene Park"
          title="The Greatest Mom"
        />
        <Profile
          image="https://images.unsplash.com/photo-1510154221590-ff63e90a136f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFieXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1600&q=60"
          name="Ethan YD Lee"
          title="8-months old cutest baby"
          isNew={true}
        />
      </div>
    </>
  );
}

export default AppProfile;
