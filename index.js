const plus = document.querySelectorAll('.plus');
const newEl = document.createElement('p');
const bio = document.querySelectorAll('p');

console.log(plus);

for ( i=0; i < plus.length ; i++) {
        plus[i].addEventListener('click', function(e) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('bio');

        })
}

