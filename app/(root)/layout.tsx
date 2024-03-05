import React from 'react'
import Sidebar from '@/components/shared/Sidebar';
import Navbar from '@/components/shared/Navbar';
import{ ContextProvider} from '@/contexts/ContextProvider';

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <ContextProvider>
      <main className='root'>
        <Navbar />
          <div className="root-container flex">
            <Sidebar />
              <div className="wrapper">
                  {children}
              </div>
          </div>
      </main>
    </ContextProvider>
  )
}

export default Layout