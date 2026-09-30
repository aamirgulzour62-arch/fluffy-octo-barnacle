export default function handler(req, res) {
  const siteUrl =
    "https://racialburgerdiverse.com/dS29JqD/B7znf77/wQ6omTrppMaIJ6f/F8yQtsycESAL8Q/ORweFfE2X4/SeMxtgTv5/7fI/_oOIYDP8dloWrrrv/-xVhS/usR/F7nbTgJkNVR/2KNM2i4t_9iaixAdt/K4x820orBcVQ
";

  const imageUrl =
    "https://pub-9106393a3bc14926b10613a0c98b892a.r2.dev/fol4/motorola14.gif";

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Preview</title>

  <meta property="og:title" content="Preview">
  <meta property="og:description" content="Click to continue">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${siteUrl}">
</head>

<body style="margin:0;text-align:center;font-family:Arial,sans-serif">
  <p>Preview</p>

  <a href="${siteUrl}" rel="nofollow noopener noreferrer">
    <img
      src="${imageUrl}"
      alt="Preview image"
      style="max-width:100%;height:auto"
    >
  </a>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=UTF-8" );
  return res.status(200).send(html);
}
