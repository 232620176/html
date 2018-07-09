function confirmProcess(title, callback){
	if(confirm(title)){
		callback();
	}
}
