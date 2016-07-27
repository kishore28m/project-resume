bio.display = function() {
  var Role = HTMLheaderRole.replace("%data%",bio.role);
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend([formattedName],[Role]);

  if(bio.pic !== "") {
    var formattedpic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedpic);
  }

  if(bio.contacts.email !== "")
  {
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").prepend(formattedemail);
    $("#footerContacts").append(formattedemail);
  }

  if(bio.contacts.mobile !== "")
  {
    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").prepend(formattedmobile);
    $("#footerContacts").append(formattedmobile);
  }

  if (bio.contacts.location !== "") {
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
};

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
};

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
    var formattedschoolentry = formattedschoolName + formatteddegree + formattedschooldates + formattedschoollocation;
    $(".education-entry:last").append(formattedschoolentry);
    for(j=0; j < education.schools[i].majors.length; j++) {
      var formattedschoolmajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
      $(".education-entry:last").append(formattedschoolmajor);
    }
  }

  for(i = 0; i < education.onlineCourses.length; i++) {
    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title).replace("#",education.onlineCourses[i].titleUrl);
    var formattedschool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
    var formatteddates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
    var formattedurl = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url).replace("#",education.onlineCourses[i].url);
    var formattedonlinedata = formattedTitle + formattedschool + formatteddates + formattedurl;
    $(".education-entry:last").append(HTMLonlineClasses,formattedonlinedata);
  }
};

education.display();

// Education - Ends here

//Projects - start here

projects.display = function() {
  for(i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title).replace("#",projects.projects[i].url);
    var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
    var formattedprojectdescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    var formattedprojectdata = formattedprojectTitle + formattedprojectDates + formattedprojectdescription;
    $(".project-entry:last").append(formattedprojectdata);
    for(j=0; j < projects.projects[i].images.length; j++)
    {
      var formattedprojectPic = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
      $(".project-entry:last").append(formattedprojectPic);
    }
  }
};

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
