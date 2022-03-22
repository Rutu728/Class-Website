function getData(){
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Date = document.getElementById('Date').value;
    const Charges = document.getElementById('Charges').value;
    const Discount = document.getElementById('Discount').value;
    const Bill = document.getElementById('Bill').value;

    alert(`Bill Added Successfully......

    ID : ${ID}
    Name : ${Name}
    Date : ${Date}
    Charges : ${Charges}
    Discount : ${Discount}
    Bill : ${Bill}`);
}