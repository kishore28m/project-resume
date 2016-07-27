/*
This is empty on purpose! Your code to build the resume will go here.
 */

$("#header").prepend([Role]);
$("#header").prepend([formattedName]);

if(bio.pic != "") {
  var formattedpic = HTMLbioPic.replace("%data%",bio.pic);
  $("#header").append(formattedpic);
}

if(bio.contacts.email != "")
{
  var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts").prepend(formattedemail);
  $("#footerContacts").append(formattedemail);
}

if(bio.contacts.mobile !="")
{
  var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#topContacts").prepend(formattedmobile);
  $("#footerContacts").append(formattedmobile);
}

if (bio.location != "") {
  var formattedlocation = HTMLlocation.replace("%data%",bio.location);
  $("#topContacts").prepend(formattedlocation);
}

if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  for(i=0; i < bio.skills.length; i++) {
    var skills = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append(skills);
  }
}

// note: for loop can work standalone and doesn't have to be within a function.

// Work Experienece - Start

work.display = function() {
  for (i = 0; i < work.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);
      var formattedworkentry = HTMLworkEmployer.replace("%data%",work.jobs[i].companyname).replace("#",work.jobs[i].url);
      var formattedworktitle = HTMLworkTitle.replace("%data%",work.jobs[i].position);
      var formattedworktlocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
      var formattedworkdates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
      var formatteddescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
      var formattedworkhistory = formattedworkentry + formattedworktitle + formattedworktlocation +
                                formattedworkdates + formatteddescription;
      $(".work-entry:last").append(formattedworkhistory);
    }
}

work.display();

// Work Experience - End

//education - Starts here

education.display = function() {
  for (i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[i].name).replace("#", education.schools[i].url);
    var formatteddegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
    var formattedschooldates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
    var formattedschoollocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
    var formattedschoolmajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
    var formattedschoolentry = formattedschoolName + formatteddegree + formattedschooldates +
                               formattedschoollocation + formattedschoolmajor;
   $(".education-entry:last").append(formattedschoolentry);
  }
}

education.display();

if(onlineclasses.length != 0) {
  for(i = 0; i < onlineclasses.length; i++) {
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace("%data%",onlineclasses.title).replace("#",onlineclasses.titleUrl);
    var formattedschool = HTMLonlineSchool.replace("%data%",onlineclasses.school);
    var formatteddates = HTMLonlineDates.replace("%data%",onlineclasses.dates);
    var formattedurl = HTMLonlineURL.replace("%data%",onlineclasses.url).replace("#",onlineclasses.url);
    var formattedonlinedata = formattedTitle + formattedschool + formatteddates + formattedurl;
    $(".education-entry:last").append(formattedonlinedata);
}

// Education - Ends here

//Projects - start here

projects.display = function() {
  for(i = 0; i < projects.fend.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.fend[i].name).replace("#",projects.fend[i].url);
    $(".project-entry:last").append(formattedprojectTitle);
    var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.fend[i].dates);
    $(".project-entry:last").append(formattedprojectDates);
    var formattedprojectdescription = HTMLprojectDescription.replace("%data%",projects.fend[i].description);
    $(".project-entry:last").append(formattedprojectdescription);
    var formattedprojectPic = HTMLprojectImage.replace("%data%",projects.fend[i].pic);
    $(".project-entry:last").append(formattedprojectPic);
  }
}

projects.display();

// Projects - Ends here

$(document).click(function (loc) {
   var x = loc.pageX;
   var y = loc.pageY;

   logClicks(x,y);

});

function locationizer(work_obj) {
  var locationArray =[];
  for (job in work_obj.jobs) {
    var newlocation = work_obj.jobs[job].location;
    locationArray.push(newlocation);
  }
  return locationArray;
}

//console.log(locationizer(work));

function inName(){
  var name = window.name;
  name = name.trim().split(" ");
//  console.log(name);
 name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
 name[1] = name[1].toUpperCase();
 name = name[0] + " " + name[1];
  return name;
}
//console.log(inName());

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
