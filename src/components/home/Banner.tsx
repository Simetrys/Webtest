import Image from "next/image";

type BannerProps = {
  src: string;
};

export default function Banner({ src }: BannerProps) {
  return (
    <div
      style={{
        width: "100%",
        height: 240, // 소개용 배너 높이 (원하면 더 크게 가능)
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid #eee",
      }}
    >
      {/* 배경 이미지 */}
      <Image
        src={src}
        alt="소개 배너"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* 배너 안에 소개 텍스트 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 24,
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        POOOMANG에 오신 걸 환영합니다 👋  
        <br />
        지금 바로 테스트를 시작해보세요!
      </div>
    </div>
  );
}