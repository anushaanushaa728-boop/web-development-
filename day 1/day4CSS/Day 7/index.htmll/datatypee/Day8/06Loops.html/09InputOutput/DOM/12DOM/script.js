const students=[
    {
        name:"Anusha",
        course:"web development",
        skill:"HTML & CSS",
        status:"Learning"
    },
{
        name:"Poorvi",
        course:"Javascript",
        skill:"DOM Manipulation",
        status:"Completed"
    },
{
        name:"kavya",
        course:"Fronted Development",
        skill:"Javascript",
        status:"Learning"
    },
];

//1.select HTML Element Tag
      const title=document.getElementById("pageTitle")  
      const Subtitle=document.getElementById("Subtitle")

      const count=document.getElementById("studentcount")

      const container=document.getElementById("profilecontainer")

      const noticeTitle=document.getElementById("noticeTitle")
      const noticeText=document.getElementById("noticeText")

      //2.change Existing Text using
      title.textContent="Welcome to our Student Hub"
      Subtitle.textContent="Meet our Learner and explore their skills"

      ///3.update the text using
      count.textContent="Total Students:"+students.length;

      //4.create profile card dynamically
      students.forEach(function(student){

     //create a new HTML Element(tag)
     const card=document.createElement("div")

     //assign a CSS class
     card.className="profile-card";

     //create a heading
     const name=document.createElement("h3")
     name.textContent=student.name;

     //create course information
     const course=document.createElement("p")
     course.textContent="course:"+student.course;

     //create skill information
     const skill=document.createElement("span")
     skill.className="skill"
     skill.textContent=student.skill;

     //student status
     const status=document.createElement("p")
     status.textContent="status:"+student.status

     //Add all the child elements to the card
     card.appendchild(name)
     card.appendchild(course)
     card.appendchild(skill)
     card.appendchild(status)

     container.appendchild(card)

     

      })

      const cards=document.querySelectorAll(".profile-card")

     cards[1].classList.add("Highlight")









      //7.change the notice section
      noticeTitle.textContent="Learning Progress"
      noticeText.textContent=" keerthi has completed her current learning module"
      students.forEach(function(student){
       const card= document.createElement("div")
       card.className="profile-card";

       const name=document.createElement("h3")
       name.textContent=student.name;

       const course=document.createElement("p")
       course.textContent="Course:"+student.course;

       const skill=document.createElement("span")
       skill.className="skill"
       skill.textContent=student.skill;

       const status=document.createElement("p")
       status.textContent="status:"

       card.appendChild(name)
       card.appendChild(course)
       card.appendChild(skill)
       card.appendChild(status)


      })
