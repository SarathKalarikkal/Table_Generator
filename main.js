$(document).ready(function(){
     var Name = $("#name");
     var Place = $("#place");
     var Job = $("#job");
     var srno = 0
     var subBtn = $(".sub-btn");
     var TableHead = $(".heading")
     TableHead.hide()
     var tableRows = $("table tr");
     
     var firstRowAdded = false;

     subBtn.on("click",function(){
       localStorage.setItem("Name", Name.val()) 
       localStorage.setItem("Place", Place.val()) 
       localStorage.setItem("Job", Job.val()) 
       
       if(Name.val() === "" || Place.val() === "" || Job.val() === ""){
           alert("Please enter a value")
       }else{
        if (!firstRowAdded) {
            firstRowAdded = true;
            TableHead.show();
        }
        srno++
        $(".firstText").hide()
        TableHead.show()
        var table = $("table");
        var newRow = $("<tr>").html("<td>" + srno + "</td><td>" + Name.val() + "</td><td>" + Place.val() + "</td><td>" + Job.val() + "</td><td><button class='add'>EDT</button><button class='delete'>DEL</button></td>");
 table.append(newRow);
        Name.val("") 
        Place.val("")
        Job.val("")     
    }
    
     })

     ////edit
     $(document).on("click", ".add", function(e) {
        var row = $(e.target).closest("tr");
        var cells = row.find("td");
        Name.val(cells.eq(1).text());
        Place.val(cells.eq(2).text());
        Job.val(cells.eq(3).text());
        row.remove();
        updateSrno();
    });

////delete button
     
$(document).on("click", ".delete", function (e) {
    var row = $(e.target).closest("tr");
    row.remove();
    updateSrno();
});

function updateSrno() {
    var tableRows = $("table tr").not(":first"); // Exclude the first row (header)

    srno = 0;
    tableRows.each(function (index, row) {
        $(row).find("td:first").text(++srno);
    });

    if (srno === 0) {
        TableHead.hide();
        $(".firstText").show();
        firstRowAdded = false;
    }
}

})