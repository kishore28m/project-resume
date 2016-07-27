/*
This is empty on purpose! Your code to build the resume will go here.
 */

bio.display = function() {
  var Role = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend([Role]);

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend([formattedName]);

  if(bio.pic != "") {
    var formattedpic = HTMLbioPic.replace("%data%",bio.biopic);
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

  if (bio.contacts.location != "") {
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
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
}

bio.display();

// note: for loop can work standalone and doesn't have to be within a function.

// Work Experienece - Start

work.display = function() {
  for (i = 0; i < work.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);
      var formattedworkentry = HTMLworkEmployer.replace("%data%",work.jobs[i].employer).replace("#",work.jobs[i].url);
      var formattedworktitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
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
    var formattedschoolmajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
    var formattedschoolentry = formattedschoolName + formatteddegree + formattedschooldates +
                               formattedschoollocation + formattedschoolmajor;
   $(".education-entry:last").append(formattedschoolentry);
  }
}

education.display();

onlineCourses.display = function() {
  $(".education-entry:last").append(HTMLonlineClasses);
  for(i = 0; i < onlineCourses.course.length; i++) {
    var formattedTitle = HTMLonlineTitle.replace("%data%",onlineCourses.course[i].title).replace("#",onlineCourses.course[i].titleUrl);
    var formattedschool = HTMLonlineSchool.replace("%data%",onlineCourses.course[i].school);
    var formatteddates = HTMLonlineDates.replace("%data%",onlineCourses.course[i].dates);
    var formattedurl = HTMLonlineURL.replace("%data%",onlineCourses.course[i].url).replace("#",onlineCourses.course[i].url);
    var formattedonlinedata = formattedTitle + formattedschool + formatteddates + formattedurl;
    $(".education-entry:last").append(formattedonlinedata);
  }
}

onlineCourses.display();

// Education - Ends here

//Projects - start here

projects.display = function() {
  for(i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title).replace("#",projects.projects[i].url);
    $(".project-entry:last").append(formattedprojectTitle);
    var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
    $(".project-entry:last").append(formattedprojectDates);
    var formattedprojectdescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    $(".project-entry:last").append(formattedprojectdescription);
    var formattedprojectPic = HTMLprojectImage.replace("%data%",projects.projects[i].images);
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
