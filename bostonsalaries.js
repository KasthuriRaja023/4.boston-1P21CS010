//function to find the top 5 salaries in the data
function rendertopSalaryPeople(boston, container) {

  //create a variable and store the datas in the variable
  const people_data = boston.data;

  //create a another variable and stor the datas length in the variable
  const data_len = boston.data.length;

  //create a empty array to store the top salaries
  var topSalaryPeople=[];

  //sorting the top 5 salaries by using slice and sort 
  topSalaryPeople=people_data.sort((a,b)=>b[11]-a[11]).slice(0,5)
  
  
  //html is to store the people name and ssalary to be displayed in the Screen 
  let html = '';
  
  //for loop is to find the peoples list who are top 5 salaried people with their name and salary
  for (let i = 0; i < topSalaryPeople.length; i++) 
  {
    html += 
      '<li class="post">' + '<h2>' + people_data[i][8] + '</h2>' + '<h3>' + people_data[i][11] + '</h3>';
  }
 
  //this is to load the data to the container in the html file
  container.innerHTML = '<ul id = "topSal">' + html + '</ul>';
  
}

//Function calling statement to Run the Top 5 Salary Function and Output
rendertopSalaryPeople(boston, document.getElementById('containertop5sal'));

//function to find over $2,00,000/- salaries in the data
function rendersalaryover2lkh(boston, container) {

  //create a variable and store the datas in the variable
  const people_datas = boston.data;

  //create a another variable and stor the datas length in the variable
  const data_len = boston.data.length;
  
  //create a empty array to store over $2,00,000/-
  var salaryover2lkh=[];

   //sorting the over $2,00,000/- salaries by using filter 
  salaryover2lkh=people_datas.filter((a)=>a[11]>=150000)
  
  //html is to store the people name and ssalary to be displayed in the Screen 
  let html = '';
  
  //for loop is to find the peoples list who are over $2,00,000/- salaried people with their name and salary
  for (let i = 0; i < salaryover2lkh.length; i++) 
  {
    html += 
      '<li class="post">' + '<h2>' + people_datas[i][8] + '</h2>' + '<h3>' + people_datas[i][11] + '</h3>';
  }
 
  //this is to load the data to the container in the html file
  container.innerHTML = '<ul id = "topSal">' + html + '</ul>';
  
}

//Function calling statement to Run over $2,00,000/- Salary Function and Output
rendersalaryover2lkh(boston, document.getElementById('container2lkh'));