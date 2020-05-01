# Playwright PDF

Playwright Chromium can print to PDF, it cannot navigate to a PDF.

Playwright Firefox cannot print to PDF, can it navigate to PDF then?

## The Answer

Yep! Like when navigating to an image file and getting a page with and `img`
element in it or navigating to a media file and getting a page with either the
`audio` or the `video` element in it, when using Playwright to navigate to a PDF
file in Firefox, one gets a page with PDF.js rendering the PDF in it.

In Chromium, the browser crashes when navigating to a PDF, because the Chrome
PDF viewer is a native component only available in Chrome, not Chromium.
