$(document).ready(function() {

  var students = [];
  var stu;

  /*function randNumber(max) {
    return Math.floor(Math.random() * (max));
  }*/

  // function shuffle(array) { // shuffle the array
  //   // var index = array.length, tempValue, randIndex;
  //   let arr = array;
  //   // while (0 !== index) {
  //   //   randIndex = Math.floor(Math.random() * index);
  //   //   index -= 1;
  //   //   tempValue = arr[index];
  //   //   arr[index] = arr[randIndex];
  //   //   arr[randIndex] = tempValue;
  //   // }
  //   return arr;
  // }

  $('#add').click(function() {  //add students
    console.log('add button clicked');

    var $name = $('#name');
    var name = $name.val().split(',');
    $name.val('');

    console.log('name:', name);

    name.forEach(function(n) {
      students.push(n);
    })

    console.log('students:', students, students.length);
    stu = students;
  })

  $('#pick').click(function() { // pick random student
    console.log('pick button clicked');

    //console.log(randNum);
    var randNum = Math.floor(Math.random() * (students.length));
    console.log('randNum', randNum);
    var chosenOne = stu[ randNum ];
    console.log('chosenOne:', chosenOne);

    $('#randStudent').empty().append(chosenOne);
    console.log('chosenOne', chosenOne);

  })

  $('#group').click(function() {  // group students
    console.log('group button clicked');
    var teams = {};
    var size = $('#team-size').val();
    if (size == 0) { // to prevent infinite loops
      size = 1;
    }
    $('#team-size').val(0);
    console.log('size:', size);

    function shuffle(array) { // shuffle the array
      let arr = array;
      var index = arr.length, tempValue, randIndex;
      while (0 !== index) {
        randIndex = Math.floor(Math.random() * index);
        index -= 1;
        tempValue = arr[index];
        arr[index] = arr[randIndex];
        arr[randIndex] = tempValue;
      }
      return arr;
    }
    let randStudents = shuffle(students.slice()); // shuffle students
    console.log('students', students);
    console.log('randStudents', randStudents);

    var count = 1;
    while(randStudents.length) {
      teams[`team ${count}`] = randStudents.splice(0,size);
      count++;
      console.log('count:', count)
      console.log('a:randStudents', randStudents);
    }
    console.log('teams', teams);

    var li = "";
    console.log('teams', teams);
    for (var i in teams) {
      li += `<h3>${i}:</h3><ul style="list-style: none;">`;
      teams[i].forEach(function(x) {
        li += `<li>${x}</li>`;
      })
      li += '</ul>';
    }
    $('#team-list').empty().append(li);
      // console.log('team-list:', li);

  })
  // $('#group').click(function() {  // group students
  //   console.log('group button clicked');
  //   var teams = {};
  //
  //   var size = $('#team-size').val();
  //   $('#team-size').val(0);
  //   console.log('size:', size);
  //
  //   console.log('students', students);
  //   var randStudents = shuffle(students);
  //   console.log('students', students);
  //   console.log('randStudents', randStudents);
  //
  //   var count = 1;
  //   while(count < randStudents.length) {
  //     teams[`team ${count}`] = randStudents.splice(0,size);
  //     count++;
  //     console.log('a:students', students);
  //   }x
  //
  //   var li = "";
  //   console.log('teams', teams);
  //   for (var i in teams) {
  //     li += `<h3>${i}:</h3><ul style="list-style: none;">`;
  //     teams[i].forEach(function(x) {
  //       li += `<li>${x}</li>`;
  //     })
  //     li += '</ul>';
  //   }
  //   // console.log('team-list:', li);
  //
  //   $('#team-list').empty().append(li);
  // }) // end
})
