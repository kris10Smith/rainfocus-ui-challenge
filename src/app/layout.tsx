import "./../styles/global.scss"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "RainFocus UI Challenge",
	description: "UI challenge implementation by Kristen Smith",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
