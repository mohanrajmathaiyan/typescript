var AutoincrementuserId = 1000;
var User = /** @class */ (function () {
    function User(name, age, mobileno) {
        this.User_Name = name;
        this.User_Age = age;
        this.User_Mobileno = mobileno;
        this.User_Id = "MT" + AutoincrementuserId.toString();
        AutoincrementuserId++;
    }
    return User;
}());
var course = /** @class */ (function () {
    function course(userid, coursename, days) {
        this.Course_Name = coursename;
        this.Course_days = days;
        this.User_Id = userid;
    }
    return course;
}());
var Userarraylist = new Array();
var courseArraylist = new Array();
function Newuser() {
    document.getElementById("newuser").style.display = "block";
    document.getElementById("mainpage").style.display = "none";
}
function Existinguser() {
    document.getElementById("existinguser").style.display = "block";
    document.getElementById("mainpage").style.display = "none";
}
function login() {
    var isExistingUserIdChecker = false;
    var UserId = document.getElementById('userid').value;
    for (var i = 0; i < Userarraylist.length; i++) {
        if (Userarraylist[i].User_Id == UserId) {
            document.getElementById('userid').value = null;
            document.getElementById("options").style.display = "block";
            document.getElementById("existinguser").style.display = "none";
        }
        else {
            isExistingUserIdChecker = true;
        }
    }
    if (isExistingUserIdChecker) {
        alert("Enter Valid User Id.");
    }
}
function courses() {
    document.getElementById("selectcourse").style.display = "block";
    document.getElementById("options").style.display = "none";
}
function Enrolled_courses() {
    document.getElementById("enrolledcourses").style.display = "block";
    document.getElementById("options").style.display = "none";
}
function adduser() {
    var username = document.getElementById("Name").value;
    var userage = document.getElementById("Age").value;
    var usermobileno = document.getElementById("Mobile_no").value;
    var users = new User(username, +userage, +usermobileno);
    Userarraylist.push(users);
    alert("you are successfully created");
    alert("your user ID is " + users.User_Id);
    document.getElementById('Name').value = null;
    document.getElementById('Age').value = null;
    document.getElementById('Mobile_no').value = null;
    document.getElementById("newuser").style.display = "none";
    document.getElementById("mainpage").style.display = "block";
}
function Enroll() {
    var isuseridforbuycourse = false;
    var user_id = document.getElementById('user_id').value;
    for (var i = 0; i < Userarraylist.length; i++) {
        if (Userarraylist[i].User_Id == user_id) {
            isuseridforbuycourse = true;
        }
        else {
            isuseridforbuycourse = false;
        }
    }
    if (isuseridforbuycourse) {
        var course_name = document.getElementById('coursename').value;
        var days = document.getElementById('days').value;
        var courseslist = new course(user_id, course_name, +days);
        courseArraylist.push(courseslist);
        alert("you are successfully purcheshed the course");
        document.getElementById('coursename').value = null;
        document.getElementById('days').value = null;
        document.getElementById('user_id').value = null;
        document.getElementById("selectcourse").style.display = "none";
        document.getElementById("mainpage").style.display = "block";
    }
    else {
        alert("Enter Valid User ID");
    }
}
function check() {
    var isuseridforhistory = false;
    var user__id = document.getElementById('userid').value;
    var historyDisplay = document.getElementById('totaldays');
    for (var i = 0; i < Userarraylist.length; i++) {
        if (Userarraylist[i].User_Id == user__id) {
            for (var j = 0; j < courseArraylist.length; j++) {
                alert("E");
                historyDisplay.innerHTML = "You bought ".concat(courseArraylist[i].Course_Name, " ").concat(courseArraylist[i].Course_days, "<br>");
            }
        }
        else {
            isuseridforhistory = true;
        }
    }
    if (isuseridforhistory) {
        alert("E");
    }
}
