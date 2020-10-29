$("#keyword").keyup(function () {
    var k = $(this).val();
    $("#user-table > tbody > tr").hide();
    var temp = $("#user-table > tbody > tr > td:nth-child(5n+2):contains('" + k + "')");

    $(temp).parent().show();
    $('.count').text(temp.length);
});

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
center: new kakao.maps.LatLng(37.498764, 127.026581), //지도의 중심좌표.
level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

function setCenter() {            
// 이동할 위도 경도 위치를 생성합니다 
var moveLatLon = new kakao.maps.LatLng(37.498764, 127.026581);

// 지도 중심을 이동 시킵니다
map.setCenter(moveLatLon);
}

var mark1=function panTo() {
// 이동할 위도 경도 위치를 생성합니다 
var moveLatLon = new kakao.maps.LatLng(37.498764, 127.026581);

// 지도 중심을 부드럽게 이동시킵니다
// 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
map.panTo(moveLatLon); 
}
var mark2=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.572186, 126.987123);
map.panTo(moveLatLon); 
}
var mark3=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.554444, 126.936588);
map.panTo(moveLatLon); 
}
var mark4=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.503078, 126.878985);
map.panTo(moveLatLon); 
}
var mark5=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.538170, 127.126284);
map.panTo(moveLatLon); 
}
var mark6=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.317875, 126.835665);
map.panTo(moveLatLon); 
}
var mark7=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.399369, 126.920357);
map.panTo(moveLatLon); 
}
var mark8=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.431135, 127.128887);
map.panTo(moveLatLon); 
}
var mark9=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.278349, 127.017849);
map.panTo(moveLatLon); 
}
var mark10=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.605073, 127.140412);
map.panTo(moveLatLon); 
}
var mark11=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.658173, 126.773365);
map.panTo(moveLatLon); 
}
var mark12=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.619087, 126.719108);
map.panTo(moveLatLon); 
}
var mark13=function panTo() {
var moveLatLon = new kakao.maps.LatLng(37.755098, 128.897269);
map.panTo(moveLatLon); 
}

var positions = [
{
title: '강남점', 
latlng: new kakao.maps.LatLng(37.498764, 127.026581)
},
{
title: '종로점', 
latlng: new kakao.maps.LatLng(37.572186, 126.987123)
},
{
title: '신촌점', 
latlng: new kakao.maps.LatLng(37.554444, 126.936588)
},
{
title: '구로점',
latlng: new kakao.maps.LatLng(37.503078, 126.878985)
},
{
title: '천호점',
latlng: new kakao.maps.LatLng(37.538170, 127.126284)
},
{
title: '안산점',
latlng: new kakao.maps.LatLng(37.317875, 126.835665)
},
{
title: '안양점',
latlng: new kakao.maps.LatLng(37.399369, 126.920357)
},
{
title: '성남점',
latlng: new kakao.maps.LatLng(37.431135, 127.128887)
},
{
title: '수원점',
latlng: new kakao.maps.LatLng(37.278349, 127.017849)
},
{
title: '구리점',
latlng: new kakao.maps.LatLng(37.605073, 127.140412)
},
{
title: '일산점',
latlng: new kakao.maps.LatLng(37.658173, 126.773365)
},
{
title: '김포점',
latlng: new kakao.maps.LatLng(37.619087, 126.719108)
},
{
title: '강릉점',
latlng: new kakao.maps.LatLng(37.755098, 128.897269)
}
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "./images/marker.png"; 

for (var i = 0; i < positions.length; i ++) {

// 마커 이미지의 이미지 크기 입니다
var imageSize = new kakao.maps.Size(50, 75); 

// 마커 이미지를 생성합니다    
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
map: map, // 마커를 표시할 지도
position: positions[i].latlng, // 마커를 표시할 위치
title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
image : markerImage // 마커 이미지 
});


}