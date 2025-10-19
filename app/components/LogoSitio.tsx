export default function LogoSitio({
  width = 64,
  height = 64,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
    >
      <defs>
        <style type="text/css">
        {`
        @import url('https://fonts.googleapis.com/css2?family=Playwrite+US+Modern:wght@100..400&display=swap');
        text { font-family: "Playwrite US Modern", cursive; font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;}
        `}
    </style>
      </defs>
      <path
        d="M16.5 2.5L47.5 2.5L61.5 16.5L61.5 47.5L47.5 61.5L16.5 61.5L2.5 47.5L2.5 16.5Z"
        stroke="#51a2ff"
        stroke-width="8"
        fill="none"
      />
      <path
        d="M18.7 4.7L45.3 4.7L59.3 18.7L59.3 45.3L45.3 59.3L18.7 59.3L4.7 45.3L4.7 18.7Z"
        stroke="#364153"
        stroke-width="4"
        fill="none"
      />
      <g stroke="#51a2ff" strokeWidth="1" strokeLinecap="round">
        <path d="M16,48 L48,16" />
        <path d="M20,48 L52,16" />
        <path d="M12,40 L44,8" />
        <path d="M28,48 L60,16" />
      </g>
      <text
        x="32"
        y="42"
        text-anchor="middle"
        font-family="'Playwrite US Modern'"
        font-size="24"
        font-weight="700"
        fill="#51a2ff"
      >
        Elí
      </text>
    </svg>
  );
}
