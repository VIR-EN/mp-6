import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function Dashboard() {
    const session = await auth();

    if (!session) {
        return (
            <div style={{ padding: "40px", textAlign: "center" }}>
                <h2>You are not signed in.</h2>
                <Link href="/">Go back</Link>
            </div>
        );
    }

    const user = session.user;

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fafafa",
                fontFamily: "sans-serif",
            }}
        >
            <h1 style={{ marginBottom: "20px" }}>Welcome, {user?.name}</h1>

            <img
                src={user?.image ?? ""}
                alt="Profile"
                height={120}
                width={120}
                style={{
                    borderRadius: "50%",
                    marginBottom: "20px",
                }}
            />

            <div style={{ textAlign: "left" }}>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Email:</strong> {user?.email}
                </p>
                <p>
                    <strong>Username:</strong> {user?.name}
                </p>
            </div>
        </div>
    );
}
