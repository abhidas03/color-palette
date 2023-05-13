"use client"
import styles from './page.module.css'
import ImageDisplay from '@/components/imageDisplay'
import ColorThief from 'colorthief'
import { useState } from 'react'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const gallery = <i className="fas fa-images"></i>
export default function Home() {

  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();
      
      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 6);
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
          <label htmlFor='file'>{gallery} Upload your Image</label>
          <input type='file' id='file' hidden onChange={uploadImage}/>
        </div>
      </header>
      <main className={styles.main}>
        <ImageDisplay />
      </main>
    </>

  )
}
