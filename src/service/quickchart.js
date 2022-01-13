export default class QuickChartHandler {

   async getChart(type) {
            const url = `https://quickchart.io/chart?bkg=rgb(255,255,255)&c={type:'${type}',data:{labels:[2012,2013,2014,2015,2016],datasets:[{label:'Users',data:[120,60,50,180,120]}]}}`
            const res = await fetch(url);
            const blob = await res.blob();
            if (res.status === 404) {
                return false;
            }
            return blob;
   }
}