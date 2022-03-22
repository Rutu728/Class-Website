function getData(){
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Mob = document.getElementById('MobileNo').value;
    const Alternateno = document.getElementById('AlternateMobileNo').value;
    const Aadharno = document.getElementById('AadharNo').value;
    const PANno = document.getElementById('PANNo').value;
    const Date = document.getElementById('Date').value;
    const Area = document.getElementById('Area').value;
    const Subarea = document.getElementById('SubArea').value;
    const Type = document.getElementById('Type').value;
    const SqFoot = document.getElementById('SqFoot').value;
    const Prise = document.getElementById('Prise').value;
    
    alert(`Owner Added Successfully......

    ID : ${ID}
    Name : ${Name}
    Mob : ${Mob}
    Alternateno : ${Alternateno}
    Aadharno : ${Aadharno}
    PANno : ${PANno}
    Date : ${Date}
    Area : ${Area}
    Subarea : ${Subarea}
    Type : ${Type}
    SqFoot : ${SqFoot}
    Prise: ${Prise}`);
}