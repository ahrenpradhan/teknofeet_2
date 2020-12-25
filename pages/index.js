import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Teknofeet - Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href='https://www.teknofeet.com/'>Teknofeet</a>
				</h1>

				<div className={styles.grid}>
					<a href='https://www.teknofeet.com/' className={styles.card}>
						<h3>Official Website &rarr;</h3>
						<p>Redirect to the official<br/>Tecknofeet website.</p>
					</a>
					<Link href='/marketplace'>
						<a className={styles.card}>
							<h3>Marketplace &rarr;</h3>
							<p>The official Tecknofeet marketplace.</p>
						</a>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a href='https://www.teknofeet.com/' target='_blank' rel='noopener noreferrer'>
					Powered by **still thinking, hehe!!**
					{/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
				</a>
			</footer>
		</div>
	);
}


// // DOCUMENTATION: http://styletron.org

// import { styled, useStyletron } from 'styletron-react'

// // statically styled component
// const Title = styled('h1', {
//   color: 'red',
//   fontSize: '82px',
// })

// // dynamically styled component
// const SubTitle = styled('h2', ({ $size }) => ({
//   color: 'blue',
//   fontSize: `${$size}px`,
// }))

// export default function Home() {
//   // an alternative hook based API
//   const [css] = useStyletron()
//   return (
//     <div>
//       <Title>Title</Title>
//       <SubTitle $size={50}>Subtitle</SubTitle>
//       <p className={css({ fontSize: '32px' })}>Styled by hook</p>
//     </div>
//   )
// }
