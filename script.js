var Contact = function (name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

var contacts = [];

contacts.push(new Contact("John DOE", "johndoe@hotmail.com", "555-111-2345"));
contacts.push(new Contact("Jane DOE", "janedoe@hotmail.com", "555-111-2345"));
contacts.push(new Contact("John DOE", "johndoe@hotmail.com", "555-111-2345"));
contacts.push(new Contact("Jane DOE", "janedoe@hotmail.com", "555-111-2345"));
contacts.push(new Contact("John DOE", "johndoe@hotmail.com", "555-111-2345"));
contacts.push(new Contact("Jane DOE", "janedoe@hotmail.com", "555-111-2345"));

var listContacts = function () {
    document.getElementById('displayList').innerHTML = " ";
    for (var i = 0; i < contacts.length; i++) {
        document.getElementById('displayList').innerHTML += '<tr><td id="name' + i + '">' + contacts[i].name + '</td><td id="email' + i + '">' + contacts[i].email + '</td><td id="phone' + i + '">' + contacts[i].phone + '</td><td></div><button class="btn-delete" onclick=deleteContact(' + i + ')>Kişiyi Sil</button></td></td>';
    }
}

var addNewContact = function () {
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var contact = new Contact(name, email, phone);
    contacts.push(contact);
    listContacts();
}

var deleteContact = function (i) {
    contacts.splice(i, 1);
    listContacts();
}

listContacts();