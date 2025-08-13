export default function Banner({ src = "/placeholder/banner.jpg", alt = "banner" }) {
  return (
    <div style={{ width: "100%", borderBottom: "1px solid #eee" }}>
      <img src={src} alt={alt} style={{ display: "block", width: "100%", height: "auto" }} />
    </div>
  );
}