import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    /**
     * ※주의※ appkey의 경우 본인의 appkey를 사용하셔야 합니다.
     * 해당 키는 docs를 위해 발급된 키 이므로, 임의로 사용하셔서는 안됩니다.
     *
     * https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/map/changeOverlay1@참고 https://apis.map.kakao.com/web/guide/
     */
    appkey: '8a45a8ea3101ae02251ae75d718ab075',
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
