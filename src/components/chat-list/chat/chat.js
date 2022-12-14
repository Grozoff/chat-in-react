import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { memo } from "react";

export const Chat = memo(({ title, selected, deleteConversationByName }) => {
  return (
    <ListItemButton selected={selected}>
      <ListItemIcon>
        <button onClick={(e) => deleteConversationByName(title, e)}>x</button>
        <ChatIcon />
      </ListItemIcon>

      <div>
        <ListItemText primary={title} />
      </div>
    </ListItemButton>
  );
});
