import Box from "@mui/material/Box";


import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import AppBarMenu from "./TopBarMenu";

import ProfileMenu from "./ProfileMenu";

const AppBarTest = () => {
  const massagesArr = [
    { title: "محمد", path: "/records", desc: " صباح الخير" },
    { title: " ايهاب", path: "/team", desc: "  هلو" },
    { title: " خالد", path: "/contacts", desc: "هلو " },
  ];

  const notificationArr = [
    { title: "دعوة", path: "/records", desc: "تمت دعوتك" },
    { title: " استخدام", path: "/team", desc: " استخدم اضافة" },
    { title: " الاتصال", path: "/contacts", desc: "تمت اتصال" },
  ];

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBarMenu
          icon={<InsertCommentOutlinedIcon />}
          dataArr={massagesArr}
        />
        <AppBarMenu
          icon={<NotificationsOutlinedIcon />}
          dataArr={notificationArr}
        />
        <ProfileMenu />
      </Box>
    </div>
  );
};

export default AppBarTest;
