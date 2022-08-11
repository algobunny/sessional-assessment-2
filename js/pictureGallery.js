// Step 1 - Create an object of XHR
const xhr = new XMLHttpRequest();
// console.log(`Ready State Log 1 - ${xhr.readyState}`)

const source =
    "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";

// Step 2 - Open the portal of communication b/w client and the server
xhr.open("GET", source, false);

// Step 3 - Perform a function when your readyState is in transition
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        // console.log(response);
        let output = "";

        for (let i = 0; i < 50; i++) {
            console.log(response[i]);

            output += `<div class="col-sm-4 ml-1 mb-2">
            <div class="card" style="width: 18rem;">
            <img src="${response[i].url}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${response[i].title}</p>
            </div>
          </div>
      </div>`;
        }
        document.querySelector("#pictureGallery").innerHTML = output;
    }
};

// Step 4 - Send the request
xhr.send();
