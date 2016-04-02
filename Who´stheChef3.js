document.addEventListener("DOMContentLoaded", function () {
    showInfo();
});

var daysToShow = 8;

function showInfo() {
    var weekEndSinNenas = false;
    var weekTallerAbril = true;
    var baseDate = new Date(2016, 0, 29);
    
    var today = new Date();
    var caldDate = baseDate;
    var endDate = new Date();

    var dateSstart = new Date(2016, 1, 12);
    var dateSend = new Date(2016, 2, 7);
    var dateSend2 = new Date(2016, 1, 18);

    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    endDate.setDate(today.getDate() + daysToShow);

    daysToShow += 8;

    var cenaEntreS = "Abril"; var cenaEntre4 = "Abril"; var cenaEntre2= "Alejandro"; var CenaCocinadaEntreAJJ= "Jazmín";
    var almuerzoEntreS = "Alejandro"; var almuerzoEntre3 = "Judith"; var almuerzoEntre2 = "Judith"; var almuerzoEntreAJ= "Judith";

    var tbody = "";

    while (caldDate.getTime() <= endDate.getTime()) {

        var cena = ""; var almuerzo = "";

        var diaDeLaSemana = caldDate.getDay(); //los dias en numeros;

        var diaEnLetras = "Sun";
        if (diaDeLaSemana == 1) diaEnLetras = "Mon";
        else if (diaDeLaSemana == 2) diaEnLetras = "Tue";
        else if (diaDeLaSemana == 3) {diaEnLetras = "Wed"; weekTallerAbril = !weekTallerAbril}
        else if (diaDeLaSemana == 4) diaEnLetras = "Thu";
        else if (diaDeLaSemana == 5) {diaEnLetras = "Fri"; weekEndSinNenas = !weekEndSinNenas; weekEndSinNenas = !weekEndSinNenas}
        else if (diaDeLaSemana == 6) diaEnLetras = "Sat";

        if (caldDate.getTime() >= dateSstart.getTime() && caldDate.getTime() <= dateSend.getTime()) {

            if (caldDate.getTime() >= new Date(2016, 1, 19) && caldDate.getTime() <= new Date(2016, 1, 27))
                weekEndSinNenas = true;

            if (caldDate.getTime() <= dateSend2.getTime()) {

                almuerzoEntreS = "Abril";

                almuerzo = almuerzoEntreS;

                if (cenaEntreS == "Abril") cenaEntreS = "Alejandro";
                else if (cenaEntreS == "Alejandro") cenaEntreS = "Abril";
                cena = cenaEntreS;
            }
            else {
                if ((diaDeLaSemana == 6 || diaDeLaSemana == 0) && weekEndSinNenas )  {
                    almuerzoEntreS = "Alejandro";
                } else {
                    almuerzoEntreS = "Abril";
                }

                almuerzo = almuerzoEntreS;

                if ((diaDeLaSemana == 2 || diaDeLaSemana == 4) || ((diaDeLaSemana == 5 || diaDeLaSemana == 6 || diaDeLaSemana == 0) && weekEndSinNenas)) {
                    cena = "Alejandro";
                } else {
                    if (cenaEntreS == "Abril") cenaEntreS = "Alejandro";
                    else if (cenaEntreS == "Alejandro") cenaEntreS = "Abril";
                    cena = cenaEntreS;
                }
            }
        }
        else {
            if ((diaDeLaSemana == 6 || diaDeLaSemana == 0) && weekEndSinNenas) {
                almuerzo = "Judith";
            } 
            else if (diaDeLaSemana == 4) {
                if (almuerzoEntre2 == "Judith") almuerzoEntre2 = "Jazmin";
                else if (almuerzoEntre2 == "Jazmin") almuerzoEntre2 = "Judith";
                almuerzo = almuerzoEntre2;
                
                if (CenaCocinadaEntreAJJ == "Judith") CenaCocinadaEntreAJJ = "Jazmin";
                else if (CenaCocinadaEntreAJJ == "Jazmin") CenaCocinadaEntreAJJ = "Alejandro";
                else if (CenaCocinadaEntreAJJ == "Alejandro") CenaCocinadaEntreAJJ = "Judith";
                cena = CenaCocinadaEntreAJJ;
            }
            else if (diaDeLaSemana == 1) {
                if (almuerzoEntreAJ == "Judith") almuerzoEntreAJ = "Abril";
                else if (almuerzoEntreAJ == "Abril") almuerzoEntreAJ= "Judith";
                almuerzo = almuerzoEntreAJ;
            }
            else {
                if (almuerzoEntre3 == "Judith") almuerzoEntre3 = "Jazmin";
                else if (almuerzoEntre3 == "Jazmin") almuerzoEntre3 = "Abril";
                else if (almuerzoEntre3 == "Abril") almuerzoEntre3 = "Judith";
                almuerzo = almuerzoEntre3;
            }
            
            if ((diaDeLaSemana == 2 || diaDeLaSemana == 4) || ((diaDeLaSemana == 5 || diaDeLaSemana == 6 || diaDeLaSemana == 0) && weekEndSinNenas)) {
                    if (cenaEntre2 == "Judith") cenaEntre2 = "Alejandro";
                    else if (cenaEntre2 == "Alejandro") cenaEntre2 = "Judith";
                    cena = cenaEntre2;
            } else {
                if (cenaEntre4 == "Alejandro") cenaEntre4 = "Judith";
                else if (cenaEntre4 == "Judith") cenaEntre4 = "Jazmin";
                else if (cenaEntre4 == "Jazmin") cenaEntre4 = "Abril";
                else if (cenaEntre4 == "Abril") cenaEntre4 = "Alejandro";
                cena = cenaEntre4;
            }
        }

        if (caldDate.getTime() >= today.getTime())
            tbody += "<tr><td>" + diaEnLetras + " " + caldDate.getDate().toString() +
                "</td><td>" + almuerzo + "</td><td>" + cena + "</td></tr>";

        caldDate.setDate(caldDate.getDate() + 1);
    }

    document.getElementById("list").innerHTML = tbody;
}