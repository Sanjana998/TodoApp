import "../css/styling.css";

export default function Styling() {
  return (
    <div>
      {/* inline styline */}
      <h1 style={{ color: "lightblue", fontSize: "60px" }}>hello</h1>
      {/* external styline */}
      <h2 className="header">mello</h2>
    </div>
  );
}
