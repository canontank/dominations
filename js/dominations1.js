function setTask11() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민1";
	taskMap.title = "1-1. 국민 (6명)";
	taskMap.startDate = "2023-10-07 10:30:00";
	taskList.push(new Array(type, "전차격납", "Lv.17", "2500만 골드", 19, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask12() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민2";
	taskMap.title = "1-2. 국민 (4명)";
	taskMap.startDate = "2023-10-17 04:50:00";
	taskList.push(new Array(type, "보루    ", "Lv. 6", "1500만 골드", 15,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 6", "1500만 골드", 15,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask13() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민3";
	taskMap.title = "1-3. 국민 (4명)";
	taskMap.startDate = "2023-10-07 10:04:00";
	taskList.push(new Array(type, "보루    ", "Lv. 6", "1500만 골드", 15,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 6", "1500만 골드", 15,  0));
	taskList.push(new Array(type, "보루    ", "Lv. 6", "1500만 골드", 15,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask14() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민4";
	taskMap.title = "1-4. 국민 (3명)";
	taskMap.startDate = "2023-10-07 11:08:00";
	taskList.push(new Array(type, "유정    ", "Lv.16", "2500만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.16", "2500만 골드", 17,  0));
	taskList.push(new Array(type, "유정    ", "Lv.16", "2500만 골드", 17,  0));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask15() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "국민5";
	taskMap.title = "1-5. 국민 (2명)";
	taskMap.startDate = "2023-10-07 10:50:00";
	taskList.push(new Array(type, "미샬포대", "Lv.13", "1500만 골드", 17, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.13", "1500만 골드", 17, 12));
	taskList.push(new Array(type, "미샬포대", "Lv.13", "1500만 골드", 17, 12));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask21() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기1";
	taskMap.title = "2-1. 무기고 연구";
	taskMap.startDate = "2023-10-07 09:55:00";
	taskList.push(new Array(type, "엠알엘  ", "Lv.17", "  28만 석유", 18, 13));
	taskList.push(new Array(type, "알렉산더", "Lv.31", "  10만 석유",  3, 19));
	taskList.push(new Array(type, "알렉산더", "Lv.32", "  10만 석유",  3, 19));
	taskMap.taskList = taskList;
	allTaskMapList.push(taskMap);
}

function setTask22() {
	var taskList = new Array();
	var taskMap = new Object();
	var type = "무기2";
	taskMap.title = "2-2. 무기고 연구";
	taskMap.startDate = "2023-10-07 10:27:00";
	taskList.push(new Array(type, "헬리곱터", "Lv.17", "  28만 석유", 18, 13));
	taskList.push(new Array(type, "클레오  ", "Lv.31", "  10만 석유",  3, 19));
	taskList.push(new Array(type, "클레오  ", "Lv.32", "  10만 석유",  3, 19));
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
	} catch (e){
		alert(e);
	}
});
