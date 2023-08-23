"use client";

import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

const themeStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120, 120, 120, 0.2)",
  },
  content: {
    marginLeft: drawerWidth,
    padding: 3,
  },
};

export default function NavDrawer({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <div>
      <AppBar position="fixed" sx={themeStyles(theme).appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={true}
        sx={simpleStyles.drawer}
        PaperProps={{
          sx: simpleStyles.drawerPaper,
          elevation: 9,
        }}
      >
        <Toolbar />
        <List>
          {[
            { text: "Input Form", route: "/form" },
            { text: "Contact Card Grid", route: "/grid" },
            { text: "Contact Table", route: "/table" },
            { text: "Contact Data Grid", route: "/datagrid" },
          ].map((nav, index) => (
            <ListItem key={nav.text}>
              <Link href={nav.route}>{nav.text}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main style={simpleStyles.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}
