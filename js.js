value = document.querySelector('input').value
btn = document.getElementById('send');
btn.addEventListener( 'click', () => {
	clicked(parsing);
})
console.log(value)


function clicked(callback){
	value = document.querySelector('input').value
	alert('as')
	console.log(value)
  	let xhr = new XMLHttpRequest();
  	xhr.open('GET', `https://picsum.photos/v2/list?limit=${value}`);
  	xhr.onload = function() {
  		result = JSON.parse(xhr.response);
		console.log('Результат: ', result);
      callback(result)
	};
	xhr.onerror = function() {
		console.log('Результат: error ');
	};
	if(value >10 || value < 1){
		console.log('Введиде число от 1 дл 10');
	}
	xhr.send();
}

function parsing(answer){
	console.log('начало')
	parent = document.getElementById('result')
	for( i = 0 ; i < answer[length] ; i++){
		id = answer[i]['id']
		download_url = answer[i]['download_url']
		author = answer[i]['author']
		width = answer[i]['width'] + 'px'
		height = answer[i]['height'] + 'px'
		url = answer[i]['url']
		card = document.createElement("div")
		infoPhoto = document.createElement("p")
		card.innerHTML = `<img id='${id}' href='${download_url}' width='${width}' height='${height}'>`
		infoPhoto.innerHTML = `Автор: ${author}, ссылка на источник: ${url}`
		document.body.insertBefore(card, parent)
		document.body.insertBefore(infoPhoto, parent)
		console.log('выполнено')
	}

}
