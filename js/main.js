$.getJSON("./json/schedule.json", function(json){
    var table = $("#scheduletable");
    var days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    //Table header
    var html = "<thead><tr>";

    html += "<td width='150px'></td>";

    for(i in days){
        html += "<th>" + days[i] + "</th>";
    }

    html += "</tr></thead>";
    table.append(html);

    //Table body
    html = "<tbody>";

    function getTimeLabel(time, color){
        return "<span class='tabledata" + (color ? " " + color : "") + "'>" + time + "</span>";
    }

    for(className in json){
        var classData = json[className];
        html += "<tr>";
        html += "<td>" + className.replace("*", "<strong>").replace("*", "</strong>") + "</th>";

        for(i in days){
            var day = days[i];
            html += "<td>";

            if(classData[day]){
                if(classData[day] instanceof Array){
                    for(i in classData[day]){
                        html += getTimeLabel(classData[day][i], classData.color);
                    }
                } else {
                    html += getTimeLabel(classData[day], classData.color);
                }
            }

            html += "</td>";
        }

        html += "</tr>";
    }

    html += "</tbody>";
    table.append(html);
});
