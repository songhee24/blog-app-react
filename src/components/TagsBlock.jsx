import SideBlock from "./SIdeBlock/index.jsx";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";

export const TagsBlock = ({ items, isLoading = true }) => {
  return (
    <SideBlock title="Тэги">
      <List>
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <a
            key={i}
            style={{ textDecoration: "none", color: "black" }}
            href={`/tags/${name}`}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ListItemText primary={name} />
                )}
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </SideBlock>
  );
};
