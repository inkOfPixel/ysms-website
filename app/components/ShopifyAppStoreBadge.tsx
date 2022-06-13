type ShopifyAppStoreBadgeProps = {
  className?: string;
  color: "light" | "dark";
};

export default function ShopifyAppStoreBadge({
  className,
  color,
}: ShopifyAppStoreBadgeProps) {
  const backgroundColor = color === "light" ? "#ffffff" : "#000000";
  const textColor = color === "light" ? "#000000" : "#ffffff";
  const borderColor = "#C3CCD4";
  return (
    <svg
      className={className}
      x="0px"
      y="0px"
      viewBox="0 0 165.75 43.75"
      enableBackground="new 0 0 165.75 43.75"
    >
      <g>
        <g>
          <path
            fill={backgroundColor}
            d="M4.86,43.38c-2.47,0-4.48-1.97-4.48-4.4V4.78c0-2.43,2.01-4.4,4.48-4.4h156.04c2.47,0,4.48,1.97,4.48,4.4v34.2
        c0,2.43-2.01,4.4-4.48,4.4H4.86z"
          />
          <path
            fill={borderColor}
            d="M160.89,43.75H4.86C2.18,43.75,0,41.61,0,38.97V4.78C0,2.14,2.18,0,4.86,0h156.04
        c2.68,0,4.86,2.14,4.86,4.78v34.2C165.75,41.61,163.57,43.75,160.89,43.75z M4.86,0.75c-2.26,0-4.11,1.81-4.11,4.03v34.2
        c0,2.22,1.84,4.03,4.11,4.03h156.04c2.26,0,4.11-1.81,4.11-4.03V4.78c0-2.22-1.84-4.03-4.11-4.03C160.89,0.75,4.86,0.75,4.86,0.75
        z"
          />
        </g>
      </g>
      <g>
        <g>
          <g>
            <path
              fill={textColor}
              d="M28.2,13.05c-0.09-0.01-1.98-0.15-1.98-0.15s-1.31-1.3-1.46-1.45c-0.03-0.03-0.08-0.06-0.12-0.07
          l-0.94,21.65l7.4-1.61c0,0-2.67-18.05-2.69-18.17C28.39,13.12,28.28,13.06,28.2,13.05z"
            />
          </g>
          <g>
            <path
              fill={textColor}
              d="M24.22,11.38c-0.02,0.01-0.29,0.09-0.74,0.23c-0.44-1.26-1.21-2.42-2.58-2.42c-0.04,0-0.08,0-0.11,0
          c-0.39-0.51-0.87-0.74-1.28-0.74c-3.17,0-4.69,3.97-5.17,5.98c-1.23,0.38-2.11,0.65-2.22,0.69c-0.69,0.22-0.71,0.24-0.8,0.89
          c-0.07,0.49-1.87,14.42-1.87,14.42l13.9,2.6l0.94-21.67C24.27,11.37,24.24,11.38,24.22,11.38z M20.69,12.34c0,0.05,0,0.09,0,0.14
          c-0.77,0.24-1.61,0.5-2.45,0.76c0.47-1.82,1.36-2.7,2.13-3.03C20.56,10.69,20.69,11.39,20.69,12.34z M19.43,9.31
          c0.14,0,0.27,0.05,0.41,0.14c-1.02,0.48-2.11,1.68-2.57,4.09c-0.67,0.21-1.33,0.41-1.94,0.6C15.87,12.3,17.15,9.31,19.43,9.31z
           M19.97,20.04c0,0-0.82-0.44-1.83-0.44c-1.48,0-1.55,0.93-1.55,1.16c0,1.27,3.32,1.76,3.32,4.75c0,2.35-1.49,3.86-3.5,3.86
          c-2.41,0-3.64-1.5-3.64-1.5l0.65-2.13c0,0,1.27,1.09,2.33,1.09c0.7,0,0.98-0.55,0.98-0.95c0-1.66-2.73-1.74-2.73-4.47
          c0-2.3,1.65-4.52,4.98-4.52c1.28,0,1.92,0.37,1.92,0.37L19.97,20.04z M21.52,12.22c0-0.08,0-0.17,0-0.26
          c0-0.78-0.11-1.42-0.28-1.92c0.7,0.09,1.17,0.89,1.47,1.81C22.36,11.96,21.96,12.08,21.52,12.22z"
            />
          </g>
        </g>
        <g>
          <path
            fill={textColor}
            d="M42.15,31.9c-2.49,0-3.65-1.56-3.88-3.1l1.6-0.24c0.19,1.06,0.72,2.03,2.28,2.03
        c1.17,0,2.01-0.67,2.01-1.68c0-1.08-0.57-1.53-2.24-1.98c-2.16-0.52-3.3-1.31-3.3-3.15c0-1.66,1.37-2.88,3.42-2.88
        c2.03,0,3.27,1.08,3.56,2.67l-1.58,0.25c-0.21-1.03-0.93-1.62-1.98-1.62c-1.2,0-1.83,0.58-1.83,1.45c0,0.9,0.39,1.35,2.16,1.8
        c2.17,0.54,3.42,1.29,3.42,3.3C45.79,30.58,44.34,31.9,42.15,31.9z"
          />
          <path
            fill={textColor}
            d="M47.32,20.29h1.59v4.82c0.36-0.74,1.19-1.35,2.4-1.35c1.5,0,2.53,0.87,2.53,2.94v5.06h-1.62v-4.97
        c0-1.16-0.48-1.68-1.51-1.68c-0.96,0-1.8,0.61-1.8,1.82v4.83h-1.59C47.32,31.75,47.32,20.29,47.32,20.29z"
          />
          <path
            fill={textColor}
            d="M55.17,27.53c0-2.3,1.59-3.78,3.72-3.78s3.72,1.47,3.72,3.75v0.61c0,2.31-1.6,3.78-3.74,3.78
        c-2.15,0-3.71-1.5-3.71-3.75V27.53z M58.89,30.62c1.29,0,2.07-0.96,2.07-2.48v-0.63c0-1.55-0.79-2.49-2.07-2.49
        c-1.29,0-2.08,0.93-2.08,2.48v0.63C56.8,29.68,57.57,30.62,58.89,30.62z"
          />
          <path
            fill={textColor}
            d="M65.57,23.9v1.25c0.43-0.75,1.35-1.4,2.46-1.4c1.85,0,3.21,1.35,3.21,3.69v0.67
        c0,2.35-1.32,3.78-3.24,3.78c-1.17,0-2.03-0.6-2.43-1.35v3.88h-1.59V23.9H65.57z M67.65,30.61c1.26,0,1.95-0.85,1.95-2.44v-0.67
        c0-1.65-0.84-2.46-1.95-2.46c-1.21,0-2.1,0.81-2.1,2.51v0.58C65.54,29.81,66.37,30.61,67.65,30.61z"
          />
          <path
            fill={textColor}
            d="M72.49,21.62c0-0.54,0.43-0.96,0.97-0.96c0.56,0,0.99,0.42,0.99,0.96s-0.43,0.96-0.99,0.96
        C72.91,22.58,72.49,22.16,72.49,21.62z M72.67,23.9h1.61v7.85h-1.61V23.9z"
          />
          <path
            fill={textColor}
            d="M76.45,25.18h-1.02V23.9h1.02v-1.12c0-1.65,0.87-2.55,2.54-2.55c0.51,0,0.9,0.06,1.21,0.18v1.27
        c-0.21-0.1-0.63-0.18-1.02-0.18c-0.82,0-1.11,0.48-1.11,1.22v1.18h2.04v1.27h-2.04v6.57h-1.62V25.18z"
          />
          <path
            fill={textColor}
            d="M84.6,29.09l1.86-5.19h1.59l-4.04,10.53h-1.6l1.33-3.47l-2.91-7.07h1.74L84.6,29.09z"
          />
          <path
            fill={textColor}
            d="M97.76,28.99h-3.79l-0.81,2.76h-1.58l3.23-10.73h2.26l3.19,10.73h-1.71L97.76,28.99z M94.33,27.73h3.07
        l-1.54-5.31L94.33,27.73z"
          />
          <path
            fill={textColor}
            d="M103.06,23.9v1.25c0.44-0.75,1.35-1.4,2.46-1.4c1.85,0,3.21,1.35,3.21,3.69v0.67
        c0,2.35-1.32,3.78-3.24,3.78c-1.17,0-2.03-0.6-2.43-1.35v3.88h-1.59V23.9H103.06z M105.13,30.61c1.26,0,1.95-0.85,1.95-2.44v-0.67
        c0-1.65-0.84-2.46-1.95-2.46c-1.21,0-2.1,0.81-2.1,2.51v0.58C103.03,29.81,103.85,30.61,105.13,30.61z"
          />
          <path
            fill={textColor}
            d="M111.71,23.9v1.25c0.43-0.75,1.35-1.4,2.46-1.4c1.85,0,3.21,1.35,3.21,3.69v0.67
        c0,2.35-1.32,3.78-3.24,3.78c-1.17,0-2.02-0.6-2.43-1.35v3.88h-1.59V23.9H111.71z M113.79,30.61c1.26,0,1.95-0.85,1.95-2.44v-0.67
        c0-1.65-0.84-2.46-1.95-2.46c-1.22,0-2.1,0.81-2.1,2.51v0.58C111.68,29.81,112.51,30.61,113.79,30.61z"
          />
          <path
            fill={textColor}
            d="M125.27,31.9c-2.49,0-3.64-1.56-3.89-3.1l1.6-0.24c0.19,1.06,0.72,2.03,2.28,2.03
        c1.17,0,2.01-0.67,2.01-1.68c0-1.08-0.57-1.53-2.23-1.98c-2.16-0.52-3.3-1.31-3.3-3.15c0-1.66,1.36-2.88,3.42-2.88
        c2.02,0,3.27,1.08,3.56,2.67l-1.57,0.25c-0.21-1.03-0.93-1.62-1.98-1.62c-1.2,0-1.83,0.58-1.83,1.45c0,0.9,0.39,1.35,2.16,1.8
        c2.18,0.54,3.42,1.29,3.42,3.3C128.92,30.58,127.46,31.9,125.27,31.9z"
          />
          <path
            fill={textColor}
            d="M132.37,21.76v2.15h1.96v1.27h-1.96v4.35c0,0.72,0.36,1.01,1.02,1.01c0.39,0,0.76-0.06,1.04-0.18v1.28
        c-0.3,0.13-0.72,0.22-1.31,0.22c-1.6,0-2.35-0.79-2.35-2.17v-4.5h-1.04V23.9h1.04v-2.15C130.76,21.76,132.37,21.76,132.37,21.76z"
          />
          <path
            fill={textColor}
            d="M135.32,27.53c0-2.3,1.59-3.78,3.72-3.78s3.72,1.47,3.72,3.75v0.61c0,2.31-1.6,3.78-3.74,3.78
        c-2.15,0-3.7-1.5-3.7-3.75L135.32,27.53L135.32,27.53z M139.04,30.62c1.29,0,2.07-0.96,2.07-2.48v-0.63
        c0-1.55-0.79-2.49-2.07-2.49c-1.29,0-2.09,0.93-2.09,2.48v0.63C136.96,29.68,137.73,30.62,139.04,30.62z"
          />
          <path
            fill={textColor}
            d="M144.15,23.9h1.59v1.4c0.48-0.96,1.15-1.51,2.7-1.5v1.51c-1.77,0.01-2.7,0.5-2.7,2.13v4.31h-1.59V23.9z"
          />
          <path
            fill={textColor}
            d="M152.68,31.9c-2.15,0-3.66-1.41-3.66-3.75v-0.61c0-2.3,1.5-3.78,3.58-3.78c1.83,0,3.44,1.08,3.44,3.7v0.7
        h-5.4c0.02,1.69,0.78,2.49,2.09,2.49c1.14,0,1.7-0.71,1.86-1.29l1.4,0.33C155.69,30.76,154.63,31.9,152.68,31.9z M150.65,27.05
        h3.79v-0.05c-0.06-1.44-0.75-2.04-1.85-2.04C151.63,24.97,150.8,25.58,150.65,27.05z"
          />
        </g>
        <g>
          <path
            fill={textColor}
            d="M39.76,11.52h2.89v0.73h-1.97v1.43h1.57v0.71h-1.57v1.99h-0.92C39.76,16.39,39.76,11.52,39.76,11.52z"
          />
          <path fill={textColor} d="M43.9,11.52h0.93v4.87H43.9V11.52z" />
          <path
            fill={textColor}
            d="M46.37,11.52h1.08l1.78,3.38v-3.38h0.84v4.87h-0.94l-1.93-3.64v3.64h-0.83L46.37,11.52L46.37,11.52z"
          />
          <path
            fill={textColor}
            d="M53.11,11.52c1.54,0,2.32,0.82,2.32,2.16v0.5c0,1.33-0.76,2.2-2.32,2.2h-1.55v-4.86H53.11z M52.48,12.25
        v3.42h0.6c0.96,0,1.4-0.52,1.4-1.47V13.7c0-0.93-0.41-1.46-1.41-1.46C53.07,12.25,52.48,12.25,52.48,12.25z"
          />
          <path fill={textColor} d="M58.73,11.52h0.92v4.87h-0.92V11.52z" />
          <path
            fill={textColor}
            d="M62.13,12.25h-1.27v-0.73h3.46v0.73h-1.26v4.14h-0.93L62.13,12.25L62.13,12.25z"
          />
          <path
            fill={textColor}
            d="M67.25,14.22v-0.54c0-1.33,0.89-2.22,2.16-2.22c1.28,0,2.14,0.86,2.14,2.21v0.52
        c0,1.34-0.84,2.26-2.15,2.26S67.25,15.54,67.25,14.22z M70.6,14.21v-0.53c0-0.89-0.42-1.49-1.19-1.49s-1.2,0.6-1.2,1.49v0.53
        c0,0.93,0.44,1.5,1.2,1.5S70.6,15.14,70.6,14.21z"
          />
          <path
            fill={textColor}
            d="M72.88,11.52h1.07l1.78,3.38v-3.38h0.84v4.87h-0.94l-1.93-3.64v3.64h-0.83L72.88,11.52L72.88,11.52z"
          />
          <path
            fill={textColor}
            d="M80.96,12.25h-1.27v-0.73h3.46v0.73h-1.27v4.14h-0.93C80.96,16.39,80.96,12.25,80.96,12.25z"
          />
          <path
            fill={textColor}
            d="M84.33,11.52h0.92v2.04h1.88v-2.04h0.92v4.87h-0.92v-2.08h-1.88v2.08h-0.92V11.52z"
          />
          <path
            fill={textColor}
            d="M89.55,11.52h2.91v0.73h-1.99v1.29h1.61v0.69h-1.61v1.43h2.1v0.73h-3.01V11.52z"
          />
        </g>
      </g>
    </svg>
  );
}