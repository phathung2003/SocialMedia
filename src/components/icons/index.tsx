import type { SVGProps } from "react";

interface SVGIconProps {
  props?: SVGProps<SVGSVGElement>;
  pathFill?: string;
}

export const Add = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.417 5v10M5.417 10h10"
    />
  </svg>
);

export const Alert = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M8.575 3.217 1.517 15a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L11.425 3.217a1.666 1.666 0 0 0-2.85 0ZM10 7.5v3.333M10 14.167h.008"
    />
  </svg>
);
export const Bookmark = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M15.833 17.5 10 13.333 4.167 17.5V4.167A1.667 1.667 0 0 1 5.833 2.5h8.334a1.667 1.667 0 0 1 1.666 1.667V17.5Z"
    />
  </svg>
);
export const Check = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M16.667 5 7.5 14.167 3.333 10"
    />
  </svg>
);
export const ChevronLeft = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="m12.5 15-5-5 5-5"
    />
  </svg>
);
export const Comment = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M17.5 9.583a6.983 6.983 0 0 1-.75 3.167 7.083 7.083 0 0 1-6.333 3.917 6.984 6.984 0 0 1-3.167-.75L3.5 16.5l.583-3.75a6.984 6.984 0 0 1-.75-3.167A7.083 7.083 0 0 1 7.25 3.25a6.984 6.984 0 0 1 3.167-.75h.416A7.067 7.067 0 0 1 17.5 9.167v.416Z"
    />
  </svg>
);
export const Email = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#5D6778"
      fillRule="evenodd"
      d="M0 3.143a1.714 1.714 0 0 1 1.714-1.714h12.572A1.714 1.714 0 0 1 16 3.143v.39L8.438 8.577A.823.823 0 0 1 8 8.694a.823.823 0 0 1-.438-.118L0 3.534v-.391ZM0 5.25v7.607a1.714 1.714 0 0 0 1.714 1.715h12.572A1.714 1.714 0 0 0 16 12.857V5.25L9.226 9.767l-.005.004A2.247 2.247 0 0 1 8 10.122c-.429 0-.86-.116-1.22-.35l-.006-.005L0 5.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export const Google = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M3.448 8c0-.52.086-1.018.24-1.485L.992 4.456A7.996 7.996 0 0 0 .171 8c0 1.274.295 2.475.82 3.541L3.686 9.48A4.733 4.733 0 0 1 3.448 8Z"
      clipRule="evenodd"
    />
    <path
      fill="#EA4335"
      fillRule="evenodd"
      d="M8.182 3.273c1.129 0 2.149.4 2.95 1.054L13.462 2c-1.42-1.236-3.24-2-5.28-2a7.987 7.987 0 0 0-7.19 4.456l2.696 2.059a4.721 4.721 0 0 1 4.494-3.242Z"
      clipRule="evenodd"
    />
    <path
      fill="#34A853"
      fillRule="evenodd"
      d="M8.182 12.727a4.721 4.721 0 0 1-4.494-3.242L.992 11.544A7.987 7.987 0 0 0 8.182 16c1.954 0 3.82-.694 5.22-1.994l-2.56-1.978c-.722.454-1.63.7-2.66.7Z"
      clipRule="evenodd"
    />
    <path
      fill="#4285F4"
      fillRule="evenodd"
      d="M15.83 8c0-.473-.074-.982-.183-1.455H8.182v3.091h4.297c-.215 1.054-.8 1.864-1.636 2.392l2.559 1.978c1.47-1.365 2.427-3.398 2.427-6.006Z"
      clipRule="evenodd"
    />
  </svg>
);
export const Grid = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M8.333 2.5H2.5v5.833h5.833V2.5ZM17.5 2.5h-5.833v5.833H17.5V2.5ZM17.5 11.667h-5.833V17.5H17.5v-5.833ZM8.333 11.667H2.5V17.5h5.833v-5.833Z"
    />
  </svg>
);
export const Home = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M2.5 7.5 10 1.667 17.5 7.5v9.167a1.667 1.667 0 0 1-1.667 1.666H4.167A1.667 1.667 0 0 1 2.5 16.667V7.5Z"
    />
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M7.5 18.333V10h5v8.333"
    />
  </svg>
);
export const Inbox = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M18.333 10h-5l-1.666 2.5H8.333L6.667 10h-5"
    />
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M4.542 4.258 1.667 10v5a1.667 1.667 0 0 0 1.666 1.667h13.334A1.667 1.667 0 0 0 18.333 15v-5l-2.875-5.742a1.667 1.667 0 0 0-1.491-.925H6.033a1.667 1.667 0 0 0-1.491.925Z"
    />
  </svg>
);
export const Info = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      clipPath="url(#a)"
    >
      <path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666ZM10 13.333V10M10 6.667h.008" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const Like = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="m5.833 9.167 3.334-7.5a2.5 2.5 0 0 1 2.5 2.5V7.5h4.716a1.667 1.667 0 0 1 1.667 1.917l-1.15 7.5a1.667 1.667 0 0 1-1.667 1.416h-9.4m0-9.166v9.166m0-9.166h-2.5a1.667 1.667 0 0 0-1.666 1.666v5.834a1.667 1.667 0 0 0 1.666 1.666h2.5"
    />
  </svg>
);
export const Media = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M15.833 2.5H4.167c-.92 0-1.667.746-1.667 1.667v11.666c0 .92.746 1.667 1.667 1.667h11.666c.92 0 1.667-.746 1.667-1.667V4.167c0-.92-.746-1.667-1.667-1.667Z"
    />
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M7.083 8.333a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM17.5 12.5l-4.167-4.167L4.167 17.5"
    />
  </svg>
);
export const More = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M10 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM15 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM5 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z"
    />
  </svg>
);
export const Notification = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M15 6.667a5 5 0 0 0-10 0c0 5.833-2.5 7.5-2.5 7.5h15S15 12.5 15 6.667ZM11.442 17.5a1.666 1.666 0 0 1-2.884 0"
    />
  </svg>
);
export const Paper = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M11.667 1.667H5a1.667 1.667 0 0 0-1.667 1.666v13.334A1.667 1.667 0 0 0 5 18.333h10a1.667 1.667 0 0 0 1.667-1.666v-10l-5-5Z"
    />
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M11.667 1.667v5h5M13.333 10.833H6.667M13.333 14.167H6.667M8.333 7.5H6.667"
    />
  </svg>
);
export const Search = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333ZM17.5 17.5l-3.625-3.625"
    />
  </svg>
);
export const Send = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      clipPath="url(#a)"
    >
      <path d="m18.333 1.667-9.166 9.166M18.333 1.667 12.5 18.333l-3.333-7.5-7.5-3.333 16.666-5.833Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const Settings = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      clipPath="url(#a)"
    >
      <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M16.167 12.5a1.374 1.374 0 0 0 .275 1.517l.05.05a1.666 1.666 0 0 1-.541 2.72 1.668 1.668 0 0 1-1.818-.362l-.05-.05a1.375 1.375 0 0 0-1.516-.275 1.375 1.375 0 0 0-.834 1.258v.142a1.667 1.667 0 0 1-3.333 0v-.075a1.375 1.375 0 0 0-.9-1.258 1.374 1.374 0 0 0-1.517.275l-.05.05a1.666 1.666 0 0 1-2.72-1.818c.084-.202.207-.386.362-.54l.05-.05a1.375 1.375 0 0 0 .275-1.517 1.375 1.375 0 0 0-1.258-.834H2.5a1.667 1.667 0 0 1 0-3.333h.075a1.375 1.375 0 0 0 1.258-.9 1.375 1.375 0 0 0-.275-1.517l-.05-.05a1.667 1.667 0 1 1 2.359-2.358l.05.05a1.375 1.375 0 0 0 1.516.275H7.5a1.375 1.375 0 0 0 .833-1.258V2.5a1.667 1.667 0 0 1 3.334 0v.075a1.374 1.374 0 0 0 .833 1.258 1.375 1.375 0 0 0 1.517-.275l.05-.05a1.667 1.667 0 1 1 2.358 2.359l-.05.05a1.375 1.375 0 0 0-.275 1.516V7.5a1.375 1.375 0 0 0 1.258.833h.142a1.667 1.667 0 1 1 0 3.334h-.075a1.374 1.374 0 0 0-1.258.833Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const Upload = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      clipPath="url(#a)"
    >
      <path d="M13.333 13.333 10 10l-3.333 3.333M10 10v7.5" />
      <path d="M16.992 15.325A4.168 4.168 0 0 0 15 7.5h-1.05A6.667 6.667 0 1 0 2.5 13.583" />
      <path d="M13.333 13.333 10 10l-3.333 3.333" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const User = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1 0 10 2.5a3.333 3.333 0 0 0 0 6.667Z"
    />
  </svg>
);
export const Write = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      clipPath="url(#a)"
    >
      <path d="M9.167 3.333H3.333A1.667 1.667 0 0 0 1.667 5v11.667a1.667 1.667 0 0 0 1.666 1.666H15a1.667 1.667 0 0 0 1.667-1.666v-5.834" />
      <path d="M15.417 2.083a1.768 1.768 0 1 1 2.5 2.5L10 12.5l-3.333.833L7.5 10l7.917-7.917Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const X = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#5D6778"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M15 5 5 15M5 5l10 10"
    />
  </svg>
);
