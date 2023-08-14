const btnEL = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = 'K4gYcmg6JbSTAZuNm2dDFQ==0XVMH1H1FILLkXA9'

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke(){

    try {
        jokeEl.innerText = 'Updating...';
    btnEL.disabled = true;
    btnEL.innerText = 'Loading...';
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEL.disabled = false;
    btnEL.innerText = 'Tell me a joke';

    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = 'An error occured, try again later';
        btnEL.disabled = false;
    btnEL.innerText = 'Tell me a joke';
        console.log(error);
    }

}

btnEL.addEventListener('click', getJoke);