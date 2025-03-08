//get the current year
const currentYear =new
Date().getFullYear();

//get the document's last modified date
const LastModified = document.LastModified;

//get the footer paragrahs
const FooterParagraphs = document. querySelectorAll('footer p');

//set the text content o the first paragraph to current year
FooterParagraphs [0].textContent = `copyright ${currentYear} | Happiness Nonkululeko  Ncube | South Africa`;

//set the text content of the last second paragraphto the last modified date
FooterParagraphs[1].textContent = `last modified: ${LastModified}`;


