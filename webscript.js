function useParameter(number) {
    document.getElementById("page0").style.display = "none";
    document.getElementById("page" + number).style.display = "block";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function goToUrl(text) {
    window.location.href = text;
}

const currentUrl = window.location.href;
const urlSearchParams = new URLSearchParams(new URL(currentUrl).search);

if (urlSearchParams.has('p')) {
    const paramValue = urlSearchParams.get('p');
    if (!isNaN(paramValue)) {
        useParameter(Number(paramValue));
    } else {
        console.log('The parameter is not a number.');
    }
} else {
    console.log('Showing page 0');
}
