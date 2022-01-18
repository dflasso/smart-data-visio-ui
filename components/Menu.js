import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Divider, Drawer, IconButton, List, useTheme } from "@mui/material";
import useLayout from "../hooks/useLayout";
import FactoryItemsMenu from "./FactoryItemsMenu";

//Recuperar desde el backend
const itemsMenu = [
    {
        id: "1",
        name: "Seguridades",
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
        name: "Cuestionarios",
        icon: "quiz",
        hasSubItems: true,
        url: "",
        principalMenu: null
    },
    {
        id: "4",
        name: "Pruebas Visuales",
        icon: "visibility",
        hasSubItems: true,
        url: "",
        principalMenu: null
    },
    {
        id: "5",
        name: "Evaluaciones",
        icon: "feed",
        hasSubItems: true,
        url: "",
        principalMenu: null
    },
    {
        id: "6",
        name: "Reportes",
        icon: "assessment",
        hasSubItems: true,
        url: "",
        principalMenu: null
    },
    {
        id: "7",
        name: "Usuarios",
        icon: "account_circle",
        hasSubItems: false,
        url: "/securiy/users",
        principalMenu: "1"
    },
    {
        id: "8",
        name: "Perfiles",
        icon: "admin_panel_settings",
        hasSubItems: false,
        url: "/securiy/profiles",
        principalMenu: "1"
    },
    {
        id: "9",
        name: "Asignación Perfil de Usuarios",
        icon: "manage_accounts",
        hasSubItems: false,
        url: "/securiy/profiles-users",
        principalMenu: "1"
    },
    {
        id: "10",
        name: "Registro Pacientes",
        icon: "add_circle",
        hasSubItems: false,
        url: "/patient/register",
        principalMenu: "2"
    },
    {
        id: "11",
        name: "Admin. Pacientes",
        icon: "add_circle",
        hasSubItems: false,
        url: "/patient/admin",
        principalMenu: "2"
    },
    {
        id: "12",
        name: "Cuestionario Previo",
        icon: "drive_file_rename_outline",
        hasSubItems: false,
        url: "/questionnaire/pre",
        principalMenu: "3"
    },
    {
        id: "13",
        name: "Cuestionario Posterior",
        icon: "update",
        hasSubItems: false,
        url: "/questionnaire/post",
        principalMenu: "3"
    },
    {
        id: "14",
        name: "Tradicionales",
        icon: "rate_review",
        hasSubItems: false,
        url: "/visual-tests/traditionals",
        principalMenu: "4"
    },
    {
        id: "15",
        name: "Virtuales",
        icon: "laptop_mac",
        hasSubItems: false,
        url: "/visual-tests/virtuals",
        principalMenu: "4"
    },
    {
        id: "16",
        name: "Eval. Prueba Visual",
        icon: "summarize",
        hasSubItems: false,
        url: "/evaluations/visual-test",
        principalMenu: "5"
    },
    {
        id: "17",
        name: "Recomendación por Paciente",
        icon: "find_in_page",
        hasSubItems: false,
        url: "/report/by-patient",
        principalMenu: "6"
    },
    {
        id: "18",
        name: "Grupo de Pacientes",
        icon: "find_in_page",
        hasSubItems: false,
        url: "/report/many-patients",
        principalMenu: "6"
    },
    {
        id: "19",
        name: "Grupo de Pruebas Visuales",
        icon: "find_in_page",
        hasSubItems: false,
        url: "/report/by-visual-test",
        principalMenu: "6"
    },
    {
        id: "20",
        name: "Procesos",
        icon: "list",
        hasSubItems: true,
        url: "",
        principalMenu: null
    },
    {
        id: "22",
        name: "Pruebas Optamológicas",
        icon: "find_in_page",
        hasSubItems: false,
        url: "/process/eval-pilots",
        principalMenu: "20"
    },
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
