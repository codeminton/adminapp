import Sidebar from '../sidebar'
import Navbar from '../navbar'

export default function MainLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main>
        <Navbar />
        <div className="content">
          <div className="container">
            {children}
          </div>
        </div>
        <footer className="footer">
          footer...
        </footer>
      </main>
    </>
  )
}
