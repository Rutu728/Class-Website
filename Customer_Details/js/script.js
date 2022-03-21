function getData(){
    const ID = document.getElementById("Customer ID").value;
    const Name = document.getElementById("Name").value;
    const Mob = document.getElementById("Mobile No").value;
    const Alternateno = document.getElementById("Alternate Mobile No").value;
    const Aadharno = document.getElementById("Aadhar No").value;
    const PANno = document.getElementById("PAN No").value;
    const Date = document.getElementById("Date").value;
    const Reference = document.getElementById("Reference").value;
    const Area = document.getElementById("Area").value;
    const Subarea = document.getElementById("Sub Area").value;
    const Type = document.getElementById("Type").value;
    const Budget = document.getElementById("Budget").value;
    const SqFoot = document.getElementById("Sq Foot").value;
    
    alert(`Customer Added Successfully......

    Customer ID : ${ID}
    Name : ${Name}
    Mob : ${Mob}
    Alternateno : ${Alternateno}
    Aadharno : ${Aadharno}
    PANno : ${PANno}
    Date : ${Date}
    Reference :${Reference}
    Area : ${Area}
    Subarea : ${Subarea}
    Type : ${Type}
    Budget : ${Budget}
    SqFoot : ${SqFoot}`);
}