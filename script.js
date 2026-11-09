
   
   
   async function getUsers() {
        let count = document.getElementById('count').value

        let response = await fetch('https://randomuser.me/api/?results=' + count)
        let data = await response.json()

        let output = ''
        for (let i = 0; i < data.results.length; i++) {
            let user = data.results[i]

            output += '<div class="col-md-4 mb-3">'
            output += '<div class="card text-center p-3">'
            output += '<img src="' + user.picture.large + '" width="120" class="rounded-circle mx-auto">'
            output += '<h5>' + user.name.first + ' ' + user.name.last + '</h5>'
            output += '<p>' + user.email + '</p>'
            output += '<p>' + user.location.city + ', ' + user.location.country + '</p>'
            output += '<p>' + user.phone + '</p>'
            output += '</div></div>'
        }

        document.getElementById('result').innerHTML = output
    }