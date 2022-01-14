export default class QuickChartHandler {

   async getChart(data) {
            const url = `https://quickchart.io/chart?bkg=rgb(255,255,255)&c=${data}`
            const res = await fetch(url);
            const blob = await res.blob();
            if (res.status === 404) {
                return false;
            }
            return blob;
   }
}