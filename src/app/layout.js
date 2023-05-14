import './globals.css'

export const metadata = {
  title: 'Color Finder',
  description: 'Generates color palette based on uploaded image.',
}

export default function RootLayout({ children }) {

  return (
    
    <html lang="en">

      <body>{children}</body>
    </html> 
  )
}
