$(document).ready(function() {
    // Load external HTML content
    $("#header").load("header.html", function() {
        // Callback function to run code after header is loaded
        $("#menu-toggle").on("click", function() {
            $("#nav-links").toggleClass("active");
        });
    });

    $("#footer").load("footer.html", function() {
        // Callback function to run code after footer is loaded
        $("#Footercomment").on("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form data from Footer form
            var formfooterData = {
                email: $("#emailFooter").val(),
                phone: $("#phoneFooter").val(),
                comment: $("#commentFooter").val()
            };

            // Display the information in the console
            console.log(formfooterData);
        });
    });

    //Load mast
    $("#masthead").load("mast.html");

    // Product price calculations
    var product1 = 10;
    var product2 = 15;
    var product3 = 17;

    function TotalPrice1() {
        //quantity will become the value the user inputs
        var quantity = $("#amount").val();
        var totalPrice = product1 * quantity;
        //total price will be display at the finalprice1
        $("#finalprice1").text(totalPrice);
        //return the value so it can be displayed in the console
        return totalPrice;
    }

    function TotalPrice2() {
        //quantity will become the value the user inputs
        var quantity = $("#amount2").val();
        var totalPrice2 = product2 * quantity;
        //total price will be display at the finalprice2
        $("#finalprice2").text(totalPrice2);
        //return the value so it can be displayed in the console
        return totalPrice2;
    }

    function TotalPrice3() {
        //quantity will become the value the user inputs
        var quantity = $("#amount3").val();
        var totalPrice3 = product3 * quantity;
        //total price will be display at the finalprice3
        $("#finalprice3").text(totalPrice3);
        //return the value so it can be displayed in the console
        return totalPrice3;
    }

    //Run the functions everytime the user input a new value
    $(document).on("input", "#amount", TotalPrice1);
    $(document).on("input", "#amount2", TotalPrice2);
    $(document).on("input", "#amount3", TotalPrice3);

    // Form submissions

    //Form submission for product 1
    $(document).on("submit", "#classicMR", function(event) {
        event.preventDefault(); //prevent the page to reload
        
        //var to store the values
        var formClassicMRData = {
            name: $("#name").val(),
            card: $("#card").val(),
            cvv: $("#cvv").val(),
            expirationDate: $("#expiration-date").val(),
            phone: $("#phone").val(),
            address: $("#address").val(),
            amount: $("#amount").val(),
            Final_Price: TotalPrice1()
        };
        //display at the console
        console.log(formClassicMRData);
    });

    //Form submission for product 2
    $(document).on("submit", "#ValentineMR", function(event) {
        event.preventDefault(); //prevent the page to reload
        
        //var to store the values
        var formValentineMRData = {
            name: $("#name2").val(),
            card: $("#card2").val(),
            cvv: $("#cvv2").val(),
            expirationDate: $("#expiration-date2").val(),
            phone: $("#phone2").val(),
            address: $("#address2").val(),
            amount: $("#amount2").val(),
            Final_Price: TotalPrice2()
        };
        //display at the console
        console.log(formValentineMRData);
    });

    //Form submission for product 3
    $(document).on("submit", "#NecklaceMR", function(event) {
        event.preventDefault(); //prevent the page to reload
        
        //var to store the values
        var formNecklaceMRData = {
            name: $("#name3").val(),
            card: $("#card3").val(),
            cvv: $("#cvv3").val(),
            expirationDate: $("#expiration-date3").val(),
            phone: $("#phone3").val(),
            address: $("#address3").val(),
            amount: $("#amount3").val(),
            Final_Price: TotalPrice3()
        };

        //display at the console
        console.log(formNecklaceMRData);
    });

    //Form submission for the contact us form
    $(document).on("submit", "#contactUS", function(event) {
        event.preventDefault(); //prevent the page to reload
        
        //var to store the values
        var formContactUsData = {
            name: $("#nameContact").val(),
            phone: $("#phoneContact").val(),
            email: $("#emailContact").val(),
            comment: $("#commentContact").val()
        };
        //display at the console
        console.log(formContactUsData);
    });
});




