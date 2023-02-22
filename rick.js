const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api= await fetch(url);
    const data= await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado")
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="a-box">
        <div class="img-container">
          <div class="img-inner">
            <div class="inner-skew">
              <img src="${item.image}">
            </div>
          </div>
        </div>
        <div class="text-container">
          <h3>${item.name}</h3>
          <div>
            ${item.species}
        </div>
      </div>
        `
        divRes.appendChild(divItem)
    });
}

apiRick(1)