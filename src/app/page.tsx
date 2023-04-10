import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@components/Header'
import Carousel from '@components/Home/Carousel'
import ProductCard from '@components/Product/Product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <Carousel />
      <div>
        <ProductCard />
      </div>
    </main>
  )
}
