let AutoincrementuserId=1000
class User{
    public User_Id:string
    public User_Name:string;
    public User_Age:number;
    public User_Mobileno:number;
    

    constructor(name:string,age:number,mobileno:number){
        this.User_Name=name;
        this.User_Age=age;
        this.User_Mobileno=mobileno;
        this.User_Id= "MT"+ AutoincrementuserId.toString();
        AutoincrementuserId++;
    }
}
class course{
    public course_ID:string;
    public Course_Name:string;
    public Course_days:number;
    public User_Id:string;
    

    constructor(userid:string,coursename:string,days:number)
    {
        this.Course_Name=coursename;
        this.Course_days=days;
        this.User_Id=userid;
        
    }

}

let Userarraylist: Array<User> = new Array<User>();
let courseArraylist: Array<course> = new Array<course>();

function Newuser()
{
    (document.getElementById("newuser") as HTMLElement).style.display="block";
    (document.getElementById("mainpage") as HTMLElement).style.display="none";

}
function Existinguser()
{
    (document.getElementById("existinguser") as HTMLElement).style.display="block";
    (document.getElementById("mainpage") as HTMLElement).style.display="none";

}

function login()
{
    let isExistingUserIdChecker: boolean = false;
    let UserId = (document.getElementById('userid') as HTMLInputElement).value;

    for (let i = 0; i < Userarraylist.length;i++)
    {
        if (Userarraylist[i].User_Id==UserId)
        {
            (document.getElementById('userid') as HTMLInputElement).value = null;
            (document.getElementById("options") as HTMLElement).style.display="block";
            (document.getElementById("existinguser") as HTMLElement).style.display="none";
        }
        else{
            isExistingUserIdChecker=true
        }

    }
    if(isExistingUserIdChecker) 
    {
        alert("Enter Valid User Id.");

    }


}
function courses()
{
    
    (document.getElementById("selectcourse") as HTMLElement).style.display="block";
    (document.getElementById("options") as HTMLElement).style.display="none";

}
function Enrolled_courses()
{
    (document.getElementById("enrolledcourses") as HTMLElement).style.display="block";
    (document.getElementById("options") as HTMLElement).style.display="none";

}
function adduser()
{
   
    let username=(document.getElementById("Name") as HTMLInputElement).value;
    let userage=(document.getElementById("Age") as HTMLInputElement).value;
    let usermobileno=(document.getElementById("Mobile_no") as HTMLInputElement).value;
    let users =new User(username, +userage, usermobileno);
    Userarraylist.push(users);
    alert("you are successfully created");
    alert("your user ID is "+users.User_Id);
    (document.getElementById('Name') as HTMLInputElement).value = null;
    (document.getElementById('Age') as HTMLInputElement).value = null;
    (document.getElementById('Mobile_no') as HTMLInputElement).value = null;
    (document.getElementById("newuser") as HTMLElement).style.display="none";
    (document.getElementById("mainpage") as HTMLElement).style.display="block";

}
function Enroll()
{
    let isuseridforbuycourse=false;
    let user_id = (document.getElementById('user_id') as HTMLInputElement).value;
    for (let i = 0; i < Userarraylist.length;i++)
    {
        if (Userarraylist[i].User_Id==user_id)
        {
            isuseridforbuycourse=true;
        }
        else{
            isuseridforbuycourse=false;

        }
    }
    if(isuseridforbuycourse)
    {
        let course_name = (document.getElementById('coursename') as HTMLInputElement).value;
    let days = (document.getElementById('days') as HTMLInputElement).value;
    let courseslist =new course(user_id, course_name,+days);
    courseArraylist.push(courseslist);
    alert("you are successfully purcheshed the course");
    (document.getElementById('coursename') as HTMLInputElement).value = null;
    (document.getElementById('days') as HTMLInputElement).value = null;
    (document.getElementById('user_id') as HTMLInputElement).value = null;
    (document.getElementById("selectcourse") as HTMLElement).style.display="none";
    (document.getElementById("mainpage") as HTMLElement).style.display="block";

    }
    else{
        alert("Enter Valid User ID");
    }

}
function check()
{
    let isuseridforhistory=false;

    let user__id = (document.getElementById('userid') as HTMLInputElement).value;
    let historyDisplay = document.getElementById('totaldays') as HTMLLabelElement;

    for (let i = 0; i < Userarraylist.length;i++)
    {
        if (Userarraylist[i].User_Id==user__id)
        {
            for(let j=0;j<courseArraylist.length;j++)
            {
            
                historyDisplay.innerHTML = `You bought ${courseArraylist[i].Course_Name} ${courseArraylist[i].Course_days}<br>`;
            }
        }
        else{
            isuseridforhistory=true;

        }
    }
    if(isuseridforhistory)
    {
        alert("checking...");//checking-
    }


}


