import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export function StatusIcon({ status }: { status: string }) {
  return (
    <>
      {status === 'green' ? (
        <Svg width={25} height={25} viewBox="0 0 24 24" fill="none">
          <G clipPath="url(#clip0_1_988)">
            <Path
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
              fill="#0EDA82"
            />
            <Path
              d="M16.328 5.384a.792.792 0 00-1.125 0l-7.397 7.513-3.01-3.056a.792.792 0 00-1.124 0 .815.815 0 000 1.143l3.572 3.632a.792.792 0 001.125 0l7.96-8.085a.819.819 0 000-1.147z"
              fill="#fff"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_1_988">
              <Path fill="#fff" d="M0 0H20V20H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      ) : status === 'red' ? (
        <Svg width={25} height={25} viewBox="0 0 24 24" fill="none">
          <Path
            d="M21.369 18.446l-7.416-14.84a2.184 2.184 0 00-3.904 0l-7.416 14.84a2.176 2.176 0 001.952 3.152h14.832a2.175 2.175 0 001.952-3.152z"
            fill="#E21111"
          />
          <Path
            d="M12.8 13.598a.8.8 0 11-1.6 0v-4a.8.8 0 011.6 0v4zm-.8 4a.8.8 0 110-1.599.8.8 0 010 1.599z"
            fill="#fff"
          />
        </Svg>
      ) : (
        <Svg width={25} height={25} viewBox="0 0 24 24" fill="none">
          <Path
            d="M21.369 18.446l-7.416-14.84a2.184 2.184 0 00-3.904 0l-7.416 14.84a2.176 2.176 0 001.952 3.152h14.832a2.175 2.175 0 001.952-3.152z"
            fill="#FFD60A"
          />
          <Path
            d="M12.8 13.598a.8.8 0 11-1.6 0v-4a.8.8 0 011.6 0v4zm-.8 4a.8.8 0 110-1.599.8.8 0 010 1.599z"
            fill="#4F4A4A"
          />
        </Svg>
      )}
    </>
  );
}
