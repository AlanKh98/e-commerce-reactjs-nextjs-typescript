import styles from '../../styles/aboutus.module.css'

export default function SectionOne() {
    return(
        <div className={styles.sectionOne}>
            <div className={styles.left}>
                <h3>About us.</h3>
                <h3>Our Team.</h3>
                <h3>Press.</h3>
            </div>
            <div className={styles.right}>
                <h1>OUR COMPANY.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat congue consequat. Vivamus nec leo nec ex pharetra bibendum. Maecenas a pulvinar nunc.Mauris gravida iaculis bibendum. Aliquam euismod dignissim nulla, at varius diam posuere id.<span> Integer vitae odio quis velit fermentum aliquam vel non nulla. Nullam in finibus tellus.</span>  Nulla eleifend rhoncus tincidunt. Donec in ligula a mauris venenatis sollicitudin.</p>
                <p>Sed euismod congue tortor, pretium suscipit dui pellentesque ut. Praesent scelerisque scelerisque lorem, sit amet congue arcu rutrum sed. Pellentesque egestas pretium tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam non malesuada tortor. Vivamus malesuada quis turpis vestibulum efficitur. Mauris semper ultricies lorem quis fermentum. Aenean auctor aliquet nisi nec ultrices. Etiam id diam eget neque posuere placerat vitae id nulla. Donec nisl quam, efficitur at urna in, porta tristique enim. Donec porttitor purus at vestibulum mollis.</p>
            </div>
        </div>
    )
}
