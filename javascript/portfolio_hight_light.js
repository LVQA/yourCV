showPortfolio();

function showPortfolio() {
    fetch('/yourCV/database/portfolio.json')
    .then((res) => {return res.json();})
    .then((portfolios) =>{
        let output = "";
        portfolios.forEach(portfolio => {
            output += `
            <div class="col-6">
            <div class="wrap">
                <div >
                    <a class="grid" href="${portfolio.link}" target="_blank">
                        <div class="col picture-wrap">
                            <img src="${portfolio.image}" alt="" class="portfolio_img">
                        </div>
                        <div class="col describer_portfolio">
                        
                        <h3>${portfolio.title}</h3>
                        <span>Time: ${portfolio.Time}</span>
                        
                            
                            
                            <p>${portfolio.Describe}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
            `;
        });
        document.querySelector('.portfolios_row').innerHTML = output
    })
}