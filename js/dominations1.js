function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2024-03-15 06:45:00";
	taskList.push(new Array(type, "미샬격납", "Lv.13", "23.5만 석유", 19,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.16", "2200만 골드", 19,  0));
	taskList.push(new Array(type, "수비대  ", "Lv.16", "2200만 골드", 19,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2024-03-21 20:50:00";
	taskList.push(new Array(type, "벙커    ", "Lv.10", "  30만 석유", 18, 12));
	taskList.push(new Array(type, "식량저장", "Lv.19", "1100만 골드", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2024-03-15 06:50:00";
	taskList.push(new Array(type, "방공시설", "Lv.14", "2300만 골드", 19,  0));
	taskList.push(new Array(type, "방공시설", "Lv.14", "2300만 골드", 19,  0));
	taskList.push(new Array(type, "방공시설", "Lv.14", "2300만 골드", 19,  0));
	taskList.push(new Array(type, "방공시설", "Lv.14", "2300만 골드", 19,  0));
	taskList.push(new Array(type, "방공시설", "Lv.14", "2300만 골드", 19,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2024-03-23 02:00:00";
	taskList.push(new Array(type, "클레모어", "Lv. 4", "2100만 골드", 10, 20));
	taskList.push(new Array(type, "유인세개", "Lv. 6", "2700만 골드", 12,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (3명)";
	taskMap.startDate = "2024-03-11 04:20:00";
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskList.push(new Array(type, "대전차포", "Lv.13", "2500만 골드", 19,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2024-03-14 22:40:00";
	taskList.push(new Array(type, "에이피씨", "Lv. 1", "  20만 석유", 19,  0));
	taskList.push(new Array(type, "돌격대  ", "Lv.16", "1800만 식량", 16, 16));
	taskList.push(new Array(type, "공병    ", "Lv.16", "1800만 식량", 16, 16));
	taskList.push(new Array(type, "전차    ", "Lv.16", "2350만 식량", 16, 16));
	taskList.push(new Array(type, "박격포병", "Lv.16", "2350만 식량", 16, 16));
	taskList.push(new Array(type, "포병대  ", "Lv.16", "2350만 식량", 16, 16));
	taskList.push(new Array(type, "헬리콥터", "Lv.16", "2350만 식량", 16, 16));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2024-03-23 01:45:00";
	taskList.push(new Array(type, "정찰기  ", "Lv. 2", "  20만 석유",  9, 20));
	taskList.push(new Array(type, "정찰기  ", "Lv. 3", "  20만 석유",  9, 20));
	taskList.push(new Array(type, "정찰기  ", "Lv. 4", "  20만 석유",  9, 20));
	taskList.push(new Array(type, "정찰기  ", "Lv. 5", "  20만 석유",  9, 20));
	taskList.push(new Array(type, "정찰기  ", "Lv. 6", "  20만 석유",  9, 20));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

$(document).ready(function() {
	try {
		setTask11();
		setTask12();
		setTask13();
		setTask14();
		setTask15();
		setTask21();
		setTask22();
		setDominations();
	} catch (e) {
		alert(e);
	}
});
