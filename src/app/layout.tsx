import type { Metadata } from 'next'
import { Inter, Poppins, } from 'next/font/google'
import {} from 'next/font/google'
import './globals.css'
import {useClientDimensions} from "@/utlities/clientDimensions";

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins(
  {
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  }
)

// const rockSalt = RockSalt(
//   {
//     subsets: ['latin'],
//     variable: '--font-rock-salt',
//   }
// )

export const metadata: Metadata = {
  title: 'Team Guesser',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-black200 flex justify-center`}>{children}</body>
    </html>
  )
}
