import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '페이지 이름', // <title>
  description: '페이지 설명', // <meta name="description" content="xxx">
  // Open Graph Proptocal <= Facebook
  // <meta property="og:xxx" content="xxx">
  openGraph: {
    type: 'website',
    title: '메인 페이지',
    description: '메인 페이지 설명',
    images: 'https://picsum.photos/1200/630',
    url: 'https://abc.com/', // 페이지 주소 O 사이트 주소 X
    siteName: '사이트 이름'
  },
  // Twitter Card <= Twitter
  twitter: {
    card: 'summary_large_image',
    title: '메인 페이지',
    description: '메인 페이지 설명',
    images: 'https://picsum.photos/1200/630',
    site: '사이트 이름'
  }
}

export default async function Home() {
  // await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Home Page Error!')
  return (
    <>
      <h1>Home Page!(/app/(header))</h1>
    </>
  )
}
