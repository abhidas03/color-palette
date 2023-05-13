import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header>
        <h1>Palette Generator</h1>
        <div className='input'>
          <label htmlFor='file'>Upload your Image</label>
          <input type='file' id='file' hidden/>
        </div>
      </header>
      <main className={styles.main}>

      </main>
    </>

  )
}
