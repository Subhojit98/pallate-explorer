import Navbar from './components/Navbar'
import CardsContainer from './components/CardsContainer'
import Footer from './components/Footer'
import UploadImage from './components/UploadImage'

const page = () => {
  return (
    <>
      <div className="w-full h-full bg-black">
        <Navbar />
        <main className='w-full h-full p-2'>
          <CardsContainer />
          <UploadImage />
        </main>
        <Footer />
      </div>

    </>
  )
}

export default page
