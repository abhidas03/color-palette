"use client"
import styles from './page.module.css'
import ImageDisplay from '@/components/imageDisplay'
import ColorDisplay from '@/components/colorDisplay'
import ColorThief from 'colorthief'
import { useState } from 'react'
import CatButton from '@/components/catButton'

const imageIcon = <i className="fa-solid fa-image"></i>
export default function Home() {

  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);
  console.log("What you looking here for? 🫥")
  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();
      
      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 6);
        console.log(colorPalette);
        setUploadedImage(event.target.result);
        setColorPalette(colorPalette);
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(imageFile);
  }
  return (
    <>
      <header>
        <h1>Palette Generator</h1>
        <div className='input'>
          <CatButton setUploadedImage={setUploadedImage} setColorPalette={setColorPalette}/>
          <label htmlFor='file'>{imageIcon} Upload your Image</label>
          <input type='file' id='file' hidden onChange={uploadImage}/>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/abhidas03" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-github"></i></a>
        </div>
      </header>

      <main className={styles.main}>
        <ImageDisplay uploadedImage={uploadedImage}/>
        <ColorDisplay colorPalette={colorPalette}/>
      </main>
    </>

  )
}
