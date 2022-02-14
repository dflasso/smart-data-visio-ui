import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Divider, Drawer, IconButton, List, useTheme } from "@mui/material";
import useLayout from "../hooks/useLayout";
import FactoryItemsMenu from "./FactoryItemsMenu";

//Recuperar desde el backend
const itemsMenu = [
    {
        id: "1",
        name: "Administración",
        icon: "security",
        hasSubItems: true,
        url: "",
        principalMenu: null
    },
    {
        id: "2",
        name: "Pacientes",
        icon: "group_add",
        hasSubItems: true,
        url: "",
        principalMenu: null
    },
    {
        id: "3",
        name: "Usuarios",
        icon: "account_circle",
        hasSubItems: false,
        url: "/securiy/users",
        principalMenu: "1"
    },
    {
        id: "11",
        name: "Pruebas Optamológicas",
        icon: "add_circle",
        hasSubItems: false,
        url: "/process/eval-pilots",
        principalMenu: "2"
    }
]

const orderItemsMenu = (items = []) => {
    let principalItems = items.filter(item => item.hasSubItems && item.principalMenu === null);

    for (let i = 0; i < principalItems.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (principalItems[i].id === items[j].principalMenu) {
                if (principalItems[i].subItems != null && Array.isArray(principalItems[i].subItems)) {
                    principalItems[i].subItems = [...principalItems[i].subItems, items[j]]
                } else {
                    principalItems[i].subItems = [items[j]]
                }

            }
        }
    }

    return principalItems;
}

const items = orderItemsMenu(itemsMenu)

export default function Menu() {
    const { state, handleDrawerClose } = useLayout();
    const { openMenu } = state;
    const theme = useTheme();

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={openMenu}
        >
            <section>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                </IconButton>
            </section>
            <Divider />
            <List>
                <FactoryItemsMenu itemsMenu={items} />
            </List>
        </Drawer>
    )
}
