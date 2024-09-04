import { PHOTOS_GET } from "@/functions/api";
import { Photos } from "@/types/types";
import Image from "next/image";
import styles from "./photos.module.css";
import Visualizacao from "../svgs/visualizacao/visualizacao";

export default async function PhotosComponent() {
  const { url } = PHOTOS_GET({
    page: 1,
    total: 6,
    user: 0,
  });

  const response = await fetch(url);
  const data: Photos[] = await response.json();

  if (data.length < 1) return null;

  return (
    <section className={`${styles.photos} flex-row`}>
      <div className={`${styles.photosContent} content-space animationToRight`}>
        {data.map((photo, index) => (
          <div key={photo.id} className={`${styles.photo}`}>
            <div className={styles.modal}></div>
            <span className={`${styles.visualizacao} flex-row`}>
              <Visualizacao />
              {photo.acessos}
            </span>
            <Image
              src={photo.src}
              alt={photo.title}
              width={245}
              height={245}
              priority={index < 6}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
