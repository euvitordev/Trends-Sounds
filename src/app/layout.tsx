import { Disc3, Flame } from "lucide-react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const backgroundImageUrl =
  // "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwcvQsM8-g8UhqIkYhqovspXo29w2py-MZLaIBlHXL9w6X15KhrwmQrEplNiMeVNnrkZsYznXjYFlLXwJ0a-cEI5OQv7_MUv1MF5xc434aM88hZZ-JnU-Id8EGWHOcAXCBAkEZL3VKjCWE-BtfLP7p8UoO50SZ0rOGd2OtV1gz2hDOfxd3UP6AG3TViQ/w1600/4k-pc-wallpaper-ai-art.webp"
  "https://i.pinimg.com/originals/4f/34/f5/4f34f500a8ef286a432cb7371186b688.jpg"

export const metadata: Metadata = {
  title: "Disk Sounds",
  description: "Bem vindo ao Disk Sounds",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className="grid grid-rows-6 w-screen h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <div className="grid row-span-1 justify-start items-start content-between p-8">
          <div className="flex gap-4 items-center justify-center p-2">
            <Disc3 size={48} className="animate-spin" />
            <h2 className="font-bold text-2xl">Sound</h2>
          </div>
        </div>

        {children}
      </body>
    </html>
  )
}
