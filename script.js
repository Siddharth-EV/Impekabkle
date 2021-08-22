//Side Menu active
function activeSidebarMenu() {
  $('.sidebar-list .list-item a').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('image');
    $('.sidebar-list .list-item .image').not(this).removeClass('image');
    $(this).closest('.list-item').siblings().removeClass('active');
    $(this).closest('.list-item').addClass('active');
  });
}

// toggle side bar

function toggleSidebar(){
  let toggle = document.querySelector('.toggle');
  let sidebar = document.querySelector('.sidebar');
  let header = document.querySelector('.header');
  let mainContent = document.querySelector('.main-content');
 let sidebarBrand = document.querySelector('.sidebar__brand');

  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
  header.classList.toggle('active');
  mainContent.classList.toggle('active');
  sidebarBrand.classList.toggle('active');
 
}

function closeSidebar(){
  let closeSideBar = document.querySelector('.close-sidebar');
  let sidebar = document.querySelector('.sidebar');
  let header = document.querySelector('.header');
  let mainContent = document.querySelector('.main-content');
  sidebar.classList.remove('active');
  header.classList.remove('active');
  mainContent.classList.remove('active');
  closeSideBar.classList.toggle('active');
}







//doughnut chart
function doughnutChart(){
  const ctx = document.getElementById('donutChart');
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      //  labels: ["MONEY MARKET", "FIXED INCOME", "SPECIALTY", "DOMESTIC STOCK", "INTERNATIONAL STOCK", "BROKERAGELINK"],
      datasets: [
        {
          // label: "Test",
          data: [70,35,50,50],
          backgroundColor: [
            "#55D8FE","#FF8373","#FFDA83","#A3A0FB"
          ],
          borderColor: [
            "#55D8FE","#FF8373","#FFDA83","#A3A0FB"
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      // title: {
      //   display: true,
      //   text: "This is your 401(k) account's current asset mix"
      // },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      responsive: true,
      maintainAspectRatio: true,

      // legend: {
      //   position: 'top',
      //   // labels:{
      //   //   boxWidth: 10,
      //   //   padding: 12
      //   // }
      // },
    },
  });
 }
// ------End of doughnut chart --- /////

// line chart 
//  function lineChart(){
//   var ctx = document.getElementById('myChart').getContext('2d');
//   var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line', // also try bar or other graph types
  
//     // The data for our dataset
//     data: {
//       labels: ["Jan", "Feb", "Mar", "Apr", "May","Jun"],
//       // Information about the dataset
//       datasets: [{
//         label: "",
//         backgroundColor: 'lightblue',
//         borderColor: 'royalblue',
//         data: [ 140, 69.8, 50, 62, 110.8, 100],
//       },
//       {
//         label: "",
//         backgroundColor: 'green',
//         borderColor: 'green',
//         data: [ 90, 65.8,56.6, 71, 110.8,30],
//       },
    
//     ]
//     },
  
//     // Configuration options
//     options: {
//       layout: {
//         padding: 10,
//       },
//       legend: {
//         position: 'bottom',
//         display: false,
//       },
    
//     }
//   });
//  }

 // end of line chart




$(document).ready(function () {
  activeSidebarMenu();
  doughnutChart();
  // lineChart();
});
