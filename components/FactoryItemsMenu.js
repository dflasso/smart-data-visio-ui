import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'



export default function FactoryItemsMenu({ itemsMenu = [] }) {
    const [expanded, setExpanded] = useState(false)
    const router = useRouter()

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const handleSelectedItemMenu = (url = "/") => () => {
        router.push(url)
    }

    const buildSubItems = (subItems = []) => {
        if (Array.isArray(subItems)) {
            return subItems.map(item => (
                <ListItem button key={item.id} onClick={handleSelectedItemMenu(item.url)}>
                    <ListItemIcon>
                        <Icon>{item.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ));
        }

        return null;
    }

    return (
        <List>
            {itemsMenu.map((item, index) => {
                if (item.hasSubItems) {
                    return (

                        <Accordion expanded={expanded === item.name} onChange={handleChange(item.name)} key={item.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {item.name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {buildSubItems(item.subItems)}
                            </AccordionDetails>
                        </Accordion>

                    )
                } else {
                    return (
                        <ListItem button key={item.id} onChange={handleChange(item.name)} >
                            <ListItemIcon>
                                <Icon>{item.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    )
                }

            })}
        </List>
    )
}
