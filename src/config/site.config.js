import {
  BsDiscord,
  BsEnvelopeAt,
  BsGithub,
  BsPaypal,
} from "react-icons/bs";

const oldConfig = {
  /* Site MetaData */
  // The name of the site
  siteName: "mbahArip Stash",
  // The description of the site
  // Used in meta tags and document head
  siteDescription:
    "Personal Stash of mbahArip, a place to store my files.",
  // Fav icon of the site
  // Also used as the logo of the site on the navbar
  siteIcon: "/favicon.svg",
  // Add site page password protection
  // If this is set, the site will be protected with the password
  // NOTE: The files are still accessible via direct link, but the site is not.
  privateIndex: false,
  indexPassword:
    "640e3e38dd31aec254f214ba38541a82ddb615e73ce9c6129f33ef549b154ab9",
  // Navbar menu links
  navbarLinks: [
    {
      icon: BsDiscord,
      name: "Discord",
      href: "https://discord.gg/xxxxxx",
      newTab: true,
    },
    {
      icon: BsGithub,
      name: "GitHub",
      href: "https://www.github.com/mbaharip",
      newTab: true,
    },
    {
      icon: BsPaypal,
      name: "Donate",
      href: "https://www.paypal.me/mbaharip",
      newTab: true,
    },
    {
      name: "Main Website",
      href: "https://www.mbaharip.com",
      newTab: true,
    },
  ],
  // Footer text
  // It will be rendered as
  // {year} {footerText} - Powered by next-gdrive-index ❤️
  footerText: "mbahArip Stash",

  files: {
    // Show file icon from Google Drive before the file name
    showFileNameIcon: true,
    // Use Google Drive file icon instead of our file icon on list view
    listUseFileIcon: true,
    // Show file size on mobile list view
    listMobileShowFileSize: false,
    // Refer type to this file:
    // /src/utils/mimeTypesHelper.ts:40
    allowThumbnailFileType: ["image", "video", "pdf"],
  },
  /* Experimental: Render Banner */
  banner: {
    render: true,
  },
  breadcrumb: {
    limiter: "/",
  },
  /* Config for readme file render */
  readme: {
    // If this set
    // rootFolder: "root", // Rootto true, it will render the readme file on the page.
    render: true,
    // Position of the readme file on the page.
    // It can be "start" or "end".
    position: "end",
    // Render image description based on the image alt text.
    renderImageAlt: true,
  },
  /* Config for file preview */
  preview: {
    // Timeout duration for preview request
    // If the request takes longer than this, it will be canceled.
    // And the thumbnail or the file icon will be shown instead.
    // The value is in milliseconds.
    timeout: 30000,
    // The URL of the preview service
    // Available services:
    // google / mozilla
    // NOTE: the Google service sometimes doesn't work.
    pdfProvider: "mozilla",
  },
};
const config = {
  /* Site MetaData */
  siteName: "mbahArip Stash",
  siteDescription:
    "Personal Stash of mbahArip, a place to store my files.",

  /* General */
  /**
   * Site wide password protection
   */
  privateIndex: true,
  indexPassword:
    "640e3e38dd31aec254f214ba38541a82ddb615e73ce9c6129f33ef549b154ab9",

  navbar: {
    /**
     * Title beside the logo
     * If not set, will be using `siteName` instead
     */
    title: "",
    links: [
      {
        icon: BsGithub,
        name: "GitHub",
        href: "https://www.github.com/mbaharip",
        newTab: true,
      },
      {
        icon: BsPaypal,
        name: "Donate",
        href: "https://www.paypal.me/mbaharip",
        newTab: true,
      },
      {
        icon: BsEnvelopeAt,
        name: "Email",
        href: "mailto:support@mbaharip.com",
      },
      {
        name: "Main Website",
        href: "https://www.mbaharip.com",
        newTab: true,
      },
    ],
  },
  files: {
    /**
     * Limit breadcrumb to specific depth
     * 0 = Unlimited
     * 1 = Only show current file
     * 2 = Show current file and its parent
     * 3 = Show current file, its parent and grandparent
     * and so on.
     * Default: 2
     */
    breadcrumbDepth: 2,
    breadcrumbLimiter: "/",
    /**
     * Limit thumbnail to specific file group
     * Refer to typeGroup on /src/utils/fileHelper/fileGroup.ts:1
     * Will use google drive thumbnailLink
     * If thumbnailLink not available, will use Icon instead
     */
    allowThumbnailFileType: ["image", "video", "pdf"],
  },
  footer: {
    /**
     * Footer text will be rendered as
     * {year} {footerText} - Powered by next-gdrive-index ❤️
     */
    text: "mbahArip Stash",
    renderYear: true,
  },
};

export default config;
