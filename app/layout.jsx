'use client'
import '@styles/globals.css'
import '@styles/mynormalize.css'
import '@styles/style.css'

import { store } from '@/redux/store'
import { Provider } from 'react-redux'

import Navbar from '@components/navbar/Navbar.jsx'
import Header from '@components/home/header/Header'
export const metadata = {
  title: 'ministry of justice',
  description: 'gov website',
}

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <link rel='icon' type='image/svg+xml' href='/images/logo.png' />
      </head>
      <body>
        <main className=''>
          <Provider store={store}>
            {/* <Navbar /> */}
            <Header />
            {children}
          </Provider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
