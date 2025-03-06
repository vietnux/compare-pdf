const axios = require('axios');
const puppeteer = require('puppeteer');

class XhrHttps  {
   instance = null;

   init = async (fakeUserAgent) => {
      // let fakeUserAgent = true
      let config = {};
      if (fakeUserAgent) {
         const jsonBrown = ['android-browser', 'chrome', 'firefox'];
         const brow = Math.floor(Math.random() * 3);
         const arbrow = require(`../../assets/${jsonBrown[brow]}.json`);
         const au = Math.floor(Math.random() * arbrow.length);
         const userAgent = arbrow[au];//'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36';

         console.log(userAgent);
         // config.timeout = 30 * 1000;
         config.headers = { 'X-Custom-Header': 'foobar', 'User-Agent': userAgent }
      }

      this.instance = axios.create(config);

      //   axiosinstance.defaults.headers.common['User-Agent'] = userAgent;

      this.instance.interceptors.request.use((config) => {
         return config;
      }, error => {
         return console.log(error);
      },
      );

      this.instance.interceptors.response.use((response) => {
         // console.log(response.data)
         // console.log("Err res");
         return response.data;
      },
         error => {
            // console.log("interceptors.response error: " + (error));
            // console.log(error.toString() + " " + error.config.url);
            return JSON.stringify(error);


         },
      );
      return this.instance;
   }
   open = async (url) =>{
      let data = '';
      try {
         const browser = await puppeteer.launch({
             headless: false,
             args: ["--disable-setuid-sandbox", '--incognito'],
             'ignoreHTTPSErrors': true,
             
         });
         
         const context = await browser.createIncognitoBrowserContext();
         const page = await context.newPage();
         const pages = await browser.pages();
         if (pages.length > 1) {
            await pages[0].close();
        }

        
         await page.setExtraHTTPHeaders({
             'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8'
         });

         const jsonBrown = ['android-browser', 'chrome', 'firefox'];
         const brow = Math.floor(Math.random() * 3);
         const arbrow = require(`../../assets/${jsonBrown[brow]}.json`);
         const au = Math.floor(Math.random() * arbrow.length);
         const userAgent = arbrow[au];
         
         await page.setUserAgent( userAgent.ua );

         // let displays = electron.screen.getAllDisplays()
         // await page.setViewport({ width: displays[0].workArea.width, height: displays[0].workArea.height });
         
         // page.once('response', response => {
         //     console.log("URL: "+response.url());
         //     if (response.url() === url) {
         //     //   expect(response.status()).equals(301);
         //     } else {
         //         // console.log("URL: "+response.url());
         //     }
         // })

         // browser.process

         const response = await page.goto(url );
         // console.log("URL: " + response.url());

         // if (response.url() == 'https://www.teepublic.com/') {
         //     data = 'die';
         // } else if (response.url() != url) {
         //     data = '';
         // } else
             data = await page.content()

         // console.log(response)
         await browser.close();
         return data;

     } catch (err) {
         console.log("Could not create a browser instance => : ", err);
     }
   }
}
exports.XhrHttps = new XhrHttps();