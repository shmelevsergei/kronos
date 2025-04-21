import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
	title: "KRONOS SYNAPSE | The AI That Remembers You",
	description:
		"The world's first AI with persistent memory that evolves with you, creating a true digital companion.",
	generator: "v0.dev",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
		other: [
			{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#ff0000",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} ${jetbrainsMono.variable}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
