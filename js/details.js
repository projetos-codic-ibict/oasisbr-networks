
const urlParams = new URLSearchParams(window.location.search)

const sourceName = document.querySelector('.name')
const type = document.querySelector('.type')
const institution = document.querySelector('.institution')
const url = document.querySelector('.url')
const email = document.querySelector('.email')
const documents = document.querySelector('.documents')
const issn = document.querySelector('.issn')

sourceName.innerHTML = urlParams.get('name')
type.innerHTML = urlParams.get('sourceType')
institution.innerHTML = urlParams.get('institution')
url.innerHTML = urlParams.get('sourceUrl')
email.innerHTML = urlParams.get('email')
documents.innerHTML = urlParams.get('validSize')
issn.innerHTML = urlParams.get('issn')