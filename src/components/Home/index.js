import Header from '../Header'

import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <h1 className="title">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
