// event listner to save product
var add = document.getElementById('add');

add.onclick = function() {
    var save_new = document.getElementById('save_new');
    var name = document.getElementById("new_name").value;
    var price = document.getElementById("new_price").value;
    var quantity = document.getElementById("new_quantity").value;
    quantity.onkeyup = () => {
        if (name.trim() != 0 && price && quantity) {
            save_new.classList.add("active");
        }
    }

    save_new.onclick = function() {

        if (name.trim() != 0 && price && quantity) {

            console.log(name);
            console.log(price);
            console.log(quantity);
        }

    }
}