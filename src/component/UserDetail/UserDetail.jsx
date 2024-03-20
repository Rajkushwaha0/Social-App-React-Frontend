import Avatar from "@mui/material/Avatar";

function UserDetail() {
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="https://randomuser.me/api/portraits/women/58.jpg"
        sx={{
          width: 156,
          height: 156,
          mt: "1rem",
        }}
      />
    </>
  );
}

export default UserDetail;
