import InventoryTable from "./InventoryTable.jsx";
import {useRecoilState} from "recoil";
import Box from "@mui/joy/Box";
import ColorSchemeToggle from "../../utils/ColorSchemeToggle.jsx";
import {Typography} from "@mui/joy";
import * as React from "react";
import {userAtom} from "../../atoms/user.jsx";

export default function Inventory() {
    const [user, setUser] = useRecoilState(userAtom);
    // const [inventory, setInventory] = useRecoilState(inventoryAtom);

    return (
        <Box sx={{display: 'flex', minHeight: '100dvh',}}>
            <Box
                component="main"
                className="MainContent"
                sx={(theme) => ({
                    px: {
                        xs: 2,
                        md: 6,
                    },
                    pt: {
                        xs: `calc(${theme.spacing(2)} + var(--Header-height))`,
                        sm: `calc(${theme.spacing(2)} + var(--Header-height))`,
                        md: 3,
                    },
                    pb: {
                        xs: 2,
                        sm: 2,
                        md: 3,
                    },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    gap: 1,
                })}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'right'
                    }}>
                    <ColorSchemeToggle
                        sx={{ml: 'auto', display: {xs: 'none', md: 'inline-flex'},}}
                    />
                </Box>
                <Typography level="h1" fontSize="xl4" color={'primary'}>
                    Inventory of {user.dairyFarm.name}
                </Typography>
                <InventoryTable/>
                <Box sx={{minHeight: '80px'}}></Box>
            </Box>
        </Box>
    )
}