import styles from '../app/page.module.css'
export default function ImageDisplay({ uploadedImage }) {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.image}>
                    {uploadedImage ? <img src={uploadedImage} alt="Uploaded image" /> : <h2>Image will appear here</h2>}
                </div>
            </div>
        </>
    )
}