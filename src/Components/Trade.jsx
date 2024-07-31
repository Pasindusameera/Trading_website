import React from 'react'
import './Trade.css'


const Trade = () => {
  return (<>
    <div className='trade'>
      <div className='text'>
       <h1>Trading for anyone.<br/> Anywhere. Anytime.</h1>
       <p>Trade CFDs and options on global financial markets, all in one place with 24/7 trading <br/>and worldwide support.</p>
       <button>Start Trading</button>
      </div>
    </div>

    <div className='two'>
      <div className='col-4'>
        <div className='row-text'>
         <h1>2.5M+</h1>
         <p>Users worldwide</p>
        </div>
      </div>

      <div className='col-4'>
        <div className='row-text'>
         <h1>$650B+</h1>
         <p> Monthly volume</p>
        </div>
      </div>

      <div className='col-4'>
        <div className='row-text'>
         <h1>1999</h1>
         <p>Established since</p>
        </div>
      </div>

      <div className='col-4'>
        <div className='row-text'>
         <h1>168M+</h1>
         <p>Monthly deals</p>
        </div>
      </div>
    </div>

    <div className='third'>
      <div className='third-text'>
        <h1>We're 25 years strong</h1>
      </div>
      <div className='third-col'>
       <div className='column-4'>
        <div className='column-4-text'>
          <img src='./images/settings-icon.png' alt='' className='img1' />
          <h1>Dependable</h1>
          <p>Trade CFDs and options on global financial markets..</p>
         </div>
       </div>

       <div className='column-4'>
        <div className='column-4-text'>
          <img src='./images/lock.png' alt='' className='img1'/>
          <h1>Safe</h1>
          <p>Trade CFDs and options on global financial markets.</p>
         </div>
       </div>

       <div className='column-4'>
        <div className='column-4-text'>
          <img src='./images/reg.png' alt='' className='img1'/>
          <h1>Regulated</h1>
          <p>Trade CFDs and options all in one place with 24/7 trading and worldwide support.</p>
         </div>
       </div>

       <div className='column-4'>
        <div className='column-4-text'>
          <img src='./images/support.jpg' alt='' className='img1'/>
          <h1>24/7 support</h1>
          <p>Trade CFDs and place with 24/7 trading and worldwide support.</p>
         </div>
       </div>
       </div>
    </div>

    <div className='fourth'>
      <div className='fourth-up'>
        <h1 className='top'>Top trading assets and unique<br/> market indices</h1>
      </div>
      <div className='fourth-list'>
        <ul>
          <li>Forex</li>
          <li>Derived indices</li>
          <li>ETFs</li>
          <li>Stokes & indices</li>
          <li>Cryptocurrencies</li>
          <li>Dommodities</li>
        </ul>
      </div>

      <div className='market-indicate'>
        <div className='market-indicate-content'>
          <div className='market-indicate-col-4'>
            <div className='market-indicate-col-4-up'>
             <img src='./images/aus.png' alt='' className='aus-icon'/>
             <h4>AUD/USD</h4>
             <p>+0.04%</p>
            </div>
            <div className='market-indicate-col-4-middle'>
              <div className='bid-1'>
                <p>Bid</p>
                <p>0.665874</p>
              </div>
              <div className=''>
                <p>Ask</p>
                <p>0.665875</p>
              </div>
            </div>
            <div className='market-indicate-col-4-down'>
              <div className=''>
                <p>Spread <span>0.00005</span></p>
              </div>
              <div className='market-indicate-col-4-down-btn'>
                <button className='buy-btn'>Buy</button>
                <button className='sell-btn'>Sell</button>
              </div>
            </div>
          </div>
        </div>


        <div className='market-indicate-col-4'>
            <div className='market-indicate-col-4-up'>
             <img src='./images/eur.png' alt='' className='aus-icon'/>
             <h4>EUR/USD</h4>
             <p>+0.31%</p>
            </div>
            <div className='market-indicate-col-4-middle'>
              <div className='bid-1'>
                <p>Bid</p>
                <p>0.665874</p>
              </div>
              <div className=''>
                <p>Ask</p>
                <p>0.665875</p>
              </div>
            </div>
            <div className='market-indicate-col-4-down'>
              <div className=''>
                <p>Spread <span>0.00005</span></p>
              </div>
              <div className='market-indicate-col-4-down-btn'>
                <button className='buy-btn'>Buy</button>
                <button className='sell-btn'>Sell</button>
              </div>
            </div>
          </div>

          <div className='market-indicate-col-4'>
            <div className='market-indicate-col-4-up'>
             <img src='./images/aus.png' alt='' className='aus-icon'/>
             <h4>GBP/JPY</h4>
             <p>+0.53%</p>
            </div>
            <div className='market-indicate-col-4-middle'>
              <div className='bid-1'>
                <p>Bid</p>
                <p>0.665874</p>
              </div>
              <div className=''>
                <p>Ask</p>
                <p>0.665875</p>
              </div>
            </div>
            <div className='market-indicate-col-4-down'>
              <div className=''>
                <p>Spread <span>0.00005</span></p>
              </div>
              <div className='market-indicate-col-4-down-btn'>
                <button className='buy-btn'>Buy</button>
                <button className='sell-btn'>Sell</button>
              </div>
            </div>
          </div>

          <div className='market-indicate-col-4'>
            <div className='market-indicate-col-4-up'>
             <img src='./images/gbp.png' alt='' className='aus-icon'/>
             <h4>GBP/USD</h4>
             <p>+0.22%</p>
            </div>
            <div className='market-indicate-col-4-middle'>
              <div className='bid-1'>
                <p>Bid</p>
                <p>0.665874</p>
              </div>
              <div className=''>
                <p>Ask</p>
                <p>0.665875</p>
              </div>
            </div>
            <div className='market-indicate-col-4-down'>
              <div className=''>
                <p>Spread <span>0.00005</span></p>
              </div>
              <div className='market-indicate-col-4-down-btn'>
                <button className='buy-btn'>Buy</button>
                <button className='sell-btn'>Sell</button>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div className='fifth'>
      <div className='fifth-text-up'>
        <p><span>Forex at your fingertips. </span>Currency trading with major, minor, and exotic pairs.</p>
        <div className='fifth-text-up2'>
          <p>See all forex pairs <span>></span></p>
        </div>
      </div>
      <div className='fifth-text-mid'>
        <h1>User-friendly trading platforms, on<br/> any device</h1>
      </div>
      <div className='fifth-list'>
         <ul>
         <li ><a className="active" >All</a></li>
          <li>CFDs</li>
          <li>Options</li>
          <li>Bots</li>
          <li>Social</li>
         </ul>
      </div>
{/* ________________________________________________________________________________________ */}

<div className='main-main-col'>
      <div className='main-col'>
       <div className='fifth-last-col'>
        <div className='tyty'>
             <div className='fifth-last-col-3'>
              <div className='col-3-container'>
               <div className='col-3-images'>
                <img src='./Images/mt5.png' alt=''/>
               </div>  
                <h2>Deriv MT5</h2>
                <p>The most popular and comprehensive<br/> CFDs platform.</p>
                <p><a href=''>Learn More</a></p>
                </div>
             </div>

             <div className='fifth-last-col-3'>
              <div className='col-3-container'>
               <div className='col-3-images'>
                <img src='./Images/mt5.png' alt=''/>
               </div>  
                <h2>Deriv MT5</h2>
                <p>The most popular and comprehensive<br/> CFDs platform.</p>
                <p><a href=''>Learn More</a></p>
                </div>
             </div>

             <div className='fifth-last-col-3'>
              <div className='col-3-container'>
               <div className='col-3-images'>
                <img src='./Images/mt5.png' alt=''/>
               </div>  
                <h2>Deriv MT5</h2>
                <p>The most popular and comprehensive<br/> CFDs platform.</p>
                <p><a href=''>Learn More</a></p>
                </div>
             </div>

          
             

        </div>
       </div>
      </div>
      </div>
</div>





    <div className='main-main-col-duplicate'>
      <div className='main-col-duplicate'>
       <div className='fifth-last-col'>
        <div className='tyty-dup'>
             <div className='fifth-last-col-3-duplicate'>
              <div className='col-3-container'>
               <div className='col-3-images'>
                <img src='./Images/mt5.png' alt=''/>
               </div>  
                <h2>Deriv MT5</h2>
                <p>The most popular and comprehensive<br/> CFDs platform.</p>
                <p><a href=''>Learn More</a></p>
                </div>
             </div>

             <div className='fifth-last-col-3-duplicate'>
              <div className='col-3-container'>
               <div className='col-3-images'>
                <img src='./Images/mt5.png' alt=''/>
               </div>  
                <h2>Deriv MT5</h2>
                <p>The most popular and comprehensive<br/> CFDs platform.</p>
                <p><a href=''>Learn More</a></p>
                </div>
             </div>

             <div className='fifth-last-col-3-duplicate'>
              <div className='col-3-container'>
               <div className='col-3-images'>
                <img src='./Images/mt5.png' alt=''/>
               </div>  
                <h2>Deriv MT5</h2>
                <p>The most popular and comprehensive<br/> CFDs platform.</p>
                <p><a href=''>Learn More</a></p>
                </div>
             </div>

        </div>
       </div>
      </div>

    </div>
  <div/>

  {/*--------Seven------------*/}

  <div className='seven-section'>
    <div className='seven-text'>
      <div className='seven-text-up'>
        <h1>Join over 2.5 million<br/> online traders</h1>
        <button>Open demo account</button>
      </div>
    </div>
  </div>
  



  <div className='fotter'>
    <div className='fotter-up'>
      <div className='fotter-up-left'>
        <h1>deriv</h1>
      </div>
      <div className='fotter-up-right'>
        <a href=''><img src='./Images/youtube-icon.png' alt='' width={30} height={30}/></a>
        <a href=''><img src='./Images/linkein.png' alt='' width={30} height={30} /></a>
        <a href=''><img src='./Images/twitter.png' alt='' width={30} height={30}/></a>
        <a href=''><img src='./Images/facebook.png' alt='' width={30} height={30}/></a>
      </div>
    </div>
    <div className='fotter-down'>
      <div className='fotter-down-text'>
        <div className='fotter-col-6'>
          <h4>ABOUT US</h4>
          <p>Who we are</p>
          <p>Partnership programmes</p>
          <p>Principles</p>
          <p>Contact us</p>
          <p>Careers</p>
          <p>Deriv life</p>
        </div>
      </div>

      <div className='fotter-down-text'>
        <div className='fotter-col-6'>
          <h4>TRADE TYPES</h4>
          <p>CFDs</p>
          <p>Options</p>
          <p>Multipliers</p>
        </div>
      </div>

      <div className='fotter-down-text'>
        <div className='fotter-col-6'>
          <h4>MARKETS</h4>
          <p>Forex</p>
          <p>Derived indices</p>
          <p>Stocks & indices</p>
          <p>ETFs</p>
          <p>Cryptocurrencies</p>
          <p>Commodities</p>
        </div>
      </div>

      <div className='fotter-down-text'>
        <div className='fotter-col-6'>
          <h4>PLATFORMS</h4>
          <p>Deriv MT5</p>
          <p>Deriv X</p>
          <p>Deriv cTrader</p>
          <p>Deriv GO</p>
          <p>Deriv Trader</p>
          <p>Smart Trader</p>
          <p>Deriv Bot</p>
          <p>Binary Bot</p>
        </div>
      </div>

      <div className='fotter-down-text'>
        <div className='fotter-col-6'>
          <h4>SUPPORT</h4>
          <p>Help Center</p>
          <p>Community</p>
          <p>Payment methodes</p>
          <p>Status page</p>
          <p>Deriv blog</p>
        </div>
      </div>

      <div className='fotter-down-text'>
        <div className='fotter-col-6'>
          <h4>LEGAL</h4>
          <p>Regulatory information</p>
          <p>Terms & conditions</p>
          <p>Secure & responsible trading</p>
        </div>
      </div>




    </div>
  </div>



    </>
  )
}

export default Trade
