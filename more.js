const projects = document.getElementsByClassName("project");


const prev = document.getElementById("prev");
const next = document.getElementById("next");

var currentPage = 0;
const maxPage = 3;

if (currentPage == 0) {
	prev.style.display = "none";
} else if (currentPage == maxPage) {
	next.style.display = "none";
};

function nextClick() {
	clicks++;
	currentPage++;
}

function prevClick() {
	clicks++;
	currentPage--;
}






// const projects = document.getElementsByClassName('project');
// console.log(projects);
// var pageSize = 7;
//
//
// projects.slice(0, pageSize).css({background: 'yellow', display: 'block'});
// projects.slice(pageSize, projects.length).css({background: 'yellow', display: 'none'});
//
// function addSlice(num){
//   return num + pageSize;
// }
//
// function subtractSlice(num){
//   return num - pageSize;
// }
//
// var slice = [0, pageSize];
//
// getElementById('next').click(function(){
//    if (slice[1] < projects.length ){
//      slice = slice.map(addSlice);
//    };
//    showSlice(slice);
// });
//
// getElementById('prev').click(function(){
//   if (slice[0] > 0 ){
//     slice = slice.map(subtractSlice);
//   }
//   showSlice(slice);
// });
//
// function showSlice(slice){
//   projects.css('display', 'none');
//   projects.slice(slice[0], slice[1]).css('display','block');
// }
