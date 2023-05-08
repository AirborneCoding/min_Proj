import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from '@/components/home/index'
import Header from '@components/home/header/Header'

export const metadata = {
  title: 'home | ministry of justice',
  description: 'gov website',
}

const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <Section2 />
      <Section3 />
      <div className='er'>
        <Section4 />
      </div>
      <Section5 />
    </>
  )
}

export default Home
