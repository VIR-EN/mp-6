"use client";

import { signIn } from "next-auth/react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f5f5f5",
            }}
        >
            <Card sx={{ width: 380, p: 2, borderRadius: 3, boxShadow: 4 }}>
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Welcome
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
                        Sign in to continue
                    </Typography>

                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        startIcon={<GitHubIcon />}
                        onClick={() => signIn("github")}
                        sx={{
                            backgroundColor: "#24292F",
                            "&:hover": { backgroundColor: "#1a1d21" },
                        }}
                    >
                        Sign in with GitHub
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
