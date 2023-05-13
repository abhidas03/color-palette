import './globals.css'

export const metadata = {
  title: 'Color Finder',
  description: 'Generates color palette based on uploaded image.',
}

export default function RootLayout({ children }) {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  return (
    <html lang="en">
      <body>{children}</body>
    </html> 
  )
}
