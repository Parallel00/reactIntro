function mainApp(){
	return(
		<div>
		<Post name="John Smith" username="Johnny111" date={new Date().toDateString()} message="This is a test" />
	);
}