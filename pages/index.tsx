import styles from './Home.module.css';
import { Map, MapTypeId, ZoomControl } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/components/use-kakao-loader';

export default function Home() {
  useKakaoLoader();

  return (
    <div className={styles.layout}>
      <Map
        id="map"
        className={styles.map}
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        level={6}
      >
        <MapTypeId type={'USE_DISTRICT'} />
        <ZoomControl position={'BOTTOMRIGHT'} />
      </Map>
      <header className={styles.header}>
        <h1 className={styles.logo}>2024 SW 동행 데모데이 개과천선 팀</h1>
      </header>

      <footer className={styles.footer}>
        <button className={styles.button}>녹지 퍼센트 구하기 (스크린샷)</button>
      </footer>
    </div>
  );
}
