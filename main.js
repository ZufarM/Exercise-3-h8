function myFunction() {
    var input, filter, tbody, tr, td, i, txtValue;

    input = document.getElementById("searchInput");
    
    filter = input.value.toUpperCase();
    
    tbody = document.getElementById("searchData");
    
    tr = tbody.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
    
        td = tr[i].getElementsByTagName("td")[0];
    
        txtValue = td.textContent || td.innerText;
    
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            // Show Value
            tr[i].style.display = "";
    
        } else {
            
            tr[i].style.display = "none";
    
        }
    }
}